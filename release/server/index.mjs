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
		"mtime": "2026-09-11T00:54:03.812Z",
		"size": 176,
		"path": "../public/favicon.svg"
	},
	"/og.jpg": {
		"type": "image/jpeg",
		"etag": "\"1985e-BAaFXSGKB1l3ygA+7zbLFaQ5k8A\"",
		"mtime": "2026-09-11T00:54:03.812Z",
		"size": 104542,
		"path": "../public/og.jpg"
	},
	"/__grok/icon-180.png": {
		"type": "image/png",
		"etag": "\"834-Xk8vfS0DTFn7ggtkfEduWTcNWGE\"",
		"mtime": "2026-09-11T00:54:03.808Z",
		"size": 2100,
		"path": "../public/__grok/icon-180.png"
	},
	"/assets/about-BV2BMvds.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb4-VYBas83pdWYqds+/TloN0IJ6PFk\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 3252,
		"path": "../public/assets/about-BV2BMvds.js"
	},
	"/assets/app-shell-Bx5dnxlo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f9a-CA+N9UzueM5nVcuqmKu63xQNoXY\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 3994,
		"path": "../public/assets/app-shell-Bx5dnxlo.js"
	},
	"/assets/button-BuoOPTK2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1132-A0BYCrdMu6t67Z1QXcPcFLUoE2A\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 4402,
		"path": "../public/assets/button-BuoOPTK2.js"
	},
	"/assets/card-face-DqbTOCBE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"428-mmzRSbyxN6l7aC8BXQbyoT0lWho\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 1064,
		"path": "../public/assets/card-face-DqbTOCBE.js"
	},
	"/assets/card-tile-BEgpaI0j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42d-J96aZsoLDu9Cjop3SphxNviYHik\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 1069,
		"path": "../public/assets/card-tile-BEgpaI0j.js"
	},
	"/assets/card._number-DhQTaKca.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11de-jfZv2VeaEI908BTWLRDkC+v+DiM\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 4574,
		"path": "../public/assets/card._number-DhQTaKca.js"
	},
	"/assets/cormorant-garamond-cyrillic-500-italic-C9gO-8KC.woff": {
		"type": "font/woff",
		"etag": "\"3e88-Ori9fvtuGs1hKQJv4N25e7aROlU\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 16008,
		"path": "../public/assets/cormorant-garamond-cyrillic-500-italic-C9gO-8KC.woff"
	},
	"/assets/cormorant-garamond-cyrillic-500-italic-DVnfXoMy.woff2": {
		"type": "font/woff2",
		"etag": "\"31a0-rpLHSZWf9G6gjvcxoOaJKMx3Y0c\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 12704,
		"path": "../public/assets/cormorant-garamond-cyrillic-500-italic-DVnfXoMy.woff2"
	},
	"/assets/cormorant-garamond-cyrillic-500-normal-CyAY5ZLS.woff2": {
		"type": "font/woff2",
		"etag": "\"3278-oGK5WEi6uv46hb5/rvVltj5ZiIg\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 12920,
		"path": "../public/assets/cormorant-garamond-cyrillic-500-normal-CyAY5ZLS.woff2"
	},
	"/assets/cormorant-garamond-cyrillic-500-normal-DkJXBcIH.woff": {
		"type": "font/woff",
		"etag": "\"3d90-0awGCN3jp6UFrO1Fvi0b+aCnjrc\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 15760,
		"path": "../public/assets/cormorant-garamond-cyrillic-500-normal-DkJXBcIH.woff"
	},
	"/assets/cormorant-garamond-cyrillic-600-normal-C2atO-64.woff2": {
		"type": "font/woff2",
		"etag": "\"32d8-8d3rWjcyv9fSPPU/MPW9gnHwPJI\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 13016,
		"path": "../public/assets/cormorant-garamond-cyrillic-600-normal-C2atO-64.woff2"
	},
	"/assets/cormorant-garamond-cyrillic-600-normal-FNmA3REe.woff": {
		"type": "font/woff",
		"etag": "\"3dd0-Oqsh7LStfdS7mPECA6cvJuAjAfk\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 15824,
		"path": "../public/assets/cormorant-garamond-cyrillic-600-normal-FNmA3REe.woff"
	},
	"/assets/cormorant-garamond-latin-500-normal-BsRWmXhO.woff2": {
		"type": "font/woff2",
		"etag": "\"5b10-wgtX9vTo79mXEZJ3HNiFltUuhOk\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 23312,
		"path": "../public/assets/cormorant-garamond-latin-500-normal-BsRWmXhO.woff2"
	},
	"/assets/cormorant-garamond-latin-500-normal-zIXX3Q-H.woff": {
		"type": "font/woff",
		"etag": "\"7a8c-xh93N3JqWgLN3ZGsycxKTpCoKJg\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 31372,
		"path": "../public/assets/cormorant-garamond-latin-500-normal-zIXX3Q-H.woff"
	},
	"/assets/cormorant-garamond-latin-600-normal-2CBVLo0M.woff": {
		"type": "font/woff",
		"etag": "\"7a48-hEZL0FtkpIi9bUu0Z020uBfp4v8\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 31304,
		"path": "../public/assets/cormorant-garamond-latin-600-normal-2CBVLo0M.woff"
	},
	"/assets/cormorant-garamond-latin-600-normal-Co1r35X9.woff2": {
		"type": "font/woff2",
		"etag": "\"5b64-DiRTjnmBF4QEF99jcstrz5kUhWM\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 23396,
		"path": "../public/assets/cormorant-garamond-latin-600-normal-Co1r35X9.woff2"
	},
	"/assets/deck-C6s2dqMZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"92e-7YNZzMnUgLOmKMh39KXog23xBvQ\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 2350,
		"path": "../public/assets/deck-C6s2dqMZ.js"
	},
	"/assets/index-BSavtge4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5bbe9-2f+Pq7Ney6dEa/gl+DiAQ/uCq28\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 375785,
		"path": "../public/assets/index-BSavtge4.js"
	},
	"/assets/input-CPtQYTKk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"130-HbYWFZIedk3d9mLxDruk6byFANk\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 304,
		"path": "../public/assets/input-CPtQYTKk.js"
	},
	"/assets/journal-Bl_bt-qg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e4e-D2B/MOptNvmDCEcKAwNos6M+738\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 3662,
		"path": "../public/assets/journal-Bl_bt-qg.js"
	},
	"/assets/journal-ClZiULEo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b0-GslIPWA/h3Nnb2vwcuTjwkQBnZA\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 688,
		"path": "../public/assets/journal-ClZiULEo.js"
	},
	"/assets/living-media-CRlg6iKY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c73-A0O/9ISn4++6pwlt/2FsTolylIU\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 3187,
		"path": "../public/assets/living-media-CRlg6iKY.js"
	},
	"/assets/manrope-cyrillic-400-normal-BMzJvInZ.woff2": {
		"type": "font/woff2",
		"etag": "\"1ea0-r24bQvoe4IM0viqy4iW9eQGaEAs\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 7840,
		"path": "../public/assets/manrope-cyrillic-400-normal-BMzJvInZ.woff2"
	},
	"/assets/manrope-cyrillic-400-normal-Dvx59UGC.woff": {
		"type": "font/woff",
		"etag": "\"2730-MpSBSgjzr8d8U09B7qrhx5tQWGk\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 10032,
		"path": "../public/assets/manrope-cyrillic-400-normal-Dvx59UGC.woff"
	},
	"/assets/manrope-cyrillic-500-normal-B1OEZity.woff2": {
		"type": "font/woff2",
		"etag": "\"1ec0-nhqY8ZhJXEdqhoyZ+BT8cX6p1f4\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 7872,
		"path": "../public/assets/manrope-cyrillic-500-normal-B1OEZity.woff2"
	},
	"/assets/manrope-cyrillic-500-normal-CNwnNrRC.woff": {
		"type": "font/woff",
		"etag": "\"271c-p5ovnkUnQ8DL4EoYyZzR4j7SJz4\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 10012,
		"path": "../public/assets/manrope-cyrillic-500-normal-CNwnNrRC.woff"
	},
	"/assets/manrope-cyrillic-600-normal-DvRl3Mj-.woff2": {
		"type": "font/woff2",
		"etag": "\"1ec0-p4NcbLnQ9Cw9Yn/yjSsp0IKPb0E\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 7872,
		"path": "../public/assets/manrope-cyrillic-600-normal-DvRl3Mj-.woff2"
	},
	"/assets/manrope-cyrillic-600-normal-It4mZcQk.woff": {
		"type": "font/woff",
		"etag": "\"274c-Zw+cU8cYr8xVg6ZwHz0/vQLyEtw\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 10060,
		"path": "../public/assets/manrope-cyrillic-600-normal-It4mZcQk.woff"
	},
	"/assets/manrope-latin-400-normal-8tf8FM3T.woff": {
		"type": "font/woff",
		"etag": "\"4774-mCT/VuoLJFoKBP3t5Nv3FzpwCKc\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 18292,
		"path": "../public/assets/manrope-latin-400-normal-8tf8FM3T.woff"
	},
	"/assets/manrope-latin-400-normal-PaqtzbVb.woff2": {
		"type": "font/woff2",
		"etag": "\"371c-UpYQC/kqnfmqnPi4IPp15HTokX4\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 14108,
		"path": "../public/assets/manrope-latin-400-normal-PaqtzbVb.woff2"
	},
	"/assets/manrope-latin-500-normal-BYYD-dBL.woff2": {
		"type": "font/woff2",
		"etag": "\"36dc-EZ29/81rmFJDUFZa2ZHBvwyWCdw\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 14044,
		"path": "../public/assets/manrope-latin-500-normal-BYYD-dBL.woff2"
	},
	"/assets/manrope-latin-500-normal-DMZssgOp.woff": {
		"type": "font/woff",
		"etag": "\"4740-Q9EmdKM1E3weOZyciPd53Ds1hv8\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 18240,
		"path": "../public/assets/manrope-latin-500-normal-DMZssgOp.woff"
	},
	"/assets/manrope-latin-600-normal-4f0koTD-.woff2": {
		"type": "font/woff2",
		"etag": "\"375c-w937G8IX30U7QbSdunJAIHm3ERo\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 14172,
		"path": "../public/assets/manrope-latin-600-normal-4f0koTD-.woff2"
	},
	"/assets/manrope-latin-600-normal-BqgrALkZ.woff": {
		"type": "font/woff",
		"etag": "\"47d0-3DKmwK66oJYdcMbZlnLr4/5u2+Y\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 18384,
		"path": "../public/assets/manrope-latin-600-normal-BqgrALkZ.woff"
	},
	"/assets/old-standard-tt-cyrillic-400-italic-C55T6EX4.woff2": {
		"type": "font/woff2",
		"etag": "\"3fdc-3UgvxnFXtUXw+mtRTBtmT4WKs3g\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 16348,
		"path": "../public/assets/old-standard-tt-cyrillic-400-italic-C55T6EX4.woff2"
	},
	"/assets/old-standard-tt-cyrillic-400-italic-CjUsNPOx.woff": {
		"type": "font/woff",
		"etag": "\"2ad0-Bz6Yx1B2pC2mUn/qL6674f5Ty/8\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 10960,
		"path": "../public/assets/old-standard-tt-cyrillic-400-italic-CjUsNPOx.woff"
	},
	"/assets/old-standard-tt-cyrillic-400-normal-B9opELhc.woff": {
		"type": "font/woff",
		"etag": "\"289c-6Ih7GQJnHcl/ImJZghPS07uA4Ig\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 10396,
		"path": "../public/assets/old-standard-tt-cyrillic-400-normal-B9opELhc.woff"
	},
	"/assets/old-standard-tt-cyrillic-400-normal-Dx4QB4EU.woff2": {
		"type": "font/woff2",
		"etag": "\"38c4-Lo+DVkS90O7cDW3BCcuoyftbKCg\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 14532,
		"path": "../public/assets/old-standard-tt-cyrillic-400-normal-Dx4QB4EU.woff2"
	},
	"/assets/old-standard-tt-latin-400-italic-CCwC87fu.woff2": {
		"type": "font/woff2",
		"etag": "\"63d8-08VimcQskl0xzzvwGb3CM8xeXXo\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 25560,
		"path": "../public/assets/old-standard-tt-latin-400-italic-CCwC87fu.woff2"
	},
	"/assets/old-standard-tt-latin-400-italic-CQu5L45y.woff": {
		"type": "font/woff",
		"etag": "\"49d4-k+XZ/9yjMqewRT0q5i/XnFkhJVM\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 18900,
		"path": "../public/assets/old-standard-tt-latin-400-italic-CQu5L45y.woff"
	},
	"/assets/old-standard-tt-latin-400-normal-CEoEX30F.woff": {
		"type": "font/woff",
		"etag": "\"4418-vKm0ApzDAetuAc8OilF8tU5uovk\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 17432,
		"path": "../public/assets/old-standard-tt-latin-400-normal-CEoEX30F.woff"
	},
	"/assets/old-standard-tt-latin-400-normal-CksAFory.woff2": {
		"type": "font/woff2",
		"etag": "\"5c7c-l3Ve3+Kr9vxa06RphrFJ+nt9alk\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 23676,
		"path": "../public/assets/old-standard-tt-latin-400-normal-CksAFory.woff2"
	},
	"/assets/reading-BmU6wlrR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3cec-cKeSuR+LUXNxcJpTzRydL1PE9lU\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 15596,
		"path": "../public/assets/reading-BmU6wlrR.js"
	},
	"/assets/routes-DzjNRqR4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ec8-ycMrouWYLaFP4AgWS4PxF3pBbLI\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 16072,
		"path": "../public/assets/routes-DzjNRqR4.js"
	},
	"/assets/sound-2_BW4P_7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4072e-2dQzgC299eE8p7BBGl/Sui0Mgsg\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 263982,
		"path": "../public/assets/sound-2_BW4P_7.js"
	},
	"/assets/studio._number-RRROt13F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1977-zIBGAK9eGRyhXsScNOELvYZ/iNE\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 6519,
		"path": "../public/assets/studio._number-RRROt13F.js"
	},
	"/assets/studio.index-Dj5WMg8G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"107e-harSDZefSIXr5upPVv871GllnI8\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 4222,
		"path": "../public/assets/studio.index-Dj5WMg8G.js"
	},
	"/assets/styles-C0b_fvU5.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"cbd5-FN0zyKggz1Ew4gOAX1HBY7GDP14\"",
		"mtime": "2026-09-11T00:54:02.960Z",
		"size": 52181,
		"path": "../public/assets/styles-C0b_fvU5.css"
	},
	"/assets/textarea-Cl9_plTX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cd-98kFAYnO09dk/LXk8PKfEYM6Sus\"",
		"mtime": "2026-09-11T00:54:02.956Z",
		"size": 461,
		"path": "../public/assets/textarea-Cl9_plTX.js"
	},
	"/author/temnoyar.jpg": {
		"type": "image/jpeg",
		"etag": "\"2fb30-keWdW7vefus5fI8jtRGrwYy4ZTI\"",
		"mtime": "2026-09-11T00:54:03.800Z",
		"size": 195376,
		"path": "../public/author/temnoyar.jpg"
	},
	"/cards/001.jpg": {
		"type": "image/jpeg",
		"etag": "\"187fd-Obabekd2UBKNsZhUIsQP+peWoIE\"",
		"mtime": "2026-09-11T00:54:03.804Z",
		"size": 100349,
		"path": "../public/cards/001.jpg"
	},
	"/cards/002.jpg": {
		"type": "image/jpeg",
		"etag": "\"228e1-aZ2fHZqndGd4nRUQ0tWPAFu8hL0\"",
		"mtime": "2026-09-11T00:54:03.812Z",
		"size": 141537,
		"path": "../public/cards/002.jpg"
	},
	"/cards/003.jpg": {
		"type": "image/jpeg",
		"etag": "\"15d2b-zAAw0q1VYqM2OcIULllm4calfNI\"",
		"mtime": "2026-09-11T00:54:03.812Z",
		"size": 89387,
		"path": "../public/cards/003.jpg"
	},
	"/cards/004.jpg": {
		"type": "image/jpeg",
		"etag": "\"19072-JR8oYBnyIC0GnvIbo5zuhxf1pqw\"",
		"mtime": "2026-09-11T00:54:03.812Z",
		"size": 102514,
		"path": "../public/cards/004.jpg"
	},
	"/cards/005.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f391-tZhOSeDwaVJ8Xi3VpU+TxeT2Ad8\"",
		"mtime": "2026-09-11T00:54:03.812Z",
		"size": 193425,
		"path": "../public/cards/005.jpg"
	},
	"/cards/006.jpg": {
		"type": "image/jpeg",
		"etag": "\"13432-bISoJdbGXsvKm2wmJlzhH0FflTs\"",
		"mtime": "2026-09-11T00:54:03.812Z",
		"size": 78898,
		"path": "../public/cards/006.jpg"
	},
	"/cards/007.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c226-t+89bbrlT7TQLtyoQVl1ZKZanM0\"",
		"mtime": "2026-09-11T00:54:03.812Z",
		"size": 115238,
		"path": "../public/cards/007.jpg"
	},
	"/cards/008.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f150-E7WAfiZxr737VSsonEnQCvtZC8U\"",
		"mtime": "2026-09-11T00:54:03.812Z",
		"size": 127312,
		"path": "../public/cards/008.jpg"
	},
	"/cards/010.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d651-DN3qjs3I8bvLSXCZpazMNZOlS48\"",
		"mtime": "2026-09-11T00:54:03.812Z",
		"size": 120401,
		"path": "../public/cards/010.jpg"
	},
	"/cards/009.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b1b3-+CjbJjnAXOq1UwizFIuqKrW/ZFE\"",
		"mtime": "2026-09-11T00:54:03.812Z",
		"size": 176563,
		"path": "../public/cards/009.jpg"
	},
	"/cards/011.jpg": {
		"type": "image/jpeg",
		"etag": "\"1981d-ut1jt9IT9n3lo0ICDKaCgzBK9MI\"",
		"mtime": "2026-09-11T00:54:03.812Z",
		"size": 104477,
		"path": "../public/cards/011.jpg"
	},
	"/cards/013.jpg": {
		"type": "image/jpeg",
		"etag": "\"fa7f-IpMLOxUVjybVySuQEmGAqmsTqXI\"",
		"mtime": "2026-09-11T00:54:03.816Z",
		"size": 64127,
		"path": "../public/cards/013.jpg"
	},
	"/cards/014.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b68f-f1cCMuSp7tBnINCt87d8CSsHYhM\"",
		"mtime": "2026-09-11T00:54:03.816Z",
		"size": 112271,
		"path": "../public/cards/014.jpg"
	},
	"/cards/015.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f935-XFIbHR5lcow/8Q23pK5l8fJ2Rrc\"",
		"mtime": "2026-09-11T00:54:03.816Z",
		"size": 129333,
		"path": "../public/cards/015.jpg"
	},
	"/cards/012.jpg": {
		"type": "image/jpeg",
		"etag": "\"2192f-sKT+vRZEwVfXoUuDB2nmUhIbigk\"",
		"mtime": "2026-09-11T00:54:03.816Z",
		"size": 137519,
		"path": "../public/cards/012.jpg"
	},
	"/cards/016.jpg": {
		"type": "image/jpeg",
		"etag": "\"17bde-tvEVTte6oD3FSxlwqbkccgrKIGc\"",
		"mtime": "2026-09-11T00:54:03.816Z",
		"size": 97246,
		"path": "../public/cards/016.jpg"
	},
	"/cards/018.jpg": {
		"type": "image/jpeg",
		"etag": "\"2c21f-0kH13D1qYBxa/fGTnItXVNcSCzo\"",
		"mtime": "2026-09-11T00:54:03.824Z",
		"size": 180767,
		"path": "../public/cards/018.jpg"
	},
	"/cards/019.jpg": {
		"type": "image/jpeg",
		"etag": "\"28843-XCP4mr+pgkeOsbRDbNmbX68XR1c\"",
		"mtime": "2026-09-11T00:54:03.824Z",
		"size": 165955,
		"path": "../public/cards/019.jpg"
	},
	"/cards/020.jpg": {
		"type": "image/jpeg",
		"etag": "\"196d4-H3LnqtSdpA4bMQKMWkh3GKX7joE\"",
		"mtime": "2026-09-11T00:54:03.824Z",
		"size": 104148,
		"path": "../public/cards/020.jpg"
	},
	"/cards/021.jpg": {
		"type": "image/jpeg",
		"etag": "\"1886b-RU2J75b3BmDhUNThKmi5nF+Hl8Y\"",
		"mtime": "2026-09-11T00:54:03.824Z",
		"size": 100459,
		"path": "../public/cards/021.jpg"
	},
	"/cards/022.jpg": {
		"type": "image/jpeg",
		"etag": "\"18960-Izkof/bxcuafVAs8/L3KrZHa5o4\"",
		"mtime": "2026-09-11T00:54:03.824Z",
		"size": 100704,
		"path": "../public/cards/022.jpg"
	},
	"/cards/017.jpg": {
		"type": "image/jpeg",
		"etag": "\"16d79-4mD/QeHyuuQZzpqV8gZoJwatmk0\"",
		"mtime": "2026-09-11T00:54:03.816Z",
		"size": 93561,
		"path": "../public/cards/017.jpg"
	},
	"/cards/023.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e17a-y6MNZw93RS/9BoaW/9JXNDbrp4Y\"",
		"mtime": "2026-09-11T00:54:03.828Z",
		"size": 123258,
		"path": "../public/cards/023.jpg"
	},
	"/cards/024.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d62d-UV7I12RzQUim62gr+ZBpjORP+9Y\"",
		"mtime": "2026-09-11T00:54:03.828Z",
		"size": 120365,
		"path": "../public/cards/024.jpg"
	},
	"/cards/026.jpg": {
		"type": "image/jpeg",
		"etag": "\"13786-zLLx3JlG132qW6oipjIjKN/phHM\"",
		"mtime": "2026-09-11T00:54:03.828Z",
		"size": 79750,
		"path": "../public/cards/026.jpg"
	},
	"/cards/025.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d8e9-nQpAq4LR/VRPq1zL2eVZsyWFLyc\"",
		"mtime": "2026-09-11T00:54:03.828Z",
		"size": 121065,
		"path": "../public/cards/025.jpg"
	},
	"/cards/027.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ae6f-dO20VgJvon2bIbSQOiqgcrbV64I\"",
		"mtime": "2026-09-11T00:54:03.828Z",
		"size": 110191,
		"path": "../public/cards/027.jpg"
	},
	"/cards/028.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b01d-cZsUCGg48srO8SjRGu1vpheb/1A\"",
		"mtime": "2026-09-11T00:54:03.828Z",
		"size": 110621,
		"path": "../public/cards/028.jpg"
	},
	"/cards/029.jpg": {
		"type": "image/jpeg",
		"etag": "\"1667b-F+1/ewUZgrw9dbkpxF40K+n21iw\"",
		"mtime": "2026-09-11T00:54:03.828Z",
		"size": 91771,
		"path": "../public/cards/029.jpg"
	},
	"/cards/030.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d05d-TX1Ojpt8EWA7uApxA90cdBBmY2w\"",
		"mtime": "2026-09-11T00:54:03.828Z",
		"size": 118877,
		"path": "../public/cards/030.jpg"
	},
	"/cards/031.jpg": {
		"type": "image/jpeg",
		"etag": "\"1aa6e-A0B0mrSWM6eGGBnF8gnQGIXv/C4\"",
		"mtime": "2026-09-11T00:54:03.828Z",
		"size": 109166,
		"path": "../public/cards/031.jpg"
	},
	"/cards/032.jpg": {
		"type": "image/jpeg",
		"etag": "\"22e5a-LO1A6pqoRpeikgZPIaLrMy5eKa8\"",
		"mtime": "2026-09-11T00:54:03.828Z",
		"size": 142938,
		"path": "../public/cards/032.jpg"
	},
	"/cards/033.jpg": {
		"type": "image/jpeg",
		"etag": "\"21421-adpfMgpmqB4AppMBUAGZD9MBey4\"",
		"mtime": "2026-09-11T00:54:03.828Z",
		"size": 136225,
		"path": "../public/cards/033.jpg"
	},
	"/cards/035.jpg": {
		"type": "image/jpeg",
		"etag": "\"33dad-zabTgt22JjE4Mupf8HHwyTzv/5w\"",
		"mtime": "2026-09-11T00:54:03.828Z",
		"size": 212397,
		"path": "../public/cards/035.jpg"
	},
	"/cards/036.jpg": {
		"type": "image/jpeg",
		"etag": "\"2be54-FA5xNSHeSlZ0cPcTE8hBRDSp2tQ\"",
		"mtime": "2026-09-11T00:54:03.832Z",
		"size": 179796,
		"path": "../public/cards/036.jpg"
	},
	"/cards/038.jpg": {
		"type": "image/jpeg",
		"etag": "\"190c1-yiKnia8KPjipXCQM06GxeyWLLrc\"",
		"mtime": "2026-09-11T00:54:03.832Z",
		"size": 102593,
		"path": "../public/cards/038.jpg"
	},
	"/cards/039.jpg": {
		"type": "image/jpeg",
		"etag": "\"21f16-ChRxY50C8S+EvE6GyLZitQCAqIA\"",
		"mtime": "2026-09-11T00:54:03.832Z",
		"size": 139030,
		"path": "../public/cards/039.jpg"
	},
	"/cards/037.jpg": {
		"type": "image/jpeg",
		"etag": "\"282a6-FMmWXcr8VTC2vj8iEy1blDCe5Kc\"",
		"mtime": "2026-09-11T00:54:03.832Z",
		"size": 164518,
		"path": "../public/cards/037.jpg"
	},
	"/cards/041.jpg": {
		"type": "image/jpeg",
		"etag": "\"365f0-r8xt2rl9/q5cg6QDlKk21K2VZmI\"",
		"mtime": "2026-09-11T00:54:03.832Z",
		"size": 222704,
		"path": "../public/cards/041.jpg"
	},
	"/cards/042.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ef9e-WxaoBpEXZvHmArdrPGuipzafSoU\"",
		"mtime": "2026-09-11T00:54:03.832Z",
		"size": 126878,
		"path": "../public/cards/042.jpg"
	},
	"/cards/043.jpg": {
		"type": "image/jpeg",
		"etag": "\"250e7-HMdkiwDmeiPhhJVgd2/YZ+G9RLc\"",
		"mtime": "2026-09-11T00:54:03.832Z",
		"size": 151783,
		"path": "../public/cards/043.jpg"
	},
	"/cards/044.jpg": {
		"type": "image/jpeg",
		"etag": "\"29eae-8xhfEW2flfAik44bmO3DpLbtgs0\"",
		"mtime": "2026-09-11T00:54:03.832Z",
		"size": 171694,
		"path": "../public/cards/044.jpg"
	},
	"/cards/045.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a5ea-dRj5Dgi4UPYQn9Ev244OnGF6PHI\"",
		"mtime": "2026-09-11T00:54:03.832Z",
		"size": 108010,
		"path": "../public/cards/045.jpg"
	},
	"/cards/040.jpg": {
		"type": "image/jpeg",
		"etag": "\"22cb4-5HDHgEfTXTCaK3wZhR4lJ7ZNRBY\"",
		"mtime": "2026-09-11T00:54:03.832Z",
		"size": 142516,
		"path": "../public/cards/040.jpg"
	},
	"/cards/047.jpg": {
		"type": "image/jpeg",
		"etag": "\"231c3-kWT/tHotaHh1YzwQtL4xnhEO1iQ\"",
		"mtime": "2026-09-11T00:54:03.832Z",
		"size": 143811,
		"path": "../public/cards/047.jpg"
	},
	"/cards/034.jpg": {
		"type": "image/jpeg",
		"etag": "\"174d6-w+DOPgxyDAknTVJZ7bkBbjZik1E\"",
		"mtime": "2026-09-11T00:54:03.828Z",
		"size": 95446,
		"path": "../public/cards/034.jpg"
	},
	"/cards/048.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f175-JNOls+CgOdGimkymSrgqkmSKi5k\"",
		"mtime": "2026-09-11T00:54:03.836Z",
		"size": 127349,
		"path": "../public/cards/048.jpg"
	},
	"/cards/049.jpg": {
		"type": "image/jpeg",
		"etag": "\"21273-+zF/psTrSpCcQtBqn3gfBHqfgD8\"",
		"mtime": "2026-09-11T00:54:03.836Z",
		"size": 135795,
		"path": "../public/cards/049.jpg"
	},
	"/cards/050.jpg": {
		"type": "image/jpeg",
		"etag": "\"216f1-h3FqGK3/pLNJ0KyDHM/dlrCfZfo\"",
		"mtime": "2026-09-11T00:54:03.836Z",
		"size": 136945,
		"path": "../public/cards/050.jpg"
	},
	"/cards/051.jpg": {
		"type": "image/jpeg",
		"etag": "\"21b9e-iGPBJMNvpEFK1o48gt8zxsC7jdk\"",
		"mtime": "2026-09-11T00:54:03.836Z",
		"size": 138142,
		"path": "../public/cards/051.jpg"
	},
	"/cards/052.jpg": {
		"type": "image/jpeg",
		"etag": "\"1958d-8gte9meQdgCjxJzY8NCAlOq2+kM\"",
		"mtime": "2026-09-11T00:54:03.836Z",
		"size": 103821,
		"path": "../public/cards/052.jpg"
	},
	"/cards/053.jpg": {
		"type": "image/jpeg",
		"etag": "\"157e4-mx4m5k2HvhY6gXiCe1FWF+dP6mI\"",
		"mtime": "2026-09-11T00:54:03.836Z",
		"size": 88036,
		"path": "../public/cards/053.jpg"
	},
	"/cards/046.jpg": {
		"type": "image/jpeg",
		"etag": "\"1fe47-RAWFyczlCwsLU+JLVolrcaGr8Z4\"",
		"mtime": "2026-09-11T00:54:03.832Z",
		"size": 130631,
		"path": "../public/cards/046.jpg"
	},
	"/cards/054.jpg": {
		"type": "image/jpeg",
		"etag": "\"17903-JHgXp9EWNhQCy+wBdZIY8c9E3So\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 96515,
		"path": "../public/cards/054.jpg"
	},
	"/cards/055.jpg": {
		"type": "image/jpeg",
		"etag": "\"1857d-BfME4Uu4D5B/v7oKevCvRpFSDHA\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 99709,
		"path": "../public/cards/055.jpg"
	},
	"/cards/056.jpg": {
		"type": "image/jpeg",
		"etag": "\"23807-Isp8lHh50OU4cihhPR1S0CfD0UU\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 145415,
		"path": "../public/cards/056.jpg"
	},
	"/cards/057.jpg": {
		"type": "image/jpeg",
		"etag": "\"17a8e-oSOOt1q6HLV9QI6gtzk58fcCh9U\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 96910,
		"path": "../public/cards/057.jpg"
	},
	"/cards/058.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a16b-XGKLTiX+2X56X7TplCzuKmagM1k\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 106859,
		"path": "../public/cards/058.jpg"
	},
	"/cards/059.jpg": {
		"type": "image/jpeg",
		"etag": "\"1afaf-Mrln3IObp6y5c+76lbY7d7jr4F8\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 110511,
		"path": "../public/cards/059.jpg"
	},
	"/cards/060.jpg": {
		"type": "image/jpeg",
		"etag": "\"1bca8-JyEWqjHJhNAvDxXJvKNfYUpAh/E\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 113832,
		"path": "../public/cards/060.jpg"
	},
	"/cards/061.jpg": {
		"type": "image/jpeg",
		"etag": "\"11a31-KYaN0L6HlcodMA9Ffp8E0KyD23Y\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 72241,
		"path": "../public/cards/061.jpg"
	},
	"/cards/062.jpg": {
		"type": "image/jpeg",
		"etag": "\"22874-+Oo/YLbcoTrsKNlyZ0zM9UsWFwU\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 141428,
		"path": "../public/cards/062.jpg"
	},
	"/cards/063.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c010-qdKN1R0e+qUivUk0hy0OIgeIGjw\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 114704,
		"path": "../public/cards/063.jpg"
	},
	"/cards/065.jpg": {
		"type": "image/jpeg",
		"etag": "\"12fae-j3/iehuEdoRs08MbXqbO11XjnIE\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 77742,
		"path": "../public/cards/065.jpg"
	},
	"/cards/064.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d774-y11M4yDllWyVDyOeKQpuT44Xpuo\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 120692,
		"path": "../public/cards/064.jpg"
	},
	"/cards/066.jpg": {
		"type": "image/jpeg",
		"etag": "\"151e4-6Rx5EdVyomeiUj8DQ7CP/7YNn78\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 86500,
		"path": "../public/cards/066.jpg"
	},
	"/cards/067.jpg": {
		"type": "image/jpeg",
		"etag": "\"14414-96zXbAC/esKBuyHjiVY7G8yS7pY\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 82964,
		"path": "../public/cards/067.jpg"
	},
	"/cards/069.jpg": {
		"type": "image/jpeg",
		"etag": "\"13f4f-dR+5niDDb7RDSoyjihJP5O4bi9I\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 81743,
		"path": "../public/cards/069.jpg"
	},
	"/cards/068.jpg": {
		"type": "image/jpeg",
		"etag": "\"165fd-ZvdQ64UxP+F7C8kXhZr1Olk56+I\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 91645,
		"path": "../public/cards/068.jpg"
	},
	"/cards/070.jpg": {
		"type": "image/jpeg",
		"etag": "\"20760-2BpxBh4e5yf9lPYucyu9jfhGwhg\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 132960,
		"path": "../public/cards/070.jpg"
	},
	"/cards/071.jpg": {
		"type": "image/jpeg",
		"etag": "\"14c21-Rh+ws2r5SwkaX6/aW+oRbSl8RnI\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 85025,
		"path": "../public/cards/071.jpg"
	},
	"/cards/072.jpg": {
		"type": "image/jpeg",
		"etag": "\"1dcb5-INMrKkTS71CrHP35tW5Y+Rza1o4\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 122037,
		"path": "../public/cards/072.jpg"
	},
	"/cards/073.jpg": {
		"type": "image/jpeg",
		"etag": "\"17b49-qGGCL77tj7KpzLZUYMaoAr7Wvb8\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 97097,
		"path": "../public/cards/073.jpg"
	},
	"/cards/074.jpg": {
		"type": "image/jpeg",
		"etag": "\"27d24-C1AzrQRTrcY0ePkIyxslTH+3zl0\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 163108,
		"path": "../public/cards/074.jpg"
	},
	"/cards/075.jpg": {
		"type": "image/jpeg",
		"etag": "\"1495d-ZFG4yk10UVFtXKALthtHi2kBY1c\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 84317,
		"path": "../public/cards/075.jpg"
	},
	"/cards/076.jpg": {
		"type": "image/jpeg",
		"etag": "\"eec4-eOdp9mgzolepcJMUJHEfaVg6mwE\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 61124,
		"path": "../public/cards/076.jpg"
	},
	"/cards/077.jpg": {
		"type": "image/jpeg",
		"etag": "\"18c91-r4ORpxzUHXqgZmkxkNMSjlsf0d8\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 101521,
		"path": "../public/cards/077.jpg"
	},
	"/cards/078.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f654-zGd+qL1b3gbFawrOVPWMGlvpEEU\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 128596,
		"path": "../public/cards/078.jpg"
	},
	"/cards/079.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e963-e4HwpkbB2L8QnqaeKwWWdxscvSU\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 125283,
		"path": "../public/cards/079.jpg"
	},
	"/cards/080.jpg": {
		"type": "image/jpeg",
		"etag": "\"15e1a-BSBl8eemyb4128YSJVVzCt1GVAM\"",
		"mtime": "2026-09-11T00:54:03.840Z",
		"size": 89626,
		"path": "../public/cards/080.jpg"
	},
	"/cards/081.jpg": {
		"type": "image/jpeg",
		"etag": "\"248fa-B6c34HCb7o/M4HVTFKtGVFaU+7I\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 149754,
		"path": "../public/cards/081.jpg"
	},
	"/cards/084.jpg": {
		"type": "image/jpeg",
		"etag": "\"1afdd-FyfhP8xrAnJEFFmRI7tMdPzBItA\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 110557,
		"path": "../public/cards/084.jpg"
	},
	"/cards/082.jpg": {
		"type": "image/jpeg",
		"etag": "\"17fcb-XNdTwASiEhS74XiN/Oxe/pH936A\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 98251,
		"path": "../public/cards/082.jpg"
	},
	"/cards/086.jpg": {
		"type": "image/jpeg",
		"etag": "\"fff0-IQY1nnS/YBbOwTsa15JPTUGTMAo\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 65520,
		"path": "../public/cards/086.jpg"
	},
	"/cards/083.jpg": {
		"type": "image/jpeg",
		"etag": "\"10654-cKBPGS/arS+6MiPbNnwxjeJ5UeE\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 67156,
		"path": "../public/cards/083.jpg"
	},
	"/cards/087.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c9a1-oqimxvE7d4eeyxOWeLG2zdEXuKU\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 117153,
		"path": "../public/cards/087.jpg"
	},
	"/cards/090.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e2a6-vuZCxsk0UdzBxGfm+4HFEae8Ifk\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 123558,
		"path": "../public/cards/090.jpg"
	},
	"/cards/085.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ca89-Kmz7YcOkwDz2PNVnX4nD7jhYkd8\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 117385,
		"path": "../public/cards/085.jpg"
	},
	"/cards/089.jpg": {
		"type": "image/jpeg",
		"etag": "\"13314-SfXw7IfU5lEJkPvh9MO8GIZx91Y\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 78612,
		"path": "../public/cards/089.jpg"
	},
	"/cards/092.jpg": {
		"type": "image/jpeg",
		"etag": "\"31821-vh7Dvl3XFvJ4517DuYqiN8djHic\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 202785,
		"path": "../public/cards/092.jpg"
	},
	"/cards/088.jpg": {
		"type": "image/jpeg",
		"etag": "\"19bb3-MmfPBtg5MIdi6jr9Yz8mbyPpTWQ\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 105395,
		"path": "../public/cards/088.jpg"
	},
	"/cards/091.jpg": {
		"type": "image/jpeg",
		"etag": "\"297ba-VNcWDX5vM6emAfLjA9XkC3TPrmc\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 169914,
		"path": "../public/cards/091.jpg"
	},
	"/cards/095.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c09c-BTbzL54eYWD/jIgBBZsy9AOieOM\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 114844,
		"path": "../public/cards/095.jpg"
	},
	"/cards/096.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e743-Nwmnb/IzLSe/+/jyqP/DlBveU68\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 124739,
		"path": "../public/cards/096.jpg"
	},
	"/cards/094.jpg": {
		"type": "image/jpeg",
		"etag": "\"132c2-biLeLnL8SY3KhrKoMfaz++jSOSE\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 78530,
		"path": "../public/cards/094.jpg"
	},
	"/cards/093.jpg": {
		"type": "image/jpeg",
		"etag": "\"244c8-YIXaycBljYTHvhz0qoLbTDfeBTQ\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 148680,
		"path": "../public/cards/093.jpg"
	},
	"/cards/097.jpg": {
		"type": "image/jpeg",
		"etag": "\"18179-M+COPMGpOmvtbj+iSX4T+Vbc6vc\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 98681,
		"path": "../public/cards/097.jpg"
	},
	"/cards/098.jpg": {
		"type": "image/jpeg",
		"etag": "\"168fb-IBiBGlk5z4fe8k37qwzSIeQBeAQ\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 92411,
		"path": "../public/cards/098.jpg"
	},
	"/cards/100.jpg": {
		"type": "image/jpeg",
		"etag": "\"26420-VUWbl9PRhbWozxCdN+3C54rS6zw\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 156704,
		"path": "../public/cards/100.jpg"
	},
	"/cards/099.jpg": {
		"type": "image/jpeg",
		"etag": "\"18fab-mHJEDEJPxFXa9PKheqxi/SZOBIg\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 102315,
		"path": "../public/cards/099.jpg"
	},
	"/cards/101.jpg": {
		"type": "image/jpeg",
		"etag": "\"21cf9-KZBFhnKRWi7aR6jOaiZtJFi5duY\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 138489,
		"path": "../public/cards/101.jpg"
	},
	"/cards/102.jpg": {
		"type": "image/jpeg",
		"etag": "\"10ad0-s0RL1tpZ0iu8qDLzfvdoIt7nmf4\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 68304,
		"path": "../public/cards/102.jpg"
	},
	"/cards/103.jpg": {
		"type": "image/jpeg",
		"etag": "\"122af-NxdCYp2or0aTCS3M2hdHusU+LLE\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 74415,
		"path": "../public/cards/103.jpg"
	},
	"/cards/104.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ee40-QuVgOMS5mAxjTtSJ0e5REOQFJQc\"",
		"mtime": "2026-09-11T00:54:03.848Z",
		"size": 126528,
		"path": "../public/cards/104.jpg"
	},
	"/cards/105.jpg": {
		"type": "image/jpeg",
		"etag": "\"150df-0NaVF0RW7KWjatm/j4ogALpOgHY\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 86239,
		"path": "../public/cards/105.jpg"
	},
	"/cards/106.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c47f-9HZyC1q2SLS5KaERWAwu+J5LM5k\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 115839,
		"path": "../public/cards/106.jpg"
	},
	"/cards/makosh.jpg": {
		"type": "image/jpeg",
		"etag": "\"1cf6b-gTz47Zxlhx4poxh+xtGJrMVfJpY\"",
		"mtime": "2026-09-11T00:54:03.848Z",
		"size": 118635,
		"path": "../public/cards/makosh.jpg"
	},
	"/videos/makosh-loom.jpg": {
		"type": "image/jpeg",
		"etag": "\"1cf6b-gTz47Zxlhx4poxh+xtGJrMVfJpY\"",
		"mtime": "2026-09-11T00:54:03.848Z",
		"size": 118635,
		"path": "../public/videos/makosh-loom.jpg"
	},
	"/__grok/install/styles.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1a3d-VUsWOMAheo1/P30EqU5qaIkyvIQ\"",
		"mtime": "2026-09-11T00:54:03.812Z",
		"size": 6717,
		"path": "../public/__grok/install/styles.css"
	},
	"/__grok/install/assets/homescreen/glass-puzzle.svg": {
		"type": "image/svg+xml",
		"etag": "\"713-AP2wG8KChAGjse1Fn+f/+vDN+sQ\"",
		"mtime": "2026-09-11T00:54:03.848Z",
		"size": 1811,
		"path": "../public/__grok/install/assets/homescreen/glass-puzzle.svg"
	},
	"/__grok/install/assets/homescreen/glass-share.svg": {
		"type": "image/svg+xml",
		"etag": "\"954-jb3ATcKjqgMOYrA/4w1v21j0Jvg\"",
		"mtime": "2026-09-11T00:54:03.848Z",
		"size": 2388,
		"path": "../public/__grok/install/assets/homescreen/glass-share.svg"
	},
	"/cards/108.jpg": {
		"type": "image/jpeg",
		"etag": "\"16ddb-5x5k+h9LDouY7PzUyc1GqVE/x8w\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 93659,
		"path": "../public/cards/108.jpg"
	},
	"/cards/107.jpg": {
		"type": "image/jpeg",
		"etag": "\"183b7-B4JGz2nbCNUg/4XqpOhZzEX7i6g\"",
		"mtime": "2026-09-11T00:54:03.844Z",
		"size": 99255,
		"path": "../public/cards/107.jpg"
	},
	"/__grok/install/assets/homescreen/logo-grok.svg": {
		"type": "image/svg+xml",
		"etag": "\"423-5mXO+yh9KW40jM3to5JlWPhxNK8\"",
		"mtime": "2026-09-11T00:54:03.848Z",
		"size": 1059,
		"path": "../public/__grok/install/assets/homescreen/logo-grok.svg"
	},
	"/__grok/install/assets/homescreen/ob-ipad.png": {
		"type": "image/png",
		"etag": "\"18dd3-wlRwrpmBImStuiu+4poVz7ANin4\"",
		"mtime": "2026-09-11T00:54:03.848Z",
		"size": 101843,
		"path": "../public/__grok/install/assets/homescreen/ob-ipad.png"
	},
	"/__grok/install/assets/homescreen/plus.svg": {
		"type": "image/svg+xml",
		"etag": "\"961-sSBPunx/13vbMNAlPxb7UeO3l3A\"",
		"mtime": "2026-09-11T00:54:03.848Z",
		"size": 2401,
		"path": "../public/__grok/install/assets/homescreen/plus.svg"
	},
	"/__grok/install/assets/homescreen/ob-phone.png": {
		"type": "image/png",
		"etag": "\"194bc-oZradWHIHO68q2glHU0Gk5ttpWA\"",
		"mtime": "2026-09-11T00:54:03.848Z",
		"size": 103612,
		"path": "../public/__grok/install/assets/homescreen/ob-phone.png"
	},
	"/videos/makosh-loom.mp4": {
		"type": "video/mp4",
		"etag": "\"3782ef-H35+0EPpftYlSUUuH+E+imORTvc\"",
		"mtime": "2026-09-11T00:54:03.848Z",
		"size": 3637999,
		"path": "../public/videos/makosh-loom.mp4"
	},
	"/videos/001.mov": {
		"type": "video/quicktime",
		"etag": "\"75d71b-E5vdwlpGpISNJRCnZj7uh2lVsrM\"",
		"mtime": "2026-09-11T00:54:03.816Z",
		"size": 7722779,
		"path": "../public/videos/001.mov"
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
