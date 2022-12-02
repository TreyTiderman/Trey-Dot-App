<!-- Javascript -->
<script>

  // Import Components
  import Icon from '../../components/Icon.svelte'
  import { router } from '../../js/global.js'

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
      "interfaceMetric": "xx10",
      "ipIsDhcp": false,
      "ip": "xxx.xxx.xxx.xxx1",
      "mask": "xxx.xxx.xxx.xxx2",
      "gateway": "xxx.xxx.xxx.xxx3",
      "dnsIsDhcp": false,
      "dns": [
        'xxx.xxx.xxx.xxx4',
        'xxx.xxx.xxx.xxx5'
      ],
      "ipsAdded": [
        {
          "ip": 'xxx.xxx.xxx.xxx6',
          "mask": 'xxx.xxx.xxx.xxx7'
        }
      ]
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
    console.log("Interface selected changed to", event.target.value)
  }
  function actionNew() {
    console.log("Open Popup to create a preset")
    $router.dialogObj = {
      name: {
        header: "Network Settings",
        nav: "Network Settings"
      },
      pageComponent: SetIP,
    }
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
      <div>{clientData.nicSelected.ip}</div>
      <div>Mask: {clientData.nicSelected.mask}</div>
      <div>Gate: {clientData.nicSelected.mask}</div>
      <br>
      {#if clientData.nicSelected.ipsAdded.length > 0}
        {#each  clientData.nicSelected.ipsAdded as ipAdd}
          <div>+ IP: {ipAdd.ip}</div>
          <div>Mask: {ipAdd.mask}</div>
          <br>
        {/each}
      {/if}
      {#if clientData.nicSelected.dns.length > 0}
        {#each clientData.nicSelected.dns as dns, i}
          <div>DNS{i+1}: {dns}</div>
        {/each}
      {/if}
      <br>
      <div>DHCP: {clientData.nicSelected.ipIsDhcp}</div>
      <div>Metric: {clientData.nicSelected.interfaceMetric}</div>
    </div>

  </aside>

  <!-- Preset Actions + Presets -->
  <section>

    <!-- Preset Actions -->
    <div class="actions">
      <h2>Preset Actions</h2>
      <div class="actionButtons">
        <button on:click={actionNew}>
          New 
          <Icon name="square-plus" size=1/>
        </button>
        <button on:click={actionSet}>
          Set 
          <Icon name="check" size=1/>
        </button>
        <button on:click={actionAdd}>
          Add 
          <Icon name="plus" size=1/>
        </button>
        <button on:click={actionRemove}>
          Remove
          <Icon name="trash" size=1/>
        </button>
      </div>
    </div>

    <!-- Presets -->
    <div class="presets">
      <h2>Select Preset</h2>
      <div class="presetButtons">
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
    </div>

  </section>

</article>

<!-- CSS -->
<style>
  article {
    height: 100%;
    overflow: auto;
    display: flex;
  }
  aside {
    min-width: 16rem;
    padding: var(--gap);
    border-right: var(--border);
    border-color: var(--color-header);

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
      border-color: var(--color-header);
    }
  }

  /* nicInfo */
  .nicInfo {
    display: grid;
    align-content: flex-start;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    /* gap: var(--pad); */
  }
  .nicInfo div:first-child {
    color: var(--color-text-bright);
    font-size: 1.2rem
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
  .actionButtons button:nth-child(1) {
    background-color: var(--color-bg-cyan);
    color: var(--color-text-cyan);
  }
  .actionButtons button:nth-child(2) {
    background-color: var(--color-bg-green);
    color: var(--color-text-green);
  }
  .actionButtons button:nth-child(3) {
    background-color: var(--color-bg-yellow);
    color: var(--color-text-yellow);
  }
  .actionButtons button:nth-child(4) {
    background-color: var(--color-bg-red);
    color: var(--color-text-red);
  }

  /* Presets */
  .presets {
    display: grid;
    align-content: flex-start;
    gap: var(--pad);
  }
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
    background-color: var(--color-bg-2);
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
  /* Selected */
  .presetButtons .presetSelected {
    color: var(--color-text-purple);
    background-color: var(--color-bg-purple);
    
    /* color: var(--color-text-primary);
    background-color: var(--color-bg-primary); */
  }
  .presetButtons .presetSelected span:first-child {
    color: var(--color-text-purple);
    /* color: var(--color-text-primary); */
  }
  .presetSelected .checkmark {
    position: absolute;
    top: var(--pad);
    right: var(--pad);
    color: var(--color-text-purple);
    font-size: 1.2rem;
  }


</style>