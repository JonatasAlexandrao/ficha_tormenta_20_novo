<script>
  import TextBoxCaracter from "./components/TextBoxCaracter/TextBoxCaracter.svelte";
  import TextBoxDefault from "./components/TextBoxDefault/TextBoxDefault.svelte"

</script>

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
