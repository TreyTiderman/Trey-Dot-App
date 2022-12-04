<!-- Javascript -->
<script>

  // Components
  import Icon from '../../components/Icon.svelte'

</script>

<!-- HTML -->
<article>
  <h2>Heading</h2>
  <p>
    Paragraph of text...
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Dolore doloribus nobis error repellat vitae, sit quasi 
    earum eveniet necessitatibus architecto alias officia 
    nemo accusamus ratione, delectus sint aut porro nam.
  </p>
  <div class="flex">
    <button>Button</button>
    <button class="clear">clear</button>
    <button disabled>disabled</button>
  </div>
  <div class="flex">
    <button class="grey">grey</button>
    <button class="red">red</button>
    <button class="orange">orange</button>
    <button class="yellow">yellow</button>
    <button class="lime">lime</button>
    <button class="green">green</button>
    <button class="cyan">cyan</button>
    <button class="blue">blue</button>
    <button class="purple">purple</button>
    <button class="pink">pink</button>
  </div>
  <section>
    <h2>Heading</h2>
    <p>
      Paragraph of text...
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Dolore doloribus nobis error repellat vitae, sit quasi 
      earum eveniet necessitatibus architecto alias officia 
      nemo accusamus ratione, delectus sint aut porro nam.
    </p>
    <div class="flex">
      <button>Button</button>
      <button class="clear">clear</button>
      <button disabled>disabled</button>
    </div>
    <div class="flex">
      <button class="grey">grey</button>
      <button class="red">red</button>
      <button class="orange">orange</button>
      <button class="yellow">yellow</button>
      <button class="lime">lime</button>
      <button class="green">green</button>
      <button class="cyan">cyan</button>
      <button class="blue">blue</button>
      <button class="purple">purple</button>
      <button class="pink">pink</button>
    </div>
  </section>
</article>

<!-- CSS -->
<style>
  article {
    padding: var(--gap);
    max-width: 1200px;
    overflow: auto;
    margin: auto;
    height: 100%;

    display: grid;
    gap: var(--gap);
    align-content: flex-start;
  }
  section {
    padding: var(--gap);
    background-color: var(--color-header);
    border-radius: var(--radius-2);
    display: grid;
    gap: var(--gap);
    align-content: flex-start;
  }
  .flex {
    display: flex;
    gap: var(--gap);
    flex-wrap: wrap;
  }
  button.clear {
    background-color: transparent;
  }
  button.grey {
    background-color: var(--color-bg-grey);
    color: var(--color-text-grey);
  }
  button.red {
    background-color: var(--color-bg-red);
    color: var(--color-text-red);
  }
  button.orange {
    background-color: var(--color-bg-orange);
    color: var(--color-text-orange);
  }
  button.yellow {
    background-color: var(--color-bg-yellow);
    color: var(--color-text-yellow);
  }
  button.lime {
    background-color: var(--color-bg-lime);
    color: var(--color-text-lime);
  }
  button.green {
    background-color: var(--color-bg-green);
    color: var(--color-text-green);
  }
  button.cyan {
    background-color: var(--color-bg-cyan);
    color: var(--color-text-cyan);
  }
  button.blue {
    background-color: var(--color-bg-blue);
    color: var(--color-text-blue);
  }
  button.purple {
    background-color: var(--color-bg-purple);
    color: var(--color-text-purple);
  }
  button.pink {
    background-color: var(--color-bg-pink);
    color: var(--color-text-pink);
  }
</style>