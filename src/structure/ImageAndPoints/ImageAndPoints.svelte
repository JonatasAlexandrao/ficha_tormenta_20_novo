<script lang="ts">
  import HealthMana from "../../components/HealthMana/HealthMana.svelte";
  import { VAR_health, VAR_mana } from '../../utils/store.js';

  let teste = '22'
</script>

<section class="container">
  <div class="img"></div>
  <!-- <HealthMana text="vida" subClass="health" bind:valuePoints={$VAR_health.points} bind:valueHistoric={$VAR_health.historic} />
  <HealthMana text="mana" subClass="mana" bind:valuePoints={$VAR_mana.points} bind:valueHistoric={$VAR_mana.historic}/> -->
  <HealthMana text="vida" subClass="health" bind:valuePoints={teste} bind:valueHistoric={$VAR_health.historic} />
  <HealthMana text="mana" subClass="mana" bind:valuePoints={teste} bind:valueHistoric={$VAR_mana.historic}/>
</section>



<style>
  .container {
    width: 100%;
    display: grid;
    grid-template-areas: 
    "img health"
    "img mana"
    ;

  }

  .img {
    width: 100%;
    height: 100%;
    background-color: brown;
    grid-area: img;
  }

</style>