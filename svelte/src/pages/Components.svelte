<!-- Javascript -->
<script>

  // Components
  import Icon from '../components/Icon.svelte'
  import Box from '../components/Box.svelte'

  // Content
  let content = [
    {
      width: 0,
      height: 0,
    },
    {
      width: 0,
      height: 0,
    },
    {
      width: 0,
      height: 0,
    }
  ]

  let even = true
  let column = false
  let pad = 1

</script>

<!-- Icon -->
<article>
  <h2><code>&lt;Icon&gt;</code></h2>
  <div class="flex">
    <Icon name="flag" size=3/>
    <Icon name="heart" width=2 height=3 color="var(--color-bg-pink)"/>
    <Icon svgPath="/svgs/logos/playstation.svg" size=2 color="var(--color-bg-purple)"/>
    <Icon imagePath="/images/Yo.png" size=3/>
  </div>
  <div>
    <span>Icons then</span>
    <Icon name="shapes" inline/>
    <span>Icon</span>
  </div>
</article>

<!-- <article>
  <h2><code>&lt;Box&gt;</code></h2>
  <div>
    <input type="checkbox" name="chxSet1" id="even" bind:checked={even}>
    <label for="even">even</label>
  </div>
  <div>
    <input type="checkbox" name="chxSet1" id="column" bind:checked={column}>
    <label for="column">column</label>
  </div>
  <div>
    <input type="number" id="pad" min=0 max=9 bind:value={pad}>
    <label for="pad">pad</label>
  </div>
  <div>
    <Box flex {even} {column} pad={pad}>
      <div
        class="boxContent"
        bind:offsetWidth={content[0].width}
        bind:offsetHeight={content[0].height}>
        {content[0]?.width} x {content[0]?.height}
      </div>
      <div
        class="boxContent"
        bind:offsetWidth={content[1].width}
        bind:offsetHeight={content[1].height}>
        {content[1]?.width} x {content[1]?.height}
      </div>
      <div
        class="boxContent"
        bind:offsetWidth={content[2].width}
        bind:offsetHeight={content[2].height}>
        {content[2]?.width} x {content[2]?.height}
      </div>
    </Box>
  </div>

</article> -->


<!-- CSS -->
<style>
  article {
    padding: var(--gap);
    max-width: 1200px;
    margin: auto;
    display: grid;
    align-content: flex-start;
    gap: var(--gap);
    overflow: auto;
    height: 100%;
  }
  .flex {
    display: flex;
    gap: var(--gap);
    flex-wrap: wrap;
  }
  .boxContent {
    padding: var(--pad);
    font-size: smaller;
    color: var(--color-text-purple);
    background-color: var(--color-bg-purple);
    display: grid;
    place-items: center;
  }
</style>