<!-- Javascript -->
<script>

  // Store
  import { router } from "../js/global.js"

  // Components
  import Icon from '../components/Icon.svelte'

  // Exports
  export let pageObj
  export let title = "Title"
  export let closeIcon = true

  // Variables
  let isDown
  var mousePositionStart
  let mousePositionOffset
  let mainTranslate = {x: 0, y: 0}
  let dialogElement
  let mainElement

  // Functions
  export function close() {
    $router.dialogObj = null
  }
  function closeIfBackground(event) {
    if (event.target.localName === 'dialog') close()
  }
  function mousedown(event) {
    isDown = true
    mousePositionStart = {
      x: event.clientX,
      y: event.clientY,
    }
    let transformString = mainElement.style.transform
    if (transformString === "") transformString = "0, 0"
    transformString = transformString
      .replace('translate(','')
      .replace('px','')
      .replace('px','')
      .replace(')','')
      .split(',')
    mainTranslate = {
      x: Number(transformString[0]),
      y: Number(transformString[1]),
    }
  }
  function mouseup() {
    isDown = false
  }
  function mousemove(event) {
    event.preventDefault()
    if (isDown) {
      mousePositionOffset = {
        x : event.clientX - mousePositionStart.x + mainTranslate.x,
        y : event.clientY - mousePositionStart.y + mainTranslate.y
      }
      mainElement.style.transform = 
        `translate(${mousePositionOffset.x}px, ${mousePositionOffset.y}px)`
    }
  }

</script>

<!-- HTML -->
{#if pageObj}
<dialog 
  bind:this={dialogElement}
  on:mousedown={closeIfBackground}
  on:mouseup={mouseup}
  on:mouseleave={mouseup}
  on:mousemove={mousemove}
>
  <main style={$$props.style} bind:this={mainElement}>
  <h2
    on:mousedown={mousedown}
  >{title}</h2>
  {#if closeIcon}
    <button class="dialogExit" on:click={close}>
      <Icon name="xmark"/>
    </button>
  {/if}
  <svelte:component this={pageObj.pageComponent}/>
</dialog>
{/if}

<!-- CSS -->
<style>
  dialog {
    z-index: 20;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    padding: 0;
    padding: var(--pad);
    border: 0;
    margin: auto;
    background-color: transparent;
    display: grid;
    place-items: center;
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    overflow: auto;
  }
  dialog::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.75;
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
  }
  main {
    position: relative;
    display: grid;
    grid-template-rows: 4rem 1fr;
    align-items: flex-start;
    border-radius: var(--radius-2);
    background-color: var(--color-bg);
    border: var(--border);
    border-color: var(--color-border-bright);
    transform: translate(0px, 0px);
  }
  h2 {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    align-items: center;
    height: 4rem;
    margin-right: 4rem;
    width: 100%;
    padding: var(--gap);
    background-color: var(--color-header);
    border-radius: calc(var(--radius-2)/1.24) calc(var(--radius-2)/1.24) 0 0;
    border-bottom: var(--border);
    color: var(--color-text-bright);
  }
  .dialogExit {
    background-color: transparent;
    background-color: var(--color-header);
    border-bottom: var(--border);
    color: var(--color-text);
    line-height: 1;
    margin: 0;
    
    position: absolute;
    top: -.1rem;
    top: 0;
    right: 0;
    border-radius: 0 calc(var(--radius-2)/1.24) 0 0;
    
    cursor: pointer;
    font-size: 1.6rem;
    height: 4rem;
    width: 4rem;
    padding: var(--gap);
    /* padding-bottom: calc(var(--pad)/2); */
  }
  /* If width is less than 800px */
  @media (max-width: 55rem) {
    main {
      display: flex;
      flex-direction: column;
    }
  }
</style>
