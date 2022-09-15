
<script lang="ts">
import SvgDarkMode from "./SvgDarkMode.svelte";
import SvgLightMode from "./SvgLightMode.svelte";

let isDarkMode: boolean = false
let checked: boolean = false
  $: isOpen = checked ? '-open' : ''

let page = document.querySelector('html')
let boxesBackgroundColor = getComputedStyle(page).getPropertyValue('--color-fill')
let boxLineColor = getComputedStyle(page).getPropertyValue('--color-stroke')
let sheetBackgroundColor = getComputedStyle(page).getPropertyValue('--color-background')
let inputColorSelected = getComputedStyle(page).getPropertyValue('--color-input-selected') 
let fontColor = getComputedStyle(page).getPropertyValue('--color-font') 


function restoreColors() {

  if(page.className === '-dark_mode') {
    boxesBackgroundColor = '#6b6b6b'
    boxLineColor = '#1b1b1b'
    sheetBackgroundColor = '#202020'
    inputColorSelected = '#d3d3d326'
    fontColor = '#e6e6e6'
  }
  else {
    boxesBackgroundColor = getComputedStyle(page).getPropertyValue('--color-fill-default')
    boxLineColor = getComputedStyle(page).getPropertyValue('--color-stroke-default')
    sheetBackgroundColor = getComputedStyle(page).getPropertyValue('--color-background-default')
    inputColorSelected = getComputedStyle(page).getPropertyValue('--color-input-selected-default')
    fontColor = getComputedStyle(page).getPropertyValue('--color-font-default')
  }

  chooseColors()
}

function chooseColors() {
  page.style.setProperty('--color-fill', boxesBackgroundColor)
  page.style.setProperty('--color-stroke', boxLineColor)
  page.style.setProperty('--color-background', sheetBackgroundColor)
  page.style.setProperty('--color-input-selected', inputColorSelected)
  page.style.setProperty('--color-font', fontColor)

  checked = false
}

function darkMode() {
  page.classList.toggle('-dark_mode')
  restoreColors()
  isDarkMode = !isDarkMode
}

</script>

<nav class="toolbar">

  {#if isDarkMode}
    <div class="icon light_mode {isOpen}" on:click={darkMode}>
      <SvgLightMode />
    </div>

    {:else}  
      <div class="icon dark_mode {isOpen}" on:click={darkMode}>
        <SvgDarkMode />
      </div>
  {/if}
  

  
  
  <label class="icon burger_menu {isOpen}" for="icon_burger_menu">
    <span></span>
    <input type="checkbox" id="icon_burger_menu" bind:checked={checked}>
  </label>

</nav>
<div class="background_menu {isOpen}" on:click={ () => checked = false } >
  <nav class="color_menu {isOpen}" on:click={(e)=>e.stopPropagation()} >

    <div class="color_box">
      <label for="sheetBackgroundColor">Fundo da Ficha:</label>
      <input type="color" name="sheetBackgroundColor" id="sheetBackgroundColor" bind:value={sheetBackgroundColor}>
    </div>

    <div class="color_box">
      <label for="boxesBackgroundColor">Fundo das Caixas:</label>
      <input type="color" name="boxesBackgroundColor" id="boxesBackgroundColor" bind:value={boxesBackgroundColor}>
    </div>
  
    <div class="color_box">
      <label for="boxLineColor">Linha das Caixas:</label>
      <input type="color" name="boxLineColor" id="boxLineColor" bind:value={boxLineColor}>
    </div>
  
    <div class="color_box">
      <label for="inputColorSelected">Contorno da Seleção:</label>
      <input type="color" name="inputColorSelected" id="inputColorSelected" bind:value={inputColorSelected}>
    </div>

    <div class="color_box">
      <label for="fontColor">Cor do texto:</label>
      <input type="color" name="fontColor" id="fontColor" bind:value={fontColor}>
    </div>
  
    <button id="restore" on:click={restoreColors}>Restaurar</button>
    <button id="change" on:click={chooseColors}>Trocar</button>
  </nav>
</div>

<style>
  .toolbar {
    width: 40%;
    height: 4rem;

    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 4rem;
    grid-template-rows: 100%;
    align-items: center;
    justify-content: right;

    position: absolute;
    top: 0;
    right: 0;
    margin-top: 1rem;

    z-index: 9999;

    /* background-color: brown; */
  }

  .icon {
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;


    border-radius: 5rem;
  }
  .icon:hover {
    background-color: rgba(80, 80, 80, 0.5);
    background: radial-gradient(circle, rgba(80, 80, 80, 0.5) 10%, rgba(255,255,255,0) 70%);
  }
  .icon.light_mode.-open:hover,
  .icon.dark_mode.-open:hover {
    background-color: rgba(205, 205, 205, 0.5);
    background: radial-gradient(circle, rgba(205, 205, 205, 0.5) 10%, rgba(255,255,255,0) 70%);
  }


  .icon.burger_menu {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 22% 22% 22%;
    align-content: center;
    justify-items: center;
  }

  .icon.burger_menu > span {
    width: 65%;
    height: 35%;
    background-color: var(--color-icon);
    border-radius: 1rem;
    transition: all .3s ease-in-out;
  }
  input[type="checkbox"] { display: none; }

  .icon.burger_menu::after,
  .icon.burger_menu::before {
    content: '';
    display: block;
    width: 65%;
    height: 35%;
    background-color: var(--color-icon);
    border-radius: 1rem;
    transition: all .5s ease-in-out;
  }

  .icon.burger_menu.-open > span {
    transform: translateX(-3rem);
    background-color: transparent;
  }
  .icon.burger_menu.-open::before {
    transform: translateY(1rem) rotate(45deg);
    background-color: var(--color-alert);
  }
  .icon.burger_menu.-open::after {
    transform: translateY(-1rem) rotate(-45deg);
    background-color: var(--color-alert);
  }

 
  .background_menu {
    width: 0;
    height: 100%;

    
    position: absolute;
    top: 0;
    right: 0;

    background-color: rgba(2, 2, 2, 0.8);

    transition: all .8s ease-in-out;
    overflow: hidden;
    z-index: 9997;
  }

  .background_menu.-open { width: 100%; }

  .color_menu {
    width: 40%;
    height: 100%;

    position: absolute;
    top: 0;
    right: 0;
    padding-top: 8rem;

    display: grid;
    grid-template-columns: 25rem;
    grid-auto-rows: 4rem;
    justify-content: center;
    align-items: center;

    font-size: 1.6rem;

    overflow: hidden;
    transition: all .8s ease-in-out;
    transform: translateX(100%);

    background-color: rgb(88, 92, 104);
    z-index: 9998;
  }

  .color_menu.-open { transform: translateX(0); }

  .color_box {
    display: flex;
    justify-content: space-between;
    color: rgb(229, 229, 229);
  }


  .color_menu > button {
    width: 80%;
    height: 80%;

    display: grid;
    justify-self: center;
    align-items: center;

    margin-top: 8rem;

    border-radius: .3rem;

  }


</style>