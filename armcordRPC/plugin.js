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
    fetchAssetId: () => fetchAssetId,
    onLoad: () => onLoad
  });
  var {
    util: { log },
    flux: {
      dispatcher: FluxDispatcher,
      stores: { ApplicationStore }
    },
    http
  } = shelter;
  var apps = {};
  var assetCache = {};
  var fetchAssetId = async (applicationId, assetName) => {
    if (!assetCache[applicationId]) {
      try {
        const response = await http.get(`/oauth2/applications/${applicationId}/assets`);
        if (response.status !== 200) {
          console.error("Error fetching resources");
          return null;
        }
        assetCache[applicationId] = response.body;
      } catch (error) {
        console.error("Request failed", error);
        return null;
      }
    }
    const resource = assetCache[applicationId].find((item) => item.name === assetName);
    return resource ? resource.id : null;
  };
  function onLoad() {
    ArmCordRPC.listen(async (msg) => {
      console.log(msg);
      log("ArmCord RPC: detected some game");
      if (msg.activity?.assets?.large_image)
        msg.activity.assets.large_image = await fetchAssetId(
          msg.activity.application_id,
          msg.activity.assets.large_image
        );
      if (msg.activity?.assets?.small_image)
        msg.activity.assets.small_image = await fetchAssetId(
          msg.activity.application_id,
          msg.activity.assets.small_image
        );
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
