<!-- Javascript -->
<script>

  // Import Components
  import Icon from '../../components/Icon.svelte'

  function actionNew() {
    console.log("Open Popup to create a preset")
  }
  function actionSet() {
    console.log("Set current preset as network settings")
  }

</script>

<!-- HTML -->
<article>

  <!-- Set IP -->
  <div class="ip">
    <div>
      <label>
        IP address <br>
        <input type="text" placeholder="192.168.1.2">
      </label>
    </div>
    <div>
      <label>
        Subnet Mask <br>
        <input type="text" placeholder="255.255.255.0">
      </label>
    </div>
    <div>
      <label>
        Gateway <br>
        <input type="text" placeholder="192.168.1.1">
      </label>
    </div>
  </div>
  
  <!-- Set DNS -->
  <div class="dns">
    <div>
      <label>
        DNS 1 <br>
        <input type="text" placeholder="192.168.1.1">
      </label>
    </div>
    <div>
      <label>
        DNS 2 <br>
        <input type="text" placeholder="1.1.1.1">
      </label>
    </div>
    <div class="buttons">
      <button on:click={actionSet} class="green">
        Set 
        <Icon name="check" size=1/>
      </button>
      <button on:click={actionNew} class="cyan">
        Save 
        <Icon name="square-plus" size=1/>
      </button>
    </div>
  </div>

</article>

<!-- CSS -->
<style>
  article {
    height: 100%;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
    padding: var(--gap);
    width: fit-content;
    align-content: flex-start;
  }
  .ip, .dns {
    display: grid;
    gap: var(--gap);
  }
  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
    
    align-self: flex-end;
  }

  .buttons button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--pad);
    flex: 1 0 0%;
  }
  .cyan {
    background-color: var(--color-bg-cyan);
    color: var(--color-text-cyan);
  }
  .green {
    background-color: var(--color-bg-green);
    color: var(--color-text-green);
  }

  input {
    font-family: var(--font-mono);
  }

</style>