const {
    util: { log },
      flux: {
        dispatcher: FluxDispatcher,
        stores: { ApplicationStore },
      },
      http
  } = shelter;
let apps = {};
let assetCache = {}

export const fetchAssetId = async (applicationId, assetName) => {
  // TO-DO Use APPLICATION_ASSETS_UPDATE and APPLICATION_ASSETS_FETCH
  if (!assetCache[applicationId]) {
    try {
      const response = await http.get(`/oauth2/applications/${applicationId}/assets`)

      if (response.status !== 200) {
        console.error('Error fetching resources')
        return null
      }

      assetCache[applicationId] = response.body
    } catch (error) {
      console.error('Request failed', error)
      return null
    }
  }

  // Find the resource ID by its name in the cached resources
  const resource = assetCache[applicationId].find((item) => item.name === assetName)
  return resource ? resource.id : null
}

export function onLoad() {
    ArmCordRPC.listen(async (msg) => {
      console.log(msg)
        log("ArmCord RPC: detected some game")
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
            // TODO - Support games from DB too lool
            const appId = msg.activity.application_id;
            if (!apps[appId]) apps[appId] = await ApplicationStore.getApplication(appId) || "Unknown";

            const app = apps[appId];
            if (!msg.activity.name) msg.activity.name = app.name;
        }

        FluxDispatcher.dispatch({type: "LOCAL_ACTIVITY_UPDATE", ...msg}); // set RPC status
    });

}