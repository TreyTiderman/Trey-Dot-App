<!-- Javascript -->
<script>

  // Components
  import Icon from '../../components/Icon.svelte'

</script>

<!-- HTML -->
<article>
  <aside>
    <h2>aside</h2>
    <!-- Put content here -->
  </aside>
  <section>
    <h2>section</h2>
    <!-- Put content here -->
  </section>
</article>

<!-- CSS -->
<style>

  /* Flex + Widths */
  article {
    height: 100%;
    overflow: auto;
    display: flex;
  }
  aside {
    min-width: 300px;
    padding: var(--gap);
    border-right: var(--border);
    border-color: var(--color-bg-header);

    display: grid;
    align-content: flex-start;
    gap: var(--gap);
  }
  section {
    flex-grow: 1;
    padding: var(--gap);

    display: grid;
    align-content: flex-start;
    gap: var(--gap);
  }

  @media (max-width: 800px) {
    article { 
      display: flex;
      flex-direction: column;
    }
    aside {
      padding: var(--gap);
      border-right: none;
      border-bottom: var(--border);
      border-color: var(--color-bg-header);
    }
  }

  /* Max width if wanted */
  /* article {
    max-width: 1200px;
    margin: auto;
  } */

</style>