const {
    util: { log },
      flux: {
        dispatcher: FluxDispatcher,
        stores: { ApplicationStore, DetectableGameSupplementalStore },
      },
  } = shelter;
let apps = {};

export function onLoad() {
    ArmCordRPC.listen(async (msg) => {
        log("ArmCord RPC: detected some game")
        // if (msg.activity?.assets?.large_image)
        //     msg.activity.assets.large_image = await DetectableGameSupplementalStore.getCoverImageUrl(
        //         msg.activity.application_id,
        //         msg.activity.assets.large_image
        //     );
        // if (msg.activity?.assets?.small_image)
        //     msg.activity.assets.small_image = await DetectableGameSupplementalStore.getCoverImageUrl(
        //         msg.activity.application_id,
        //         msg.activity.assets.small_image
        //     );

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