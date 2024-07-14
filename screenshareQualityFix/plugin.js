(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // shltr-res-ns:solid-js/web
  var require_web = __commonJS({
    "shltr-res-ns:solid-js/web"(exports, module) {
      module.exports = shelter.solidWeb;
    }
  });

  // plugins/screenshareQualityFix/index.js
  var screenshareQualityFix_exports = {};
  __export(screenshareQualityFix_exports, {
    onLoad: () => onLoad,
    onUnload: () => onUnload,
    settings: () => settings_default
  });

  // plugins/screenshareQualityFix/settings.jsx
  var import_web = __toESM(require_web(), 1);
  var import_web2 = __toESM(require_web(), 1);
  var {
    plugin: {
      store
    },
    ui: {
      TextBox,
      Header,
      HeaderTags
    }
  } = shelter;
  var settings_default = () => [(0, import_web2.createComponent)(Header, {
    get tag() {
      return HeaderTags.H1;
    },
    children: "Resolution"
  }), (0, import_web2.createComponent)(TextBox, {
    placeholder: "720/1080/1440",
    get value() {
      return Number.isSafeInteger(store.resolution) ? store.resolution : "";
    },
    onInput: (v) => {
      store.resolution = parseInt(v);
    }
  }), (0, import_web2.createComponent)(Header, {
    get tag() {
      return HeaderTags.H1;
    },
    children: "FPS"
  }), (0, import_web2.createComponent)(TextBox, {
    placeholder: "15/30/60",
    get value() {
      return Number.isSafeInteger(store.fps) ? store.fps : "";
    },
    onInput: (v) => {
      store.fps = parseInt(v);
    }
  })];

  // plugins/screenshareQualityFix/index.js
  var {
    util: { log },
    flux: { stores: { UserStore, MediaEngineStore }, dispatcher },
    plugin: { store: store2 }
  } = shelter;
  store2.fps ??= 30;
  store2.resolution ??= 720;
  function onStreamQualityChange() {
    const mediaConnections = [...MediaEngineStore.getMediaEngine().connections];
    const currentUserId = UserStore.getCurrentUser().id;
    const streamConnection = mediaConnections.find((connection) => connection.streamUserId === currentUserId);
    if (streamConnection) {
      streamConnection.videoStreamParameters[0].maxFrameRate = store2.fps;
      streamConnection.videoStreamParameters[0].maxResolution.height = store2.resolution;
      streamConnection.videoStreamParameters[0].maxResolution.width = Math.round(store2.resolution * (16 / 9));
      streamConnection.videoQualityManager.goliveMaxQuality.bitrateMin = 5e5;
      streamConnection.videoQualityManager.goliveMaxQuality.bitrateMax = 8e6;
      streamConnection.videoQualityManager.goliveMaxQuality.bitrateTarget = 6e5;
      log(`Patched current user stream with resolution: ${store2.resolution} and fps: ${store2.fps}`);
    }
  }
  function onLoad() {
    dispatcher.subscribe("MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED", onStreamQualityChange);
  }
  function onUnload() {
    dispatcher.unsubscribe("MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED", onStreamQualityChange);
  }
  return __toCommonJS(screenshareQualityFix_exports);
})();
