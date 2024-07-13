const {plugin: { store }} = shelter
export function refreshSettings() {
    store.settings = window.armcord.settings.config
    console.log(store.settings)
}
export function set(key, value) {
    armcord.settings.setConfig(key, value)
    refreshSettings()
}