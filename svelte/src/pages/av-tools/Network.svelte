<!-- Javascript -->
<script>
  import { router } from '../../js/global.js'

  // Import Components
  import Icon from '../../components/Icon.svelte'

  // Data
  let serverData = {
    nics: [
      {
        "name": "Fake NIC",
        "interfaceMetric": "xx",
        "ipIsDhcp": false,
        "ip": "xxx.xxx.xxx.xxx",
        "mask": "xxx.xxx.xxx.xxx",
        "gateway": "xxx.xxx.xxx.xxx",
        "ipsAdded": [
          {
            "ip": 'xxx.xxx.xxx.xxx',
            "mask": 'xxx.xxx.xxx.xxx'
          }
        ],
        "dnsIsDhcp": false,
        "dns": [
          'xxx.xxx.xxx.xxx',
          'xxx.xxx.xxx.xxx'
        ],
      },
      {
        "name": "Fake WiFi",
        "interfaceMetric": "75",
        "ipIsDhcp": true,
        "ip": "10.0.1.69",
        "mask": "255.255.0.0",
        "gateway": "10.0.1.1",
        "dnsIsDhcp": true,
        "dns": [
          '10.0.1.5',
          '10.0.1.7'
        ],
        "ipsAdded": []
      },
      {
        "name": "Fake Ethernet",
        "interfaceMetric": "25",
        "ipIsDhcp": false,
        "ip": "192.168.1.9",
        "mask": "255.255.255.0",
        "gateway": "192.168.1.254",
        "dnsIsDhcp": false,
        "dns": [
          "192.168.1.1"
        ],
        "ipsAdded": [
          {
            "ip": "169.254.0.9",
            "mask": "255.255.0.0"
          },
          {
            "ip": "192.168.2.9",
            "mask": "255.255.255.0"
          },
          {
            "ip": "192.168.3.9",
            "mask": "255.255.255.0"
          }
        ]
      }
    ]
}
  let clientData = {
    "nicSelected": {
      "name": "Fake NIC",
      "interfaceMetric": "xx",
      "ipIsDhcp": false,
      "ip": "xxx.xxx.xxx.xxx",
      "mask": "xxx.xxx.xxx.xxx",
      "gateway": "xxx.xxx.xxx.xxx",
      "ipsAdded": [
        {
          "ip": 'xxx.xxx.xxx.xxx',
          "mask": 'xxx.xxx.xxx.xxx'
        }
      ],
      "dnsIsDhcp": false,
      "dns": [
        'xxx.xxx.xxx.xxx',
        'xxx.xxx.xxx.xxx'
      ],
    },
    "presetSelected": {
      "name": "0",
      "ipIsDhcp": false,
      "ip": "192.168.0.9",
      "mask": "255.255.255.0",
      "gateway": "192.168.0.1",
      "dnsIsDhcp": false,
      "dns": [
        "192.168.0.1",
        "1.1.1.1"
      ]
    },
    "presetViewMode": "buttons",
    "presets": [
      {
        "name": "0",
        "ipIsDhcp": false,
        "ip": "192.168.0.9",
        "mask": "255.255.255.0",
        "gateway": "192.168.0.1",
        "dnsIsDhcp": false,
        "dns": [
          "192.168.0.1",
          "1.1.1.1"
        ]
      },
      {
        "name": "1",
        "ipIsDhcp": false,
        "ip": "192.168.1.9",
        "mask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "dnsIsDhcp": false,
        "dns": [
          "192.168.1.1",
          "1.1.1.1"
        ]
      },
      {
        "name": "2",
        "ipIsDhcp": false,
        "ip": "192.168.2.9",
        "mask": "255.255.255.0",
        "gateway": "192.168.2.1",
        "dnsIsDhcp": false,
        "dns": [
          "192.168.2.1",
          "1.1.1.1"
        ]
      },
      {
        "name": "3",
        "ipIsDhcp": false,
        "ip": "192.168.3.9",
        "mask": "255.255.255.0",
        "gateway": "192.168.3.1",
        "dnsIsDhcp": false,
        "dns": [
          "192.168.3.1",
          "1.1.1.1"
        ]
      },
      {
        "name": "4",
        "ipIsDhcp": false,
        "ip": "192.168.1.9",
        "mask": "255.255.0.0",
        "gateway": "192.168.0.1",
        "dnsIsDhcp": false,
        "dns": [
          "192.168.0.1",
          "1.1.1.1"
        ]
      },
      {
        "name": "10",
        "ipIsDhcp": false,
        "ip": "10.0.0.9",
        "mask": "255.0.0.0",
        "gateway": "10.0.0.1",
        "dnsIsDhcp": false,
        "dns": [
          "10.0.0.1",
          "1.1.1.1"
        ]
      },
      {
        "name": "169",
        "ipIsDhcp": false,
        "ip": "169.254.0.9",
        "mask": "255.255.0.0",
        "gateway": "",
        "dnsIsDhcp": false,
        "dns": []
      },
      {
        "name": "172",
        "ipIsDhcp": false,
        "ip": "172.22.0.9",
        "mask": "255.255.0.0",
        "gateway": "172.22.0.2",
        "dnsIsDhcp": false,
        "dns": [
          "172.22.0.2",
          "1.1.1.1"
        ]
      }
    ]
  }

  // Functions
  function interfaceChange(event) {
    const selectedNic = serverData.nics.find(nic => nic.name === event.target.value)
    clientData.nicSelected = selectedNic
    console.log("Interface selected changed to", event.target.value, selectedNic)
  }
  function actionNew() {
    console.log("Open Popup to create a preset")
    $router.dialogObj = $router.pageObjs.SetIP
  }
  function actionSet() {
    console.log("Set current preset as network settings", clientData.presetSelected)
  }
  function actionAdd() {
    console.log("Add current preset to network settings", clientData.presetSelected)
  }
  function actionRemove() {
    console.log("Remove preset from list", clientData.presetSelected)
  }
  function presetChange(preset) {
    console.log("Selected preset changed to", preset)
    clientData.presetSelected = preset
  }
  function presetChangeToDHCP() {
    console.log("Selected preset changed to DHCP")
    clientData.presetSelected = {
      "name": "DHCP",
      "ipIsDhcp": true,
      "dnsIsDhcp": true,
    }
  }
  function changePresetViewMode() {
    if (clientData.presetViewMode === "buttons") clientData.presetViewMode = "table"
    else if (clientData.presetViewMode === "table") clientData.presetViewMode = "buttons"
    else clientData.presetViewMode = "table"
    console.log("Preset View Mode Changed to", clientData.presetViewMode)
  }

  // Component Startup
  import { onMount } from 'svelte';
  let doneLoading = false
  onMount(async () => {

    // If the width of the screen is greater than 1200 show the presets in table form
    clientData.nicSelected = serverData.nics[0]

    // If the width of the screen is greater than 1200 show the presets in table form
    if (document.documentElement.offsetWidth > 1200) {
      clientData.presetViewMode = "table"
    }

    // Startup complete
    doneLoading = true

  })

</script>

<!-- HTML -->
<article>

  <!-- Server Interfaces -->
  <aside>
    <h2>Server Interfaces</h2>

    <!-- NIC Select -->
    <label>
      Select Interface <br>
      <select on:input={interfaceChange}>
        {#each serverData.nics as nic }
          <option>{nic.name}</option>
        {/each}
      </select>
    </label>

    <!-- NIC Info -->
    <div class="nicInfo">
      <div class="brightBig">{clientData.nicSelected.ip}</div>
      <div>
        <div>Mask:</div>
        <div>{clientData.nicSelected.mask}</div>
      </div>
      <div>
        <div>Gate:</div>
        <div>{clientData.nicSelected.gateway}</div>
      </div>
      <br>
      {#if clientData.nicSelected.ipsAdded.length > 0}
        {#each  clientData.nicSelected.ipsAdded as ipAdd}
          <div class="flex bright">
            <div>+ IP:</div>
            <div>{ipAdd.ip}</div>
          </div>
          <div>
            <div>Mask:</div>
            <div>{ipAdd.mask}</div>
          </div>
          <br>
        {/each}
      {/if}
      {#if clientData.nicSelected.dns.length > 0}
        {#each clientData.nicSelected.dns as dns, i}
          <div>
            <div>DNS{i+1}:</div>
            <div>{dns}</div>
          </div>
        {/each}
      {/if}
      <br>
      <div>
        <div>DHCP:</div>
        <div>{clientData.nicSelected.ipIsDhcp}</div>
      </div>
      <div>
        <div>Metric:</div>
        <div>{clientData.nicSelected.interfaceMetric}</div>
      </div>
    </div>

  </aside>

  <!-- Preset Actions + Presets -->
  <section>

    <!-- Preset Actions -->
    <div class="actions">
      <h2>Preset Actions</h2>
      <div class="actionButtons">
        <button on:click={actionNew} class="cyan">
          New 
          <Icon name="square-plus" size=1/>
        </button>
        <button on:click={actionSet} class="green">
          Set 
          <Icon name="check" size=1/>
        </button>
        <button on:click={actionAdd} class="yellow">
          Add 
          <Icon name="plus" size=1/>
        </button>
        <button on:click={actionRemove} class="red">
          Remove
          <Icon name="trash" size=1/>
        </button>
      </div>
    </div>

    <!-- Presets -->
    <div class="presets">
      <h2>
        <button on:click={changePresetViewMode}>
          Select Preset
          <Icon name="arrows-rotate" size=.8 style="display: inline;" color="var(--color-text-dim)"/>
        </button>
      </h2>
      
      <!-- Preset Buttons View -->
      {#if clientData.presetViewMode === "buttons"}
        <div class="presetButtons">
          <button
            on:click={() => presetChangeToDHCP()}
            class={"DHCP" === clientData.presetSelected.name ? "presetSelected" : ""}
          >
            <span>DHCP</span>
            <span>Request an address</span>
            {#if "DHCP" === clientData.presetSelected.name}              
              <div class="checkmark">
                <Icon name="check"/>
              </div>
            {/if}
          </button>
          {#each clientData.presets as preset}
            <button
              on:click={() => presetChange(preset)}
              class={preset.name === clientData.presetSelected.name ? "presetSelected" : ""}
            >
              <span>{preset.ip}</span>
              <span>Mask: {preset.mask}</span>
              {#if preset.gateway}
                <span>Gate: {preset.gateway}</span>
              {/if}
              {#if preset.dns.length > 0}
                {#each preset.dns as dns, i}
                  <div>DNS{i+1}: {dns}</div>
                {/each}
              {/if}
              {#if preset.name === clientData.presetSelected.name}              
                <div class="checkmark">
                  <Icon name="check"/>
                </div>
              {/if}
            </button>
          {/each}
        </div>

      <!-- Preset Table View -->
      {:else if clientData.presetViewMode === "table"}
        <div class="presetTable">
          <button>
            <span>IP</span>
            <span>Mask</span>
            <span>Gateway</span>
            <span>DNS1</span>
            <span>DNS2</span>
          </button>
          <button
            on:click={() => presetChangeToDHCP()}
            class={"DHCP" === clientData.presetSelected.name ? "presetSelected" : ""}
          >
            <span>DHCP</span>
            <span>-</span>
            <span>-</span>
            <span>-</span>
            <span>-</span>
            {#if "DHCP" === clientData.presetSelected.name}              
              <div class="checkmark">
                <Icon name="square-check"/>
              </div>
            {:else}
              <div class="checkmark">
                <Icon name="square-outline"/>
              </div>
            {/if}
          </button>
          {#each clientData.presets as preset}
            <button
              on:click={() => presetChange(preset)}
              class={preset.name === clientData.presetSelected.name ? "presetSelected" : ""}
            >
              <span>{preset.ip}</span>
              <span>{preset.mask}</span>
              <span>{preset.gateway || "-"}</span>
              <span>{preset.dns[0] || "-"}</span>
              <span>{preset.dns[1] || "-"}</span>
              {#if preset.name === clientData.presetSelected.name}              
                <div class="checkmark">
                  <Icon name="square-check"/>
                </div>
              {:else}
                <div class="checkmark">
                  <Icon name="square-outline"/>
                </div>
              {/if}
            </button>
          {/each}
        </div>

      {/if}

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
    min-width: 16rem;
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
  /* If width is less than 800px */
  @media (max-width: 55rem) {
    article {
      display: flex;
      flex-direction: column;
    }
    aside {
      flex-grow: 1;
      padding: var(--gap);
      border-right: none;
      border-bottom: var(--border);
      border-color: var(--color-bg-header);
    }
  }

  /* Nic Info */
  .nicInfo {
    display: grid;
    align-content: flex-start;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    /* gap: var(--pad); */
  }
  .nicInfo div.brightBig {
    color: var(--color-text-bright);
    font-size: 1.2rem
  }
  .nicInfo div.bright {
    color: var(--color-text-bright);
  }
  .nicInfo div {
    display: flex;
    gap: var(--pad);
  }

  /* Prest Actions */
  .actions {
    display: grid;
    align-content: flex-start;
    gap: var(--pad);
  }
  .actionButtons {
    display: flex;
    align-items: center;
    gap: var(--pad);
    flex-wrap: wrap;
  }
  .actionButtons button {
    display: flex;
    align-items: center;
    gap: var(--pad);
  }

  /* Presets */
  .presets {
    display: grid;
    align-content: flex-start;
    gap: var(--pad);
  }
  h2 button {
    display: flex;
    gap: var(--pad);
    padding: 0;
    background-color: transparent;
    border-radius: 0;
  }

  /* Preset Buttons */
  .presetButtons {
    display: flex;
    gap: var(--gap);
    font-family: var(--font-mono);
    font-size: 0.9rem;
    flex-wrap: wrap;
    /* max-width: 69rem; */
  }
  .presetButtons button {
    width: 250px;
    text-align: left;
    display: grid;
    align-content: flex-start;
    padding: var(--pad);
    background-color: var(--color-bg-section);
    color: var(--color-text-dim);
    position: relative;
  }
  .presetButtons button span:first-child {
    text-align: left;
    display: grid;
    gap: var(--gap);
    font-size: 1.2rem;
    color: var(--color-text-bright);
  }

  /* Preset Table */
  .presetTable {
    display: grid;
    align-content: flex-start;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    overflow: auto;
  }
  .presetTable button {
    display: flex;
    gap: var(--gap);
    text-align: left;
    position: relative;
    background-color: var(--color-bg);
    color: var(--color-text);
    width: fit-content;
  }
  .presetTable button:nth-child(1) {
    color: var(--color-text-bright);
    border-radius: 0;
    border-bottom: var(--border);
    margin-bottom: .25rem;
  }
  .presetTable button span:nth-child(1) {
    width: 7.4rem;
    margin-left: 2rem;
  }
  .presetTable button span:nth-child(2) {
    width: 7.4rem;
  }
  .presetTable button span:nth-child(3) {
    width: 7.4rem;
  }
  .presetTable button span:nth-child(4) {
    width: 7.4rem;
  }
  .presetTable button span:nth-child(5) {
    width: 7.4rem;
  }
  .presetTable .presetSelected {
    color: var(--color-text-input);
    background-color: var(--color-bg-input);
  }
  .presetTable .presetSelected .checkmark {
    position: absolute;
    top: var(--pad);
    left: var(--pad);
    font-size: 1.2rem;
  }
  .presetTable button:not(.presetSelected) .checkmark {
    position: absolute;
    top: var(--pad);
    left: var(--pad);
    font-size: 1.2rem;
    color: var(--color-text-dim);
  }
  @media (hover: hover) {
    .presetTable button:hover {
      background-color: var(--color-bg-section);
    }
    .presetTable .presetSelected:hover {
      background-color: var(--color-bg-input);
    }
  }

  /* Selected */
  .presetButtons .presetSelected {
    color: var(--color-text-purple);
    background-color: var(--color-bg-purple);
    
    color: var(--color-text-input);
    background-color: var(--color-bg-input);
  }
  .presetButtons .presetSelected span:first-child {
    color: var(--color-text-purple);
    color: var(--color-text-bright);
  }
  .presetButtons .presetSelected .checkmark {
    position: absolute;
    top: var(--pad);
    right: var(--pad);
    color: var(--color-text-purple);
    color: var(--color-text-bright);
    font-size: 1.2rem;
  }

</style>