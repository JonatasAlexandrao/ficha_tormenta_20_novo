<script lang="ts">
  import TextBoxCaracter from "./components/TextBoxCaracter/TextBoxCaracter.svelte";
  import TextBoxDefault from "./components/TextBoxDefault/TextBoxDefault.svelte";
</script>

<main class="page">

  <TextBoxCaracter /> 
  <TextBoxDefault nameInput='teste' />

</main>
 

<style>
  .page {
    width: 350px;
    height: 300px;

    background-color: darkcyan;

    display: grid;
    grid-template-rows: 3rem 3rem;
    justify-content: center;
    align-content: space-around;

  }


</style>