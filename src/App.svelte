<script lang="ts">

  import ImageAndPoints from "./structure/ImageAndPoints/ImageAndPoints.svelte";
  import BasicInfos from "./structure/BasicInfos/BasicInfos.svelte";

  import HealthMana from "./components/HealthMana/HealthMana.svelte";
  
</script>

<main class="page">

  <!-- <HealthMana /> -->

  <div class="container_logo">
    <img class="logo" src="src/assets/images/logo-tormenta.png" alt="logo">
  </div>

  <BasicInfos />
  <ImageAndPoints />

  

</main>
 

<style>
   .teste {

    display: flex;
    justify-content: center;
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
    
    background-image: url("./assets/images/Fundo-pagina.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .container_logo {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5rem;
    
  }

  .container_logo > img {
    height: 100%;
  }


</style>