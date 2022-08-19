<script lang="ts">

  import BasicInfos from "./structure/BasicInfos/BasicInfos.svelte";

  import TextBoxDefault from "./components/TextBoxDefault/TextBoxDefault.svelte";
  
</script>

<main class="page">

  <div class="teste"> <TextBoxDefault nameInput='player' text='Jogador' /> </div>


  <BasicInfos />

  

</main>
 

<style>
  .teste {
    width: 60vw;
    height: 300px;

    background-color: darkcyan;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 99999;

  }

  .page {
    min-width: 80rem;
    max-width: 80rem;
    height: 100%;
    height: 100vh;

    position: relative;
    padding: 2rem 3rem;
  }

  .page::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    min-width: 80rem;
    max-width: 80rem;
    height: 100%;
    z-index: -1;
    opacity: .6;
    
    background-image: url("../images/Fundos/Fundo-pagina.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }


</style>