
import { set } from "../settings";
const {
    plugin: { store },
    ui: { SwitchItem, Header, Divider, HeaderTags },
  } = shelter;
  
  
export function SettingsPage() {
    return(
        <>
      <Header tag={HeaderTags.H1}>Settings</Header>
      <Divider mt mb="30px"/>
      <Header tag={HeaderTags.H5}>Mods</Header>
      <SwitchItem note="placeholder" value={store.settings.armcordCSP} onChange={(e) => set("armcordCSP", e)}>ArmCord CSP</SwitchItem>
      <SwitchItem note="placeholder" value={store.settings.autoScroll}>Vencord</SwitchItem>
    </>
    )
}
