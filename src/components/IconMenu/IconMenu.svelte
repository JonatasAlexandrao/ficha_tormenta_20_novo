
<script lang="ts">
import SvgDarkMode from "./SvgDarkMode.svelte";
import SvgLightMode from "./SvgLightMode.svelte";

let checked: boolean = false
  $: isOpen = checked ? '-open' : ''

</script>

<nav class="toolbar">

  <div class="icon dark_mode">
    <SvgDarkMode />
  </div>
  <div class="icon light_mode">
    <SvgLightMode />
  </div>
  <label class="icon burger_menu {isOpen}" for="icon_burger_menu">
    <span></span>
    <input type="checkbox" id="icon_burger_menu" bind:checked={checked}>
  </label>

</nav>
<div class="background_menu {isOpen}" on:click={ () => checked = false } >
  <nav class="color_menu" on:click={(e)=>e.stopPropagation()} >
    <p>aaaa</p>
    <p>bbbb</p>
    <p>ccc</p>
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
    width: 70%;
    height: 70%;
    cursor: pointer;
  }

  .icon.burger_menu {
    display: grid;
    grid-template-columns: 100%;
    align-items: center;
  }

  .icon.burger_menu > span {
    width: 100%;
    height: 30%;
    background-color: var(--color-icon);
    border-radius: 1rem;
    transition: all .3s ease-in-out;
  }
  input[type="checkbox"] { display: none; }

  .icon.burger_menu::after,
  .icon.burger_menu::before {
    content: '';
    display: block;
    width: 100%;
    height: 30%;
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
    /* background-color: var(--color-alert); */
  }
  .icon.burger_menu.-open::after {
    transform: translateY(-1rem) rotate(-45deg);
    /* background-color: var(--color-alert); */
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

  .background_menu.-open {
    width: 100%;
  }

  .color_menu {
    width: 40%;
    height: 100%;

    position: absolute;
    top: 0;
    right: 0;
    padding: 8rem 2rem;

    background-color: darkcyan;
    z-index: 9998;
  }


</style>