<script lang="ts">
  import { VAR_experience } from '../../../utils/store'
  import InputDefault from '../../UI/InputDefault/InputDefault.svelte'
  import SvgExperienceBox from './SvgExperienceBox.svelte'

</script>

<div class="experience_box">

  <div class="content">
    <label class="txt_label -experience" for="experience">Pontos de Experiência</label>
    <InputDefault className="experience" nameInput="experience" caracterLength={8} bind:value={$VAR_experience} />
  </div>
  
  
  <SvgExperienceBox />
</div>

<style>

  .experience_box {

    position: relative;
    aspect-ratio: 8/1;
    display: grid;
    justify-items: center;
    align-items: center;

    z-index: 1;
    
  }

  .content {
    width: 93%;
    height: 90%;

    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 2%;

    font-size: 1.2rem;
  }


  
</style>