<script>

  // Store
  import { router } from "./js/global.js"

  // Theme
  import "./themes/theme-dark.css"
  import "./themes/theme-light.css"
  import "./themes/theme-test.css"

  // Components
  import Icon from './components/Icon.svelte'
  import Header from './layout/Header.svelte'
  import Nav from './layout/Nav.svelte'
  import Main from './layout/Main.svelte'
  import Dialog from './layout/Dialog.svelte'

  // Pages 
  import Home from './pages/Home.svelte';
  import Html from './pages/Html.svelte';
  import Components from './pages/Components.svelte';
  // Templates
  import TemplatePage from './pages/templates/Page.svelte';
  import Panels_2 from './pages/templates/Panels_2.svelte';
  // Tests
  import OKLCH from './pages/tests/OKLCH.svelte';
  import Sliders from './pages/tests/Sliders.svelte';
  // AV-Tools
  import Network from './pages/av-tools/Network.svelte';
  import SetIP from './pages/av-tools/SetIP.svelte'
  import Dhcp from './pages/av-tools/Dhcp.svelte';
  import SerialPort from './pages/av-tools/SerialPort.svelte';

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
    Components: {
      name: {
        header: "Components",
        nav: "Components"
      },
      icon: "shapes",
      pageComponent: Components,
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
    OKLCH: {
      name: {
        header: "OKLCH",
        nav: "OKLCH"
      },
      icon: "palette",
      pageComponent: OKLCH,
    },
    Sliders: {
      name: {
        header: "Sliders",
        nav: "Sliders"
      },
      icon: "sliders",
      pageComponent: Sliders,
    },
    Network: {
      name: {
        header: "Network",
        nav: "Network"
      },
      icon: "network-wired",
      pageComponent: Network,
    },
    DHCP: {
      name: {
        header: "DHCP",
        nav: "DHCP"
      },
      icon: "server",
      pageComponent: Dhcp,
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
  let navMenu = [
    $router.pageObjs.Home,
    $router.pageObjs.Components,
    {
      name: {
        header: "Templates",
        nav: "Templates"
      },
      icon: "clipboard",
      hideSubMenu: true,
      subMenu: [
        $router.pageObjs.Html,
        $router.pageObjs.TemplatePage,
        $router.pageObjs.Panels_2,
      ],
    },
    {
      name: {
        header: "Tests",
        nav: "Tests"
      },
      icon: "vials",
      hideSubMenu: true,
      subMenu: [
        $router.pageObjs.OKLCH,
        $router.pageObjs.Sliders,
      ],
    },
    {
      name: {
        header: "AV-Tools",
        nav: "AV-Tools"
      },
      icon: "wrench",
      hideSubMenu: false,
      subMenu: [
        $router.pageObjs.Network,
        $router.pageObjs.DHCP,
        $router.pageObjs.SerialPort,
        $router.pageObjs.SetIP,
      ],
    },
    $router.pageObjs.Settings,
  ]
  $router.pageObj = navMenu[0]
  $router.pageObj = $router.pageObjs.Network
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
