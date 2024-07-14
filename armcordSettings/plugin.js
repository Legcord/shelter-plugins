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

  // plugins/armcordSettings/pages/LegacyPage.jsx
  var import_web = __toESM(require_web(), 1);
  var {
    ui: {
      Header,
      HeaderTags,
      Button,
      Divider
    }
  } = shelter;
  function LegacyPage() {
    return [(0, import_web.createComponent)(Header, {
      get tag() {
        return HeaderTags.H1;
      },
      children: "Legacy ArmCord components"
    }), (0, import_web.createComponent)(Button, {
      get onClick() {
        return window.armcord.openSettingsWindow;
      },
      children: "Settings"
    }), (0, import_web.createComponent)(Divider, {
      mt: true,
      mb: "30px"
    }), (0, import_web.createComponent)(Button, {
      get onClick() {
        return window.armcord.openThemesWindow;
      },
      children: "Themes"
    })];
  }

  // plugins/armcordSettings/pages/SettingsPage.jsx
  var import_web2 = __toESM(require_web(), 1);

  // plugins/armcordSettings/settings.js
  var { plugin: { store } } = shelter;
  function refreshSettings() {
    store.settings = window.armcord.settings.config;
    console.log(store.settings);
  }
  function set(key, value) {
    store.settings[key] = value;
    console.log(store.settings[key]);
    armcord.settings.setConfig(key, value);
  }

  // plugins/armcordSettings/pages/SettingsPage.jsx
  var {
    plugin: {
      store: store2
    },
    ui: {
      SwitchItem,
      Header: Header2,
      Divider: Divider2,
      HeaderTags: HeaderTags2
    }
  } = shelter;
  function SettingsPage() {
    return [(0, import_web2.createComponent)(Header2, {
      get tag() {
        return HeaderTags2.H1;
      },
      children: "Settings"
    }), (0, import_web2.createComponent)(Divider2, {
      mt: true,
      mb: true
    }), (0, import_web2.createComponent)(Header2, {
      get tag() {
        return HeaderTags2.H5;
      },
      children: "Mods"
    }), (0, import_web2.createComponent)(SwitchItem, {
      get note() {
        return store2.i18n["settings-csp-desc"];
      },
      get value() {
        return store2.settings.armcordCSP;
      },
      onChange: (e) => set("armcordCSP", e),
      children: "ArmCord CSP"
    }), (0, import_web2.createComponent)(SwitchItem, {
      get note() {
        return store2.i18n["settings-mod-vencord"];
      },
      get value() {
        return store2.settings.autoScroll;
      },
      children: "Vencord"
    }), (0, import_web2.createComponent)(SwitchItem, {
      get note() {
        return store2.i18n["settings-invitewebsocket-desc"];
      },
      get value() {
        return store2.settings.inviteWebsocket;
      },
      onChange: (e) => set("inviteWebsocket", e),
      children: "Rich Presence"
    }), (0, import_web2.createComponent)(Header2, {
      get tag() {
        return HeaderTags2.H5;
      },
      children: "Look and feel"
    }), (0, import_web2.createComponent)(SwitchItem, {
      get note() {
        return store2.i18n["settings-skipSplash-desc"];
      },
      get value() {
        return store2.settings.skipSplash;
      },
      onChange: (e) => set("skipSplash", e),
      children: "Skip splash screen"
    }), (0, import_web2.createComponent)(SwitchItem, {
      get note() {
        return store2.i18n["settings-dynamicIcon-desc"];
      },
      get value() {
        return store2.settings.dynamicIcon;
      },
      onChange: (e) => set("dynamicIcon", e),
      children: "Dynamic icon"
    }), (0, import_web2.createComponent)(SwitchItem, {
      get note() {
        return store2.i18n["settings-mobileMode-desc"];
      },
      get value() {
        return store2.settings.mobileMode;
      },
      onChange: (e) => set("mobileMode", e),
      children: "Mobile Mode"
    }), (0, import_web2.createComponent)(Header2, {
      get tag() {
        return HeaderTags2.H5;
      },
      children: "Behaviour"
    }), (0, import_web2.createComponent)(SwitchItem, {
      get note() {
        return store2.i18n["settings-MultiInstance-desc"];
      },
      get value() {
        return store2.settings.multiInstance;
      },
      onChange: (e) => set("multiInstance", e),
      children: "Multi Instance"
    }), (0, import_web2.createComponent)(SwitchItem, {
      get note() {
        return store2.i18n["settings-mintoTray-desc"];
      },
      get value() {
        return store2.settings.minimizeToTray;
      },
      onChange: (e) => set("minimizeToTray", e),
      children: "Work in background"
    }), (0, import_web2.createComponent)(SwitchItem, {
      get note() {
        return store2.i18n["settings-tray-desc"];
      },
      get value() {
        return store2.settings.tray;
      },
      onChange: (e) => set("tray", e),
      children: "Tray"
    }), (0, import_web2.createComponent)(SwitchItem, {
      get note() {
        return store2.i18n["settings-startMinimized-desc"];
      },
      get value() {
        return store2.settings.startMinimized;
      },
      onChange: (e) => set("startMinimized", e),
      children: "Start minimized"
    }), (0, import_web2.createComponent)(SwitchItem, {
      get note() {
        return store2.i18n["settings-smoothScroll-desc"];
      },
      get value() {
        return store2.settings.smoothScroll;
      },
      onChange: (e) => set("smoothScroll", e),
      children: "Smooth scrolling"
    }), (0, import_web2.createComponent)(SwitchItem, {
      get note() {
        return store2.i18n["settings-autoScroll-desc"];
      },
      get value() {
        return store2.settings.autoScroll;
      },
      onChange: (e) => set("autoScroll", e),
      children: "Allow auto-scroll"
    }), (0, import_web2.createComponent)(SwitchItem, {
      get note() {
        return store2.i18n["settings-spellcheck-desc"];
      },
      get value() {
        return store2.settings.spellcheck;
      },
      onChange: (e) => set("spellcheck", e),
      children: "Spellcheck"
    }), (0, import_web2.createComponent)(Header2, {
      get tag() {
        return HeaderTags2.H5;
      },
      children: "Legacy features"
    }), (0, import_web2.createComponent)(SwitchItem, {
      get note() {
        return store2.i18n["settings-useLegacyCapturer-desc"];
      },
      get value() {
        return store2.settings.useLegacyCapturer;
      },
      onChange: (e) => set("useLegacyCapturer", e),
      children: "Use legacy capturer"
    })];
  }

  // plugins/armcordSettings/pages/ThemesPage.jsx
  var import_web3 = __toESM(require_web(), 1);
  var {
    plugin: {
      store: store3
    },
    ui: {
      TextBox,
      Header: Header3,
      HeaderTags: HeaderTags3
    }
  } = shelter;
  function ThemesPage() {
    return (0, import_web3.createComponent)(Header3, {
      get tag() {
        return HeaderTags3.H1;
      },
      children: "Themes"
    });
  }

  // plugins/armcordSettings/pages/UpdaterPage.jsx
  var import_web4 = __toESM(require_web(), 1);
  var {
    plugin: {
      store: store4
    },
    ui: {
      TextBox: TextBox2,
      Header: Header4,
      HeaderTags: HeaderTags4
    }
  } = shelter;
  function UpdaterPage() {
    return (0, import_web4.createComponent)(Header4, {
      get tag() {
        return HeaderTags4.H1;
      },
      children: "Updater"
    });
  }

  // plugins/armcordSettings/index.js
  var {
    plugin: { store: store5 },
    settings: { registerSection },
    util: { log }
  } = shelter;
  var settingsPages = [
    registerSection("divider"),
    registerSection("header", "ArmCord"),
    registerSection("section", "armcord-legacy", "Legacy", LegacyPage),
    registerSection("section", "armcord-settings", "Settings", SettingsPage),
    registerSection("section", "armcord-themes", "Themes", ThemesPage),
    registerSection("section", "armcord-updater", "Updater", UpdaterPage)
  ];
  function onLoad() {
    refreshSettings();
    store5.i18n = window.armcord.translations;
    log("ArmCord Settings");
    settingsPages;
  }
  function onUnload() {
    settingsPages.forEach((e) => e());
  }
  return __toCommonJS(armcordSettings_exports);
})();
