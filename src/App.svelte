<script>
  import TextBoxCaracter from "./components/TextBoxCaracter/TextBoxCaracter.svelte";
  import TextBoxDefault from "./components/TextBoxDefault/TextBoxDefault.svelte"

  let isOpen = false
  $: classOpen = isOpen ? '-open': ''
  function addClassOpen() { isOpen = !isOpen }

  let isDarkMode = false
  $: classMode = isDarkMode ? '-darkMode': ''
  function addClassMode() { isDarkMode = !isDarkMode }

</script>

<!-- <main class="page">

  <div class="container-icon">

    <div class="icon sun {classMode}" on:click={addClassMode}>
      <img src="../icons/light.svg" alt="" use:fetchSvg>
    </div>

    <div class="icon moon {classMode}" on:click={addClassMode}>

      <img src="../icons/dark.svg" alt="" use:fetchSvg>
    </div>

    <div class="icon menu {classOpen}" on:click={addClassOpen}>
      <span></span>
    </div>
  </div>

</main> -->
<main>
  <div class="wrapper_test">
    <TextBoxCaracter />
    <TextBoxDefault nameInput="class-level" text="Jogador" valueLevel=1/>
  </div>
</main>

<style>
  main {
    
  }

  .wrapper_test {
    display: grid;
    align-items: center;

    position: relative;
    width: 50vw;
    height: 50vh;

    background-color: darkcyan;
    z-index: 1;
  }

  .teste {
    background-color: brown;
    width: 70vw;
    aspect-ratio: 5/1;

    display: grid;
    justify-content: center;
    align-items: center;
  }
 
</style>
