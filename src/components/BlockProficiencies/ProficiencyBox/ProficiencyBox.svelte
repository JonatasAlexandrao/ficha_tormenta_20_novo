<script lang="ts">
  import { VAR_infoProficiency } from '../../../utils/store'
import SvgProficiencyBox from './SvgProficiencyBox.svelte';
</script>

<div class="proficiency">
  <label class="txt_label -proficiency" for="proficiency">Proficiências</label>
  <textarea class="txt_textarea" id="proficiency" cols="30" rows="10" autocomplete="off" bind:value={$VAR_infoProficiency}></textarea>

  <SvgProficiencyBox />
  
</div>

<style >
  .proficiency {
    position: relative;
    width: 100%;
    height: 100%;

    display: grid;
    align-content: center;
    font-size: 1.2rem;
    
    z-index: 1;
  }

  .txt_textarea {
    width: 100%;
    aspect-ratio: 2/1;
    padding: .5rem;

    resize: none;
    font-size: 1.2rem;

    background-color: var(--color-input); 
  }

  .txt_textarea:focus {
    outline: .2rem solid var(--color-input-selected);
  }


</style>