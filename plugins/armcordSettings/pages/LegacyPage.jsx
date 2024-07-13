const {
    ui: { Header, HeaderTags, Button, Divider },
  } = shelter;
  
export function LegacyPage() {
    return(
        <>
      <Header tag={HeaderTags.H1}>Legacy ArmCord components</Header>
      <Button onClick={window.armcord.openSettingsWindow}>Settings</Button>
      <Divider mt mb="30px"/>
      <Button onClick={window.armcord.openThemesWindow}>Themes</Button>
    </>
    )
}
