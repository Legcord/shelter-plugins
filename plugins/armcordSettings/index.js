import { LegacyPage } from "./pages/LegacyPage";
import { SettingsPage } from "./pages/SettingsPage";
import { ThemesPage } from "./pages/ThemesPage";
import { UpdaterPage } from "./pages/UpdaterPage";
import { refreshSettings } from "./settings";
const {
  plugin: {store},
  settings: {registerSection},
  util: { log },
} = shelter;

let settingsPages = [
  registerSection('divider'),
  registerSection('header', "ArmCord"),
  registerSection('section', "armcord-legacy", "Legacy", LegacyPage),
  registerSection('section', "armcord-settings", "Settings", SettingsPage),
  registerSection('section', "armcord-themes", "Themes", ThemesPage),
  registerSection('section', "armcord-updater", "Updater", UpdaterPage),
]

export function onLoad() {
  refreshSettings()
  log("ArmCord Settings")
  settingsPages
}
export function onUnload() {
  settingsPages.forEach((e) => e())
}
