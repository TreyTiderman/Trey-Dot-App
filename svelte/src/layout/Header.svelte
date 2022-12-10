<!-- Javascript -->
<script>
  import { get, dateObjToTime, dateObjToDate } from "../js/helper.js"

  // Custom events
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  // Components 
  import Icon from '../components/Icon.svelte'

  // Exports
  export let title = "Title"
  const iconSize = 1.5

  let theme = "dark"
  $: document.documentElement.classList = theme

</script>

<!-- HTML -->
<header>
  <button on:click={() => dispatch('nav')}>
    <Icon name="bars" size={iconSize} />
  </button>
  <h2>{title}</h2>
  <button style="margin-left: auto;"
    on:click={() => theme = theme === "dark" ? "light" : "dark"}>
    <Icon name="circle-half-stroke" size={iconSize} />
  </button>
</header>

<!-- CSS -->
<style>
  header {
    color: var(--color-text-bright);
    background-color: var(--color-bg-header);
  
    overflow-x: auto;
    overflow-y: hidden;
    
    display: flex;
    align-items: center;
  }
  header button {
    height: 4.2rem;
    border-radius: 0;
    padding: var(--gap);
    background-color: transparent;
  }
</style>
