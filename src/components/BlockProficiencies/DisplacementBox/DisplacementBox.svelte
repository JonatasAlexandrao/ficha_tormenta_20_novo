<script lang="ts">

  import SvgDisplacementBox from "./SvgDisplacementBox.svelte";

  import { VAR_displacement } from '../../../utils/store'
  import InputDefault from '../../UI/InputDefault/InputDefault.svelte'

</script>

<div class="displacement_box">
  <label class="txt_label -displacement" for="displacement">Deslocamento</label>
  <div class="container_input">
    <InputDefault className="displacement" nameInput="displacement" caracterLength="5" bind:value={$VAR_displacement} />
  </div>

  <SvgDisplacementBox />
</div>



<style>

.displacement_box {
  position: relative;
  width: 100%;
  height: 100%;

  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 55% 45%;

  padding: 0 2%;
  font-size: 1.2rem;
  
  /*z-index: 0;*/
}

.container_input {
  width: 100%;
  aspect-ratio: 2.8/1;
}

</style>