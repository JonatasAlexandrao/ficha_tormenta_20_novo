<script lang="ts">
  import HealthMana from "../../components/HealthMana/HealthMana.svelte";
</script>

<section class="container">
  <div class="img"></div>
  <HealthMana />
  <HealthMana />
</section>



<style>
  .container {
    width: 100%;
    display: grid;
    grid-template-areas: 
    'img health health'
    'img mana mana'
    ;

  }

  .img {
    width: 100%;
    height: 100%;
    background-color: brown;
    grid-area: img;
  }

</style>