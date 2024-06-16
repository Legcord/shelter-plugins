const {
  util: { log },
	flux: { stores: {UserStore, MediaEngineStore}, dispatcher, intercept },
  plugin: { store }
} = shelter;
store.fps ??= 30; // set default
store.resolution ??= 720; // set default
let unintercept;
function onStreamQualityChange() {
  const mediaConnections = [...MediaEngineStore.getMediaEngine().connections];
  const currentUserId = UserStore.getCurrentUser().id;
  const streamConnection = mediaConnections.find(connection => connection.streamUserId === currentUserId);
		if (streamConnection) {
			streamConnection.videoStreamParameters[0].maxFrameRate = store.fps;
			streamConnection.videoStreamParameters[0].maxResolution.height = store.resolution;
			streamConnection.videoStreamParameters[0].maxResolution.width = Math.round(store.resolution * (16 / 9));
      log(`Patched current user stream with resolution: ${store.resolution} and fps: ${store.fps}`);
		}
}
export function onLoad() {
  dispatcher.subscribe("MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED", onStreamQualityChange)
  
  // NOTE - Not sure all of the patches below are necessary
  unintercept = intercept((dispatch) => {
    if (dispatch.type == "MEDIA_ENGINE_SET_GO_LIVE_SOURCE") {
      if (dispatch.settings.qualityOptions)
        dispatch.settings.qualityOptions = {
          preset: 2,
          resolution: store.resolution,
          frameRate: store.fps,
        };
    } else if (dispatch.type == "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED") {
      dispatch.maxResolution = {
        type: "fixed",
        width: Math.round(store.resolution * (16 / 9)),
        height: store.resolution,
      };
      dispatch.maxFrameRate = 60;
    } else {
      return;
    }
  });
	
	
}

export function onUnload() {
  dispatcher.unsubscribe("MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED", onStreamQualityChange)
  unintercept()
}
export { default as settings } from "./settings";