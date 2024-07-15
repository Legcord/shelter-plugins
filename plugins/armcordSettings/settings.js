const {plugin: { store }} = shelter
export function refreshSettings() {
    store.settings = window.armcord.settings.config
    console.log(store.settings)
}
export function set(key, value) {
    if (key == "vencord" && value == true) {
        store.vencord = true;
        armcord.settings.setConfig("mods", "vencord")
    } else {
        store.vencord = false;
        armcord.settings.setConfig("mods", "none")
    }
    store.settings[key] = value;
    console.log(key + ": " + store.settings[key])
    armcord.settings.setConfig(key, value)
}