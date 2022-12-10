<!-- Javascript -->
<script>
  import { validIPv4, validMask } from "../../js/helper.js"

  // Import Components
  import Icon from '../../components/Icon.svelte'

  const data = {
    value: {
      ip: "192.168.1.2",
      mask: "255.255.255.0",
      gateway: "192.168.1.1",
      dns: ["192.168.1.1", "1.1.1.1"],
    },
    placeholder: {
      ip: "192.168.1.2",
      mask: "255.255.255.0",
      gateway: "192.168.1.1",
      dns: ["192.168.1.1", "1.1.1.1"],
    }
  }

</script>

<!-- HTML -->
<article>

  <!-- Set IP -->
  <div class="grid">
    <label>
      IP address <br>
      <input type="text"
        bind:value={data.value.ip}
        on:keyup={event => { if (event.key === "p") data.value.ip = data.placeholder.ip }}
        class:error={!validIPv4(data.value.ip) && data.value.ip !== ""}
        placeholder={data.placeholder.ip}> <br>
      {#if !validIPv4(data.value.ip) && data.value.ip !== ""}
        <div class="flex error-message">
          <Icon name="circle-exclamation"/>
          <small>{validIPv4(data.value.ip, true)}</small>
        </div>
      {/if}
    </label>
    <label>
      Subnet Mask <br>
      <input type="text"
        bind:value={data.value.mask}
        on:keyup={event => { if (event.key === "p") data.value.mask = data.placeholder.mask }}
        class:error={!validMask(data.value.mask) && data.value.mask !== ""}
        placeholder={data.placeholder.mask}> <br>
      {#if !validMask(data.value.mask) && data.value.mask !== ""}          
        <div class="flex error-message">
          <Icon name="circle-exclamation"/>
          <small>{validMask(data.value.mask, true)}</small>
        </div>
      {/if}
    </label>
    <label>
      Gateway <br>
      <input type="text"
        bind:value={data.value.gateway}
        on:keyup={event => { if (event.key === "p") data.value.gateway = data.placeholder.gateway }}
        class:error={!validIPv4(data.value.gateway) && data.value.gateway !== ""}
        placeholder={data.placeholder.gateway}> <br>
      {#if !validIPv4(data.value.gateway) && data.value.gateway !== ""}          
        <div class="flex error-message">
          <Icon name="circle-exclamation"/>
          <small>{validIPv4(data.value.gateway, true)}</small>
        </div>
      {/if}
    </label>
  </div>
  
  <!-- Set DNS -->
  <div class="grid">
    <label>
      DNS 1 <br>
      <input type="text"
        bind:value={data.value.dns[0]}
        on:keyup={event => { if (event.key === "p") data.value.dns[0] = data.placeholder.dns[0] }}
        class:error={!validIPv4(data.value.dns[0]) && data.value.dns[0] !== ""}
        class:correct={validIPv4(data.value.dns[0])}
        placeholder={data.placeholder.dns[0]}> <br>
      {#if !validIPv4(data.value.dns[0]) && data.value.dns[0] !== ""}          
        <div class="flex error-message">
          <Icon name="circle-exclamation"/>
          <small>{validIPv4(data.value.dns[0], true)}</small>
        </div>
      {/if}
    </label>
    <label>
      DNS 2 <br>
      <input type="text"
        bind:value={data.value.dns[1]}
        on:keyup={event => { if (event.key === "p") data.value.dns[1] = data.placeholder.dns[1] }}
        class:error={!validIPv4(data.value.dns[1]) && data.value.dns[1] !== ""}
        placeholder={data.placeholder.dns[1]}> <br>
      {#if !validIPv4(data.value.dns[1]) && data.value.dns[1] !== ""}          
        <div class="flex error-message">
          <Icon name="circle-exclamation"/>
          <small>{validIPv4(data.value.dns[1], true)}</small>
        </div>
      {/if}
    </label>
    <label>
      <br>
      <div class="buttons">
        <button class="green"
          on:click={() => {
            console.log("Set network settings", data.value)
          }}
          disabled={!(
            validIPv4(data.value.ip) &&
            validMask(data.value.mask) &&
            validIPv4(data.value.gateway) &&
            validIPv4(data.value.dns[0]) &&
            validIPv4(data.value.dns[1])
          )}
        >
          Set 
          <Icon name="check" size=1/>
        </button>
        <button class="cyan"
          on:click={() => {
            console.log("Create a new preset", data.value)
          }}
          disabled={!(
            validIPv4(data.value.ip) &&
            validMask(data.value.mask) &&
            validIPv4(data.value.gateway) &&
            validIPv4(data.value.dns[0]) &&
            validIPv4(data.value.dns[1])
          )}
        >
          Save 
          <Icon name="square-plus" size=1/>
        </button>
      </div>
    </label>
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
  .error {
    box-shadow: inset 0px 0px 0px 2px var(--color-bg-red);
  }
  .error-message {
    margin-top: var(--pad);
    gap: var(--pad);
    color: var(--color-bg-red);
  }

  input {
    font-family: var(--font-mono);
  }

</style>