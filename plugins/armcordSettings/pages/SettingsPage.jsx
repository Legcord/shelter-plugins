

const {
    plugin: { store },
    ui: { SwitchItem, Header, Divider, HeaderTags },
  } = shelter;
  
  
export async function SettingsPage() {
    const settings = armcord.settings.config
    console.error(settings)
    return(
        <>
      <Header tag={HeaderTags.H1}>Settings</Header>
      <Divider mt mb="30px"/>
      <Header tag={HeaderTags.H5}>Mods</Header>
      <SwitchItem note="placeholder" value={settings.armcordCSP}>ArmCord CSP</SwitchItem>
      <SwitchItem note="placeholder" value={settings.autoScroll}>Vencord</SwitchItem>
    </>
    )
}
