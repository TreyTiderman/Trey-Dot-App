<!-- Javascript -->
<script>

  // Import Components
  import Icon from '../../components/Icon.svelte'

  const data = {
    running: false,
    clientsViewMode: "cards",
    clients: [
      {
        ip: "xxx.xxx.xxx.xxx",
        mac: "FF:FF:FF:FF:FF:FF",
        expires: "When lease expires"
      },
      {
        ip: "192.168.1.110",
        mac: "00:D8:61:1A:8E:7B",
        expires: "Expires 6/26/2022, 9:53:42 AM"
      },
      {
        ip: "192.168.1.112",
        mac: "00:D8:61:1A:8E:7B",
        expires: "Address offered"
      },
    ]
  }

  // Functions
  function changeClientsViewMode() {
    if      (data.clientsViewMode === "cards")  data.clientsViewMode = "table"
    else if (data.clientsViewMode === "table")    data.clientsViewMode = "cards"
    else                                          data.clientsViewMode = "table"
    console.log("Clients View Mode Changed to", data.clientsViewMode)
  }

  // Component Startup
  import { onMount } from 'svelte';
  let doneLoading = false
  onMount(async () => {

    // If the width of the screen is greater than 1200 show the presets in table form
    if (document.documentElement.offsetWidth > 1200) {
      data.clientsViewMode = "table"
    }

    // Startup complete
    doneLoading = true

  })

</script>

<!-- HTML -->
<article>
  <aside class="grid">
    <h2>Server Settings</h2>

    <!-- On / Off -->
    <div class="flex even">
      <button class="dim" class:green={data.running}
        on:click={() => data.running = true}>
        {data.running ? "Running..." : "Start"}
      </button>
      <button class="dim" class:red={!data.running}
        on:click={() => data.running = false}>
        {data.running ? "Stop" : "Off"}
      </button>
    </div>

    <!-- Settings -->
    <div class="grid">
      <div class="flex even break-md">
        <label>
          Computer's static IP <br>
          <input type="text" class="fill mono" 
            placeholder="192.168.1.9" value="192.168.1.9">
        </label>
        <label>
          Lease Period (sec) <br>
          <input type="number" class="fill mono" 
            placeholder="3600" value="3600">
        </label>
      </div>
      <div class="flex even break-md">
        <label>
          Range Start <br>
          <input type="text" id="rangeStart" class="fill mono" 
            placeholder="192.168.1.100" value="192.168.1.100">
        </label>
        <label>
          Range End <br>
          <input type="text" id="rangeEnd" class="fill mono" 
            placeholder="192.168.1.199" value="192.168.1.199">
        </label>
      </div>
      <div class="flex even break-md">
        <label>
          Subnet Mask <br>
          <input type="text" id="mask" class="fill mono" 
            placeholder="255.255.255.0" value="255.255.255.0">
        </label>
        <label>
          Gateway <br>
          <input type="text" id="gateway" class="fill mono" 
            placeholder="192.168.1.1" value="192.168.1.254">
        </label>
      </div>
      <div class="flex even break-md">
        <label>
          DNS 1 <br>
          <input type="text" id="dns1" class="fill mono" 
            placeholder="192.168.1.1" value="192.168.1.1">
        </label>
        <label>
          DNS 2 <br>
          <input type="text" id="dns2" class="fill mono" 
            placeholder="1.1.1.1" value="1.1.1.1">
        </label>
      </div> 
    </div>

  </aside>
  <section class="grid">
    <h2>
      <button on:click={(changeClientsViewMode)}>
        Client Addresses
        <Icon name="arrows-rotate" size=.8 style="display: inline;" color="var(--color-text-dim)"/>
      </button>
    </h2>
        
    <div class="flex mono {data.clientsViewMode}">
      {#if data.clientsViewMode === "table"}        
        <div>
          <span>IP</span>
          <span>Mac Address</span>
          <span>Expires</span>
        </div>
      {/if}
      {#each data.clients as client}
        <div class="grid">
          <span>{client.ip}</span>
          <span>{client.mac}</span>
          <span>{client.expires}</span>
        </div>
      {/each}
    </div>
  </section>
</article>

<!-- CSS -->
<style>

  /* Layout */
  article {
    height: 100%;
    overflow: auto;
    display: flex;
  }
  aside {
    max-width: 26rem;
    min-width: 24rem;
    padding: var(--gap);
    border-right: var(--border);
    border-color: var(--color-bg-header);
  }
  section {
    flex-grow: 100;
    padding: var(--gap);
  }
  /* If width is less than max-width */
  @media (max-width: 65rem) {
    article {
      display: flex;
      flex-direction: column;
    }
    aside {
      max-width: none;
      flex-grow: 1;
      padding: var(--gap);
      border-right: none;
      border-bottom: var(--border);
      border-color: var(--color-bg-header);
    }
  }
  
  h2 button {
    display: flex;
    gap: var(--pad);
    padding: 0;
    background-color: transparent;
    border-radius: 0;
  }
  
  .cards > div {
    padding: var(--gap);
    border-radius: var(--radius);
    background-color: var(--color-bg-section);
    gap: 0;
  }
  .cards > div > span:first-child {
    color: var(--color-text-bright);
    font-size: 1.2rem;
  }
  .table {
    display: grid;
    align-content: flex-start;
    overflow: auto;
    gap: 0;
  }
  .table > div {
    display: flex;
    gap: var(--gap);
    padding: var(--pad);
    text-align: left;
    position: relative;
    background-color: var(--color-bg);
    color: var(--color-text);
    width: fit-content;
  }
  .table > div:nth-child(1) {
    color: var(--color-text-bright);
    border-radius: 0;
    border-bottom: var(--border);
    margin-bottom: .25rem;
  }
  .table > div span:nth-child(1) {
    width: 10rem;
  }
  .table > div span:nth-child(2) {
    width: 11rem;
  }
  .table > div span:nth-child(3) {
    width: 18rem;
  }
  @media (hover: hover) {
    .table div:hover:not(:first-child) {
      background-color: var(--color-bg-section);
    }
  }
</style>