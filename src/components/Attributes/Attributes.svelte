<script lang='ts'>
  import { VAR_attributesTotal, VAR_attributesModifier } from '../../utils/store'
  import Attribute from './Attribute/Attribute.svelte';

</script>

<div class="container_attributes">
  {#each $VAR_attributesTotal as $attribute, index}
    <Attribute name={$attribute.name} bind:value={$attribute.value} modifier={$VAR_attributesModifier[index].value} />
  {/each}
</div>


<style>

.container_attributes {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  height: 8.5rem;
  background-image: url("../../public/images/Fundos/Fundo-Status.svg"); 
  background-repeat: no-repeat;
  background-position: center;
  background-size: 95%;
  margin-bottom: 2rem;
}

</style>