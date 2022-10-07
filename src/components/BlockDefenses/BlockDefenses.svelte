<script lang="ts">

  import DefenceCalc from "./DefenceCalc/DefenceCalc.svelte";
  import ArmorAndShield from "./ArmorAndShield/ArmorAndShield.svelte";
  import ExperienceBox from "./ExperienceBox/ExperienceBox.svelte";

</script>

<div class="container_defense_and_experience">
  <DefenceCalc />
  <ArmorAndShield />
  <ExperienceBox />
</div>



<style>
  .container_defense_and_experience {
    position: relative;
    width: 100%;
    height: 21rem;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 8rem 9rem 4rem;

    background-image: url("../../public/images/Fundos/Fundo-Defesa.svg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100%;
  }

</style>