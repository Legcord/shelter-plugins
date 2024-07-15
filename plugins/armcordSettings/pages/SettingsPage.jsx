import {DropdownItem} from "../components/DropdownItem";
import classes from "./SettingsPage.css";
import {set} from "../settings";
const {
    plugin: {store},
    ui: {SwitchItem, Header, Divider, HeaderTags}
} = shelter;

export function SettingsPage() {
    return (
        <>
            <Header tag={HeaderTags.H1}>Settings</Header>
            <Divider mt mb />
            <Header class={classes.category} tag={HeaderTags.H5}>
                Mods
            </Header>
            <SwitchItem
                note={store.i18n["settings-csp-desc"]}
                value={store.settings.armcordCSP}
                onChange={(e) => set("armcordCSP", e)}
            >
                ArmCord CSP
            </SwitchItem>
            <SwitchItem note={store.i18n["settings-mod-vencord"]} value={store.vencord} onChange={(e) => set("vencord", e)}>
                Vencord
            </SwitchItem>
            <SwitchItem
                note={store.i18n["settings-invitewebsocket-desc"]}
                value={store.settings.inviteWebsocket}
                onChange={(e) => set("inviteWebsocket", e)}
            >
                Rich Presence
            </SwitchItem>
            <Header class={classes.category} tag={HeaderTags.H5}>
                Look and feel
            </Header>
            <DropdownItem
                value={store.settings.windowStyle}
                onChange={(e) => set("windowStyle", e.target.value)}
                title="Window style"
                note={store.i18n["settings-invitewebsocket-desc"]}
                link="https://github.com/ArmCord/ArmCord/wiki/Settings-%5Bwip%5D#armcord-theme"
            >
                <option value="default">Default (Custom)</option>
                <option value="native">Native</option>
                <option value="transparent">Transparent</option>
            </DropdownItem>
            <DropdownItem
                value={store.settings.trayIcon}
                onChange={(e) => set("trayIcon", e.target.value)}
                title="Tray icon"
                note={store.i18n["settings-trayIcon-desc"]}
            >
                    <option value="default">{store.i18n["settings-trayIcon-dynamic"]}</option>
                    <option value="dsc-tray">{store.i18n["settings-trayIcon-normal"]}</option>
                    <option value="clsc-dsc-tray">{store.i18n["settings-trayIcon-classic"]}</option>
                    <option value="ac_plug_colored">{store.i18n["settings-trayIcon-colored-plug"]}</option>
                    <option value="ac_white_plug">{store.i18n["settings-trayIcon-white-plug"]}</option>
                    <option value="ac_white_plug_hollow">{store.i18n["settings-trayIcon-white-plug-alt"]}</option>
                    <option value="ac_black_plug">{store.i18n["settings-trayIcon-black-plug"]}</option>
                    <option value="ac_black_plug_hollow">{store.i18n["settings-trayIcon-black-plug-alt"]}</option>
            </DropdownItem>
            <SwitchItem
                note={store.i18n["settings-skipSplash-desc"]}
                value={store.settings.skipSplash}
                onChange={(e) => set("skipSplash", e)}
            >
                Skip splash screen
            </SwitchItem>
            <SwitchItem
                note={store.i18n["settings-dynamicIcon-desc"]}
                value={store.settings.dynamicIcon}
                onChange={(e) => set("dynamicIcon", e)}
            >
                Dynamic icon
            </SwitchItem>
            <SwitchItem
                note={store.i18n["settings-mobileMode-desc"]}
                value={store.settings.mobileMode}
                onChange={(e) => set("mobileMode", e)}
            >
                Mobile Mode
            </SwitchItem>
            <Header class={classes.category} tag={HeaderTags.H5}>
                Behaviour
            </Header>
            <DropdownItem
                value={store.settings.channel}
                onChange={(e) => set("channel", e.target.value)}
                title="Discord channel"
                note={store.i18n["settings-channel-desc"]}
                link="https://support.discord.com/hc/en-us/articles/360035675191-Discord-Testing-Clients"
            >
                <option value="stable">Stable</option>
                <option value="canary">Canary</option>
                <option value="ptb">PTB</option>
            </DropdownItem>
            <DropdownItem
                value={store.settings.performanceMode}
                onChange={(e) => set("performanceMode", e.target.value)}
                title="Performance mode"
                note={store.i18n["settings-prfmMode-desc"]}
                link="https://github.com/ArmCord/ArmCord/blob/dev/src/common/flags.ts"
            >
                <option value="performance">Performance</option>
                <option value="battery">Battery</option>
                <option value="vaapi">VAAPI</option>
                <option value="none">None</option>
            </DropdownItem>
            <SwitchItem
                note={store.i18n["settings-MultiInstance-desc"]}
                value={store.settings.multiInstance}
                onChange={(e) => set("multiInstance", e)}
            >
                Multi Instance
            </SwitchItem>
            <SwitchItem
                note={store.i18n["settings-mintoTray-desc"]}
                value={store.settings.minimizeToTray}
                onChange={(e) => set("minimizeToTray", e)}
            >
                Work in background
            </SwitchItem>
            <SwitchItem
                note={store.i18n["settings-tray-desc"]}
                value={store.settings.tray}
                onChange={(e) => set("tray", e)}
            >
                Tray
            </SwitchItem>
            <SwitchItem
                note={store.i18n["settings-startMinimized-desc"]}
                value={store.settings.startMinimized}
                onChange={(e) => set("startMinimized", e)}
            >
                Start minimized
            </SwitchItem>
            <SwitchItem
                note={store.i18n["settings-smoothScroll-desc"]}
                value={store.settings.smoothScroll}
                onChange={(e) => set("smoothScroll", e)}
            >
                Smooth scrolling
            </SwitchItem>
            <SwitchItem
                note={store.i18n["settings-autoScroll-desc"]}
                value={store.settings.autoScroll}
                onChange={(e) => set("autoScroll", e)}
            >
                Allow auto-scroll
            </SwitchItem>
            <SwitchItem
                note={store.i18n["settings-spellcheck-desc"]}
                value={store.settings.spellcheck}
                onChange={(e) => set("spellcheck", e)}
            >
                Spellcheck
            </SwitchItem>
            <Header class={classes.category} tag={HeaderTags.H5}>
                Legacy features
            </Header>
            <SwitchItem
                note={store.i18n["settings-useLegacyCapturer-desc"]}
                value={store.settings.useLegacyCapturer}
                onChange={(e) => set("useLegacyCapturer", e)}
            >
                Use legacy capturer
            </SwitchItem>
        </>
    );
}
