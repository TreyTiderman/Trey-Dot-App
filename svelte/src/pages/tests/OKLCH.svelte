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
    border-color: var(--color-header);
  }
  section {
    flex-grow: 1;
    padding: var(--gap);
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
      border-color: var(--color-header);
    }
  }

  .text {
    background: oklch(80% 0.02 300);
    color: oklch(100% 0 0);
  }

  .error {
    background: oklch(90% 0.04 30);
    color: oklch(50% 0.19 27 / 85%);
  }

</style>