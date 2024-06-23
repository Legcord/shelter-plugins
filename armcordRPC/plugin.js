(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // plugins/armcordRPC/index.js
  var armcordRPC_exports = {};
  __export(armcordRPC_exports, {
    onLoad: () => onLoad
  });
  var {
    util: { log },
    flux: {
      dispatcher: FluxDispatcher,
      stores: { ApplicationStore, DetectableGameSupplementalStore }
    }
  } = shelter;
  var apps = {};
  function onLoad() {
    ArmCordRPC.listen(async (msg) => {
      log("ArmCord RPC: detected some game");
      if (msg.activity) {
        const appId = msg.activity.application_id;
        if (!apps[appId])
          apps[appId] = await ApplicationStore.getApplication(appId) || "Unknown";
        const app = apps[appId];
        if (!msg.activity.name)
          msg.activity.name = app.name;
      }
      FluxDispatcher.dispatch({ type: "LOCAL_ACTIVITY_UPDATE", ...msg });
    });
  }
  return __toCommonJS(armcordRPC_exports);
})();
