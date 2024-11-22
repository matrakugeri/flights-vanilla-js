// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fA0o9":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// import * as model from "./model.js";
// import View from "./View.js";
// import ResultsView from "./ResultsView.js";
var _modelJs = require("./model.js");
var _flightViewJs = require("./views/FlightView.js");
var _flightViewJsDefault = parcelHelpers.interopDefault(_flightViewJs);
var _config = require("./config");
var _resultsViewJs = require("./views/ResultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _addFlightViewJs = require("./views/addFlightView.js");
var _addFlightViewJsDefault = parcelHelpers.interopDefault(_addFlightViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _editFlightViewJs = require("./views/editFlightView.js");
var _editFlightViewJsDefault = parcelHelpers.interopDefault(_editFlightViewJs);
const controlFlight = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        // 0) Rendering spinner before asynchronous task is finished
        (0, _flightViewJsDefault.default).renderSpinner();
        // 1) Loading flight,and storing it to the state.flight object
        await _modelJs.loadFlight(id);
        // 2) Rendering flight with the data stored in the state.
        (0, _flightViewJsDefault.default).render(_modelJs.state.flight);
    } catch (err) {
        console.log(err);
    }
};
const controlSearchResults = async function() {
    try {
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        // 0) Render the spinner before async task is finished
        (0, _resultsViewJsDefault.default).renderSpinner();
        // 1) Loading flights,and storing it to the search results in states
        await _modelJs.loadSearchResults(query);
        console.log(_modelJs.state.search.results);
        // 2)Rendering flight with the data stored in the state.search.results
        (0, _resultsViewJsDefault.default).render(_modelJs.state.search.results);
        // Rendering buttons
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err) {
        console.log(err);
    }
};
const controlAddFlight = async function(newFlight) {
    try {
        //Spinner before loading
        (0, _flightViewJsDefault.default).renderSpinner();
        // Loading flight and store it to the state.flight
        await _modelJs.uploadFlight(newFlight);
        // Rendering the flight with the data stored in state
        (0, _flightViewJsDefault.default).render(_modelJs.state.flight);
        // addFlightView.renderMessage();
        // Change the window history pushstate
        window.history.pushState(null, "", `#${_modelJs.state.flight.id}`);
        // Hide modal after uploading
        setTimeout(function() {
            (0, _addFlightViewJsDefault.default).toggleWindow();
        }, (0, _config.MODAL_SEC) * 700);
    } catch (err) {
        console.error(err);
    }
};
const controlPagination = async function(goToPage) {
    try {
        // 1) Load new page results
        await _modelJs.loadSearchResults(_modelJs.state.search.query, goToPage);
        console.log(goToPage);
        // 2) Render new results
        (0, _resultsViewJsDefault.default).render(_modelJs.state.search.results);
        // 3) Update pagination buttons
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err) {
        console.log(err);
    }
};
const controlEditButton = async function() {
    (0, _editFlightViewJsDefault.default).toggleWindow();
    _modelJs.makeChanges();
};
const init = function() {
    (0, _flightViewJsDefault.default).addHandlerRender(controlFlight);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _addFlightViewJsDefault.default).addHandlerUpload(controlAddFlight);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    (0, _editFlightViewJsDefault.default).addHandlerEditButton(controlEditButton);
};
init();

},{"./config":"k5Hzs","./model.js":"Y4A21","./views/FlightView.js":"9bVj3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/ResultsView.js":"8JjiB","./views/searchView.js":"9OQAM","./views/addFlightView.js":"BUVwN","./views/paginationView.js":"6z7bi","./views/editFlightView.js":"g5wUZ"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "key", ()=>key);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
parcelHelpers.export(exports, "MODAL_SEC", ()=>MODAL_SEC);
const API_URL = "http://localhost:3333/flights/";
const key = "?_start=10&_limit=10";
const RES_PER_PAGE = 10;
const MODAL_SEC = 1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadFlight", ()=>loadFlight);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "uploadFlight", ()=>uploadFlight);
parcelHelpers.export(exports, "makeChanges", ()=>makeChanges);
var _config = require("./config");
var _helpersJs = require("./helpers.js");
const state = {
    flight: {},
    search: {
        query: "",
        results: [],
        resultsPerPage: (0, _config.RES_PER_PAGE),
        page: 1,
        totalResults: 0
    }
};
let flightNumber = document.getElementById("flight-numberEdit");
let origin = document.getElementById("originEdit");
let originFullName = document.getElementById("originFullNameEdit");
let destination = document.getElementById("destinationEdit");
let destinationFullName = document.getElementById("destinationFullNameEdit");
let title = document.getElementById("titleEdit");
let departure = document.getElementById("departureEdit");
let arrival = document.getElementById("arrivalEdit");
let status = document.getElementById("statusEdit");
const loadFlight = async function(id) {
    try {
        const data = await (0, _helpersJs.getJSON)(`${(0, _config.API_URL)}${id}`);
        state.flight = {
            id: data.id,
            arrivalTime: data.arrivalTime,
            departureTime: data.departureTime,
            destination: data.destination,
            destinationFullName: data.destinationFullName,
            flightNumber: data.flightNumber,
            origin: data.origin,
            originFullName: data.originFullName,
            title: data.title,
            status: data.status
        };
    } catch (err) {
        console.error(err);
        throw err;
    }
};
const loadSearchResults = async function(query, page = 1) {
    try {
        state.search.query = query;
        state.search.page = page;
        const start = (page - 1) * state.search.resultsPerPage;
        // const data = await getJSON(`${API_URL}?q=${query}`);
        // const data = await getJSON(
        //   `${API_URL}?_start=${start}&_limit=${state.search.resultsPerPage}&q=${query}`
        // );
        const response = await fetch(`${(0, _config.API_URL)}?_start=${start}&_limit=${state.search.resultsPerPage}&q=${query}`);
        // Get the total count from headers or response body
        const totalResults = response.headers.get("X-Total-Results");
        console.log(totalResults);
        const data = await response.json();
        state.search.results = data.map((el)=>{
            return {
                id: el.id,
                arrivalTime: el.arrivalTime,
                departureTime: el.departureTime,
                destination: el.destination,
                destinationFullName: el.destinationFullName,
                flightNumber: el.flightNumber,
                origin: el.origin,
                originFullName: el.originFullName,
                title: el.title,
                status: el.status
            };
        });
        state.search.totalResults = +totalResults;
        console.log(state.search.totalResults);
    } catch (err) {
        throw err;
    }
};
const uploadFlight = async function(newFlight) {
    try {
        //
        const flight = {
            arrivalTime: newFlight.arrival,
            departureTime: newFlight.departure,
            destination: newFlight.destination,
            destinationFullName: newFlight.destinationFullName,
            flightNumber: newFlight.flightNumber,
            origin: newFlight.origin,
            originFullName: newFlight.originFullName,
            title: newFlight.title,
            status: newFlight.status
        };
        const data = await (0, _helpersJs.sendJSON)(`${(0, _config.API_URL)}`, flight);
        state.flight = data;
        console.log(data);
        console.log(state.flight);
    } catch (err) {
        console.error(err);
    }
};
const makeChanges = function() {
    flightNumber.value = state.flight.flightNumber;
    origin.value = state.flight.origin;
    originFullName.value = state.flight.originFullName;
    destination.value = state.flight.destination;
    destinationFullName.value = state.flight.destinationFullName;
    title.value = state.flight.title;
    departure.value = state.flight.departureTime;
    arrival.value = state.flight.arrivalTime;
    status.value = state.flight.status;
    console.log(title.value);
    console.log(state.flight.title);
    console.log(arrival.value);
    console.log(departure.value);
    console.log(status.value);
}; // await fetch(`${API_URL}?_start=10&_limit=10&q=${query}`);

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./helpers.js":"hGI1E"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
parcelHelpers.export(exports, "sendJSON", ()=>sendJSON);
parcelHelpers.export(exports, "editJSON", ()=>editJSON);
const getJSON = async function(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} ${res.status}`);
        return data;
    } catch (err) {
        throw err;
    }
};
const sendJSON = async function(url, uploadData) {
    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        });
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} ${res.status}`);
        console.log(res);
        return data;
    } catch (err) {
        throw err;
    }
};
const editJSON = async function(url, uploadData) {
    try {
        const res = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(uploadData)
        });
        if (!res.ok) return;
        const data = res.json();
        console.log(res, data);
        return data;
    } catch (err) {
        console.error(err);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9bVj3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class FlightView extends (0, _viewJsDefault.default) {
    _parentEl = document.querySelector(".container-2");
    _data;
    FormatArrival(data) {
        this._data = data;
        const date = new Date(this._data.arrivalTime);
        const formattedDate = new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        }).format(date);
        return formattedDate;
    }
    FormatData(data) {
        this._data = data;
        const date = new Date(this._data.departureTime);
        const formattedDate = new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        }).format(date);
        return formattedDate;
    }
    _generateMarkup() {
        const departure = this.FormatData(this._data);
        const arrival = this.FormatArrival(this._data);
        return `
    <div class="flight-div">
          <img
            src="https://i.imgur.com/5DmMjV9.jpeg"
            alt="airplane"
            class="flight-image"
          />
        </div>

        <div class="second-div">
          <h2 class="paragraph">
            ${this._data.title} <span class="coleur">${this._data.flightNumber}</span>
          </h2>

          <div class="grid-container">
            <div>
              <h2>Origin</h2>
              <p class="lower">From</p>
              <p>${this._data.originFullName}(${this._data.origin})</p>
            </div>
            <div class="departure">
              <p class="lower">Departure Time</p>
              <p class="bolder">${departure}</p>
            </div>
            <div class="destination">
              <h2>Destination</h2>
              <p class="lower">To</p>
              <p>${this._data.destinationFullName}(${this._data.destination})</p>
            </div>
            <div class="arrival">
              <p class="lower">Arrival Time</p>
              <p class="bolder">${arrival}</p>
            </div>
            <div class="flight-status">
              <h2>Flight</h2>
              <p class="lower">Status</p>
              <p>${this._data.status}</p>
            </div>
          </div>
          <div class="buttons">
                  <button class="edit">
                    Edit&nbsp;&nbsp;<i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button class="delete">
                      Delete&nbsp;&nbsp;<i class="fa-solid fa-trash-can"></i>
                      </button>
                      </div>
        </div>
        `;
    }
    addHandlerRender(handler) {
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
}
exports.default = new FlightView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cUXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    render(data) {
        if (data.length === 0) return this.renderError();
        this._data = data;
        console.log(this._data);
        const markup = this._generateMarkup();
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    renderMessage(message = this.message) {
        const markup = `
    <div class="message">
      <p>${message}</p>
    </div>
    `;
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    _clear() {
        this._parentEl.innerHTML = "";
    }
    renderError() {
        const markup = `
  <div class="error">
              <p>No flight founded for your query!<br />Please try again!</p>
            </div>
    `;
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    renderSpinner() {
        const markup = `<div class="spinner">
      <i class="fa-solid fa-spinner"></i>
      </div>`;
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8JjiB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class ResultsView extends (0, _viewJsDefault.default) {
    _data;
    _parentEl = document.querySelector(".search-results");
    _FormatData(data) {
        const date = new Date(data.departureTime);
        const formattedDate = new Intl.DateTimeFormat("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        }).format(date);
        return formattedDate;
    }
    _generateMarkup() {
        const id = +window.location.hash.slice(1);
        console.log(id);
        return this._data.map((el)=>{
            console.log(el.id);
            const formattedDeparture = this._FormatData(el); // Format the departure time for each element
            return `
            <li class="list-item ">
                <a class="list-link"
                  href="#${el.id}">
                    <div class="list-div">
                        <img
                            src="https://i.imgur.com/5DmMjV9.jpeg"
                            alt="airplane"
                            class="image"
                        />
                        <div>
                            <p class="departure">${formattedDeparture}</p> 
                            <p class="flight">${el.flightNumber}</p>
                        </div>
                        <div>
                            <h2 class="title">${el.title}</h2>
                            <p class="status">Status: ${el.status}</p>
                        </div>
                    </div>
                </a>
            </li>`;
        }).join("");
    }
}
exports.default = new ResultsView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class SearchView extends (0, _viewDefault.default) {
    _parentEl = document.querySelector(".search");
    getQuery() {
        const query = this._parentEl.querySelector(".search__field").value;
        this._clearInput();
        return query;
    }
    _clearInput() {
        this._parentEl.querySelector(".search__field").value = "";
    }
    addHandlerSearch(handler) {
        this._parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"BUVwN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class addFlightView extends (0, _viewDefault.default) {
    _parentEl = document.querySelector(".hidden-form");
    _window = document.querySelector(".new-flight");
    _overlay = document.querySelector(".form-information");
    _btnOpen = document.querySelector(".add-btn");
    _btnClose = document.querySelector(".pos");
    message = `Flight successfully uploaded !`;
    constructor(){
        super();
        this._addHandlerShowWindow();
        this._addHandlerCloseWindow();
    }
    toggleWindow() {
        this._overlay.classList.toggle("hidden");
        this._window.classList.toggle("hidden");
    }
    _addHandlerShowWindow() {
        this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
    }
    _addHandlerCloseWindow() {
        this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
        this._overlay.addEventListener("click", this.toggleWindow.bind(this));
    }
    //   addHandlerRemoveWindow() {
    //     this._overlay.classList.add(".hidden");
    //     this._window.classList.add(".hidden");
    //   }
    addHandlerUpload(handler) {
        this._parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            console.log(data);
            handler(data);
        });
    }
}
exports.default = new addFlightView();

},{"./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class PaginationView extends (0, _viewDefault.default) {
    _parentEl = document.querySelector(".pagination");
    addHandlerClick(handler) {
        this._parentEl.addEventListener("click", function(e) {
            const btn = e.target.closest(".pagination-btn");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
            console.log(goToPage);
        });
    }
    _generateMarkup() {
        const currentPage = this._data.page; // Current page
        const totalResults = this._data.totalResults; // Total results from state
        console.log(totalResults);
        const numPages = Math.ceil(totalResults / this._data.resultsPerPage); // Total pages
        console.log(numPages);
        if (currentPage === 1 && numPages > 1) // Page 1, and other pages exist
        return `
        <button data-goto="${currentPage + 1}" class="pagination-btn btn_next">
          <span>Page ${currentPage + 1} <i class="fa-solid fa-arrow-right"></i></span>
        </button>
      `;
        if (currentPage === numPages && numPages > 1) // Last page
        return `
        <button data-goto="${currentPage - 1}" class="pagination-btn btn_prev">
          <span><i class="fa-solid fa-arrow-left"></i> Page ${currentPage - 1}</span>
        </button>
      `;
        if (currentPage < numPages) // Other pages
        return `
        <button data-goto="${currentPage - 1}" class="pagination-btn btn_prev">
          <span><i class="fa-solid fa-arrow-left"></i> Page ${currentPage - 1}</span>
        </button>
        <button data-goto="${currentPage + 1}" class="pagination-btn btn_next">
          <span>Page ${currentPage + 1} <i class="fa-solid fa-arrow-right"></i></span>
        </button>
      `;
        // If only one page
        return "";
    }
}
exports.default = new PaginationView(); // class PaginationView extends View {
 //   _parentEl = document.querySelector(".pagination");
 //   _generateMarkup() {
 //     // Page 1 and there are other pages
 //     // Page 1 , and there are NO other pages
 //     // Last page
 //     // Other page
 //   }
 // }
 // export default new PaginationView();

},{"./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g5wUZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class editFlightView extends (0, _viewDefault.default) {
    _parentEl = document.querySelector(".hidden-form-edit");
    _parentEl2 = document.querySelector(".container-2");
    _window = document.querySelector(".new-flight-edit");
    _overlay = document.querySelector(".form-information-edit");
    _btnOpen = document.querySelector(".edit");
    _btnClose = document.querySelector(".pos-edit");
    constructor(){
        super();
        // this.addHandlerClick();
        this.addHandlerRemove();
    }
    toggleWindow() {
        this._overlay.classList.toggle("hidden");
        this._window.classList.toggle("hidden");
    }
    addHandlerEditButton(handler) {
        this._parentEl2.addEventListener("click", (e)=>{
            const clicked = e.target.closest(".edit");
            if (!clicked) return;
            handler();
        });
    }
    addHandlerRemove() {
        this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
        this._overlay.addEventListener("click", this.toggleWindow.bind(this));
    }
    addHandlerUpload(handler) {
        this._parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            console.log(data);
            handler(data);
        });
    }
}
exports.default = new editFlightView();

},{"./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fA0o9","aenu9"], "aenu9", "parcelRequire0ab2")

//# sourceMappingURL=index.e37f48ea.js.map
