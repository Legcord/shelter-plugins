
import { set } from "../settings";
const {
    plugin: { store },
    ui: { SwitchItem, Header, Divider, HeaderTags },
  } = shelter;
  
  
export function SettingsPage() {
    return(
        <>
      <Header tag={HeaderTags.H1}>Settings</Header>
      <Divider mt mb/>
      <Header tag={HeaderTags.H5}>Mods</Header>
      <SwitchItem note={store.i18n["settings-csp-desc"]} value={store.settings.armcordCSP} onChange={(e) => set("armcordCSP", e)}>ArmCord CSP</SwitchItem>
      <SwitchItem note={store.i18n["settings-mod-vencord"]} value={store.settings.autoScroll}>Vencord</SwitchItem>
      <SwitchItem note={store.i18n["settings-invitewebsocket-desc"]} value={store.settings.inviteWebsocket} onChange={(e) => set("inviteWebsocket", e)}>Rich Presence</SwitchItem>
      <Header tag={HeaderTags.H5}>Look and feel</Header>
      <SwitchItem note={store.i18n["settings-skipSplash-desc"]} value={store.settings.skipSplash} onChange={(e) => set("skipSplash", e)}>Skip splash screen</SwitchItem>
      <SwitchItem note={store.i18n["settings-dynamicIcon-desc"]} value={store.settings.dynamicIcon} onChange={(e) => set("dynamicIcon", e)}>Dynamic icon</SwitchItem> 
      <SwitchItem note={store.i18n["settings-mobileMode-desc"]} value={store.settings.mobileMode} onChange={(e) => set("mobileMode", e)}>Mobile Mode</SwitchItem>
      <Header tag={HeaderTags.H5}>Behaviour</Header>
      <SwitchItem note={store.i18n["settings-MultiInstance-desc"]} value={store.settings.multiInstance} onChange={(e) => set("multiInstance", e)}>Multi Instance</SwitchItem>
      <SwitchItem note={store.i18n["settings-mintoTray-desc"]} value={store.settings.minimizeToTray} onChange={(e) => set("minimizeToTray", e)}>Work in background</SwitchItem>
      <SwitchItem note={store.i18n["settings-tray-desc"]} value={store.settings.tray} onChange={(e) => set("tray", e)}>Tray</SwitchItem>
      <SwitchItem note={store.i18n["settings-startMinimized-desc"]} value={store.settings.startMinimized} onChange={(e) => set("startMinimized", e)}>Start minimized</SwitchItem>
      <SwitchItem note={store.i18n["settings-smoothScroll-desc"]} value={store.settings.smoothScroll} onChange={(e) => set("smoothScroll", e)}>Smooth scrolling</SwitchItem>
      <SwitchItem note={store.i18n["settings-autoScroll-desc"]} value={store.settings.autoScroll} onChange={(e) => set("autoScroll", e)}>Allow auto-scroll</SwitchItem>
      <SwitchItem note={store.i18n["settings-spellcheck-desc"]} value={store.settings.spellcheck} onChange={(e) => set("spellcheck", e)}>Spellcheck</SwitchItem>
      <Header tag={HeaderTags.H5}>Legacy features</Header>
      <SwitchItem note={store.i18n["settings-useLegacyCapturer-desc"]} value={store.settings.useLegacyCapturer} onChange={(e) => set("useLegacyCapturer", e)}>Use legacy capturer</SwitchItem>
    </>
    )}
