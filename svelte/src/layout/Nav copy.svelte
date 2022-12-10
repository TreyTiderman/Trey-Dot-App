<!-- Javascript -->
<script>

  // Store
  import { router } from "../js/global.js"

  // Custom events
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  // Components
  import Icon from '../components/Icon.svelte'

  // Variables
  let hide = false
  let menu = [
    {
      name: "Home",
      title: "Home Page",
      icon: "house",
      path: "/#/",
    },
    {
      name: "CSS",
      icon: "css3-alt",
      hideSubMenu: true,
      subMenu: [
        {
          name: "HTML",
          title: "HTML",
          icon: "html5",
          path: "/#/css/html",
        },
        {
          name: "HTML",
          title: "CSS / HTML",
          icon: "box",
          path: "/#/css/html",
          hideSubMenu: true,
          subMenu: [
            {
              name: "HTML",
              title: "HTML",
              icon: "html5",
              path: "/#/css/html",
            },
            {
              name: "HTML",
              title: "CSS / HTML",
              icon: "box",
              path: "/#/css/html",
            },
          ],
        },
      ],
    }
  ]
  const iconSize = 1.5
  const subIconSize = 1.25

</script>

<!-- HTML -->
{#if !hide}
  <nav>

    <!-- Add each menuItem to the Nav -->
    {#each menu as menuItem}

      <!-- If page has subMenuItems -->
      {#if menuItem?.subMenu}
        <a href={menuItem.path}
          on:click={() => menuItem.hideSubMenu = !menuItem.hideSubMenu}>
          <Icon name={menuItem.icon} size={iconSize}/>
          {menuItem.name}
          {#if menuItem.hideSubMenu}
            <Icon size={subIconSize} style="margin-left: auto" name="caret-left"/>
          {:else}
            <Icon size={subIconSize} style="margin-left: auto" name="caret-down"/>
          {/if}
        </a>

        <!-- Add each subMenuItem to the Nav -->
        {#if !menuItem.hideSubMenu}
          <div class="subMenu">
            {#each menuItem.subMenu as subMenuItem}
              <a href={subMenuItem.path}
                class:active={$router.menuItem === subMenuItem}
                on:click={dispatch('navPress', subMenuItem)}>
                <Icon name={subMenuItem.icon} size={subIconSize} />
                {subMenuItem.name}
              </a>
            {/each}
          </div>
        {/if}
  
      <!-- Else add the menuItem -->
      {:else if menuItem?.name}
        <a href={menuItem.path}
          class:active={$router.menuItem === menuItem}
          on:click={dispatch('navPress', menuItem)}>
          <Icon name={menuItem.icon} size={iconSize} />
          {menuItem.name}
        </a>
      {/if}

    {/each}
  </nav>
{/if}
  
<!-- CSS -->
<style>
  nav {
    z-index: 10;
    min-width: 16rem;
    background-color: var(--color-bg-header);
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
  nav a {
    border-radius: 0;
    text-decoration: none;
    padding: var(--gap);
    color: var(--color-text);
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: var(--gap);
  }
  nav a.active {
    color: var(--color-text-input);
    background-color: var(--color-bg-input);
  }
  .subMenu {
    display: flex;
    flex-direction: column;
  }
  .subMenu a {
    padding-left: calc(var(--gap)*2);
  }

  /* If width is less than 1200px make the nav menu full width */
  @media (max-width: 800px) {
    nav {
      position: fixed;
      top: 4.2rem;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-bg-input);
  }
</style>
