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
    height: 100%;

    background-image: url("../img/Fundos/Fundo-Defesa.svg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100%;
  }

</style>