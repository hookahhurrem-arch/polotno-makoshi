const KEY = "makosh-sound";

let ctx: AudioContext | null = null;
let crackle: { src: AudioBufferSourceNode; gain: GainNode } | null = null;

function context(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) ctx = new AudioContext();
  return ctx;
}

export function soundEnabled(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

export function setSoundEnabled(on: boolean) {
  try {
    window.localStorage.setItem(KEY, on ? "1" : "0");
  } catch {
    /* ignore */
  }
  if (on) void startCrackle();
  else stopCrackle();
}

function noiseBuffer(audio: AudioContext, seconds: number): AudioBuffer {
  const buffer = audio.createBuffer(1, audio.sampleRate * seconds, audio.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
  return buffer;
}

export async function startCrackle() {
  if (!soundEnabled()) return;
  const audio = context();
  if (!audio) return;
  if (audio.state === "suspended") await audio.resume();
  stopCrackle();
  const src = audio.createBufferSource();
  src.buffer = noiseBuffer(audio, 2);
  src.loop = true;
  const filter = audio.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 900;
  filter.Q.value = 0.7;
  const gain = audio.createGain();
  gain.gain.value = 0.012;
  src.connect(filter);
  filter.connect(gain);
  gain.connect(audio.destination);
  src.start();
  crackle = { src, gain };
}

export function stopCrackle() {
  try {
    crackle?.src.stop();
  } catch {
    /* ignore */
  }
  crackle = null;
}

function burst(kind: "rustle" | "thud") {
  if (!soundEnabled()) return;
  const audio = context();
  if (!audio) return;
  void audio.resume();
  if (kind === "thud") {
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.type = "sine";
    osc.frequency.value = 90;
    gain.gain.setValueAtTime(0.08, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.18);
    osc.connect(gain);
    gain.connect(audio.destination);
    osc.start();
    osc.stop(audio.currentTime + 0.2);
    return;
  }
  const src = audio.createBufferSource();
  src.buffer = noiseBuffer(audio, 0.2);
  const filter = audio.createBiquadFilter();
  filter.type = "highpass";
  filter.frequency.value = 1400;
  const gain = audio.createGain();
  gain.gain.setValueAtTime(0.05, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.16);
  src.connect(filter);
  filter.connect(gain);
  gain.connect(audio.destination);
  src.start();
}

export function playRustle() {
  burst("rustle");
}

export function playThud() {
  burst("thud");
}

export function tapPulse(ms = 16) {
  try {
    window.navigator.vibrate?.(ms);
  } catch {
    /* ignore */
  }
}
