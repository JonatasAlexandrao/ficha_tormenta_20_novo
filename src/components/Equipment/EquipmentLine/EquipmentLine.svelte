<script lang="ts">
  import InputDefault from '../../UI/InputDefault/InputDefault.svelte'
  import { VAR_equipment } from '../../../utils/store'
  import InputWeight from '../../UI/InputWeight/InputWeight.svelte';
  export let num :number = 1
</script>

<div class="equipment_line">
  <InputDefault className="description" nameInput="description_{num}" numVisibleCharacter={30} bind:value={$VAR_equipment[num-1].item} />
  <InputWeight className="weight" nameInput="weight_{num}" maxlength={4} bind:value={$VAR_equipment[num-1].weight} />
</div>


<style>
  .equipment_line {
    display: grid;
    grid-template-columns: 80% 17%;
    column-gap: 3%;
  }
</style>