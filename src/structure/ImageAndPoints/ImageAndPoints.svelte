<script lang="ts">

  import HealthMana from "../../components/HealthMana/HealthMana.svelte";
  import { VAR_health, VAR_mana } from '../../utils/store.js';

  let teste = '22'


</script>

<section class="container">
  <div class="content_image">
    <div class="image"></div>
  </div>
  
  <!-- <HealthMana text="vida" subClass="health" bind:valuePoints={$VAR_health.points} bind:valueHistoric={$VAR_health.historic} />
  <HealthMana text="mana" subClass="mana" bind:valuePoints={$VAR_mana.points} bind:valueHistoric={$VAR_mana.historic}/> -->
  <div class="content_health_mana">
    <HealthMana text="vida" subClass="health" bind:valuePoints={teste} bind:valueHistoric={$VAR_health.historic} />
    <HealthMana text="mana" subClass="mana" bind:valuePoints={teste} bind:valueHistoric={$VAR_mana.historic}/>

  </div>
  
</section>



<style>
  .container {
    width: 100%;
    display: grid;
    grid-template-columns: 35% 65%;

  }

  .content_image {
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content_image .image {
    width: 80%;
    height: 95%;
    border: 3px solid #000;
  }

  .container .content_health_mana {
    display: grid;
    justify-content: center;
    align-items: center;
  }

</style>