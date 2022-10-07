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
    grid-template-rows: 22% 78%;
    grid-template-columns: 100%;
    justify-items: center;

    padding: 3.5% 0 7% 0;
    font-size: 1.2rem;

    z-index: 1;
    
  }

  .txt_label {
    width: 100%;
    height: 100%;

    display: grid;
    justify-content: center;
    align-items: center;

  }

  .txt_textarea {
    width: 93%;
    height: 100%;
    padding: 2%;

    resize: none;
    font-size: 1.2rem;

    background-color: var(--color-input); 
  }

  .txt_textarea:focus {
    outline: .2rem solid var(--color-input-selected);
  }


</style>