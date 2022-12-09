<!-- Javascript -->
<script>

  // Store
  import { router } from "./js/global.js"

  // Theme
  import "./themes/light.css"
  import "./themes/test.css"

  // Components
  import Icon from './components/Icon.svelte'
  import Header from './layout/Header.svelte'
  import Nav from './layout/Nav.svelte'
  import Main from './layout/Main.svelte'
  import Dialog from './layout/Dialog.svelte'

  // Pages 
  import Home from './pages/Home.svelte';
  // CSS
  import Palette from './pages/css/Palette.svelte';
  import Theme from './pages/css/Theme.svelte';
  import Html from './pages/css/Html.svelte';
  // Templates
  import TemplatePage from './pages/templates/Page.svelte';
  import Panels_2 from './pages/templates/Panels_2.svelte';
  // Components
  import Components from './pages/components/Components.svelte';
  import Icons from './pages/components/Icons.svelte';
  import Sliders from './pages/components/Sliders.svelte';
  // Tests
  import Oklch from './pages/tests/Oklch.svelte';
  // AV-Tools
  import Dhcp from './pages/av-tools/Dhcp.svelte';
  import Network from './pages/av-tools/Network.svelte';
  import SerialPort from './pages/av-tools/SerialPort.svelte';
  import SetIP from './pages/av-tools/SetIP.svelte'

  // All available pages
  $router.pageObjs = {
    Home: {
      name: {
        header: "Home",
        nav: "Home"
      },
      icon: "house",
      pageComponent: Home,
    },

    Html: {
      name: {
        header: "HTML",
        nav: "HTML"
      },
      icon: "html5",
      pageComponent: Html,
    },
    Palette: {
      name: {
        header: "Palette",
        nav: "Palette"
      },
      icon: "palette",
      pageComponent: Palette,
    },
    Theme: {
      name: {
        header: "Theme",
        nav: "Theme"
      },
      icon: "css3-alt",
      pageComponent: Theme,
    },
    
    Components: {
      name: {
        header: "Components",
        nav: "Components"
      },
      icon: "shapes",
      pageComponent: Components,
    },
    Icons: {
      name: {
        header: "Icon",
        nav: "Icon"
      },
      icon: "icons",
      pageComponent: Icons,
    },
    Sliders: {
      name: {
        header: "Slider",
        nav: "Slider"
      },
      icon: "sliders",
      pageComponent: Sliders,
    },

    TemplatePage: {
      name: {
        header: "TemplatePage",
        nav: "TemplatePage"
      },
      icon: "table-columns",
      pageComponent: TemplatePage,
    },
    Panels_2: {
      name: {
        header: "Panels_2",
        nav: "Panels_2"
      },
      icon: "table-columns",
      pageComponent: Panels_2,
    },
    
    Oklch: {
      name: {
        header: "Oklch",
        nav: "Oklch"
      },
      icon: "palette",
      pageComponent: Oklch,
    },
    
    Dhcp: {
      name: {
        header: "Dhcp",
        nav: "Dhcp"
      },
      icon: "server",
      pageComponent: Dhcp,
    },
    Network: {
      name: {
        header: "Network",
        nav: "Network"
      },
      icon: "network-wired",
      pageComponent: Network,
    },
    SerialPort: {
      name: {
        header: "SerialPort",
        nav: "SerialPort"
      },
      icon: "terminal",
      pageComponent: SerialPort,
    },
    SetIP: {
      name: {
        header: "Set IP Address",
        nav: "Set IP Address"
      },
      icon: "ethernet",
      pageComponent: SetIP,
    },

    Settings: {
      name: {
        header: "Settings",
        nav: "Settings"
      },
      icon: "gear",
      pageComponent: TemplatePage,
    },
  
  }

  // Nav Menu
  const cssSubMenu = {
    name: {
      header: "CSS",
      nav: "CSS"
    },
    icon: "css3-alt",
    hideSubMenu: true,
    subMenu: [
      $router.pageObjs.Html,
      $router.pageObjs.Palette,
      $router.pageObjs.Theme,
    ],
  }
  const componentsSubMenu = {
    name: {
      header: "Components",
      nav: "Components"
    },
    icon: "shapes",
    hideSubMenu: true,
    subMenu: [
      $router.pageObjs.Components,
      $router.pageObjs.Icons,
      $router.pageObjs.Sliders,
    ],
  }
  const templatesSubMenu = {
    name: {
      header: "Templates",
      nav: "Templates"
    },
    icon: "table-columns",
    hideSubMenu: true,
    subMenu: [
      $router.pageObjs.TemplatePage,
      $router.pageObjs.Panels_2,
    ],
  }
  const testsSubMenu = {
    name: {
      header: "Tests",
      nav: "Tests"
    },
    icon: "vials",
    hideSubMenu: true,
    subMenu: [
      $router.pageObjs.Oklch,
    ],
  }
  const avToolsSubMenu = {
    name: {
      header: "AV-Tools",
      nav: "AV-Tools"
    },
    icon: "wrench",
    hideSubMenu: true,
    subMenu: [
      $router.pageObjs.Network,
      $router.pageObjs.Dhcp,
      $router.pageObjs.SerialPort,
      $router.pageObjs.SetIP,
    ],
  }
  const navMenu = [
    $router.pageObjs.Home,
    cssSubMenu,
    componentsSubMenu,
    templatesSubMenu,
    testsSubMenu,
    avToolsSubMenu,
    $router.pageObjs.Settings,
  ]
  
  $router.pageObj = navMenu[0]
  $router.pageObj = $router.pageObjs.SetIP
  $router.dialogObj = undefined
  // $router.dialogObj = $router.pageObjs.SetIP

  $: screenWidth = document.documentElement.offsetWidth
  let navHide = document.documentElement.offsetWidth > 1200 ? false : true

  $: console.log("$router", $router)

</script>

<!-- HTML -->
<Dialog pageObj={$router.dialogObj} title={$router.dialogObj?.name.header}/>
<Header
  title={$router.pageObj?.name.header}
  on:nav={() => navHide = !navHide}
/>
<div class="navMain">
  <Nav menu={navMenu} hide={navHide} on:navPress={event => {
    $router.pageObj = event.detail
    if (screenWidth < 1200) navHide = true
  }}/>
  <Main pageObj={$router.pageObj} center={false}/>
</div>

<!-- CSS -->
<style>
  :global(body) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .navMain {
    height: calc(100% - 4.2rem);
    display: flex;
    flex-grow: 1;
  }
</style>
