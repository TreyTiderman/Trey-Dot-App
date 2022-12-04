<!-- Javascript -->
<script>

  // Components
  import Icon from '../../components/Icon.svelte'
  import Slider from '../../components/Slider.svelte'
  import Box from '../../components/Box.svelte'

</script>

<!-- Icon -->
<article>

  <!-- Icon -->
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

  <hr>

  <!-- Slider -->
  <h2><code>&lt;Slider&gt;</code></h2>
  <Slider label="Label"/>
  <Slider label="Specific Min Max and Units" min=-36 max=6 value=-12 units="dB"/>
  <Slider label="Disabled" disabled=true/>

</article>

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
</style>