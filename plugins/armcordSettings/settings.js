const {plugin: { store }} = shelter
export function refreshSettings() {
    store.settings = window.armcord.settings.config
    console.log(store.settings)
}
export function set(key, value) {
    store.settings[key] = value;
    console.log(store.settings[key])
    armcord.settings.setConfig(key, value)
}