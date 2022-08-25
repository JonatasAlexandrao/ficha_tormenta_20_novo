<script lang="ts">

  import DefenceCalc from "./DefenceCalc/DefenceCalc.svelte";
  import ArmorAndShield from "./ArmorAndShield/ArmorAndShield.svelte";

</script>

<div class="container_defense_and_experience">
  <DefenceCalc />
  <ArmorAndShield />
</div>



<style>
  .container_defense_and_experience {
    position: relative;
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 8rem 7rem 3.2rem;
    align-content: space-between;

    background-image: url("../img/Fundos/Fundo-Defesa.svg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100%;
  }

</style>