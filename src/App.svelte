<script lang="ts">

  
  import BasicInfos from "./components/BasicInfos/BasicInfos.svelte";
  import ImageAndPoints from "./components/ImageAndPoints/ImageAndPoints.svelte";
  import Attributes from "./components/Attributes/Attributes.svelte";
  import AttackBox from "./components/AttackBox/AttackBox.svelte";
  import BlockDefenses from "./components/BlockDefenses/BlockDefenses.svelte";

  import ExperienceBox from "./components/BlockDefenses/ExperienceBox/ExperienceBox.svelte";
  import DefenceCalc from "./components/BlockDefenses/DefenceCalc/DefenceCalc.svelte";


  
</script>

<main class="page">

  <div class="teste">
    <DefenceCalc />
    <!-- <ExperienceBox /> -->
  </div>

  <div class="container_logo">
    <img class="logo" src="src/assets/images/logo-tormenta.png" alt="logo">
  </div>

  <BasicInfos />
  
  <div class="container_info">
    <section class="content_left">
      <ImageAndPoints />
      <Attributes />
      <AttackBox />

      <div class="defenses_and_proficiencies">
        <BlockDefenses />
      </div>

    </section>
    <section class="content_right">

    </section>
  </div>

  

</main>
 

<style>
  .teste {
    position: relative;
    width: 80%;
    height: 50vh;
    background-color: darkcyan;
    z-index: 100;
  }
  .page {
    min-width: 80rem;
    max-width: 80rem;
    height: 100%;

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
    z-index: -10;
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

  .container_logo > img { height: 100%; }

  .container_info {
    display: grid;
    grid-template-columns: 58% 38%;
    gap: 2rem;
    justify-content: center;
  }

  .content_right {
    width: 100%;
    background-color: cornflowerblue;
    height: 100vh;
  }

  .defenses_and_proficiencies {
    display: grid;
    grid-template-columns: 60% 40%;
  }


</style>