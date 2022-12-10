<!-- Javascript -->
<script>

  // Components
  import Icon from '../../components/Icon.svelte'

  // Exports
  export let showCRLF = true
  // export let hexSpaces = true
  export let lines = [
    {
      wasReceived: true,
      timestampISO: '2022-10-16T21:05:38.425Z',
      data: 'No data yet...',
    }
  ]

  // Variables
  let terminalElementWidth
  
  // Time Column
  $: timeColFormat = terminalElementWidth > 600 ? "time" : "timeShort"
  $: timeColWidth = terminalElementWidth > 600 ? "6.75rem" : "4rem"
  function timePress() {
    if (timeColFormat === "datetime") {
      timeColFormat = "time"
      timeColWidth = "6.75rem"
    }
    else if (timeColFormat === "time") {
      timeColFormat = "timeShort"
      timeColWidth = "4rem"
    }
    else {
      timeColFormat = "datetime"
      timeColWidth = "12rem"
    }
  }

  // Max lines in the Terminal
  let maxLines = 1000
  $: if (lines.length > maxLines) lines.shift()

  // Scroll to the bottom of the Terminal if the scroll bar is at the bottom everytime "lines" updates
  let terminalElement
  function scrollToBottomOfElement(element) {
    let currentScrollHeight = element?.scrollTop + element?.offsetHeight + 10
    let totalScrollHeight = element?.scrollHeight
    // If the scroll bar is at the bottom
    if (currentScrollHeight >= totalScrollHeight) {
      element.scrollTop += 100
      setTimeout(() => element.scrollTop += 100, 5)
    }
  }
  $: if (lines) scrollToBottomOfElement(terminalElement)
  
  // Unescape the delimiter if needed
  $: if (showCRLF) escapeCRLF(lines)
  function escapeCRLF(lines) {
    lines.forEach(line => {
      line.data = line.data.replace(/\r/g, "\\r")
      line.data = line.data.replace(/\n/g, "\\n")
      // delimiter = delimiter.replace(/\\x/g, "")
      // delimiter = delimiter.replace(/0x/g, "")
    })
  }
  // delimiter = delimiter.replace(/\\r/g, CR.ascii)
  // delimiter = delimiter.replace(/\\n/g, LF.ascii)
  // delimiter = delimiter.replace(/ /g, "")
  // delimiter = delimiter.replace(/\\x/g, "")
  // delimiter = delimiter.replace(/0x/g, "")

  // Test Received Data
  // let testSends = false
  // setInterval(() => {
  //   if (testSends) {
  //     lines.push({wasReceived: lines.length%4, timestampISO: new Date(Date.now()).toISOString(), data: lines.length * 89 * 53})
  //     lines = lines
  //   }
  // }, 100)
  // setInterval(() => testSends = !testSends , 6 * 1000 )

</script>

<!-- HTML -->
<section
  class="terminal"
  style="--col2-width: {timeColWidth}"
  bind:this={terminalElement}
  bind:offsetWidth={terminalElementWidth}
>

  <!-- Header -->
  <div class="terminal-header">
    <div class="terminal-col1"><Icon name="up-down" size=.8 style="display: inline;"/></div>
    <button class="terminal-col2 textButton" on:click={timePress}>
      {timeColFormat === "datetime" ? "Date Time" : "Time"}
      <Icon name="arrows-rotate" size=.8 style="display: inline;" color="var(--color-text-dim)"/>
    </button>
    <pre class="terminal-col3">Sent <Icon name="up-long" size=.8 style="display: inline;" color="var(--color-bg-green)"/> / Received <Icon name="down-long" size=.8 style="display: inline;" color="var(--color-bg-blue)"/></pre>
  </div>

  <!-- Lines -->
  <div class="terminal-lines">
    {#each lines as line}
      <div class="terminal-line textButton">

        <!-- Col1 -->
        {#if line.wasReceived}
          <div class="terminal-col1"><Icon name="down-long" size=.8 style="display: inline;" color="var(--color-bg-blue)"/></div>
        {:else}
          <div class="terminal-col1"><Icon name="up-long" size=.8 style="display: inline;" color="var(--color-bg-green)"/></div>
        {/if}

        <!-- Col2 -->
        <div class="terminal-col2">
          {#if timeColFormat === "datetime"}
            <span>{line.timestampISO.split('T')[0]}</span>
            <span>{line.timestampISO.split('T')[1].split('Z')[0]}</span>
          {:else if timeColFormat === "time"}
            <span>{line.timestampISO.split('T')[1].split('Z')[0]}</span>
          {:else}
            <span>{line.timestampISO.split('T')[1].slice(3).split('.')[0]}</span>
          {/if}
        </div>

        <!-- Col3 -->
        <div class="terminal-col3">
          <pre>{line.data}</pre>
        </div>

      </div>
    {/each}
    
  </div>
</section>

<!-- CSS -->
<style>
  section {
    padding: 0;
  }
  .terminal {
    background-color: var(--color-bg);
    border: var(--border);
    border-color: var(--color-border);
    font-family: var(--font-mono);
    font-size: .8rem;
    display: grid;
    align-content: flex-start;
    overflow: auto;
    /* resize: both; */
  }

  /* Header */
  .terminal-header {
    display: flex;
    color: var(--color-text);
    padding: var(--pad);
    border-bottom: var(--border);
    border-color: var(--color-border);
    position: sticky;
    top: 0;
    background-color: var(--color-bg);
    z-index: 1;
  }

  /* Lines */
  .terminal-lines {
    padding: var(--pad);
    padding-top: var(--pad);
    padding-bottom: var(--pad);
    height: 40vh;
    max-height: 40vh;
  }
  .terminal-line {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
  }
  .terminal-line:hover,
  .terminal-line:active,
  .terminal-line:focus {
    background-color: var(--color-bg-header);
    filter: var(--filter-brightness-hover);
  }

  /* Columns */
  .terminal-col1 {
    min-width: 1.5rem;
  }
  .terminal-col2 {
    min-width: var(--col2-width);
    color: var(--color-text-dim);
  }
  .terminal-col2 {
    min-width: var(--col2-width);
    color: var(--color-text-dim);
  }

  .textButton {
    padding: 0;
    background-color: transparent;
    text-align: left;
    color: currentColor;
    border-radius: 0;
  }
  
  /* Scroll Bar */
  ::-webkit-scrollbar-thumb:vertical {
    background: var(--color-bg-blue);
    border-left: var(--border);
    border-color: var(--color-border);
  }
  ::-webkit-scrollbar-thumb:horizontal {
    background: var(--color-bg-green);
    border-top: var(--border);
    border-color: var(--color-border);
  }
  ::-webkit-scrollbar-track:vertical {
    border-left: var(--border);
    border-color: var(--color-border);
  }
  ::-webkit-scrollbar-track:horizontal {
    border-top: var(--border);
    border-color: var(--color-border);
  }
  ::-webkit-scrollbar-corner {
    border-left: var(--border);
    border-top: var(--border);
    border-color: var(--color-border);
  }
  ::-webkit-resizer {
    border-left: var(--border);
    border-top: var(--border);
    border-color: var(--color-border);
    background: var(--color-bg-cyan);
  }

</style>