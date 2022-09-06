
<script lang="ts">
import SvgDarkMode from "./SvgDarkMode.svelte";
import SvgLightMode from "./SvgLightMode.svelte";


</script>

<nav class="menu">

  <div class="icon dark_mode">
    <SvgDarkMode />
  </div>
  <div class="icon light_mode">
    <SvgLightMode />
  </div>
  <div class="icon burger_menu">
    <span></span>
  </div>

</nav>

<style>
  .menu {
    width: 100%;
    height: 4rem;

    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 4rem;
    grid-template-rows: 100%;
    align-items: center;
    justify-content: right;

    background-color: brown;
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
    transition: all .5s ease-in-out;
  }

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

  /*.icon.burger_menu.-open > span {
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
  }*/




</style>