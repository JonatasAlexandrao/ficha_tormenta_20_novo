<script lang="ts">
  import IconMenu from "./components/IconMenu/IconMenu.svelte";
  import BasicInfos from "./components/BasicInfos/BasicInfos.svelte";
  import ImageAndPoints from "./components/ImageAndPoints/ImageAndPoints.svelte";
  import Attributes from "./components/Attributes/Attributes.svelte";
  import AttackBox from "./components/AttackBox/AttackBox.svelte";
  import BlockDefenses from "./components/BlockDefenses/BlockDefenses.svelte";
  import BlockProficiencies from "./components/BlockProficiencies/BlockProficiencies.svelte";
  import Equipment from "./components/Equipment/Equipment.svelte";
  import SkillsBox from "./components/SkillsBox/SkillsBox.svelte";
  
  
</script>

<main class="page">

  <IconMenu />
  
  <div class="container_logo">
    <img class="logo" src="../public/images/logo-tormenta.png" alt="logo">
  </div>
  <BasicInfos />

  <div class="container_info">
    <section class="content_left">

      <ImageAndPoints />
      <Attributes />
      <AttackBox />
      

      <div class="defenses_and_proficiencies">
        <BlockDefenses />
        <BlockProficiencies />
      </div>
      <Equipment />

    </section>

    <section class="content_right">
      <SkillsBox />
    </section>
  </div>

  <footer>
    <hr>
  </footer>
	
</main>

<style>

  .page {
    width: 100%;
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
    width: 80rem;
    height: 100%;
    z-index: -10;
    opacity: .6;
    
    background-image: url("../../public/images/Fundo-pagina.png");
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
    grid-template-columns: 56% 42%;
    gap: 2%;
  }

  .content_right {
    width: 100%;
    height: 100%;
  }

  .defenses_and_proficiencies {
    display: grid;
    grid-template-columns: 58% 40%;
    gap: 2%;
  }

  footer {
    width: 100%;
    height: 10rem;
    padding: 2rem 0;
  }

  hr {
    background-color: aliceblue;
    height: 2px;
    border-style: none;
  }

</style>