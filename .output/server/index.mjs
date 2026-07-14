globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/adv3-Ds5ncLOZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e8f5-mh7RVGWFKFYD67xQ/Gbl85okIJk\"",
		"mtime": "2026-07-13T18:52:31.720Z",
		"size": 190709,
		"path": "../public/assets/adv3-Ds5ncLOZ.jpg"
	},
	"/assets/adv5-Dr38W5r_.jpg": {
		"type": "image/jpeg",
		"etag": "\"2506a-4O083OLBrdEknOlFlJJU79vX9Fg\"",
		"mtime": "2026-07-13T18:52:31.723Z",
		"size": 151658,
		"path": "../public/assets/adv5-Dr38W5r_.jpg"
	},
	"/assets/adv4-CKyN5yJl.jpg": {
		"type": "image/jpeg",
		"etag": "\"28944-tdJekB68FxsVdSHDUY52jFgQKnc\"",
		"mtime": "2026-07-13T18:52:31.722Z",
		"size": 166212,
		"path": "../public/assets/adv4-CKyN5yJl.jpg"
	},
	"/assets/favourite-DtEMwjCp.jpg": {
		"type": "image/jpeg",
		"etag": "\"14c29-K6buDd0Ll5C3fsErQMh5HJh57mU\"",
		"mtime": "2026-07-13T18:52:31.727Z",
		"size": 85033,
		"path": "../public/assets/favourite-DtEMwjCp.jpg"
	},
	"/assets/index-CKzGqA2M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5424c-dw/y/D6ndQ+2SWQq8aufdT5C8LY\"",
		"mtime": "2026-07-13T18:52:31.648Z",
		"size": 344652,
		"path": "../public/assets/index-CKzGqA2M.js"
	},
	"/assets/firstpic-DQWsQW7u.jpg": {
		"type": "image/jpeg",
		"etag": "\"19205-SgNemDvgJjn7u/d1oHM69k/GAdw\"",
		"mtime": "2026-07-13T18:52:31.730Z",
		"size": 102917,
		"path": "../public/assets/firstpic-DQWsQW7u.jpg"
	},
	"/assets/latenightdrive-D7mwZlZq.jpg": {
		"type": "image/jpeg",
		"etag": "\"1063a-ca/qDGS8QkDYjBEqg14MXom4k/U\"",
		"mtime": "2026-07-13T18:52:31.753Z",
		"size": 67130,
		"path": "../public/assets/latenightdrive-D7mwZlZq.jpg"
	},
	"/assets/little3-BcWp8wjW.jpg": {
		"type": "image/jpeg",
		"etag": "\"b665-pKAilRU6Q5SqmzNK7fVeHHYaEJg\"",
		"mtime": "2026-07-13T18:52:31.763Z",
		"size": 46693,
		"path": "../public/assets/little3-BcWp8wjW.jpg"
	},
	"/assets/love3-Y_1-IRg1.jpg": {
		"type": "image/jpeg",
		"etag": "\"2203a-o6SJtM8g0O0um/zQa/S/3YKMyx4\"",
		"mtime": "2026-07-13T18:52:32.891Z",
		"size": 139322,
		"path": "../public/assets/love3-Y_1-IRg1.jpg"
	},
	"/assets/love4-sox5FMpt.jpg": {
		"type": "image/jpeg",
		"etag": "\"2bd35-kATOngf7eGSazbFdf668VY1LJeI\"",
		"mtime": "2026-07-13T18:52:32.892Z",
		"size": 179509,
		"path": "../public/assets/love4-sox5FMpt.jpg"
	},
	"/assets/photo3-4t155ghy.jpg": {
		"type": "image/jpeg",
		"etag": "\"ddb0-GNlj3rSyObmj3jLHPDy3BUDX9UQ\"",
		"mtime": "2026-07-13T18:52:32.897Z",
		"size": 56752,
		"path": "../public/assets/photo3-4t155ghy.jpg"
	},
	"/assets/photo2-BEn_5Lw3.jpg": {
		"type": "image/jpeg",
		"etag": "\"183d7-4Vr5ifJ0HnjndJWWaL4TpyFHWlM\"",
		"mtime": "2026-07-13T18:52:32.896Z",
		"size": 99287,
		"path": "../public/assets/photo2-BEn_5Lw3.jpg"
	},
	"/assets/photo4-DsIWTYyM.jpg": {
		"type": "image/jpeg",
		"etag": "\"bed1-hR0zA6gk+rOJ/HgwZquFjQhbx2g\"",
		"mtime": "2026-07-13T18:52:32.898Z",
		"size": 48849,
		"path": "../public/assets/photo4-DsIWTYyM.jpg"
	},
	"/assets/photo1-C7z6qmne.jpg": {
		"type": "image/jpeg",
		"etag": "\"12a6a-8q2X0milFE6GzyR2YRUCzv/Efmw\"",
		"mtime": "2026-07-13T18:52:32.895Z",
		"size": 76394,
		"path": "../public/assets/photo1-C7z6qmne.jpg"
	},
	"/assets/little1-Pf2vssrs.mp4": {
		"type": "video/mp4",
		"etag": "\"12f68c-ACaeYR+TwyC1rUoyyYDn9RkXpUI\"",
		"mtime": "2026-07-13T18:52:31.756Z",
		"size": 1242764,
		"path": "../public/assets/little1-Pf2vssrs.mp4"
	},
	"/assets/adv6-DplbINEI.mp4": {
		"type": "video/mp4",
		"etag": "\"189cd0-8zN7rAymfBQ9rOrszEyK2PnrvlA\"",
		"mtime": "2026-07-13T18:52:31.726Z",
		"size": 1613008,
		"path": "../public/assets/adv6-DplbINEI.mp4"
	},
	"/assets/firsttrip-D0SxIAIg.mp4": {
		"type": "video/mp4",
		"etag": "\"1d0abd-F+d2g5lc+GmGYM0nPN5c3eRqb14\"",
		"mtime": "2026-07-13T18:52:31.752Z",
		"size": 1903293,
		"path": "../public/assets/firsttrip-D0SxIAIg.mp4"
	},
	"/assets/routes-BCw8gxYG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27f6b-c//i+QnaeuK3gMznj9+dkLgrmWA\"",
		"mtime": "2026-07-13T18:52:31.651Z",
		"size": 163691,
		"path": "../public/assets/routes-BCw8gxYG.js"
	},
	"/assets/special (1)-C2flA8NY.jpg": {
		"type": "image/jpeg",
		"etag": "\"31a0a-/fVGz/x6OC2r+ziR4Je3/v8Kw2Q\"",
		"mtime": "2026-07-13T18:52:32.902Z",
		"size": 203274,
		"path": "../public/assets/special (1)-C2flA8NY.jpg"
	},
	"/assets/little2-D4kgbSPs.mp4": {
		"type": "video/mp4",
		"etag": "\"244fe1-s6HLQCs9Vn4ZswIaxnLPEGIp1Cs\"",
		"mtime": "2026-07-13T18:52:31.762Z",
		"size": 2379745,
		"path": "../public/assets/little2-D4kgbSPs.mp4"
	},
	"/assets/special (10)-Bt0_8itg.jpg": {
		"type": "image/jpeg",
		"etag": "\"2150e-3kzRmsr0HVBRll13/OaBJcxQrsQ\"",
		"mtime": "2026-07-13T18:52:32.903Z",
		"size": 136462,
		"path": "../public/assets/special (10)-Bt0_8itg.jpg"
	},
	"/assets/special (2)-DcnFM2Ly.jpg": {
		"type": "image/jpeg",
		"etag": "\"1429f-yDit81pSOCanvD9UNfrbmJq1bvk\"",
		"mtime": "2026-07-13T18:52:32.905Z",
		"size": 82591,
		"path": "../public/assets/special (2)-DcnFM2Ly.jpg"
	},
	"/assets/special (3)-CYDsHzwR.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d4c3-zH5CgvOHzZtmohZvaKCmOst6hPo\"",
		"mtime": "2026-07-13T18:52:32.906Z",
		"size": 120003,
		"path": "../public/assets/special (3)-CYDsHzwR.jpg"
	},
	"/assets/special (4)-Dw6WLX1X.jpg": {
		"type": "image/jpeg",
		"etag": "\"32d92-ymt1APy+rle91BLyJvVVp9Tcz3Q\"",
		"mtime": "2026-07-13T18:52:32.912Z",
		"size": 208274,
		"path": "../public/assets/special (4)-Dw6WLX1X.jpg"
	},
	"/assets/special (5)-CdhC80Tm.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e403-0YsynlmDemC+sqBZHX5an0mWFDI\"",
		"mtime": "2026-07-13T18:52:32.913Z",
		"size": 123907,
		"path": "../public/assets/special (5)-CdhC80Tm.jpg"
	},
	"/assets/special (6)-DB5ZL3_p.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b23e-zEGH9nQZ94G51vgPDePGsK/IgDQ\"",
		"mtime": "2026-07-13T18:52:32.916Z",
		"size": 242238,
		"path": "../public/assets/special (6)-DB5ZL3_p.jpg"
	},
	"/assets/special (7)-CxfOfzBl.jpg": {
		"type": "image/jpeg",
		"etag": "\"35a7e-Tzi1Ht3YO2bJxqrc+cClN+/eFLQ\"",
		"mtime": "2026-07-13T18:52:32.917Z",
		"size": 219774,
		"path": "../public/assets/special (7)-CxfOfzBl.jpg"
	},
	"/assets/special (8)-Dsae8K69.jpg": {
		"type": "image/jpeg",
		"etag": "\"30fd8-bAD+18kmicmksdU3zvUbTDolgOE\"",
		"mtime": "2026-07-13T18:52:32.918Z",
		"size": 200664,
		"path": "../public/assets/special (8)-Dsae8K69.jpg"
	},
	"/assets/special (9)-B3eZI5BK.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b518-zRYOTXwRbOQeXLJaiQsJ1JgJXWE\"",
		"mtime": "2026-07-13T18:52:32.919Z",
		"size": 111896,
		"path": "../public/assets/special (9)-B3eZI5BK.jpg"
	},
	"/assets/styles-Co9Sbigh.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"17528-JhQM96cffs5dW2ZC8w9RW8SELkI\"",
		"mtime": "2026-07-13T18:52:33.008Z",
		"size": 95528,
		"path": "../public/assets/styles-Co9Sbigh.css"
	},
	"/assets/quitmorning-D0xQaTHO.mp4": {
		"type": "video/mp4",
		"etag": "\"205cb0-tHhdujdKzXJ4/kxM8DfCEDGNl0s\"",
		"mtime": "2026-07-13T18:52:32.901Z",
		"size": 2120880,
		"path": "../public/assets/quitmorning-D0xQaTHO.mp4"
	},
	"/assets/ustbeacuuse-BQhp332t.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d2b2-PptPu+JPJrgyuEu1MOZxEZSsCMA\"",
		"mtime": "2026-07-13T18:52:33.136Z",
		"size": 185010,
		"path": "../public/assets/ustbeacuuse-BQhp332t.jpg"
	},
	"/assets/together4-DVwqp_vH.jpg": {
		"type": "image/jpeg",
		"etag": "\"164e5-2SzaN1+fYAKO/sWebRXJmWdqF4Q\"",
		"mtime": "2026-07-13T18:52:33.134Z",
		"size": 91365,
		"path": "../public/assets/together4-DVwqp_vH.jpg"
	},
	"/assets/together1-bl7Xj4NE.mp4": {
		"type": "video/mp4",
		"etag": "\"27fa3e-LkZO9QHHSEXqxsuD2se3wMOwR58\"",
		"mtime": "2026-07-13T18:52:33.013Z",
		"size": 2619966,
		"path": "../public/assets/together1-bl7Xj4NE.mp4"
	},
	"/assets/little4-DliLYsBB.mp4": {
		"type": "video/mp4",
		"etag": "\"7d6929-DrLqaNGH6k/gZHnSDsvpYAInhQY\"",
		"mtime": "2026-07-13T18:52:32.018Z",
		"size": 8218921,
		"path": "../public/assets/little4-DliLYsBB.mp4"
	},
	"/assets/together2-B_7p3qar.mp4": {
		"type": "video/mp4",
		"etag": "\"33575f-Cv6NEx/jlrpnB2rMwVJALsP7SpU\"",
		"mtime": "2026-07-13T18:52:33.032Z",
		"size": 3364703,
		"path": "../public/assets/together2-B_7p3qar.mp4"
	},
	"/assets/adv1-lMI3Qlx9.mp4": {
		"type": "video/mp4",
		"etag": "\"959d31-fd0zwlTXYu8qUMezsVU4LVbVDhI\"",
		"mtime": "2026-07-13T18:52:31.702Z",
		"size": 9805105,
		"path": "../public/assets/adv1-lMI3Qlx9.mp4"
	},
	"/assets/Pikley -CiYzdZdZ.mp3": {
		"type": "audio/mpeg",
		"etag": "\"91e2f9-KJKPj3zLV94gRfaytoZvBiy5S9s\"",
		"mtime": "2026-07-13T18:52:31.668Z",
		"size": 9560825,
		"path": "../public/assets/Pikley -CiYzdZdZ.mp3"
	},
	"/assets/adv2-7Fr_igYx.mp4": {
		"type": "video/mp4",
		"etag": "\"93e0e8-g1PD4uIgI4QnuAkuvJdf+UhEfVM\"",
		"mtime": "2026-07-13T18:52:31.719Z",
		"size": 9691368,
		"path": "../public/assets/adv2-7Fr_igYx.mp4"
	},
	"/assets/Aaj Se Teri-Dc0Yz98x.mp3": {
		"type": "audio/mpeg",
		"etag": "\"c37c6f-p70fp/2Gpt2hYU3smF6xtUWzVCM\"",
		"mtime": "2026-07-13T18:52:31.660Z",
		"size": 12811375,
		"path": "../public/assets/Aaj Se Teri-Dc0Yz98x.mp3"
	},
	"/assets/love2-DGq-f_I8.mp4": {
		"type": "video/mp4",
		"etag": "\"beeae4-VAyXVyaCraFBlT/lRiPmVw/Z+jY\"",
		"mtime": "2026-07-13T18:52:32.890Z",
		"size": 12511972,
		"path": "../public/assets/love2-DGq-f_I8.mp4"
	},
	"/assets/Rozana -q1CusmzY.mp3": {
		"type": "audio/mpeg",
		"etag": "\"a46aaf-Bbvej1toV0iEAo7bBnzRntr/IPQ\"",
		"mtime": "2026-07-13T18:52:31.676Z",
		"size": 10775215,
		"path": "../public/assets/Rozana -q1CusmzY.mp3"
	},
	"/assets/love1-CzhA-Ebj.mp4": {
		"type": "video/mp4",
		"etag": "\"9f7dec-WB/Au4wqMszmR9gJQxtj6GRV5w0\"",
		"mtime": "2026-07-13T18:52:32.547Z",
		"size": 10452460,
		"path": "../public/assets/love1-CzhA-Ebj.mp4"
	},
	"/assets/SANJU-zLVw_AJn.mp3": {
		"type": "audio/mpeg",
		"etag": "\"aa3f1d-uwExlP+PHvA2vgVohS7SgT+i688\"",
		"mtime": "2026-07-13T18:52:31.684Z",
		"size": 11157277,
		"path": "../public/assets/SANJU-zLVw_AJn.mp3"
	},
	"/assets/together3-Bh_RX0Mn.mp4": {
		"type": "video/mp4",
		"etag": "\"c2a5ab-QwS9R3K0caZL5TN/nT5CZd539dc\"",
		"mtime": "2026-07-13T18:52:33.133Z",
		"size": 12756395,
		"path": "../public/assets/together3-Bh_RX0Mn.mp4"
	},
	"/assets/special-D3HP0oo3.mp4": {
		"type": "video/mp4",
		"etag": "\"c543d9-P1vI8SOjihiv5fz7aE2pWymwF5U\"",
		"mtime": "2026-07-13T18:52:33.006Z",
		"size": 12927961,
		"path": "../public/assets/special-D3HP0oo3.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
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
var _lazy_tYxfcv = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_tYxfcv
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
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
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
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
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
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
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
