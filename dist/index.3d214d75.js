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
})({"km5uZ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
declare var HMR_USE_SSE: boolean;
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mustache = require("mustache");
var _mustacheDefault = parcelHelpers.interopDefault(_mustache);
var _positionsJs = require("./JS/positions.js");
var _positionsJsDefault = parcelHelpers.interopDefault(_positionsJs);
let map;
let infoWindow;
let service;
// Fonction pour charger le template Mustache depuis le fichier dans le dossier templates
async function loadTemplate() {
    const response = await fetch("./templates/addressInfo.mustache"); // Corriger le chemin vers le template
    return response.text(); // Charger le contenu du fichier Mustache en texte
}
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { PlacesService } = await google.maps.importLibrary("places");
    // Centrer la carte sur Paris
    const centerPosition = {
        lat: 48.8566,
        lng: 2.3522
    };
    map = new Map(document.getElementById("map"), {
        zoom: 12,
        center: centerPosition,
        mapId: "DEMO_MAP_ID"
    });
    // Initialiser les services Places et InfoWindow
    service = new PlacesService(map);
    infoWindow = new google.maps.InfoWindow();
    // Charger le template Mustache
    const template = await loadTemplate(); // Charger le template et stocker dans la variable 'template'
    // Ajouter un marqueur pour chaque position
    (0, _positionsJsDefault.default).forEach((position, index)=>{
        const marker = new google.maps.Marker({
            map: map,
            position: position
        });
        marker.addListener("click", ()=>{
            map.setCenter(position);
            map.setZoom(20);
        });
        marker.addListener("mouseover", ()=>{
            getPlaceDetails(position, marker, template); // Passer le template à la fonction
        });
        marker.addListener("mouseout", ()=>{
            infoWindow.close();
        });
    });
}
// Fonction pour obtenir les détails du lieu avec l'API Places
async function getPlaceDetails(position, marker, template) {
    const request = {
        location: position,
        radius: "50"
    };
    service.nearbySearch(request, (results, status)=>{
        if (status === google.maps.places.PlacesServiceStatus.OK && results[0]) {
            const placeId = results[0].place_id;
            service.getDetails({
                placeId: placeId
            }, (place, status)=>{
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    // Vérifie les données récupérées depuis l'API
                    console.log("Donn\xe9es du lieu : ", place);
                    const placeData = {
                        name: place.name,
                        type: place.types ? place.types[0] : "Type inconnu",
                        address: place.formatted_address,
                        city: place.address_components.find((c)=>c.types.includes("locality"))?.long_name || "Ville inconnue",
                        postalCode: place.address_components.find((c)=>c.types.includes("postal_code"))?.long_name || "Code postal inconnu",
                        photo: place.photos ? place.photos[0].getUrl({
                            maxWidth: 200,
                            maxHeight: 200
                        }) : null
                    };
                    // Vérifie les données injectées dans le template Mustache
                    console.log("Donn\xe9es inject\xe9es dans le template : ", placeData);
                    // Rendre le template avec Mustache
                    const rendered = (0, _mustacheDefault.default).render(template, placeData);
                    // Afficher dans InfoWindow
                    infoWindow.setContent(rendered);
                    infoWindow.open(map, marker);
                } else console.error("Erreur lors de l'obtention des d\xe9tails du lieu.");
            });
        } else console.error("Aucun r\xe9sultat trouv\xe9 pour ce lieu.");
    });
}
initMap();

},{"mustache":"izE6r","./JS/positions.js":"et3eW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"izE6r":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    /*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */ var objectToString = Object.prototype.toString;
    var isArray = Array.isArray || function isArrayPolyfill(object) {
        return objectToString.call(object) === "[object Array]";
    };
    function isFunction(object) {
        return typeof object === "function";
    }
    /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */ function typeStr(obj) {
        return isArray(obj) ? "array" : typeof obj;
    }
    function escapeRegExp(string) {
        return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    }
    /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */ function hasProperty(obj, propName) {
        return obj != null && typeof obj === "object" && propName in obj;
    }
    /**
   * Safe way of detecting whether or not the given thing is a primitive and
   * whether it has the given property
   */ function primitiveHasOwnProperty(primitive, propName) {
        return primitive != null && typeof primitive !== "object" && primitive.hasOwnProperty && primitive.hasOwnProperty(propName);
    }
    // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
    // See https://github.com/janl/mustache.js/issues/189
    var regExpTest = RegExp.prototype.test;
    function testRegExp(re, string) {
        return regExpTest.call(re, string);
    }
    var nonSpaceRe = /\S/;
    function isWhitespace(string) {
        return !testRegExp(nonSpaceRe, string);
    }
    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
    };
    function escapeHtml(string) {
        return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
            return entityMap[s];
        });
    }
    var whiteRe = /\s*/;
    var spaceRe = /\s+/;
    var equalsRe = /\s*=/;
    var curlyRe = /\s*\}/;
    var tagRe = /#|\^|\/|>|\{|&|=|!/;
    /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   *
   * Tokens for partials also contain two more elements: 1) a string value of
   * indendation prior to that tag and 2) the index of that tag on that line -
   * eg a value of 2 indicates the partial is the third tag on this line.
   */ function parseTemplate(template, tags) {
        if (!template) return [];
        var lineHasNonSpace = false;
        var sections = []; // Stack to hold section tokens
        var tokens = []; // Buffer to hold the tokens
        var spaces = []; // Indices of whitespace tokens on the current line
        var hasTag = false; // Is there a {{tag}} on the current line?
        var nonSpace = false; // Is there a non-space char on the current line?
        var indentation = ""; // Tracks indentation for tags that use it
        var tagIndex = 0; // Stores a count of number of tags encountered on a line
        // Strips all whitespace tokens array for the current line
        // if there was a {{#tag}} on it and otherwise only space.
        function stripSpace() {
            if (hasTag && !nonSpace) while(spaces.length)delete tokens[spaces.pop()];
            else spaces = [];
            hasTag = false;
            nonSpace = false;
        }
        var openingTagRe, closingTagRe, closingCurlyRe;
        function compileTags(tagsToCompile) {
            if (typeof tagsToCompile === "string") tagsToCompile = tagsToCompile.split(spaceRe, 2);
            if (!isArray(tagsToCompile) || tagsToCompile.length !== 2) throw new Error("Invalid tags: " + tagsToCompile);
            openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + "\\s*");
            closingTagRe = new RegExp("\\s*" + escapeRegExp(tagsToCompile[1]));
            closingCurlyRe = new RegExp("\\s*" + escapeRegExp("}" + tagsToCompile[1]));
        }
        compileTags(tags || mustache.tags);
        var scanner = new Scanner(template);
        var start, type, value, chr, token, openSection;
        while(!scanner.eos()){
            start = scanner.pos;
            // Match any text between tags.
            value = scanner.scanUntil(openingTagRe);
            if (value) for(var i = 0, valueLength = value.length; i < valueLength; ++i){
                chr = value.charAt(i);
                if (isWhitespace(chr)) {
                    spaces.push(tokens.length);
                    indentation += chr;
                } else {
                    nonSpace = true;
                    lineHasNonSpace = true;
                    indentation += " ";
                }
                tokens.push([
                    "text",
                    chr,
                    start,
                    start + 1
                ]);
                start += 1;
                // Check for whitespace on the current line.
                if (chr === "\n") {
                    stripSpace();
                    indentation = "";
                    tagIndex = 0;
                    lineHasNonSpace = false;
                }
            }
            // Match the opening tag.
            if (!scanner.scan(openingTagRe)) break;
            hasTag = true;
            // Get the tag type.
            type = scanner.scan(tagRe) || "name";
            scanner.scan(whiteRe);
            // Get the tag value.
            if (type === "=") {
                value = scanner.scanUntil(equalsRe);
                scanner.scan(equalsRe);
                scanner.scanUntil(closingTagRe);
            } else if (type === "{") {
                value = scanner.scanUntil(closingCurlyRe);
                scanner.scan(curlyRe);
                scanner.scanUntil(closingTagRe);
                type = "&";
            } else value = scanner.scanUntil(closingTagRe);
            // Match the closing tag.
            if (!scanner.scan(closingTagRe)) throw new Error("Unclosed tag at " + scanner.pos);
            if (type == ">") token = [
                type,
                value,
                start,
                scanner.pos,
                indentation,
                tagIndex,
                lineHasNonSpace
            ];
            else token = [
                type,
                value,
                start,
                scanner.pos
            ];
            tagIndex++;
            tokens.push(token);
            if (type === "#" || type === "^") sections.push(token);
            else if (type === "/") {
                // Check section nesting.
                openSection = sections.pop();
                if (!openSection) throw new Error('Unopened section "' + value + '" at ' + start);
                if (openSection[1] !== value) throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
            } else if (type === "name" || type === "{" || type === "&") nonSpace = true;
            else if (type === "=") // Set the tags for the next time around.
            compileTags(value);
        }
        stripSpace();
        // Make sure there are no open sections when we're done.
        openSection = sections.pop();
        if (openSection) throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
        return nestTokens(squashTokens(tokens));
    }
    /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */ function squashTokens(tokens) {
        var squashedTokens = [];
        var token, lastToken;
        for(var i = 0, numTokens = tokens.length; i < numTokens; ++i){
            token = tokens[i];
            if (token) {
                if (token[0] === "text" && lastToken && lastToken[0] === "text") {
                    lastToken[1] += token[1];
                    lastToken[3] = token[3];
                } else {
                    squashedTokens.push(token);
                    lastToken = token;
                }
            }
        }
        return squashedTokens;
    }
    /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */ function nestTokens(tokens) {
        var nestedTokens = [];
        var collector = nestedTokens;
        var sections = [];
        var token, section;
        for(var i = 0, numTokens = tokens.length; i < numTokens; ++i){
            token = tokens[i];
            switch(token[0]){
                case "#":
                case "^":
                    collector.push(token);
                    sections.push(token);
                    collector = token[4] = [];
                    break;
                case "/":
                    section = sections.pop();
                    section[5] = token[2];
                    collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
                    break;
                default:
                    collector.push(token);
            }
        }
        return nestedTokens;
    }
    /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */ function Scanner(string) {
        this.string = string;
        this.tail = string;
        this.pos = 0;
    }
    /**
   * Returns `true` if the tail is empty (end of string).
   */ Scanner.prototype.eos = function eos() {
        return this.tail === "";
    };
    /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */ Scanner.prototype.scan = function scan(re) {
        var match = this.tail.match(re);
        if (!match || match.index !== 0) return "";
        var string = match[0];
        this.tail = this.tail.substring(string.length);
        this.pos += string.length;
        return string;
    };
    /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */ Scanner.prototype.scanUntil = function scanUntil(re) {
        var index = this.tail.search(re), match;
        switch(index){
            case -1:
                match = this.tail;
                this.tail = "";
                break;
            case 0:
                match = "";
                break;
            default:
                match = this.tail.substring(0, index);
                this.tail = this.tail.substring(index);
        }
        this.pos += match.length;
        return match;
    };
    /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */ function Context(view, parentContext) {
        this.view = view;
        this.cache = {
            ".": this.view
        };
        this.parent = parentContext;
    }
    /**
   * Creates a new context using the given view with this context
   * as the parent.
   */ Context.prototype.push = function push(view) {
        return new Context(view, this);
    };
    /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */ Context.prototype.lookup = function lookup(name) {
        var cache1 = this.cache;
        var value;
        if (cache1.hasOwnProperty(name)) value = cache1[name];
        else {
            var context = this, intermediateValue, names, index, lookupHit = false;
            while(context){
                if (name.indexOf(".") > 0) {
                    intermediateValue = context.view;
                    names = name.split(".");
                    index = 0;
                    /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           *
           * In the case where dot notation is used, we consider the lookup
           * to be successful even if the last "object" in the path is
           * not actually an object but a primitive (e.g., a string, or an
           * integer), because it is sometimes useful to access a property
           * of an autoboxed primitive, such as the length of a string.
           **/ while(intermediateValue != null && index < names.length){
                        if (index === names.length - 1) lookupHit = hasProperty(intermediateValue, names[index]) || primitiveHasOwnProperty(intermediateValue, names[index]);
                        intermediateValue = intermediateValue[names[index++]];
                    }
                } else {
                    intermediateValue = context.view[name];
                    /**
           * Only checking against `hasProperty`, which always returns `false` if
           * `context.view` is not an object. Deliberately omitting the check
           * against `primitiveHasOwnProperty` if dot notation is not used.
           *
           * Consider this example:
           * ```
           * Mustache.render("The length of a football field is {{#length}}{{length}}{{/length}}.", {length: "100 yards"})
           * ```
           *
           * If we were to check also against `primitiveHasOwnProperty`, as we do
           * in the dot notation case, then render call would return:
           *
           * "The length of a football field is 9."
           *
           * rather than the expected:
           *
           * "The length of a football field is 100 yards."
           **/ lookupHit = hasProperty(context.view, name);
                }
                if (lookupHit) {
                    value = intermediateValue;
                    break;
                }
                context = context.parent;
            }
            cache1[name] = value;
        }
        if (isFunction(value)) value = value.call(this.view);
        return value;
    };
    /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */ function Writer() {
        this.templateCache = {
            _cache: {},
            set: function set(key, value) {
                this._cache[key] = value;
            },
            get: function get(key) {
                return this._cache[key];
            },
            clear: function clear() {
                this._cache = {};
            }
        };
    }
    /**
   * Clears all cached templates in this writer.
   */ Writer.prototype.clearCache = function clearCache() {
        if (typeof this.templateCache !== "undefined") this.templateCache.clear();
    };
    /**
   * Parses and caches the given `template` according to the given `tags` or
   * `mustache.tags` if `tags` is omitted,  and returns the array of tokens
   * that is generated from the parse.
   */ Writer.prototype.parse = function parse(template, tags) {
        var cache1 = this.templateCache;
        var cacheKey = template + ":" + (tags || mustache.tags).join(":");
        var isCacheEnabled = typeof cache1 !== "undefined";
        var tokens = isCacheEnabled ? cache1.get(cacheKey) : undefined;
        if (tokens == undefined) {
            tokens = parseTemplate(template, tags);
            isCacheEnabled && cache1.set(cacheKey, tokens);
        }
        return tokens;
    };
    /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   *
   * If the optional `config` argument is given here, then it should be an
   * object with a `tags` attribute or an `escape` attribute or both.
   * If an array is passed, then it will be interpreted the same way as
   * a `tags` attribute on a `config` object.
   *
   * The `tags` attribute of a `config` object must be an array with two
   * string values: the opening and closing tags used in the template (e.g.
   * [ "<%", "%>" ]). The default is to mustache.tags.
   *
   * The `escape` attribute of a `config` object must be a function which
   * accepts a string as input and outputs a safely escaped string.
   * If an `escape` function is not provided, then an HTML-safe string
   * escaping function is used as the default.
   */ Writer.prototype.render = function render(template, view, partials, config) {
        var tags = this.getConfigTags(config);
        var tokens = this.parse(template, tags);
        var context = view instanceof Context ? view : new Context(view, undefined);
        return this.renderTokens(tokens, context, partials, template, config);
    };
    /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */ Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate, config) {
        var buffer = "";
        var token, symbol, value;
        for(var i = 0, numTokens = tokens.length; i < numTokens; ++i){
            value = undefined;
            token = tokens[i];
            symbol = token[0];
            if (symbol === "#") value = this.renderSection(token, context, partials, originalTemplate, config);
            else if (symbol === "^") value = this.renderInverted(token, context, partials, originalTemplate, config);
            else if (symbol === ">") value = this.renderPartial(token, context, partials, config);
            else if (symbol === "&") value = this.unescapedValue(token, context);
            else if (symbol === "name") value = this.escapedValue(token, context, config);
            else if (symbol === "text") value = this.rawValue(token);
            if (value !== undefined) buffer += value;
        }
        return buffer;
    };
    Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate, config) {
        var self = this;
        var buffer = "";
        var value = context.lookup(token[1]);
        // This function is used to render an arbitrary template
        // in the current context by higher-order sections.
        function subRender(template) {
            return self.render(template, context, partials, config);
        }
        if (!value) return;
        if (isArray(value)) for(var j = 0, valueLength = value.length; j < valueLength; ++j)buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);
        else if (typeof value === "object" || typeof value === "string" || typeof value === "number") buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);
        else if (isFunction(value)) {
            if (typeof originalTemplate !== "string") throw new Error("Cannot use higher-order sections without the original template");
            // Extract the portion of the original template that the section contains.
            value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
            if (value != null) buffer += value;
        } else buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);
        return buffer;
    };
    Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate, config) {
        var value = context.lookup(token[1]);
        // Use JavaScript's definition of falsy. Include empty arrays.
        // See https://github.com/janl/mustache.js/issues/186
        if (!value || isArray(value) && value.length === 0) return this.renderTokens(token[4], context, partials, originalTemplate, config);
    };
    Writer.prototype.indentPartial = function indentPartial(partial, indentation, lineHasNonSpace) {
        var filteredIndentation = indentation.replace(/[^ \t]/g, "");
        var partialByNl = partial.split("\n");
        for(var i = 0; i < partialByNl.length; i++)if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) partialByNl[i] = filteredIndentation + partialByNl[i];
        return partialByNl.join("\n");
    };
    Writer.prototype.renderPartial = function renderPartial(token, context, partials, config) {
        if (!partials) return;
        var tags = this.getConfigTags(config);
        var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
        if (value != null) {
            var lineHasNonSpace = token[6];
            var tagIndex = token[5];
            var indentation = token[4];
            var indentedValue = value;
            if (tagIndex == 0 && indentation) indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
            var tokens = this.parse(indentedValue, tags);
            return this.renderTokens(tokens, context, partials, indentedValue, config);
        }
    };
    Writer.prototype.unescapedValue = function unescapedValue(token, context) {
        var value = context.lookup(token[1]);
        if (value != null) return value;
    };
    Writer.prototype.escapedValue = function escapedValue(token, context, config) {
        var escape = this.getConfigEscape(config) || mustache.escape;
        var value = context.lookup(token[1]);
        if (value != null) return typeof value === "number" && escape === mustache.escape ? String(value) : escape(value);
    };
    Writer.prototype.rawValue = function rawValue(token) {
        return token[1];
    };
    Writer.prototype.getConfigTags = function getConfigTags(config) {
        if (isArray(config)) return config;
        else if (config && typeof config === "object") return config.tags;
        else return undefined;
    };
    Writer.prototype.getConfigEscape = function getConfigEscape(config) {
        if (config && typeof config === "object" && !isArray(config)) return config.escape;
        else return undefined;
    };
    var mustache = {
        name: "mustache.js",
        version: "4.2.0",
        tags: [
            "{{",
            "}}"
        ],
        clearCache: undefined,
        escape: undefined,
        parse: undefined,
        render: undefined,
        Scanner: undefined,
        Context: undefined,
        Writer: undefined,
        /**
     * Allows a user to override the default caching strategy, by providing an
     * object with set, get and clear methods. This can also be used to disable
     * the cache by setting it to the literal `undefined`.
     */ set templateCache (cache){
            defaultWriter.templateCache = cache;
        },
        /**
     * Gets the default or overridden caching object from the default writer.
     */ get templateCache () {
            return defaultWriter.templateCache;
        }
    };
    // All high-level mustache.* functions use this writer.
    var defaultWriter = new Writer();
    /**
   * Clears all cached templates in the default writer.
   */ mustache.clearCache = function clearCache() {
        return defaultWriter.clearCache();
    };
    /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */ mustache.parse = function parse(template, tags) {
        return defaultWriter.parse(template, tags);
    };
    /**
   * Renders the `template` with the given `view`, `partials`, and `config`
   * using the default writer.
   */ mustache.render = function render(template, view, partials, config) {
        if (typeof template !== "string") throw new TypeError('Invalid template! Template should be a "string" but "' + typeStr(template) + '" was given as the first ' + "argument for mustache#render(template, view, partials)");
        return defaultWriter.render(template, view, partials, config);
    };
    // Export the escaping function so that the user may override it.
    // See https://github.com/janl/mustache.js/issues/244
    mustache.escape = escapeHtml;
    // Export these mainly for testing, but also for advanced usage.
    mustache.Scanner = Scanner;
    mustache.Context = Context;
    mustache.Writer = Writer;
    return mustache;
});

},{}],"et3eW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const positions = [
    {
        lat: 48.8566,
        lng: 2.3522
    },
    {
        lat: 48.8606,
        lng: 2.3376
    },
    {
        lat: 48.8738,
        lng: 2.2950
    },
    {
        lat: 48.8584,
        lng: 2.2945
    },
    {
        lat: 48.8867,
        lng: 2.3431
    },
    {
        lat: 48.8630,
        lng: 2.3270
    },
    {
        lat: 48.8611,
        lng: 2.3358
    },
    {
        lat: 48.8501,
        lng: 2.3601
    },
    {
        lat: 48.8404,
        lng: 2.3393
    },
    {
        lat: 48.8430,
        lng: 2.3030
    }
];
exports.default = positions;

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
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}]},["km5uZ","bB7Pu"], "bB7Pu", "parcelRequired72c")

//# sourceMappingURL=index.3d214d75.js.map
