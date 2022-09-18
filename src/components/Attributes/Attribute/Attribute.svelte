<script lang="ts">

import InputDefault from '../../UI/InputDefault/InputDefault.svelte'
import SvgAttribute from './SvgAttribute.svelte'

export let name = ''
export let value = ''
export let modifier = ''

</script>

<div class="container">
  <span class="text_title">{name}</span>
  <label class="text_attribute" for="attribute_{name}"> {modifier} </label>
  <div class="container_input">
    <InputDefault className="attribute" nameInput="attribute_{name}" maxlength={2} bind:value={value} />
  </div>

  <SvgAttribute />

</div>

<style>

.container {
  position: relative;

  position: relative;
  display: grid;
  grid-template-rows: 17% 43% 40%;
  justify-items: center;
  align-items: center;
  z-index: 1;
}

.text_title {
  font-family: Tormenta20, sans-serif;
  font-size: 1rem;
  text-align: center;
}

.text_attribute {
  font-size: 2.7rem;
  opacity: .6;
}

.container_input {
  width: 47%;
  height: 68%;
}


</style>