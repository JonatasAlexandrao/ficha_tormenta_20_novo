<script lang="ts">

  import HealthMana from "./HealthMana/HealthMana.svelte";
  import CharacterImage from "./CharacterImage/CharacterImage.svelte";
  import { VAR_health, VAR_mana } from '../../utils/store';
  

</script>

<section class="container">
  <div class="content_image">
    <CharacterImage />
    
  </div>
  
  <div class="content_health_mana">
    <HealthMana text="vida" subClass="health" bind:valuePoints={$VAR_health.points} bind:valueHistoric={$VAR_health.historic} />
    <HealthMana text="mana" subClass="mana" bind:valuePoints={$VAR_mana.points} bind:valueHistoric={$VAR_mana.historic}/>
  </div>

  
</section>



<style>
  .container {
    width: 100%;
    display: grid;
    grid-template-columns: 35% 65%;
    margin-bottom: 2rem;

  }

  .content_image {
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container .content_health_mana {
    display: grid;
    justify-content: center;
    align-items: center;
  }

</style>