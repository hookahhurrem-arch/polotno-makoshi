globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as serve, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, s as NodeResponse, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { existsSync, promises, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"b0-acKI7DiGmDPPwkppph0HZFiR15c\"",
		"mtime": "2026-09-13T09:06:26.560Z",
		"size": 176,
		"path": "../public/favicon.svg"
	},
	"/og.jpg": {
		"type": "image/jpeg",
		"etag": "\"1985e-BAaFXSGKB1l3ygA+7zbLFaQ5k8A\"",
		"mtime": "2026-09-13T09:06:26.560Z",
		"size": 104542,
		"path": "../public/og.jpg"
	},
	"/__grok/icon-180.png": {
		"type": "image/png",
		"etag": "\"834-Xk8vfS0DTFn7ggtkfEduWTcNWGE\"",
		"mtime": "2026-09-13T09:06:26.560Z",
		"size": 2100,
		"path": "../public/__grok/icon-180.png"
	},
	"/assets/about-B2Vxcwm_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c50-cNe/MjpYGYpG+DH5SIMWIv+Gv7s\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 3152,
		"path": "../public/assets/about-B2Vxcwm_.js"
	},
	"/assets/app-shell-CMnLueYS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"173e-XfpUpiUvPfYzG8XLBeJMLQAch2I\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 5950,
		"path": "../public/assets/app-shell-CMnLueYS.js"
	},
	"/assets/button-eBZO85Tg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1132-yZon4FKdZuzYYirHFKrblCbh3+E\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 4402,
		"path": "../public/assets/button-eBZO85Tg.js"
	},
	"/assets/card-face-C7DrQdGk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"428-VvxXQliXJA9Pgk4/Qz4l2w48Y5c\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 1064,
		"path": "../public/assets/card-face-C7DrQdGk.js"
	},
	"/assets/card-tile-DOWNeal5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42d-qOWcC3zZiSsr1P1E8m8gMZeWseI\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 1069,
		"path": "../public/assets/card-tile-DOWNeal5.js"
	},
	"/assets/card._number-DkX5PvDm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"112e-dYwEFIB6x3rILGrpihVRXB2fw1k\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 4398,
		"path": "../public/assets/card._number-DkX5PvDm.js"
	},
	"/assets/deck-DOW7MiZw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2a-G49d08WvJDVQean9zmkmQGhjX/g\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 2602,
		"path": "../public/assets/deck-DOW7MiZw.js"
	},
	"/assets/index-BSyfCXZ9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5bf1e-7ShdHilN1Zf3VYheb2VlFLWAwHQ\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 376606,
		"path": "../public/assets/index-BSyfCXZ9.js"
	},
	"/assets/journal-BvB5XavA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cdb-2Kv3M4B80EQNqu+3Tb062wMp3zA\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 3291,
		"path": "../public/assets/journal-BvB5XavA.js"
	},
	"/assets/journal-ClZiULEo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b0-GslIPWA/h3Nnb2vwcuTjwkQBnZA\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 688,
		"path": "../public/assets/journal-ClZiULEo.js"
	},
	"/assets/living-media-i1zn8bRL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c73-cU9Hrr3YNtnmStwFyyHc8ZgQqu8\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 3187,
		"path": "../public/assets/living-media-i1zn8bRL.js"
	},
	"/assets/manrope-cyrillic-400-normal-Dvx59UGC.woff": {
		"type": "font/woff",
		"etag": "\"2730-MpSBSgjzr8d8U09B7qrhx5tQWGk\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 10032,
		"path": "../public/assets/manrope-cyrillic-400-normal-Dvx59UGC.woff"
	},
	"/assets/manrope-cyrillic-500-normal-B1OEZity.woff2": {
		"type": "font/woff2",
		"etag": "\"1ec0-nhqY8ZhJXEdqhoyZ+BT8cX6p1f4\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 7872,
		"path": "../public/assets/manrope-cyrillic-500-normal-B1OEZity.woff2"
	},
	"/assets/manrope-cyrillic-500-normal-CNwnNrRC.woff": {
		"type": "font/woff",
		"etag": "\"271c-p5ovnkUnQ8DL4EoYyZzR4j7SJz4\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 10012,
		"path": "../public/assets/manrope-cyrillic-500-normal-CNwnNrRC.woff"
	},
	"/assets/manrope-cyrillic-600-normal-DvRl3Mj-.woff2": {
		"type": "font/woff2",
		"etag": "\"1ec0-p4NcbLnQ9Cw9Yn/yjSsp0IKPb0E\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 7872,
		"path": "../public/assets/manrope-cyrillic-600-normal-DvRl3Mj-.woff2"
	},
	"/assets/manrope-cyrillic-400-normal-BMzJvInZ.woff2": {
		"type": "font/woff2",
		"etag": "\"1ea0-r24bQvoe4IM0viqy4iW9eQGaEAs\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 7840,
		"path": "../public/assets/manrope-cyrillic-400-normal-BMzJvInZ.woff2"
	},
	"/assets/manrope-cyrillic-600-normal-It4mZcQk.woff": {
		"type": "font/woff",
		"etag": "\"274c-Zw+cU8cYr8xVg6ZwHz0/vQLyEtw\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 10060,
		"path": "../public/assets/manrope-cyrillic-600-normal-It4mZcQk.woff"
	},
	"/assets/manrope-latin-400-normal-8tf8FM3T.woff": {
		"type": "font/woff",
		"etag": "\"4774-mCT/VuoLJFoKBP3t5Nv3FzpwCKc\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 18292,
		"path": "../public/assets/manrope-latin-400-normal-8tf8FM3T.woff"
	},
	"/assets/manrope-latin-400-normal-PaqtzbVb.woff2": {
		"type": "font/woff2",
		"etag": "\"371c-UpYQC/kqnfmqnPi4IPp15HTokX4\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 14108,
		"path": "../public/assets/manrope-latin-400-normal-PaqtzbVb.woff2"
	},
	"/assets/manrope-latin-500-normal-BYYD-dBL.woff2": {
		"type": "font/woff2",
		"etag": "\"36dc-EZ29/81rmFJDUFZa2ZHBvwyWCdw\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 14044,
		"path": "../public/assets/manrope-latin-500-normal-BYYD-dBL.woff2"
	},
	"/assets/manrope-latin-500-normal-DMZssgOp.woff": {
		"type": "font/woff",
		"etag": "\"4740-Q9EmdKM1E3weOZyciPd53Ds1hv8\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 18240,
		"path": "../public/assets/manrope-latin-500-normal-DMZssgOp.woff"
	},
	"/assets/manrope-latin-600-normal-4f0koTD-.woff2": {
		"type": "font/woff2",
		"etag": "\"375c-w937G8IX30U7QbSdunJAIHm3ERo\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 14172,
		"path": "../public/assets/manrope-latin-600-normal-4f0koTD-.woff2"
	},
	"/assets/manrope-latin-600-normal-BqgrALkZ.woff": {
		"type": "font/woff",
		"etag": "\"47d0-3DKmwK66oJYdcMbZlnLr4/5u2+Y\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 18384,
		"path": "../public/assets/manrope-latin-600-normal-BqgrALkZ.woff"
	},
	"/assets/old-standard-tt-cyrillic-400-italic-C55T6EX4.woff2": {
		"type": "font/woff2",
		"etag": "\"3fdc-3UgvxnFXtUXw+mtRTBtmT4WKs3g\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 16348,
		"path": "../public/assets/old-standard-tt-cyrillic-400-italic-C55T6EX4.woff2"
	},
	"/assets/old-standard-tt-cyrillic-400-italic-CjUsNPOx.woff": {
		"type": "font/woff",
		"etag": "\"2ad0-Bz6Yx1B2pC2mUn/qL6674f5Ty/8\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 10960,
		"path": "../public/assets/old-standard-tt-cyrillic-400-italic-CjUsNPOx.woff"
	},
	"/assets/old-standard-tt-cyrillic-400-normal-B9opELhc.woff": {
		"type": "font/woff",
		"etag": "\"289c-6Ih7GQJnHcl/ImJZghPS07uA4Ig\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 10396,
		"path": "../public/assets/old-standard-tt-cyrillic-400-normal-B9opELhc.woff"
	},
	"/assets/old-standard-tt-cyrillic-400-normal-Dx4QB4EU.woff2": {
		"type": "font/woff2",
		"etag": "\"38c4-Lo+DVkS90O7cDW3BCcuoyftbKCg\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 14532,
		"path": "../public/assets/old-standard-tt-cyrillic-400-normal-Dx4QB4EU.woff2"
	},
	"/assets/old-standard-tt-latin-400-italic-CCwC87fu.woff2": {
		"type": "font/woff2",
		"etag": "\"63d8-08VimcQskl0xzzvwGb3CM8xeXXo\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 25560,
		"path": "../public/assets/old-standard-tt-latin-400-italic-CCwC87fu.woff2"
	},
	"/assets/old-standard-tt-latin-400-italic-CQu5L45y.woff": {
		"type": "font/woff",
		"etag": "\"49d4-k+XZ/9yjMqewRT0q5i/XnFkhJVM\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 18900,
		"path": "../public/assets/old-standard-tt-latin-400-italic-CQu5L45y.woff"
	},
	"/assets/old-standard-tt-latin-400-normal-CEoEX30F.woff": {
		"type": "font/woff",
		"etag": "\"4418-vKm0ApzDAetuAc8OilF8tU5uovk\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 17432,
		"path": "../public/assets/old-standard-tt-latin-400-normal-CEoEX30F.woff"
	},
	"/assets/old-standard-tt-latin-400-normal-CksAFory.woff2": {
		"type": "font/woff2",
		"etag": "\"5c7c-l3Ve3+Kr9vxa06RphrFJ+nt9alk\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 23676,
		"path": "../public/assets/old-standard-tt-latin-400-normal-CksAFory.woff2"
	},
	"/assets/reading-B9ZAWUKA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3db1-ESoxjzLe2YPzuY6dW5JQWWAfY0w\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 15793,
		"path": "../public/assets/reading-B9ZAWUKA.js"
	},
	"/assets/routes-CW6fb7WC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c28-6Sf9jHQnaeHne3cFnPIwi9Og2n8\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 15400,
		"path": "../public/assets/routes-CW6fb7WC.js"
	},
	"/assets/studio._number-0wiUikg8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1998-zWujA72ZbiTaSXxE1F4rAmsc984\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 6552,
		"path": "../public/assets/studio._number-0wiUikg8.js"
	},
	"/assets/studio.index-CAM2FMJc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"109f-OjbFqnnyYIU0+ofB/4kpcwLLoyQ\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 4255,
		"path": "../public/assets/studio.index-CAM2FMJc.js"
	},
	"/assets/styles-d7M_MXIt.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"fff8-n0GVkd79E1Lz3hJFNStZG7lNFrU\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 65528,
		"path": "../public/assets/styles-d7M_MXIt.css"
	},
	"/assets/textarea-CgpyexNc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"924-kAgHWz3Lff/mKyWEXz0yq7jBPuE\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 2340,
		"path": "../public/assets/textarea-CgpyexNc.js"
	},
	"/cards/001.jpg": {
		"type": "image/jpeg",
		"etag": "\"187fd-Obabekd2UBKNsZhUIsQP+peWoIE\"",
		"mtime": "2026-09-13T09:06:26.560Z",
		"size": 100349,
		"path": "../public/cards/001.jpg"
	},
	"/cards/002.jpg": {
		"type": "image/jpeg",
		"etag": "\"228e1-aZ2fHZqndGd4nRUQ0tWPAFu8hL0\"",
		"mtime": "2026-09-13T09:06:26.568Z",
		"size": 141537,
		"path": "../public/cards/002.jpg"
	},
	"/cards/003.jpg": {
		"type": "image/jpeg",
		"etag": "\"15d2b-zAAw0q1VYqM2OcIULllm4calfNI\"",
		"mtime": "2026-09-13T09:06:26.568Z",
		"size": 89387,
		"path": "../public/cards/003.jpg"
	},
	"/cards/005.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f391-tZhOSeDwaVJ8Xi3VpU+TxeT2Ad8\"",
		"mtime": "2026-09-13T09:06:26.576Z",
		"size": 193425,
		"path": "../public/cards/005.jpg"
	},
	"/cards/006.jpg": {
		"type": "image/jpeg",
		"etag": "\"13432-bISoJdbGXsvKm2wmJlzhH0FflTs\"",
		"mtime": "2026-09-13T09:06:26.584Z",
		"size": 78898,
		"path": "../public/cards/006.jpg"
	},
	"/cards/007.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c226-t+89bbrlT7TQLtyoQVl1ZKZanM0\"",
		"mtime": "2026-09-13T09:06:26.588Z",
		"size": 115238,
		"path": "../public/cards/007.jpg"
	},
	"/cards/008.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f150-E7WAfiZxr737VSsonEnQCvtZC8U\"",
		"mtime": "2026-09-13T09:06:26.588Z",
		"size": 127312,
		"path": "../public/cards/008.jpg"
	},
	"/cards/004.jpg": {
		"type": "image/jpeg",
		"etag": "\"19072-JR8oYBnyIC0GnvIbo5zuhxf1pqw\"",
		"mtime": "2026-09-13T09:06:26.572Z",
		"size": 102514,
		"path": "../public/cards/004.jpg"
	},
	"/assets/store-B2TCFSvO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4074d-Bmf69c9MR5Kl/KlmftbnIpACldQ\"",
		"mtime": "2026-09-13T09:06:25.640Z",
		"size": 264013,
		"path": "../public/assets/store-B2TCFSvO.js"
	},
	"/author/temnoyar.jpg": {
		"type": "image/jpeg",
		"etag": "\"2fb30-keWdW7vefus5fI8jtRGrwYy4ZTI\"",
		"mtime": "2026-09-13T09:06:26.564Z",
		"size": 195376,
		"path": "../public/author/temnoyar.jpg"
	},
	"/cards/009.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b1b3-+CjbJjnAXOq1UwizFIuqKrW/ZFE\"",
		"mtime": "2026-09-13T09:06:26.588Z",
		"size": 176563,
		"path": "../public/cards/009.jpg"
	},
	"/cards/010.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d651-DN3qjs3I8bvLSXCZpazMNZOlS48\"",
		"mtime": "2026-09-13T09:06:26.588Z",
		"size": 120401,
		"path": "../public/cards/010.jpg"
	},
	"/cards/013.jpg": {
		"type": "image/jpeg",
		"etag": "\"fa7f-IpMLOxUVjybVySuQEmGAqmsTqXI\"",
		"mtime": "2026-09-13T09:06:26.600Z",
		"size": 64127,
		"path": "../public/cards/013.jpg"
	},
	"/cards/011.jpg": {
		"type": "image/jpeg",
		"etag": "\"1981d-ut1jt9IT9n3lo0ICDKaCgzBK9MI\"",
		"mtime": "2026-09-13T09:06:26.588Z",
		"size": 104477,
		"path": "../public/cards/011.jpg"
	},
	"/cards/014.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b68f-f1cCMuSp7tBnINCt87d8CSsHYhM\"",
		"mtime": "2026-09-13T09:06:26.600Z",
		"size": 112271,
		"path": "../public/cards/014.jpg"
	},
	"/cards/012.jpg": {
		"type": "image/jpeg",
		"etag": "\"2192f-sKT+vRZEwVfXoUuDB2nmUhIbigk\"",
		"mtime": "2026-09-13T09:06:26.600Z",
		"size": 137519,
		"path": "../public/cards/012.jpg"
	},
	"/cards/017.jpg": {
		"type": "image/jpeg",
		"etag": "\"16d79-4mD/QeHyuuQZzpqV8gZoJwatmk0\"",
		"mtime": "2026-09-13T09:06:26.604Z",
		"size": 93561,
		"path": "../public/cards/017.jpg"
	},
	"/cards/015.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f935-XFIbHR5lcow/8Q23pK5l8fJ2Rrc\"",
		"mtime": "2026-09-13T09:06:26.600Z",
		"size": 129333,
		"path": "../public/cards/015.jpg"
	},
	"/cards/020.jpg": {
		"type": "image/jpeg",
		"etag": "\"196d4-H3LnqtSdpA4bMQKMWkh3GKX7joE\"",
		"mtime": "2026-09-13T09:06:26.612Z",
		"size": 104148,
		"path": "../public/cards/020.jpg"
	},
	"/cards/021.jpg": {
		"type": "image/jpeg",
		"etag": "\"1886b-RU2J75b3BmDhUNThKmi5nF+Hl8Y\"",
		"mtime": "2026-09-13T09:06:26.612Z",
		"size": 100459,
		"path": "../public/cards/021.jpg"
	},
	"/cards/022.jpg": {
		"type": "image/jpeg",
		"etag": "\"18960-Izkof/bxcuafVAs8/L3KrZHa5o4\"",
		"mtime": "2026-09-13T09:06:26.612Z",
		"size": 100704,
		"path": "../public/cards/022.jpg"
	},
	"/cards/023.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e17a-y6MNZw93RS/9BoaW/9JXNDbrp4Y\"",
		"mtime": "2026-09-13T09:06:26.612Z",
		"size": 123258,
		"path": "../public/cards/023.jpg"
	},
	"/cards/024.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d62d-UV7I12RzQUim62gr+ZBpjORP+9Y\"",
		"mtime": "2026-09-13T09:06:26.612Z",
		"size": 120365,
		"path": "../public/cards/024.jpg"
	},
	"/cards/019.jpg": {
		"type": "image/jpeg",
		"etag": "\"28843-XCP4mr+pgkeOsbRDbNmbX68XR1c\"",
		"mtime": "2026-09-13T09:06:26.604Z",
		"size": 165955,
		"path": "../public/cards/019.jpg"
	},
	"/cards/018.jpg": {
		"type": "image/jpeg",
		"etag": "\"2c21f-0kH13D1qYBxa/fGTnItXVNcSCzo\"",
		"mtime": "2026-09-13T09:06:26.604Z",
		"size": 180767,
		"path": "../public/cards/018.jpg"
	},
	"/cards/016.jpg": {
		"type": "image/jpeg",
		"etag": "\"17bde-tvEVTte6oD3FSxlwqbkccgrKIGc\"",
		"mtime": "2026-09-13T09:06:26.604Z",
		"size": 97246,
		"path": "../public/cards/016.jpg"
	},
	"/cards/025.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d8e9-nQpAq4LR/VRPq1zL2eVZsyWFLyc\"",
		"mtime": "2026-09-13T09:06:26.612Z",
		"size": 121065,
		"path": "../public/cards/025.jpg"
	},
	"/cards/027.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ae6f-dO20VgJvon2bIbSQOiqgcrbV64I\"",
		"mtime": "2026-09-13T09:06:26.616Z",
		"size": 110191,
		"path": "../public/cards/027.jpg"
	},
	"/cards/026.jpg": {
		"type": "image/jpeg",
		"etag": "\"13786-zLLx3JlG132qW6oipjIjKN/phHM\"",
		"mtime": "2026-09-13T09:06:26.616Z",
		"size": 79750,
		"path": "../public/cards/026.jpg"
	},
	"/cards/028.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b01d-cZsUCGg48srO8SjRGu1vpheb/1A\"",
		"mtime": "2026-09-13T09:06:26.616Z",
		"size": 110621,
		"path": "../public/cards/028.jpg"
	},
	"/cards/030.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d05d-TX1Ojpt8EWA7uApxA90cdBBmY2w\"",
		"mtime": "2026-09-13T09:06:26.616Z",
		"size": 118877,
		"path": "../public/cards/030.jpg"
	},
	"/cards/031.jpg": {
		"type": "image/jpeg",
		"etag": "\"1aa6e-A0B0mrSWM6eGGBnF8gnQGIXv/C4\"",
		"mtime": "2026-09-13T09:06:26.616Z",
		"size": 109166,
		"path": "../public/cards/031.jpg"
	},
	"/cards/032.jpg": {
		"type": "image/jpeg",
		"etag": "\"22e5a-LO1A6pqoRpeikgZPIaLrMy5eKa8\"",
		"mtime": "2026-09-13T09:06:26.616Z",
		"size": 142938,
		"path": "../public/cards/032.jpg"
	},
	"/cards/029.jpg": {
		"type": "image/jpeg",
		"etag": "\"1667b-F+1/ewUZgrw9dbkpxF40K+n21iw\"",
		"mtime": "2026-09-13T09:06:26.616Z",
		"size": 91771,
		"path": "../public/cards/029.jpg"
	},
	"/cards/033.jpg": {
		"type": "image/jpeg",
		"etag": "\"21421-adpfMgpmqB4AppMBUAGZD9MBey4\"",
		"mtime": "2026-09-13T09:06:26.616Z",
		"size": 136225,
		"path": "../public/cards/033.jpg"
	},
	"/cards/034.jpg": {
		"type": "image/jpeg",
		"etag": "\"174d6-w+DOPgxyDAknTVJZ7bkBbjZik1E\"",
		"mtime": "2026-09-13T09:06:26.616Z",
		"size": 95446,
		"path": "../public/cards/034.jpg"
	},
	"/cards/035.jpg": {
		"type": "image/jpeg",
		"etag": "\"33dad-zabTgt22JjE4Mupf8HHwyTzv/5w\"",
		"mtime": "2026-09-13T09:06:26.620Z",
		"size": 212397,
		"path": "../public/cards/035.jpg"
	},
	"/cards/036.jpg": {
		"type": "image/jpeg",
		"etag": "\"2be54-FA5xNSHeSlZ0cPcTE8hBRDSp2tQ\"",
		"mtime": "2026-09-13T09:06:26.620Z",
		"size": 179796,
		"path": "../public/cards/036.jpg"
	},
	"/cards/037.jpg": {
		"type": "image/jpeg",
		"etag": "\"282a6-FMmWXcr8VTC2vj8iEy1blDCe5Kc\"",
		"mtime": "2026-09-13T09:06:26.620Z",
		"size": 164518,
		"path": "../public/cards/037.jpg"
	},
	"/cards/038.jpg": {
		"type": "image/jpeg",
		"etag": "\"190c1-yiKnia8KPjipXCQM06GxeyWLLrc\"",
		"mtime": "2026-09-13T09:06:26.624Z",
		"size": 102593,
		"path": "../public/cards/038.jpg"
	},
	"/cards/039.jpg": {
		"type": "image/jpeg",
		"etag": "\"21f16-ChRxY50C8S+EvE6GyLZitQCAqIA\"",
		"mtime": "2026-09-13T09:06:26.624Z",
		"size": 139030,
		"path": "../public/cards/039.jpg"
	},
	"/cards/040.jpg": {
		"type": "image/jpeg",
		"etag": "\"22cb4-5HDHgEfTXTCaK3wZhR4lJ7ZNRBY\"",
		"mtime": "2026-09-13T09:06:26.628Z",
		"size": 142516,
		"path": "../public/cards/040.jpg"
	},
	"/cards/042.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ef9e-WxaoBpEXZvHmArdrPGuipzafSoU\"",
		"mtime": "2026-09-13T09:06:26.628Z",
		"size": 126878,
		"path": "../public/cards/042.jpg"
	},
	"/cards/043.jpg": {
		"type": "image/jpeg",
		"etag": "\"250e7-HMdkiwDmeiPhhJVgd2/YZ+G9RLc\"",
		"mtime": "2026-09-13T09:06:26.628Z",
		"size": 151783,
		"path": "../public/cards/043.jpg"
	},
	"/cards/044.jpg": {
		"type": "image/jpeg",
		"etag": "\"29eae-8xhfEW2flfAik44bmO3DpLbtgs0\"",
		"mtime": "2026-09-13T09:06:26.628Z",
		"size": 171694,
		"path": "../public/cards/044.jpg"
	},
	"/cards/045.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a5ea-dRj5Dgi4UPYQn9Ev244OnGF6PHI\"",
		"mtime": "2026-09-13T09:06:26.628Z",
		"size": 108010,
		"path": "../public/cards/045.jpg"
	},
	"/cards/046.jpg": {
		"type": "image/jpeg",
		"etag": "\"1fe47-RAWFyczlCwsLU+JLVolrcaGr8Z4\"",
		"mtime": "2026-09-13T09:06:26.632Z",
		"size": 130631,
		"path": "../public/cards/046.jpg"
	},
	"/cards/049.jpg": {
		"type": "image/jpeg",
		"etag": "\"21273-+zF/psTrSpCcQtBqn3gfBHqfgD8\"",
		"mtime": "2026-09-13T09:06:26.652Z",
		"size": 135795,
		"path": "../public/cards/049.jpg"
	},
	"/cards/050.jpg": {
		"type": "image/jpeg",
		"etag": "\"216f1-h3FqGK3/pLNJ0KyDHM/dlrCfZfo\"",
		"mtime": "2026-09-13T09:06:26.652Z",
		"size": 136945,
		"path": "../public/cards/050.jpg"
	},
	"/cards/051.jpg": {
		"type": "image/jpeg",
		"etag": "\"21b9e-iGPBJMNvpEFK1o48gt8zxsC7jdk\"",
		"mtime": "2026-09-13T09:06:26.660Z",
		"size": 138142,
		"path": "../public/cards/051.jpg"
	},
	"/cards/048.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f175-JNOls+CgOdGimkymSrgqkmSKi5k\"",
		"mtime": "2026-09-13T09:06:26.640Z",
		"size": 127349,
		"path": "../public/cards/048.jpg"
	},
	"/cards/053.jpg": {
		"type": "image/jpeg",
		"etag": "\"157e4-mx4m5k2HvhY6gXiCe1FWF+dP6mI\"",
		"mtime": "2026-09-13T09:06:26.668Z",
		"size": 88036,
		"path": "../public/cards/053.jpg"
	},
	"/cards/054.jpg": {
		"type": "image/jpeg",
		"etag": "\"17903-JHgXp9EWNhQCy+wBdZIY8c9E3So\"",
		"mtime": "2026-09-13T09:06:26.668Z",
		"size": 96515,
		"path": "../public/cards/054.jpg"
	},
	"/cards/055.jpg": {
		"type": "image/jpeg",
		"etag": "\"1857d-BfME4Uu4D5B/v7oKevCvRpFSDHA\"",
		"mtime": "2026-09-13T09:06:26.668Z",
		"size": 99709,
		"path": "../public/cards/055.jpg"
	},
	"/cards/056.jpg": {
		"type": "image/jpeg",
		"etag": "\"23807-Isp8lHh50OU4cihhPR1S0CfD0UU\"",
		"mtime": "2026-09-13T09:06:26.672Z",
		"size": 145415,
		"path": "../public/cards/056.jpg"
	},
	"/cards/057.jpg": {
		"type": "image/jpeg",
		"etag": "\"17a8e-oSOOt1q6HLV9QI6gtzk58fcCh9U\"",
		"mtime": "2026-09-13T09:06:26.668Z",
		"size": 96910,
		"path": "../public/cards/057.jpg"
	},
	"/cards/058.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a16b-XGKLTiX+2X56X7TplCzuKmagM1k\"",
		"mtime": "2026-09-13T09:06:26.672Z",
		"size": 106859,
		"path": "../public/cards/058.jpg"
	},
	"/cards/052.jpg": {
		"type": "image/jpeg",
		"etag": "\"1958d-8gte9meQdgCjxJzY8NCAlOq2+kM\"",
		"mtime": "2026-09-13T09:06:26.660Z",
		"size": 103821,
		"path": "../public/cards/052.jpg"
	},
	"/cards/047.jpg": {
		"type": "image/jpeg",
		"etag": "\"231c3-kWT/tHotaHh1YzwQtL4xnhEO1iQ\"",
		"mtime": "2026-09-13T09:06:26.640Z",
		"size": 143811,
		"path": "../public/cards/047.jpg"
	},
	"/cards/041.jpg": {
		"type": "image/jpeg",
		"etag": "\"365f0-r8xt2rl9/q5cg6QDlKk21K2VZmI\"",
		"mtime": "2026-09-13T09:06:26.628Z",
		"size": 222704,
		"path": "../public/cards/041.jpg"
	},
	"/cards/060.jpg": {
		"type": "image/jpeg",
		"etag": "\"1bca8-JyEWqjHJhNAvDxXJvKNfYUpAh/E\"",
		"mtime": "2026-09-13T09:06:26.672Z",
		"size": 113832,
		"path": "../public/cards/060.jpg"
	},
	"/cards/061.jpg": {
		"type": "image/jpeg",
		"etag": "\"11a31-KYaN0L6HlcodMA9Ffp8E0KyD23Y\"",
		"mtime": "2026-09-13T09:06:26.676Z",
		"size": 72241,
		"path": "../public/cards/061.jpg"
	},
	"/cards/059.jpg": {
		"type": "image/jpeg",
		"etag": "\"1afaf-Mrln3IObp6y5c+76lbY7d7jr4F8\"",
		"mtime": "2026-09-13T09:06:26.672Z",
		"size": 110511,
		"path": "../public/cards/059.jpg"
	},
	"/cards/062.jpg": {
		"type": "image/jpeg",
		"etag": "\"22874-+Oo/YLbcoTrsKNlyZ0zM9UsWFwU\"",
		"mtime": "2026-09-13T09:06:26.676Z",
		"size": 141428,
		"path": "../public/cards/062.jpg"
	},
	"/cards/063.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c010-qdKN1R0e+qUivUk0hy0OIgeIGjw\"",
		"mtime": "2026-09-13T09:06:26.676Z",
		"size": 114704,
		"path": "../public/cards/063.jpg"
	},
	"/cards/064.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d774-y11M4yDllWyVDyOeKQpuT44Xpuo\"",
		"mtime": "2026-09-13T09:06:26.676Z",
		"size": 120692,
		"path": "../public/cards/064.jpg"
	},
	"/cards/065.jpg": {
		"type": "image/jpeg",
		"etag": "\"12fae-j3/iehuEdoRs08MbXqbO11XjnIE\"",
		"mtime": "2026-09-13T09:06:26.676Z",
		"size": 77742,
		"path": "../public/cards/065.jpg"
	},
	"/cards/066.jpg": {
		"type": "image/jpeg",
		"etag": "\"151e4-6Rx5EdVyomeiUj8DQ7CP/7YNn78\"",
		"mtime": "2026-09-13T09:06:26.676Z",
		"size": 86500,
		"path": "../public/cards/066.jpg"
	},
	"/cards/067.jpg": {
		"type": "image/jpeg",
		"etag": "\"14414-96zXbAC/esKBuyHjiVY7G8yS7pY\"",
		"mtime": "2026-09-13T09:06:26.676Z",
		"size": 82964,
		"path": "../public/cards/067.jpg"
	},
	"/cards/069.jpg": {
		"type": "image/jpeg",
		"etag": "\"13f4f-dR+5niDDb7RDSoyjihJP5O4bi9I\"",
		"mtime": "2026-09-13T09:06:26.676Z",
		"size": 81743,
		"path": "../public/cards/069.jpg"
	},
	"/cards/070.jpg": {
		"type": "image/jpeg",
		"etag": "\"20760-2BpxBh4e5yf9lPYucyu9jfhGwhg\"",
		"mtime": "2026-09-13T09:06:26.684Z",
		"size": 132960,
		"path": "../public/cards/070.jpg"
	},
	"/cards/071.jpg": {
		"type": "image/jpeg",
		"etag": "\"14c21-Rh+ws2r5SwkaX6/aW+oRbSl8RnI\"",
		"mtime": "2026-09-13T09:06:26.680Z",
		"size": 85025,
		"path": "../public/cards/071.jpg"
	},
	"/cards/072.jpg": {
		"type": "image/jpeg",
		"etag": "\"1dcb5-INMrKkTS71CrHP35tW5Y+Rza1o4\"",
		"mtime": "2026-09-13T09:06:26.680Z",
		"size": 122037,
		"path": "../public/cards/072.jpg"
	},
	"/cards/074.jpg": {
		"type": "image/jpeg",
		"etag": "\"27d24-C1AzrQRTrcY0ePkIyxslTH+3zl0\"",
		"mtime": "2026-09-13T09:06:26.684Z",
		"size": 163108,
		"path": "../public/cards/074.jpg"
	},
	"/cards/068.jpg": {
		"type": "image/jpeg",
		"etag": "\"165fd-ZvdQ64UxP+F7C8kXhZr1Olk56+I\"",
		"mtime": "2026-09-13T09:06:26.676Z",
		"size": 91645,
		"path": "../public/cards/068.jpg"
	},
	"/cards/076.jpg": {
		"type": "image/jpeg",
		"etag": "\"eec4-eOdp9mgzolepcJMUJHEfaVg6mwE\"",
		"mtime": "2026-09-13T09:06:26.684Z",
		"size": 61124,
		"path": "../public/cards/076.jpg"
	},
	"/cards/077.jpg": {
		"type": "image/jpeg",
		"etag": "\"18c91-r4ORpxzUHXqgZmkxkNMSjlsf0d8\"",
		"mtime": "2026-09-13T09:06:26.684Z",
		"size": 101521,
		"path": "../public/cards/077.jpg"
	},
	"/cards/073.jpg": {
		"type": "image/jpeg",
		"etag": "\"17b49-qGGCL77tj7KpzLZUYMaoAr7Wvb8\"",
		"mtime": "2026-09-13T09:06:26.680Z",
		"size": 97097,
		"path": "../public/cards/073.jpg"
	},
	"/cards/075.jpg": {
		"type": "image/jpeg",
		"etag": "\"1495d-ZFG4yk10UVFtXKALthtHi2kBY1c\"",
		"mtime": "2026-09-13T09:06:26.684Z",
		"size": 84317,
		"path": "../public/cards/075.jpg"
	},
	"/cards/078.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f654-zGd+qL1b3gbFawrOVPWMGlvpEEU\"",
		"mtime": "2026-09-13T09:06:26.684Z",
		"size": 128596,
		"path": "../public/cards/078.jpg"
	},
	"/cards/080.jpg": {
		"type": "image/jpeg",
		"etag": "\"15e1a-BSBl8eemyb4128YSJVVzCt1GVAM\"",
		"mtime": "2026-09-13T09:06:26.684Z",
		"size": 89626,
		"path": "../public/cards/080.jpg"
	},
	"/cards/079.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e963-e4HwpkbB2L8QnqaeKwWWdxscvSU\"",
		"mtime": "2026-09-13T09:06:26.684Z",
		"size": 125283,
		"path": "../public/cards/079.jpg"
	},
	"/cards/081.jpg": {
		"type": "image/jpeg",
		"etag": "\"248fa-B6c34HCb7o/M4HVTFKtGVFaU+7I\"",
		"mtime": "2026-09-13T09:06:26.684Z",
		"size": 149754,
		"path": "../public/cards/081.jpg"
	},
	"/cards/082.jpg": {
		"type": "image/jpeg",
		"etag": "\"17fcb-XNdTwASiEhS74XiN/Oxe/pH936A\"",
		"mtime": "2026-09-13T09:06:26.684Z",
		"size": 98251,
		"path": "../public/cards/082.jpg"
	},
	"/cards/083.jpg": {
		"type": "image/jpeg",
		"etag": "\"10654-cKBPGS/arS+6MiPbNnwxjeJ5UeE\"",
		"mtime": "2026-09-13T09:06:26.684Z",
		"size": 67156,
		"path": "../public/cards/083.jpg"
	},
	"/cards/084.jpg": {
		"type": "image/jpeg",
		"etag": "\"1afdd-FyfhP8xrAnJEFFmRI7tMdPzBItA\"",
		"mtime": "2026-09-13T09:06:26.684Z",
		"size": 110557,
		"path": "../public/cards/084.jpg"
	},
	"/cards/086.jpg": {
		"type": "image/jpeg",
		"etag": "\"fff0-IQY1nnS/YBbOwTsa15JPTUGTMAo\"",
		"mtime": "2026-09-13T09:06:26.688Z",
		"size": 65520,
		"path": "../public/cards/086.jpg"
	},
	"/cards/085.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ca89-Kmz7YcOkwDz2PNVnX4nD7jhYkd8\"",
		"mtime": "2026-09-13T09:06:26.688Z",
		"size": 117385,
		"path": "../public/cards/085.jpg"
	},
	"/cards/087.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c9a1-oqimxvE7d4eeyxOWeLG2zdEXuKU\"",
		"mtime": "2026-09-13T09:06:26.688Z",
		"size": 117153,
		"path": "../public/cards/087.jpg"
	},
	"/cards/088.jpg": {
		"type": "image/jpeg",
		"etag": "\"19bb3-MmfPBtg5MIdi6jr9Yz8mbyPpTWQ\"",
		"mtime": "2026-09-13T09:06:26.688Z",
		"size": 105395,
		"path": "../public/cards/088.jpg"
	},
	"/cards/089.jpg": {
		"type": "image/jpeg",
		"etag": "\"13314-SfXw7IfU5lEJkPvh9MO8GIZx91Y\"",
		"mtime": "2026-09-13T09:06:26.688Z",
		"size": 78612,
		"path": "../public/cards/089.jpg"
	},
	"/cards/090.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e2a6-vuZCxsk0UdzBxGfm+4HFEae8Ifk\"",
		"mtime": "2026-09-13T09:06:26.692Z",
		"size": 123558,
		"path": "../public/cards/090.jpg"
	},
	"/cards/091.jpg": {
		"type": "image/jpeg",
		"etag": "\"297ba-VNcWDX5vM6emAfLjA9XkC3TPrmc\"",
		"mtime": "2026-09-13T09:06:26.692Z",
		"size": 169914,
		"path": "../public/cards/091.jpg"
	},
	"/cards/092.jpg": {
		"type": "image/jpeg",
		"etag": "\"31821-vh7Dvl3XFvJ4517DuYqiN8djHic\"",
		"mtime": "2026-09-13T09:06:26.692Z",
		"size": 202785,
		"path": "../public/cards/092.jpg"
	},
	"/cards/093.jpg": {
		"type": "image/jpeg",
		"etag": "\"244c8-YIXaycBljYTHvhz0qoLbTDfeBTQ\"",
		"mtime": "2026-09-13T09:06:26.692Z",
		"size": 148680,
		"path": "../public/cards/093.jpg"
	},
	"/cards/094.jpg": {
		"type": "image/jpeg",
		"etag": "\"132c2-biLeLnL8SY3KhrKoMfaz++jSOSE\"",
		"mtime": "2026-09-13T09:06:26.692Z",
		"size": 78530,
		"path": "../public/cards/094.jpg"
	},
	"/cards/095.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c09c-BTbzL54eYWD/jIgBBZsy9AOieOM\"",
		"mtime": "2026-09-13T09:06:26.696Z",
		"size": 114844,
		"path": "../public/cards/095.jpg"
	},
	"/cards/096.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e743-Nwmnb/IzLSe/+/jyqP/DlBveU68\"",
		"mtime": "2026-09-13T09:06:26.696Z",
		"size": 124739,
		"path": "../public/cards/096.jpg"
	},
	"/cards/097.jpg": {
		"type": "image/jpeg",
		"etag": "\"18179-M+COPMGpOmvtbj+iSX4T+Vbc6vc\"",
		"mtime": "2026-09-13T09:06:26.696Z",
		"size": 98681,
		"path": "../public/cards/097.jpg"
	},
	"/cards/098.jpg": {
		"type": "image/jpeg",
		"etag": "\"168fb-IBiBGlk5z4fe8k37qwzSIeQBeAQ\"",
		"mtime": "2026-09-13T09:06:26.696Z",
		"size": 92411,
		"path": "../public/cards/098.jpg"
	},
	"/cards/099.jpg": {
		"type": "image/jpeg",
		"etag": "\"18fab-mHJEDEJPxFXa9PKheqxi/SZOBIg\"",
		"mtime": "2026-09-13T09:06:26.696Z",
		"size": 102315,
		"path": "../public/cards/099.jpg"
	},
	"/cards/100.jpg": {
		"type": "image/jpeg",
		"etag": "\"26420-VUWbl9PRhbWozxCdN+3C54rS6zw\"",
		"mtime": "2026-09-13T09:06:26.696Z",
		"size": 156704,
		"path": "../public/cards/100.jpg"
	},
	"/cards/101.jpg": {
		"type": "image/jpeg",
		"etag": "\"21cf9-KZBFhnKRWi7aR6jOaiZtJFi5duY\"",
		"mtime": "2026-09-13T09:06:26.696Z",
		"size": 138489,
		"path": "../public/cards/101.jpg"
	},
	"/cards/102.jpg": {
		"type": "image/jpeg",
		"etag": "\"10ad0-s0RL1tpZ0iu8qDLzfvdoIt7nmf4\"",
		"mtime": "2026-09-13T09:06:26.696Z",
		"size": 68304,
		"path": "../public/cards/102.jpg"
	},
	"/cards/103.jpg": {
		"type": "image/jpeg",
		"etag": "\"122af-NxdCYp2or0aTCS3M2hdHusU+LLE\"",
		"mtime": "2026-09-13T09:06:26.696Z",
		"size": 74415,
		"path": "../public/cards/103.jpg"
	},
	"/cards/104.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ee40-QuVgOMS5mAxjTtSJ0e5REOQFJQc\"",
		"mtime": "2026-09-13T09:06:26.696Z",
		"size": 126528,
		"path": "../public/cards/104.jpg"
	},
	"/cards/105.jpg": {
		"type": "image/jpeg",
		"etag": "\"150df-0NaVF0RW7KWjatm/j4ogALpOgHY\"",
		"mtime": "2026-09-13T09:06:26.696Z",
		"size": 86239,
		"path": "../public/cards/105.jpg"
	},
	"/cards/107.jpg": {
		"type": "image/jpeg",
		"etag": "\"183b7-B4JGz2nbCNUg/4XqpOhZzEX7i6g\"",
		"mtime": "2026-09-13T09:06:26.700Z",
		"size": 99255,
		"path": "../public/cards/107.jpg"
	},
	"/cards/106.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c47f-9HZyC1q2SLS5KaERWAwu+J5LM5k\"",
		"mtime": "2026-09-13T09:06:26.700Z",
		"size": 115839,
		"path": "../public/cards/106.jpg"
	},
	"/cards/108.jpg": {
		"type": "image/jpeg",
		"etag": "\"16ddb-5x5k+h9LDouY7PzUyc1GqVE/x8w\"",
		"mtime": "2026-09-13T09:06:26.700Z",
		"size": 93659,
		"path": "../public/cards/108.jpg"
	},
	"/cards/makosh.jpg": {
		"type": "image/jpeg",
		"etag": "\"1cf6b-gTz47Zxlhx4poxh+xtGJrMVfJpY\"",
		"mtime": "2026-09-13T09:06:26.700Z",
		"size": 118635,
		"path": "../public/cards/makosh.jpg"
	},
	"/fonts/Devils.ttf": {
		"type": "font/ttf",
		"etag": "\"190c-jVsnBlFMBGyyoVz8Bnvm6U7+ntE\"",
		"mtime": "2026-09-13T09:06:26.560Z",
		"size": 6412,
		"path": "../public/fonts/Devils.ttf"
	},
	"/fonts/Devils.woff2": {
		"type": "font/woff2",
		"etag": "\"914-MVsVhAAl35Q5egYAfJXRHb9e2IM\"",
		"mtime": "2026-09-13T09:06:26.700Z",
		"size": 2324,
		"path": "../public/fonts/Devils.woff2"
	},
	"/scenes/book-tall.jpg": {
		"type": "image/jpeg",
		"etag": "\"4788b-iy4mmyVpy5HEiwX2K9IglChugjM\"",
		"mtime": "2026-09-13T09:06:26.568Z",
		"size": 293003,
		"path": "../public/scenes/book-tall.jpg"
	},
	"/scenes/book-tall.webp": {
		"type": "image/webp",
		"etag": "\"22f40-z+thn6g9HJtYVzbidsMIzNdpcBs\"",
		"mtime": "2026-09-13T09:06:26.700Z",
		"size": 143168,
		"path": "../public/scenes/book-tall.webp"
	},
	"/scenes/casket-tall.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f698-k03PlM8sHEtqnQ2TMfUXJOdadfY\"",
		"mtime": "2026-09-13T09:06:26.700Z",
		"size": 194200,
		"path": "../public/scenes/casket-tall.jpg"
	},
	"/scenes/casket-tall.webp": {
		"type": "image/webp",
		"etag": "\"14e72-eYztkcjK5FmFKjbVKgqVBFeILHo\"",
		"mtime": "2026-09-13T09:06:26.700Z",
		"size": 85618,
		"path": "../public/scenes/casket-tall.webp"
	},
	"/scenes/casket-wide.webp": {
		"type": "image/webp",
		"etag": "\"1863c-5nZYEBBb3Bg/ZfQWbqc0UCm8sJ4\"",
		"mtime": "2026-09-13T09:06:26.704Z",
		"size": 99900,
		"path": "../public/scenes/casket-wide.webp"
	},
	"/scenes/chamber-tall.jpg": {
		"type": "image/jpeg",
		"etag": "\"305c5-ehF9Yo0NNRSo2b1Yfq7Ikh+A9H4\"",
		"mtime": "2026-09-13T09:06:26.704Z",
		"size": 198085,
		"path": "../public/scenes/chamber-tall.jpg"
	},
	"/scenes/book-wide.jpg": {
		"type": "image/jpeg",
		"etag": "\"47b39-fIlFvgZQ8gwJcXyjejMsgm9xDAM\"",
		"mtime": "2026-09-13T09:06:26.700Z",
		"size": 293689,
		"path": "../public/scenes/book-wide.jpg"
	},
	"/scenes/chamber-tall.webp": {
		"type": "image/webp",
		"etag": "\"12a2c-EJabPIc0j2X/ZqoUSpOCc9vhZxQ\"",
		"mtime": "2026-09-13T09:06:26.704Z",
		"size": 76332,
		"path": "../public/scenes/chamber-tall.webp"
	},
	"/scenes/casket-wide.jpg": {
		"type": "image/jpeg",
		"etag": "\"36014-3FS0jKixfAhQBY5i34QnTU6XKic\"",
		"mtime": "2026-09-13T09:06:26.704Z",
		"size": 221204,
		"path": "../public/scenes/casket-wide.jpg"
	},
	"/scenes/chamber-wide.jpg": {
		"type": "image/jpeg",
		"etag": "\"458ff-ZrvIfAITvXhrgt1EnV+/QZTNR7w\"",
		"mtime": "2026-09-13T09:06:26.704Z",
		"size": 284927,
		"path": "../public/scenes/chamber-wide.jpg"
	},
	"/scenes/chamber-wide.webp": {
		"type": "image/webp",
		"etag": "\"2093c-TpNg+Kk8acZng5kvpZnEN2nG1OI\"",
		"mtime": "2026-09-13T09:06:26.704Z",
		"size": 133436,
		"path": "../public/scenes/chamber-wide.webp"
	},
	"/scenes/dust.jpg": {
		"type": "image/jpeg",
		"etag": "\"144b6-d3TpetUOJbjJVDvEmj4HsTxueQ4\"",
		"mtime": "2026-09-13T09:06:26.704Z",
		"size": 83126,
		"path": "../public/scenes/dust.jpg"
	},
	"/scenes/book-wide.webp": {
		"type": "image/webp",
		"etag": "\"2560c-nxh67266w69h41Fbwyp7NDsZFTE\"",
		"mtime": "2026-09-13T09:06:26.700Z",
		"size": 153100,
		"path": "../public/scenes/book-wide.webp"
	},
	"/scenes/dust.webp": {
		"type": "image/webp",
		"etag": "\"4bbc-9emfQOqG+vaFZk1HWtlJCITDpFU\"",
		"mtime": "2026-09-13T09:06:26.704Z",
		"size": 19388,
		"path": "../public/scenes/dust.webp"
	},
	"/scenes/foreign.webp": {
		"type": "image/webp",
		"etag": "\"4cf48-ibJ7UaKY1t1EI6oLjg9y4gxyXFc\"",
		"mtime": "2026-09-13T09:06:26.704Z",
		"size": 315208,
		"path": "../public/scenes/foreign.webp"
	},
	"/scenes/frame.webp": {
		"type": "image/webp",
		"etag": "\"3c256-bBDvcjT639tRWN8aGhvyr3WRN/M\"",
		"mtime": "2026-09-13T09:06:26.704Z",
		"size": 246358,
		"path": "../public/scenes/frame.webp"
	},
	"/scenes/knot.webp": {
		"type": "image/webp",
		"etag": "\"2ed6e-1hD2Xq3Op5UM/+rq8THIfSVSvis\"",
		"mtime": "2026-09-13T09:06:26.708Z",
		"size": 191854,
		"path": "../public/scenes/knot.webp"
	},
	"/scenes/krosna.webp": {
		"type": "image/webp",
		"etag": "\"33148-VyESpATzqofSt/BX08Ys4KmwAMk\"",
		"mtime": "2026-09-13T09:06:26.724Z",
		"size": 209224,
		"path": "../public/scenes/krosna.webp"
	},
	"/scenes/knot.png": {
		"type": "image/png",
		"etag": "\"e57ff-CZWcpCC38hAgjT00RFhzLVbOArs\"",
		"mtime": "2026-09-13T09:06:26.724Z",
		"size": 940031,
		"path": "../public/scenes/knot.png"
	},
	"/scenes/foreign.png": {
		"type": "image/png",
		"etag": "\"1502f4-iXVKlj6Ms1p0KfxXzZsysm0i6Ko\"",
		"mtime": "2026-09-13T09:06:26.708Z",
		"size": 1377012,
		"path": "../public/scenes/foreign.png"
	},
	"/scenes/frame.png": {
		"type": "image/png",
		"etag": "\"b4313-d3OmZKKM1VFnjhBriHoXIDq8GFM\"",
		"mtime": "2026-09-13T09:06:26.704Z",
		"size": 738067,
		"path": "../public/scenes/frame.png"
	},
	"/scenes/loom-close.webp": {
		"type": "image/webp",
		"etag": "\"2fa3a-M7hgQl9C4lIam+GEXfbeleTCqNU\"",
		"mtime": "2026-09-13T09:06:26.728Z",
		"size": 195130,
		"path": "../public/scenes/loom-close.webp"
	},
	"/scenes/one.webp": {
		"type": "image/webp",
		"etag": "\"11cde-wN24Kd7AA+PJ6MBTMRhvpZrJ14c\"",
		"mtime": "2026-09-13T09:06:26.728Z",
		"size": 72926,
		"path": "../public/scenes/one.webp"
	},
	"/scenes/loom-close.jpg": {
		"type": "image/jpeg",
		"etag": "\"57baa-q1fzSflIIqwl+zFXEI49d2tg1ak\"",
		"mtime": "2026-09-13T09:06:26.724Z",
		"size": 359338,
		"path": "../public/scenes/loom-close.jpg"
	},
	"/scenes/rushnyk.png": {
		"type": "image/png",
		"etag": "\"65363-Wa9P3AHDXm9OPASKuN/ZOyPss1c\"",
		"mtime": "2026-09-13T09:06:26.744Z",
		"size": 414563,
		"path": "../public/scenes/rushnyk.png"
	},
	"/scenes/rushnyk.webp": {
		"type": "image/webp",
		"etag": "\"b9ae-ums782F7hgGeaLmx6p4Y5cS6EYQ\"",
		"mtime": "2026-09-13T09:06:26.728Z",
		"size": 47534,
		"path": "../public/scenes/rushnyk.webp"
	},
	"/scenes/krosna.png": {
		"type": "image/png",
		"etag": "\"cd16a-bqveqxbszt7l6rgZuNSEPcXik/g\"",
		"mtime": "2026-09-13T09:06:26.724Z",
		"size": 840042,
		"path": "../public/scenes/krosna.png"
	},
	"/scenes/one.png": {
		"type": "image/png",
		"etag": "\"3726f-qG9b+5sV+j7adEyYNCSblUHXgn4\"",
		"mtime": "2026-09-13T09:06:26.728Z",
		"size": 225903,
		"path": "../public/scenes/one.png"
	},
	"/scenes/shuttle.png": {
		"type": "image/png",
		"etag": "\"52a14-IUOh3gSFghgq/aKSsGxmwdcGCy8\"",
		"mtime": "2026-09-13T09:06:26.728Z",
		"size": 338452,
		"path": "../public/scenes/shuttle.png"
	},
	"/scenes/shuttle.webp": {
		"type": "image/webp",
		"etag": "\"1190a-Nel//b8ovSq0S9jWkjhzkKuhh+4\"",
		"mtime": "2026-09-13T09:06:26.728Z",
		"size": 71946,
		"path": "../public/scenes/shuttle.webp"
	},
	"/scenes/spindle.png": {
		"type": "image/png",
		"etag": "\"38dc4-m2NsDyQj9j69Vd6p/qLuHV2X+zM\"",
		"mtime": "2026-09-13T09:06:26.728Z",
		"size": 232900,
		"path": "../public/scenes/spindle.png"
	},
	"/scenes/spindle.webp": {
		"type": "image/webp",
		"etag": "\"fe72-q1IxVHwfdCMigerU6au5he+rQYs\"",
		"mtime": "2026-09-13T09:06:26.728Z",
		"size": 65138,
		"path": "../public/scenes/spindle.webp"
	},
	"/scenes/table-tall.webp": {
		"type": "image/webp",
		"etag": "\"4762c-VtqP41p/Di1Zj4ol5dsBRYC4SaQ\"",
		"mtime": "2026-09-13T09:06:26.728Z",
		"size": 292396,
		"path": "../public/scenes/table-tall.webp"
	},
	"/scenes/table-wide.jpg": {
		"type": "image/jpeg",
		"etag": "\"5ce9b-XUF7vmKJ5xw7c/TJcUShDyYX8dA\"",
		"mtime": "2026-09-13T09:06:26.728Z",
		"size": 380571,
		"path": "../public/scenes/table-wide.jpg"
	},
	"/scenes/three.webp": {
		"type": "image/webp",
		"etag": "\"20fd8-i8oswOe8ZmBhNN3g1HIk6kDimFU\"",
		"mtime": "2026-09-13T09:06:26.732Z",
		"size": 135128,
		"path": "../public/scenes/three.webp"
	},
	"/scenes/three.png": {
		"type": "image/png",
		"etag": "\"6e7a8-9iEk5ktNcfjBdZRC9xge4vuDJDA\"",
		"mtime": "2026-09-13T09:06:26.732Z",
		"size": 452520,
		"path": "../public/scenes/three.png"
	},
	"/scenes/table-tall.jpg": {
		"type": "image/jpeg",
		"etag": "\"6c018-8gDDFHKJDIQwnqFjSaY6FghjiYA\"",
		"mtime": "2026-09-13T09:06:26.728Z",
		"size": 442392,
		"path": "../public/scenes/table-tall.jpg"
	},
	"/scenes/table-wide.webp": {
		"type": "image/webp",
		"etag": "\"39602-+dQ4WHBvQWveAVVST4upC58PUWk\"",
		"mtime": "2026-09-13T09:06:26.728Z",
		"size": 235010,
		"path": "../public/scenes/table-wide.webp"
	},
	"/scenes/two.png": {
		"type": "image/png",
		"etag": "\"7e72d-QRv3Tamj97SDNFgxWpEEl0THEoE\"",
		"mtime": "2026-09-13T09:06:26.732Z",
		"size": 517933,
		"path": "../public/scenes/two.png"
	},
	"/scenes/two.webp": {
		"type": "image/webp",
		"etag": "\"213cc-4zKrngtbYcvB58FyM8DB5mYNZJg\"",
		"mtime": "2026-09-13T09:06:26.732Z",
		"size": 136140,
		"path": "../public/scenes/two.webp"
	},
	"/scenes/wall-tall.jpg": {
		"type": "image/jpeg",
		"etag": "\"56421-2WXVg7BlPYAhfYOzfB96RET5+ME\"",
		"mtime": "2026-09-13T09:06:26.732Z",
		"size": 353313,
		"path": "../public/scenes/wall-tall.jpg"
	},
	"/scenes/wall-tall.webp": {
		"type": "image/webp",
		"etag": "\"30648-MYmjW1vRgR9ZFWMM74D8PN86hrg\"",
		"mtime": "2026-09-13T09:06:26.732Z",
		"size": 198216,
		"path": "../public/scenes/wall-tall.webp"
	},
	"/scenes/wall-wide.jpg": {
		"type": "image/jpeg",
		"etag": "\"45e16-fXRZkR1VtObJfd6Ybw6486F/2Io\"",
		"mtime": "2026-09-13T09:06:26.740Z",
		"size": 286230,
		"path": "../public/scenes/wall-wide.jpg"
	},
	"/scenes/wall-wide.webp": {
		"type": "image/webp",
		"etag": "\"21c52-3rBa7Wh5/uvAPmZpwSaP0nbEVgo\"",
		"mtime": "2026-09-13T09:06:26.740Z",
		"size": 138322,
		"path": "../public/scenes/wall-wide.webp"
	},
	"/videos/makosh-loom.jpg": {
		"type": "image/jpeg",
		"etag": "\"1cf6b-gTz47Zxlhx4poxh+xtGJrMVfJpY\"",
		"mtime": "2026-09-13T09:06:26.740Z",
		"size": 118635,
		"path": "../public/videos/makosh-loom.jpg"
	},
	"/__grok/install/styles.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1a3d-VUsWOMAheo1/P30EqU5qaIkyvIQ\"",
		"mtime": "2026-09-13T09:06:26.560Z",
		"size": 6717,
		"path": "../public/__grok/install/styles.css"
	},
	"/__grok/install/assets/homescreen/glass-puzzle.svg": {
		"type": "image/svg+xml",
		"etag": "\"713-AP2wG8KChAGjse1Fn+f/+vDN+sQ\"",
		"mtime": "2026-09-13T09:06:26.744Z",
		"size": 1811,
		"path": "../public/__grok/install/assets/homescreen/glass-puzzle.svg"
	},
	"/__grok/install/assets/homescreen/glass-share.svg": {
		"type": "image/svg+xml",
		"etag": "\"954-jb3ATcKjqgMOYrA/4w1v21j0Jvg\"",
		"mtime": "2026-09-13T09:06:26.744Z",
		"size": 2388,
		"path": "../public/__grok/install/assets/homescreen/glass-share.svg"
	},
	"/__grok/install/assets/homescreen/logo-grok.svg": {
		"type": "image/svg+xml",
		"etag": "\"423-5mXO+yh9KW40jM3to5JlWPhxNK8\"",
		"mtime": "2026-09-13T09:06:26.744Z",
		"size": 1059,
		"path": "../public/__grok/install/assets/homescreen/logo-grok.svg"
	},
	"/__grok/install/assets/homescreen/ob-ipad.png": {
		"type": "image/png",
		"etag": "\"18dd3-wlRwrpmBImStuiu+4poVz7ANin4\"",
		"mtime": "2026-09-13T09:06:26.744Z",
		"size": 101843,
		"path": "../public/__grok/install/assets/homescreen/ob-ipad.png"
	},
	"/__grok/install/assets/homescreen/ob-phone.png": {
		"type": "image/png",
		"etag": "\"194bc-oZradWHIHO68q2glHU0Gk5ttpWA\"",
		"mtime": "2026-09-13T09:06:26.744Z",
		"size": 103612,
		"path": "../public/__grok/install/assets/homescreen/ob-phone.png"
	},
	"/__grok/install/assets/homescreen/plus.svg": {
		"type": "image/svg+xml",
		"etag": "\"961-sSBPunx/13vbMNAlPxb7UeO3l3A\"",
		"mtime": "2026-09-13T09:06:26.744Z",
		"size": 2401,
		"path": "../public/__grok/install/assets/homescreen/plus.svg"
	},
	"/videos/makosh-loom.mp4": {
		"type": "video/mp4",
		"etag": "\"3782ef-H35+0EPpftYlSUUuH+E+imORTvc\"",
		"mtime": "2026-09-13T09:06:26.752Z",
		"size": 3637999,
		"path": "../public/videos/makosh-loom.mp4"
	},
	"/videos/chamber.mp4": {
		"type": "video/mp4",
		"etag": "\"6c0b0b-wgEdkDdGWw8liauwLVBpURox5Qw\"",
		"mtime": "2026-09-13T09:06:26.768Z",
		"size": 7080715,
		"path": "../public/videos/chamber.mp4"
	},
	"/videos/001.mov": {
		"type": "video/quicktime",
		"etag": "\"75d71b-E5vdwlpGpISNJRCnZj7uh2lVsrM\"",
		"mtime": "2026-09-13T09:06:26.632Z",
		"size": 7722779,
		"path": "../public/videos/001.mov"
	},
	"/videos/table.mp4": {
		"type": "video/mp4",
		"etag": "\"96b7be-n3ivYYEq+oGKxeIEfxKgzGLdbVQ\"",
		"mtime": "2026-09-13T09:06:26.784Z",
		"size": 9877438,
		"path": "../public/videos/table.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region scripts/install-page.html?raw
var install_page_default = "<!DOCTYPE html>\n<html lang=\"en\" class=\"device-desktop\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, viewport-fit=cover\"\n    />\n    <meta name=\"color-scheme\" content=\"dark\" />\n    <meta name=\"theme-color\" content=\"#000000\" />\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\" />\n    <meta name=\"apple-mobile-web-app-title\" content=\"{{APP_NAME}}\" />\n    <title>Add {{APP_NAME}} to your Home Screen</title>\n    <link rel=\"manifest\" href=\"/__grok/manifest.webmanifest\" />\n    <link rel=\"apple-touch-icon\" href=\"/__grok/icon-180.png\" />\n    <link rel=\"stylesheet\" href=\"/__grok/install/styles.css\" />\n    <script>\n      (function () {\n        var ua = navigator.userAgent || \"\";\n        var touch = navigator.maxTouchPoints || 0;\n        var isiPad = /iPad/.test(ua) || (/Macintosh/.test(ua) && touch > 1);\n        var isiPhone = /iPhone|iPod/.test(ua);\n        var isIOS = isiPhone || isiPad;\n        var isAndroid = /Android/i.test(ua);\n        var isAndroidPhone = isAndroid && /Mobile/i.test(ua);\n        var isAndroidTablet = isAndroid && !/Mobile/i.test(ua);\n        var minSide = Math.min(screen.width || 0, screen.height || 0);\n        var maxSide = Math.max(screen.width || 0, screen.height || 0);\n\n        var type = \"desktop\";\n        if (isiPhone) type = \"phone\";\n        else if (isiPad || isAndroidTablet) type = \"tablet\";\n        else if (isAndroidPhone) type = \"phone\";\n        else if (touch > 0 && minSide > 0 && minSide <= 500) type = \"phone\";\n        else if (touch > 0 && minSide > 500 && maxSide <= 1400) type = \"tablet\";\n\n        var iosMajor = null;\n        var osToken = null;\n        var safariToken = null;\n        var iphoneOs = ua.match(/iPhone OS (\\d+)[._]/);\n        var ipadOs = ua.match(/CPU OS (\\d+)[._](\\d+) like Mac OS X/);\n        var safariVer = ua.match(/Version\\/(\\d+)[._]/);\n        if (iphoneOs) osToken = parseInt(iphoneOs[1], 10);\n        else if (ipadOs) osToken = parseInt(ipadOs[1], 10);\n        if (isIOS && safariVer) safariToken = parseInt(safariVer[1], 10);\n        if (osToken != null || safariToken != null) {\n          iosMajor = Math.max(osToken || 0, safariToken || 0);\n        }\n\n        var root = document.documentElement;\n        var classes = [\"device-\" + type];\n        if (iosMajor != null) {\n          root.dataset.ios = String(iosMajor);\n          classes.push(iosMajor >= 27 ? \"ios-27-plus\" : \"ios-below-27\");\n        }\n        root.className = classes.join(\" \");\n      })();\n    <\/script>\n  </head>\n  <body>\n    <div class=\"page\">\n      <header class=\"powered\" aria-label=\"Powered by Grok\">\n        <span class=\"powered-by\">Powered by</span>\n        <span class=\"powered-brand\">\n          <img\n            class=\"grok-logo\"\n            src=\"/__grok/install/assets/homescreen/logo-grok.svg\"\n            width=\"14\"\n            height=\"14\"\n            alt=\"\"\n          />\n          <span class=\"powered-grok\">Grok</span>\n        </span>\n      </header>\n\n      <main class=\"content\">\n        <div class=\"ob\" aria-hidden=\"true\">\n          <img\n            class=\"ob-img ob-phone\"\n            src=\"/__grok/install/assets/homescreen/ob-phone.png\"\n            width=\"338\"\n            height=\"294\"\n            alt=\"\"\n          />\n          <img\n            class=\"ob-img ob-ipad\"\n            src=\"/__grok/install/assets/homescreen/ob-ipad.png\"\n            width=\"634\"\n            height=\"294\"\n            alt=\"\"\n          />\n        </div>\n\n        <section class=\"copy\">\n          <h1>Add {{APP_NAME}} to your&nbsp;Home&nbsp;Screen</h1>\n\n          <div class=\"steps\">\n            <p class=\"step step-tap step-ios27\">\n              <span class=\"muted\">Tap</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-puzzle.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n              <span class=\"muted loc loc-phone\">in the bottom bar, then</span>\n              <span class=\"muted loc loc-ipad\">in the tool bar, then</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-share.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n            </p>\n\n            <p class=\"step step-tap step-ios-legacy\">\n              <span class=\"muted\">Tap</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-share.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n              <span class=\"muted loc loc-phone\">in the bottom bar</span>\n              <span class=\"muted loc loc-ipad\">in the tool bar</span>\n            </p>\n\n            <p class=\"step step-select\">\n              <span class=\"muted\">Select</span>\n              <span class=\"add-label\">\n                <img\n                  class=\"plus-icon\"\n                  src=\"/__grok/install/assets/homescreen/plus.svg\"\n                  width=\"16\"\n                  height=\"16\"\n                  alt=\"\"\n                />\n                <span class=\"add-text\">Add to Home Screen</span>\n              </span>\n            </p>\n          </div>\n        </section>\n      </main>\n\n      <main class=\"content content-desktop\">\n        <section class=\"copy\">\n          <h1>Open this link on your iPhone&nbsp;or&nbsp;iPad</h1>\n          <p class=\"desktop-note\">\n            This page shows how to add {{APP_NAME}} to an iOS Home Screen.\n          </p>\n          <a class=\"desktop-open\" href=\"{{APP_URL}}\">Open {{APP_NAME}}</a>\n        </section>\n      </main>\n    </div>\n  </body>\n</html>\n";
//#endregion
//#region \0virtual:grok-og-identity
var grokOgIdentity = { "site": {
	"title": "Полотно Макоши",
	"type": "website",
	"card": "custom",
	"image": "/og.jpg"
} };
//#endregion
//#region scripts/grok-pwa-shared.mjs
/**
* Single source of truth for platform head chrome (PWA, extensions.js, OG),
* shared by the Vite plugin and Nitro middleware. Plain ESM so `node --test`
* and the Nitro bundler can both consume it.
*/
var DEFAULT_APP_NAME = "Grok App";
var OG_SITE_REL_PATH = "src/lib/og/site.json";
var SHARE_META_KEYS = /* @__PURE__ */ new Set([
	"og:title",
	"og:description",
	"og:image",
	"og:image:width",
	"og:image:height",
	"og:type",
	"og:url",
	"og:site_name",
	"twitter:card",
	"twitter:title",
	"twitter:image",
	"twitter:description",
	"x:game:image",
	"x:game:image:width",
	"x:game:image:height"
]);
function escapeHtml(value) {
	return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
/** Inverse of escapeHtml. Decode &amp; last so a single pass undoes one encode. */
function unescapeHtml(value) {
	return String(value).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", "\"").replaceAll("&#39;", "'").replaceAll("&amp;", "&");
}
/** 6-digit hex for the og.grok.me placeholder, or "" if site.color is missing/invalid. */
function placeholderCardColor(site = {}) {
	const raw = String(site.color ?? "").trim();
	const hex = raw.startsWith("#") ? raw.slice(1) : raw;
	return /^[0-9a-fA-F]{6}$/.test(hex) ? hex : "";
}
/**
* "wild-race.grok.me" → "Wild Race". Only published app hosts encode the
* display name in the first label. Preview / guest hosts are image origins
* only — slugifying them produced internal names like "Hds Abc 3000 Xy".
*/
function appNameFromHost(hostHeader) {
	const host = String(hostHeader ?? "").split(",")[0].trim().split(":")[0].toLowerCase();
	if (!host.endsWith(".grok.me")) return DEFAULT_APP_NAME;
	const slug = host.split(".")[0] ?? "";
	if (!slug || slug === "www" || !/^[a-z0-9-]{1,63}$/.test(slug)) return DEFAULT_APP_NAME;
	return slug.split("-").filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ") || "Grok App";
}
/** True for Vercel system domains. Envoy rewrites origin Host to these; they SSO-protect `/og.jpg`. */
function isVercelSystemHost(host) {
	return host === "vercel.app" || host.endsWith(".vercel.app") || host === "vercel.com" || host.endsWith(".vercel.com");
}
/** Hostname suitable for absolute og:image URLs. Preview guests (X-Forwarded-Host) are allowed. */
function publicAppHost(hostHeader) {
	const host = String(hostHeader ?? "").split(",")[0].trim().split(":")[0].toLowerCase();
	if (!host || !/^[a-z0-9.-]+$/.test(host) || !host.includes(".")) return "";
	if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)) return "";
	if (isVercelSystemHost(host)) return "";
	return host;
}
/**
* Published apps always use `VITE_PUBLIC_HOSTNAME` (the grok.me host the
* deployer injects). Live preview has no such env, so fall back to the
* request host / X-Forwarded-Host. Never prefer request Host on a published
* app — Envoy rewrites it to `*.vercel.app`.
*/
function resolvePublicHost(hostHeader) {
	return publicAppHost(process.env?.VITE_PUBLIC_HOSTNAME) || publicAppHost(hostHeader);
}
function isInstallQuery(url) {
	const query = String(url ?? "").split("?", 2)[1] ?? "";
	const params = new URLSearchParams(query);
	const install = params.get("install");
	const platform = (params.get("platform") ?? "").toLowerCase();
	return (install === "1" || install === "true") && platform === "ios";
}
/** Paths that can carry an app document (vs assets / API / internals). */
function isDocumentPath(pathname) {
	const path = String(pathname ?? "");
	return !path.startsWith("/__grok/") && !path.startsWith("/api/") && !path.startsWith("/@") && !path.startsWith("/node_modules") && !/\.[a-z0-9]+$/i.test(path);
}
function acceptsHtml(accept) {
	const value = String(accept ?? "");
	return value === "" || value.includes("text/html") || value.includes("*/*");
}
/** The same URL without the install-tutorial params (used as the app link). */
function stripInstallParams(url) {
	const [path = "/", query = ""] = String(url ?? "/").split("?", 2);
	const params = new URLSearchParams(query);
	params.delete("install");
	params.delete("platform");
	const rest = params.toString();
	return rest ? `${path}?${rest}` : path;
}
function renderInstallPageHtml(template, { host, url } = {}) {
	return String(template).replaceAll("{{APP_NAME}}", escapeHtml(appNameFromHost(host))).replaceAll("{{APP_URL}}", escapeHtml(stripInstallParams(url)));
}
function renderWebManifest(hostHeader) {
	const name = appNameFromHost(hostHeader);
	return JSON.stringify({
		name,
		short_name: name,
		id: "/",
		start_url: "/",
		scope: "/",
		display: "standalone",
		background_color: "#000000",
		theme_color: "#000000",
		icons: [{
			src: "/__grok/icon-180.png",
			sizes: "180x180",
			type: "image/png"
		}]
	}, null, 2);
}
function grokPwaHeadTags(appName = DEFAULT_APP_NAME) {
	return [
		["manifest", "<link rel=\"manifest\" href=\"/__grok/manifest.webmanifest\">"],
		["apple-touch-icon", "<link rel=\"apple-touch-icon\" href=\"/__grok/icon-180.png\">"],
		["apple-mobile-web-app-title", `<meta name="apple-mobile-web-app-title" content="${escapeHtml(appName)}">`],
		["apple-mobile-web-app-status-bar-style", "<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">"],
		["theme-color", "<meta name=\"theme-color\" content=\"#000000\">"]
	];
}
var GROK_EXTENSIONS_SCRIPT_SRC = "https://grok.com/grok-app-builder/extensions.js";
function readGrokProjectId() {
	const fromProcess = typeof process !== "undefined" ? process.env?.VITE_PROJECT_ID : "";
	return String(fromProcess ?? "").trim();
}
function readXCreator() {
	const fromProcess = typeof process !== "undefined" ? process.env?.X_CREATOR : "";
	return String(fromProcess ?? "").trim();
}
function readXCreatorId() {
	const fromProcess = typeof process !== "undefined" ? process.env?.X_CREATOR_ID : "";
	return String(fromProcess ?? "").trim();
}
function grokXCreatorHeadTags(creator = readXCreator(), creatorId = readXCreatorId()) {
	const name = String(creator ?? "").trim();
	const id = String(creatorId ?? "").trim();
	if (!name || !id) return [];
	return [`<meta property="x:creator" content="${escapeHtml(name)}">`, `<meta property="x:creator:id" content="${escapeHtml(id)}">`];
}
/** Platform "Created with Grok" banner — injected into every HTML document. */
function grokExtensionsHeadTags(projectId = readGrokProjectId()) {
	const id = escapeHtml(projectId);
	const tags = [];
	if (projectId) tags.push(`<meta name="grok-project-id" content="${id}">`);
	tags.push(`<script src="${GROK_EXTENSIONS_SCRIPT_SRC}"${projectId ? ` data-project-id="${id}"` : ""} defer><\/script>`);
	return tags;
}
function readOgSite(cwd = process.cwd()) {
	try {
		const raw = readFileSync(join(cwd, OG_SITE_REL_PATH), "utf8");
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
	} catch {
		return {};
	}
}
/** Public path of an on-disk share card, or "" if neither file exists. */
function ogCardPublicPath(cwd = process.cwd()) {
	if (existsSync(join(cwd, "public/og.jpg"))) return "/og.jpg";
	if (existsSync(join(cwd, "public/og.png"))) return "/og.png";
	return "";
}
function detectCustomOgCard(cwd = process.cwd(), site = {}) {
	if (ogCardPublicPath(cwd)) return true;
	return siteHasCustomCard(site) || Boolean(String(site.image ?? "").trim());
}
/** Snapshot for Vite/Nitro to bake into the server bundle (Vercel has no workspace FS). */
function snapshotOgIdentity(cwd = process.cwd()) {
	const site = { ...readOgSite(cwd) };
	const disk = ogCardPublicPath(cwd);
	if (disk) {
		site.card = "custom";
		site.image = disk;
	} else {
		if (siteHasCustomCard(site)) delete site.card;
		if (site.image) delete site.image;
	}
	if (existsSync(join(cwd, "public/x-banner.jpg"))) site.banner = site.banner || "/x-banner.jpg";
	return { site };
}
function ogServiceUrl() {
	return (String(process.env?.VITE_OG_SERVICE_URL ?? "").trim() || "https://og.grok.me").replace(/\/+$/, "");
}
function titleFromDocument(html) {
	const match = String(html ?? "").match(/<title\b[^>]*>([^<]*)<\/title>/i);
	return match ? unescapeHtml(match[1]).trim() : "";
}
function resolveOgTitle(site = {}, appName = DEFAULT_APP_NAME, host = "", documentTitle = "") {
	const fromSite = String(site.title ?? "").trim();
	if (fromSite) return fromSite;
	const fromDoc = String(documentTitle ?? "").trim();
	if (fromDoc) return fromDoc;
	const fromHost = appNameFromHost(host);
	if (fromHost && fromHost !== "Grok App") return fromHost;
	return String(appName ?? "").trim() || "Grok App";
}
function siteHasCustomCard(site = {}) {
	return String(site.card ?? "").toLowerCase() === "custom";
}
/**
* Preview: public/og.jpg|png on disk.
* Vercel: the bake (`card=custom` / `image`) because the function cannot stat public/.
* Otherwise empty — caller emits the og.grok.me placeholder.
*/
function resolveOgCardAsset(site = {}, cwd = process.cwd()) {
	return ogCardPublicPath(cwd) || (detectCustomOgCard(cwd, site) ? String(site.image ?? "").trim() || "/og.jpg" : "");
}
/** Stamp `card=custom` when public/og.jpg or public/og.png is on disk. */
function applyCustomCardFromFs(site, cwd) {
	const disk = ogCardPublicPath(cwd);
	if (!disk) return site;
	return {
		...site,
		card: "custom",
		image: disk
	};
}
function grokOgHeadTags({ host = "", appName = DEFAULT_APP_NAME, site = {}, documentTitle = "", cwd = process.cwd() } = {}) {
	const title = resolveOgTitle(site, appName, host, documentTitle);
	const publicHost = resolvePublicHost(host);
	const tags = [`<meta name="twitter:card" content="summary_large_image">`, `<meta property="og:title" content="${escapeHtml(title)}">`];
	const description = String(site.description ?? "").trim();
	if (description) tags.push(`<meta property="og:description" content="${escapeHtml(description)}">`);
	if (String(site.type ?? "").toLowerCase() === "x:game") tags.push(`<meta property="og:type" content="x:game">`);
	if (publicHost) {
		const asset = resolveOgCardAsset(site, cwd);
		const custom = Boolean(asset);
		let image = custom ? `https://${publicHost}${asset.startsWith("/") ? asset : `/${asset}`}` : `${ogServiceUrl()}/v1/card.png?host=${encodeURIComponent(publicHost)}&title=${encodeURIComponent(title)}`;
		const color = !custom ? placeholderCardColor(site) : "";
		if (color) image += `&color=${encodeURIComponent(color)}`;
		tags.push(`<meta property="og:image" content="${escapeHtml(image)}">`);
		tags.push(`<meta property="og:image:width" content="1200">`);
		tags.push(`<meta property="og:image:height" content="630">`);
		const banner = String(site.banner ?? "").trim();
		if (banner) {
			const bannerUrl = `https://${publicHost}${banner.startsWith("/") ? banner : `/${banner}`}`;
			tags.push(`<meta property="x:game:image" content="${escapeHtml(bannerUrl)}">`);
			tags.push(`<meta property="x:game:image:width" content="1200">`);
			tags.push(`<meta property="x:game:image:height" content="264">`);
		}
	}
	return tags;
}
function stripShareMetaTags(html) {
	return String(html).replace(/<meta\b[^>]*>/gi, (tag) => {
		const attrs = [...tag.matchAll(/\b(?:property|name)\s*=\s*["']([^"']+)["']/gi)];
		for (const match of attrs) if (SHARE_META_KEYS.has(String(match[1]).toLowerCase())) return "";
		return tag;
	});
}
function insertAfterHeadOpen(html, snippet) {
	if (/<head\b[^>]*>/i.test(html)) return html.replace(/<head\b[^>]*>/i, (open) => `${open}${snippet}`);
	if (/<html\b[^>]*>/i.test(html)) return html.replace(/<html\b[^>]*>/i, (open) => `${open}<head>${snippet}</head>`);
	return `<!doctype html><html><head>${snippet}</head>${html}`;
}
function insertBeforeHeadClose(html, snippet) {
	if (/<\/head>/i.test(html)) return html.replace(/<\/head>/i, `${snippet}</head>`);
	return insertAfterHeadOpen(html, snippet);
}
function normalizeHeadContext(ctx = {}) {
	const cwd = ctx.cwd ?? process.cwd();
	const site = applyCustomCardFromFs(ctx.site !== void 0 ? ctx.site : snapshotOgIdentity(cwd).site, cwd);
	return {
		appName: resolveOgTitle(site, ctx.appName ?? "Grok App", ctx.host ?? ""),
		projectId: ctx.projectId ?? readGrokProjectId(),
		creator: ctx.creator ?? readXCreator(),
		creatorId: ctx.creatorId ?? readXCreatorId(),
		host: ctx.host ?? "",
		cwd,
		site
	};
}
function injectGrokPwaHead(html, ctx = {}) {
	if (typeof html !== "string") return html;
	const { site, projectId, creator, creatorId, host, cwd } = normalizeHeadContext(ctx);
	const documentTitle = titleFromDocument(html);
	const appName = resolveOgTitle(site, ctx.appName ?? "Grok App", host, documentTitle);
	let next = stripShareMetaTags(html);
	const missing = grokPwaHeadTags(appName).filter(([key]) => {
		if (key === "manifest") return !next.includes("href=\"/__grok/manifest.webmanifest\"");
		if (key === "apple-touch-icon") return !next.includes("href=\"/__grok/icon-180.png\"");
		return !next.includes(`name="${key}"`);
	}).map(([, tag]) => tag);
	next = insertAfterHeadOpen(next, grokOgHeadTags({
		host,
		appName,
		site,
		documentTitle,
		cwd
	}).join(""));
	if (!next.includes("/grok-app-builder/extensions.js")) missing.push(...grokExtensionsHeadTags(projectId));
	else if (projectId && !next.includes("name=\"grok-project-id\"")) missing.push(`<meta name="grok-project-id" content="${escapeHtml(projectId)}">`);
	if (projectId && !next.includes("property=\"grok:app_id\"") && !next.includes("property='grok:app_id'")) missing.push(`<meta property="grok:app_id" content="${escapeHtml(projectId)}">`);
	const creatorTags = grokXCreatorHeadTags(creator, creatorId);
	if (creatorTags.length > 0) {
		if (!(next.includes("property=\"x:creator\" content=") || next.includes("property='x:creator' content="))) missing.push(creatorTags[0]);
		if (!next.includes("property=\"x:creator:id\"")) missing.push(creatorTags[1]);
	}
	if (missing.length === 0) return next;
	return insertBeforeHeadClose(next, missing.join(""));
}
function findHeadClose(buf) {
	return buf.toString("latin1").search(/<\/head>/i);
}
/**
* Streaming head injector: buffers only until `</head>` (ASCII marker; never
* appears inside a UTF-8 continuation byte), overwrites share-card metas,
* then passes later chunks through so streaming SSR keeps streaming.
*/
function createHeadInjector(ctx = {}) {
	const normalized = normalizeHeadContext(ctx);
	/** @type {Buffer[]} */
	let pending = [];
	let done = false;
	const apply = (html) => injectGrokPwaHead(html, {
		appName: normalized.appName,
		projectId: normalized.projectId,
		creator: normalized.creator,
		creatorId: normalized.creatorId,
		host: normalized.host,
		cwd: normalized.cwd,
		site: normalized.site
	});
	return {
		/** @param {Uint8Array | string} chunk @returns {Buffer[]} chunks ready to emit */
		push(chunk) {
			const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
			if (done) return [buf];
			pending.push(buf);
			const joined = Buffer.concat(pending);
			const at = findHeadClose(joined);
			if (at === -1) return [];
			done = true;
			pending = [];
			const closeLen = joined.toString("latin1", at).match(/^<\/head>/i)[0].length;
			const head = apply(joined.subarray(0, at + closeLen).toString("utf8"));
			return [Buffer.concat([Buffer.from(head, "utf8"), joined.subarray(at + closeLen)])];
		},
		/** @returns {Buffer[]} whatever is still buffered (no `</head>` seen) */
		flush() {
			if (done || pending.length === 0) return [];
			const rest = Buffer.concat(pending);
			pending = [];
			done = true;
			return [Buffer.from(apply(rest.toString("utf8")), "utf8")];
		}
	};
}
//#endregion
//#region server/middleware/grok-pwa.ts
/**
* Deployed-app (Nitro) half of the platform PWA chrome. Auto-registered as
* global h3 middleware because vite.config.ts sets `serverDir: "./server"` —
* without that option Nitro v3 never scans this directory.
*
* - `?install=1&platform=ios` on a document path → the Home Screen tutorial,
*   bundled into the server build via `?raw` (the public/ directory is CDN
*   static output on Vercel and not readable from the function).
* - `/__grok/manifest.webmanifest` → per-app-named manifest (kept out of
*   public/ so this dynamic response is the only one).
* - Other HTML documents → stream-inject PWA + OG head tags at `</head>`.
*   OG identity is baked via `virtual:grok-og-identity` at `vite build`
*   (this function cannot read `src/lib/og/site.json` or `public/og.jpg`).
*   This must be a middleware transforming `next()`: h3 discards the `response`
*   runtime hook's return value, and `render:html` does not exist in Nitro v3.
*/
function requestHost(event) {
	return event.req.headers.get("x-forwarded-host") ?? event.req.headers.get("host") ?? event.url.host;
}
function injectHeadStreaming(response, host) {
	const injector = createHeadInjector({
		host,
		site: grokOgIdentity.site
	});
	const transformed = response.body.pipeThrough(new TransformStream({
		transform(chunk, controller) {
			for (const out of injector.push(chunk)) controller.enqueue(out);
		},
		flush(controller) {
			for (const out of injector.flush()) controller.enqueue(out);
		}
	}));
	const headers = new Headers(response.headers);
	headers.delete("content-length");
	return new Response(transformed, {
		status: response.status,
		statusText: response.statusText,
		headers
	});
}
async function grokPwaMiddleware(event, next) {
	if ((event.req.method ?? "GET").toUpperCase() !== "GET") return next();
	const path = event.url.pathname;
	const urlWithQuery = path + event.url.search;
	if (path === "/__grok/manifest.webmanifest" || path === "/__grok/manifest.json") return new Response(renderWebManifest(requestHost(event)), { headers: {
		"content-type": "application/manifest+json; charset=utf-8",
		"cache-control": "no-cache"
	} });
	if (isInstallQuery(urlWithQuery) && isDocumentPath(path) && acceptsHtml(event.req.headers.get("accept"))) {
		const html = renderInstallPageHtml(install_page_default, {
			host: requestHost(event),
			url: urlWithQuery
		});
		return new Response(html, { headers: {
			"content-type": "text/html; charset=utf-8",
			"cache-control": "no-cache"
		} });
	}
	if (!isDocumentPath(path)) return next();
	const result = await next();
	if (result instanceof Response && result.body && String(result.headers.get("content-type") ?? "").includes("text/html") && !result.headers.get("content-encoding")) return injectHeadStreaming(result, requestHost(event));
	return result;
}
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_IO091Z = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_IO091Z
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default), toEventHandler(grokPwaMiddleware)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
