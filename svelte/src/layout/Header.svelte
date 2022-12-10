<!-- Javascript -->
<script>

  // Custom events
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  // Components 
  import Icon from '../components/Icon.svelte'

  // Exports
  export let title = "Title"
  const iconSize = 1.5

  // Theme
  let theme = "dark"
  let themes = ["dark"]
  $: document.documentElement.classList = theme
  const themesGlob = import.meta.glob('../themes/**/*.css')
  for (const filePath in themesGlob) {
    themesGlob[filePath]()
    const themeName = filePath.replace('../themes/', '').replace('.css', '')
    themes.push(themeName)
  }

</script>

<!-- HTML -->
<header>
  <button aria-label="navMenu" on:click={() => dispatch('nav')}>
    <Icon name="bars" size={iconSize} />
  </button>
  <h2>{title}</h2>
  <select bind:value={theme}>
    {#each themes as theme}
      <option>{theme}</option>
    {/each}
  </select>
</header>

<!-- CSS -->
<style>
  header {
    color: var(--color-text-header);
    background-color: var(--color-bg-header);
  
    overflow-x: auto;
    overflow-y: hidden;
    
    display: flex;
    align-items: center;

    border-bottom: var(--border);
    border-color: var(--color-border-header);
  }
  header h2 {
    color: var(--color-text-header);
  }
  header button {
    color: var(--color-text-header);
    height: 4.2rem;
    border-radius: 0;
    padding: var(--gap);
    background-color: transparent;
  }
  header select {
    color: var(--color-text-header);
    /* height: 4.2rem; */
    /* border-radius: 0; */
    /* background-color: transparent; */
    margin-right: 1rem;
    margin-left: auto;
  }
</style>
