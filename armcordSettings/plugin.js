(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // shltr-res-ns:solid-js/web
  var require_web = __commonJS({
    "shltr-res-ns:solid-js/web"(exports, module) {
      module.exports = shelter.solidWeb;
    }
  });

  // plugins/armcordSettings/index.js
  var armcordSettings_exports = {};
  __export(armcordSettings_exports, {
    onLoad: () => onLoad,
    onUnload: () => onUnload
  });

  // plugins/armcordSettings/pages/SettingsPage.jsx
  var import_web12 = __toESM(require_web(), 1);
  var import_web13 = __toESM(require_web(), 1);
  var import_web14 = __toESM(require_web(), 1);

  // plugins/armcordSettings/components/DropdownItem.jsx
  var import_web6 = __toESM(require_web(), 1);
  var import_web7 = __toESM(require_web(), 1);
  var import_web8 = __toESM(require_web(), 1);
  var import_web9 = __toESM(require_web(), 1);
  var import_web10 = __toESM(require_web(), 1);
  var import_web11 = __toESM(require_web(), 1);

  // plugins/armcordSettings/components/Dropdown.jsx
  var import_web = __toESM(require_web(), 1);
  var import_web2 = __toESM(require_web(), 1);
  var import_web3 = __toESM(require_web(), 1);
  var import_web4 = __toESM(require_web(), 1);
  var import_web5 = __toESM(require_web(), 1);

  // plugins/armcordSettings/components/Dropdown.css
  shelter.plugin.scoped.ui.injectCss(`._acDropdown_g5h5a_1 option {
  color: #fff;
  font-weight: 400;
  font-style: normal;
}
._acDropdown_g5h5a_1 {
  margin-top: 10px;
  margin-bottom: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  font-size: 25px;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  background-color: var(--background-secondary-alt);
  background-position: center right;
  background-repeat: no-repeat;
  border: 1px solid var(--background-floating);
  border-radius: 2px;
  color: #fff;
  font-size: 1.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  outline: none !important;
}
`);
  var Dropdown_default = {
    "acDropdown": "_acDropdown_g5h5a_1"
  };

  // plugins/armcordSettings/components/Dropdown.jsx
  var _tmpl$ = /* @__PURE__ */ (0, import_web.template)(`<select></select>`, 2);
  var Dropdown = (props) => {
    return (() => {
      const _el$ = _tmpl$.cloneNode(true);
      (0, import_web4.addEventListener)(_el$, "change", props.onChange);
      (0, import_web3.insert)(_el$, () => props.children);
      (0, import_web5.effect)(() => (0, import_web2.className)(_el$, Dropdown_default.acDropdown));
      (0, import_web5.effect)(() => _el$.value = props.value);
      return _el$;
    })();
  };

  // plugins/armcordSettings/components/DropdownItem.css
  shelter.plugin.scoped.ui.injectCss(`._note_xvl00_1 {
    margin-top: 8px;
    color: var(--header-secondary);
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    cursor: default;
}
._title_xvl00_9 {
    flex: 1;
    display: block;
    overflow: hidden;
    margin: 0;
    color: var(--header-primary);
    line-height: 24px;
    font-weight: 500;
    word-wrap: break-word;
    cursor: pointer;
}
._item_xvl00_20 {
    margin-bottom: 20px
}`);
  var DropdownItem_default = {
    "note": "_note_xvl00_1",
    "title": "_title_xvl00_9",
    "item": "_item_xvl00_20"
  };

  // plugins/armcordSettings/components/DropdownItem.jsx
  var _tmpl$2 = /* @__PURE__ */ (0, import_web6.template)(`<div><div></div></div>`, 4);
  var {
    plugin: {
      store
    },
    ui: {
      Divider,
      Header,
      LinkButton,
      HeaderTags
    }
  } = shelter;
  var DropdownItem = (props) => {
    return (() => {
      const _el$ = _tmpl$2.cloneNode(true), _el$2 = _el$.firstChild;
      (0, import_web10.insert)(_el$, (0, import_web11.createComponent)(Header, {
        get ["class"]() {
          return DropdownItem_default.title;
        },
        get tag() {
          return HeaderTags.H3;
        },
        get children() {
          return props.title;
        }
      }), _el$2);
      (0, import_web10.insert)(_el$2, () => props.note);
      (0, import_web10.insert)(_el$, (0, import_web11.createComponent)(import_web9.Show, {
        get when() {
          return props.link;
        },
        keyed: true,
        get children() {
          return (0, import_web11.createComponent)(LinkButton, {
            get href() {
              return props.link;
            },
            children: "Learn more here."
          });
        }
      }), null);
      (0, import_web10.insert)(_el$, (0, import_web11.createComponent)(Dropdown, {
        get value() {
          return props.value;
        },
        get onChange() {
          return props.onChange;
        },
        get children() {
          return props.children;
        }
      }), null);
      (0, import_web10.insert)(_el$, (0, import_web11.createComponent)(Divider, {}), null);
      (0, import_web8.effect)((_p$) => {
        const _v$ = DropdownItem_default.item, _v$2 = DropdownItem_default.note;
        _v$ !== _p$._v$ && (0, import_web7.className)(_el$, _p$._v$ = _v$);
        _v$2 !== _p$._v$2 && (0, import_web7.className)(_el$2, _p$._v$2 = _v$2);
        return _p$;
      }, {
        _v$: void 0,
        _v$2: void 0
      });
      return _el$;
    })();
  };

  // plugins/armcordSettings/pages/SettingsPage.css
  shelter.plugin.scoped.ui.injectCss(`._category_ckkj8_1 {
    margin-bottom: 8px;
}`);
  var SettingsPage_default = {
    "category": "_category_ckkj8_1"
  };

  // plugins/armcordSettings/settings.js
  var { plugin: { store: store2 } } = shelter;
  var isRestartRequired = false;
  function refreshSettings() {
    store2.settings = window.armcord.settings.config;
    console.log(store2.settings);
  }
  function set(key, value) {
    isRestartRequired = true;
    if (key == "vencord" && value == true) {
      store2.vencord = true;
      armcord.settings.setConfig("mods", "vencord");
    } else if (key == "vencord" && value == false) {
      store2.vencord = false;
      armcord.settings.setConfig("mods", "none");
    } else {
      store2.settings[key] = value;
      console.log(key + ": " + store2.settings[key]);
      armcord.settings.setConfig(key, value);
    }
  }

  // plugins/armcordSettings/pages/SettingsPage.jsx
  var _tmpl$3 = /* @__PURE__ */ (0, import_web12.template)(`<option value="default">Default (Custom)</option>`, 2);
  var _tmpl$22 = /* @__PURE__ */ (0, import_web12.template)(`<option value="native">Native</option>`, 2);
  var _tmpl$32 = /* @__PURE__ */ (0, import_web12.template)(`<option value="transparent">Transparent</option>`, 2);
  var _tmpl$4 = /* @__PURE__ */ (0, import_web12.template)(`<option value="default"></option>`, 2);
  var _tmpl$5 = /* @__PURE__ */ (0, import_web12.template)(`<option value="dsc-tray"></option>`, 2);
  var _tmpl$6 = /* @__PURE__ */ (0, import_web12.template)(`<option value="clsc-dsc-tray"></option>`, 2);
  var _tmpl$7 = /* @__PURE__ */ (0, import_web12.template)(`<option value="ac_plug_colored"></option>`, 2);
  var _tmpl$8 = /* @__PURE__ */ (0, import_web12.template)(`<option value="ac_white_plug"></option>`, 2);
  var _tmpl$9 = /* @__PURE__ */ (0, import_web12.template)(`<option value="ac_white_plug_hollow"></option>`, 2);
  var _tmpl$10 = /* @__PURE__ */ (0, import_web12.template)(`<option value="ac_black_plug"></option>`, 2);
  var _tmpl$11 = /* @__PURE__ */ (0, import_web12.template)(`<option value="ac_black_plug_hollow"></option>`, 2);
  var _tmpl$12 = /* @__PURE__ */ (0, import_web12.template)(`<option value="stable">Stable</option>`, 2);
  var _tmpl$13 = /* @__PURE__ */ (0, import_web12.template)(`<option value="canary">Canary</option>`, 2);
  var _tmpl$14 = /* @__PURE__ */ (0, import_web12.template)(`<option value="ptb">PTB</option>`, 2);
  var _tmpl$15 = /* @__PURE__ */ (0, import_web12.template)(`<option value="performance"></option>`, 2);
  var _tmpl$16 = /* @__PURE__ */ (0, import_web12.template)(`<option value="battery"></option>`, 2);
  var _tmpl$17 = /* @__PURE__ */ (0, import_web12.template)(`<option value="vaapi"></option>`, 2);
  var _tmpl$18 = /* @__PURE__ */ (0, import_web12.template)(`<option value="none"></option>`, 2);
  var _tmpl$19 = /* @__PURE__ */ (0, import_web12.template)(`<br>`, 1);
  var {
    plugin: {
      store: store3
    },
    ui: {
      SwitchItem,
      Header: Header2,
      Divider: Divider2,
      HeaderTags: HeaderTags2,
      Button,
      ButtonSizes
    }
  } = shelter;
  function SettingsPage() {
    return [(0, import_web14.createComponent)(Header2, {
      get tag() {
        return HeaderTags2.H1;
      },
      children: "Settings"
    }), (0, import_web14.createComponent)(Divider2, {
      mt: true,
      mb: true
    }), (0, import_web14.createComponent)(Header2, {
      get ["class"]() {
        return SettingsPage_default.category;
      },
      get tag() {
        return HeaderTags2.H5;
      },
      children: "Mods"
    }), (0, import_web14.createComponent)(SwitchItem, {
      get note() {
        return store3.i18n["settings-csp-desc"];
      },
      get value() {
        return store3.settings.armcordCSP;
      },
      onChange: (e) => set("armcordCSP", e),
      children: "ArmCord CSP"
    }), (0, import_web14.createComponent)(SwitchItem, {
      get note() {
        return store3.i18n["settings-mod-vencord"];
      },
      get value() {
        return store3.vencord;
      },
      onChange: (e) => set("vencord", e),
      children: "Vencord"
    }), (0, import_web14.createComponent)(SwitchItem, {
      get note() {
        return store3.i18n["settings-invitewebsocket-desc"];
      },
      get value() {
        return store3.settings.inviteWebsocket;
      },
      onChange: (e) => set("inviteWebsocket", e),
      get children() {
        return store3.i18n["settings-invitewebsocket"];
      }
    }), (0, import_web14.createComponent)(Header2, {
      get ["class"]() {
        return SettingsPage_default.category;
      },
      get tag() {
        return HeaderTags2.H5;
      },
      children: "Look and feel"
    }), (0, import_web14.createComponent)(DropdownItem, {
      get value() {
        return store3.settings.windowStyle;
      },
      onChange: (e) => set("windowStyle", e.target.value),
      get title() {
        return store3.i18n["settings-theme"];
      },
      get note() {
        return store3.i18n["settings-theme-desc"];
      },
      link: "https://github.com/ArmCord/ArmCord/wiki/Settings-%5Bwip%5D#armcord-theme",
      get children() {
        return [_tmpl$3.cloneNode(true), _tmpl$22.cloneNode(true), _tmpl$32.cloneNode(true)];
      }
    }), (0, import_web14.createComponent)(DropdownItem, {
      get value() {
        return store3.settings.trayIcon;
      },
      onChange: (e) => set("trayIcon", e.target.value),
      get title() {
        return store3.i18n["settings-trayIcon"];
      },
      get note() {
        return store3.i18n["settings-trayIcon-desc"];
      },
      get children() {
        return [(() => {
          const _el$4 = _tmpl$4.cloneNode(true);
          (0, import_web13.insert)(_el$4, () => store3.i18n["settings-trayIcon-dynamic"]);
          return _el$4;
        })(), (() => {
          const _el$5 = _tmpl$5.cloneNode(true);
          (0, import_web13.insert)(_el$5, () => store3.i18n["settings-trayIcon-normal"]);
          return _el$5;
        })(), (() => {
          const _el$6 = _tmpl$6.cloneNode(true);
          (0, import_web13.insert)(_el$6, () => store3.i18n["settings-trayIcon-classic"]);
          return _el$6;
        })(), (() => {
          const _el$7 = _tmpl$7.cloneNode(true);
          (0, import_web13.insert)(_el$7, () => store3.i18n["settings-trayIcon-colored-plug"]);
          return _el$7;
        })(), (() => {
          const _el$8 = _tmpl$8.cloneNode(true);
          (0, import_web13.insert)(_el$8, () => store3.i18n["settings-trayIcon-white-plug"]);
          return _el$8;
        })(), (() => {
          const _el$9 = _tmpl$9.cloneNode(true);
          (0, import_web13.insert)(_el$9, () => store3.i18n["settings-trayIcon-white-plug-alt"]);
          return _el$9;
        })(), (() => {
          const _el$10 = _tmpl$10.cloneNode(true);
          (0, import_web13.insert)(_el$10, () => store3.i18n["settings-trayIcon-black-plug"]);
          return _el$10;
        })(), (() => {
          const _el$11 = _tmpl$11.cloneNode(true);
          (0, import_web13.insert)(_el$11, () => store3.i18n["settings-trayIcon-black-plug-alt"]);
          return _el$11;
        })()];
      }
    }), (0, import_web14.createComponent)(SwitchItem, {
      get note() {
        return store3.i18n["settings-skipSplash-desc"];
      },
      get value() {
        return store3.settings.skipSplash;
      },
      onChange: (e) => set("skipSplash", e),
      get children() {
        return store3.i18n["settings-skipSplash"];
      }
    }), (0, import_web14.createComponent)(SwitchItem, {
      get note() {
        return store3.i18n["settings-mobileMode-desc"];
      },
      get value() {
        return store3.settings.mobileMode;
      },
      onChange: (e) => set("mobileMode", e),
      get children() {
        return store3.i18n["settings-mobileMode"];
      }
    }), (0, import_web14.createComponent)(Header2, {
      get ["class"]() {
        return SettingsPage_default.category;
      },
      get tag() {
        return HeaderTags2.H5;
      },
      children: "Behaviour"
    }), (0, import_web14.createComponent)(DropdownItem, {
      get value() {
        return store3.settings.channel;
      },
      onChange: (e) => set("channel", e.target.value),
      get title() {
        return store3.i18n["settings-channel"];
      },
      get note() {
        return store3.i18n["settings-channel-desc"];
      },
      link: "https://support.discord.com/hc/en-us/articles/360035675191-Discord-Testing-Clients",
      get children() {
        return [_tmpl$12.cloneNode(true), _tmpl$13.cloneNode(true), _tmpl$14.cloneNode(true)];
      }
    }), (0, import_web14.createComponent)(DropdownItem, {
      get value() {
        return store3.settings.performanceMode;
      },
      onChange: (e) => set("performanceMode", e.target.value),
      get title() {
        return store3.i18n["settings-prfmMode"];
      },
      get note() {
        return store3.i18n["settings-prfmMode-desc"];
      },
      link: "https://github.com/ArmCord/ArmCord/blob/dev/src/common/flags.ts",
      get children() {
        return [(() => {
          const _el$15 = _tmpl$15.cloneNode(true);
          (0, import_web13.insert)(_el$15, () => store3.i18n["settings-prfmMode-performance"]);
          return _el$15;
        })(), (() => {
          const _el$16 = _tmpl$16.cloneNode(true);
          (0, import_web13.insert)(_el$16, () => store3.i18n["settings-prfmMode-battery"]);
          return _el$16;
        })(), (() => {
          const _el$17 = _tmpl$17.cloneNode(true);
          (0, import_web13.insert)(_el$17, () => store3.i18n["settings-prfmMode-vaapi"]);
          return _el$17;
        })(), (() => {
          const _el$18 = _tmpl$18.cloneNode(true);
          (0, import_web13.insert)(_el$18, () => store3.i18n["settings-none"]);
          return _el$18;
        })()];
      }
    }), (0, import_web14.createComponent)(SwitchItem, {
      get note() {
        return store3.i18n["settings-MultiInstance-desc"];
      },
      get value() {
        return store3.settings.multiInstance;
      },
      onChange: (e) => set("multiInstance", e),
      get children() {
        return store3.i18n["settings-MultiInstance"];
      }
    }), (0, import_web14.createComponent)(SwitchItem, {
      get note() {
        return store3.i18n["settings-mintoTray-desc"];
      },
      get value() {
        return store3.settings.minimizeToTray;
      },
      onChange: (e) => set("minimizeToTray", e),
      get children() {
        return store3.i18n["settings-mintoTray"];
      }
    }), (0, import_web14.createComponent)(SwitchItem, {
      get note() {
        return store3.i18n["settings-tray-desc"];
      },
      get value() {
        return store3.settings.tray;
      },
      onChange: (e) => set("tray", e),
      get children() {
        return store3.i18n["settings-tray"];
      }
    }), (0, import_web14.createComponent)(SwitchItem, {
      get note() {
        return store3.i18n["settings-startMinimized-desc"];
      },
      get value() {
        return store3.settings.startMinimized;
      },
      onChange: (e) => set("startMinimized", e),
      get children() {
        return store3.i18n["settings-startMinimized"];
      }
    }), (0, import_web14.createComponent)(SwitchItem, {
      get note() {
        return store3.i18n["settings-smoothScroll-desc"];
      },
      get value() {
        return store3.settings.smoothScroll;
      },
      onChange: (e) => set("smoothScroll", e),
      get children() {
        return store3.i18n["settings-smoothScroll"];
      }
    }), (0, import_web14.createComponent)(SwitchItem, {
      get note() {
        return store3.i18n["settings-autoScroll-desc"];
      },
      get value() {
        return store3.settings.autoScroll;
      },
      onChange: (e) => set("autoScroll", e),
      get children() {
        return store3.i18n["settings-autoScroll"];
      }
    }), (0, import_web14.createComponent)(SwitchItem, {
      get note() {
        return store3.i18n["settings-spellcheck-desc"];
      },
      get value() {
        return store3.settings.spellcheck;
      },
      onChange: (e) => set("spellcheck", e),
      get children() {
        return store3.i18n["settings-spellcheck"];
      }
    }), (0, import_web14.createComponent)(Header2, {
      get ["class"]() {
        return SettingsPage_default.category;
      },
      get tag() {
        return HeaderTags2.H5;
      },
      children: "Legacy features"
    }), (0, import_web14.createComponent)(SwitchItem, {
      get note() {
        return store3.i18n["settings-useLegacyCapturer-desc"];
      },
      get value() {
        return store3.settings.useLegacyCapturer;
      },
      onChange: (e) => set("useLegacyCapturer", e),
      get children() {
        return store3.i18n["settings-useLegacyCapturer"];
      }
    }), (0, import_web14.createComponent)(SwitchItem, {
      get note() {
        return store3.i18n["settings-dynamicIcon-desc"];
      },
      get value() {
        return store3.settings.dynamicIcon;
      },
      onChange: (e) => set("dynamicIcon", e),
      get children() {
        return store3.i18n["settings-dynamicIcon"];
      }
    }), (0, import_web14.createComponent)(Header2, {
      get ["class"]() {
        return SettingsPage_default.category;
      },
      get tag() {
        return HeaderTags2.H5;
      },
      children: "Debug options"
    }), (0, import_web14.createComponent)(Button, {
      get size() {
        return ButtonSizes.MAX;
      },
      get onClick() {
        return window.armcord.openSettingsWindow;
      },
      children: "Open legacy settings"
    }), _tmpl$19.cloneNode(true), (0, import_web14.createComponent)(Button, {
      get size() {
        return ButtonSizes.MAX;
      },
      get onClick() {
        return window.armcord.settings.openStorageFolder;
      },
      children: "Open storage folder"
    }), _tmpl$19.cloneNode(true), (0, import_web14.createComponent)(Button, {
      get size() {
        return ButtonSizes.MAX;
      },
      get onClick() {
        return window.armcord.settings.copyDebugInfo;
      },
      children: "Copy debug info"
    }), _tmpl$19.cloneNode(true), (0, import_web14.createComponent)(Button, {
      get size() {
        return ButtonSizes.MAX;
      },
      get onClick() {
        return window.armcord.settings.copyGPUInfo;
      },
      children: "Copy GPU info"
    })];
  }

  // plugins/armcordSettings/pages/ThemesPage.jsx
  var import_web15 = __toESM(require_web(), 1);
  var {
    ui: {
      Button: Button2,
      Header: Header3,
      HeaderTags: HeaderTags3,
      ButtonSizes: ButtonSizes2,
      Divider: Divider3
    }
  } = shelter;
  function ThemesPage() {
    return [(0, import_web15.createComponent)(Header3, {
      get tag() {
        return HeaderTags3.H1;
      },
      children: "Themes"
    }), (0, import_web15.createComponent)(Divider3, {
      mt: true,
      mb: true
    }), (0, import_web15.createComponent)(Button2, {
      get size() {
        return ButtonSizes2.MAX;
      },
      get onClick() {
        return window.armcord.openThemesWindow;
      },
      children: "Open Theme Manager"
    })];
  }

  // plugins/armcordSettings/index.js
  var {
    plugin: { store: store4 },
    settings: { registerSection },
    util: { log },
    ui: { openConfirmationModal },
    flux: { dispatcher }
  } = shelter;
  var settingsPages = [
    registerSection("divider"),
    registerSection("header", "ArmCord"),
    registerSection("section", "armcord-settings", "Settings", SettingsPage),
    registerSection("section", "armcord-themes", "Themes", ThemesPage)
  ];
  function restartRequired(payload) {
    if (payload.event === "settings_pane_viewed" && typeof payload.properties.origin_pane != "undefined") {
      if (payload.properties.origin_pane == "armcord-settings") {
        if (isRestartRequired) {
          openConfirmationModal({
            header: () => "Restart required",
            body: () => "You need to restart to apply these changes.",
            type: "danger",
            confirmText: "Restart",
            cancelText: "I'll do it later"
          }).then(
            () => armcord.restart(),
            () => console.log("restart skipped")
          );
        }
      }
    }
  }
  function onLoad() {
    refreshSettings();
    store4.i18n = window.armcord.translations;
    if (window.armcord.settings.config.mods == "vencord") {
      store4.vencord = true;
    } else {
      store4.vencord = false;
    }
    log("ArmCord Settings");
    settingsPages;
    dispatcher.subscribe("TRACK", restartRequired);
  }
  function onUnload() {
    settingsPages.forEach((e) => e());
    dispatcher.unsubscribe("TRACK", restartRequired);
  }
  return __toCommonJS(armcordSettings_exports);
})();
