<script lang="ts">

  import { maskDecimal } from '../../../utils/maskFunctions'
  
  export let nameInput :string
  export let value :number
  let formattedValue :string = '0'
    $: if(formattedValue) { 
      let deformatt = formattedValue.replace('.', '')
      deformatt = deformatt.replace(',', '.')
      value = parseFloat(deformatt)
    }

  export let className :string = 'weight'
  export let maxlength :number = 6
  export let readonly :boolean = false 
  export let fontSize :number = 1.4

  function onKeyUp(e) {
    if(e.key === 'Enter') {
      e.target.blur()
    }
  }

  function onInput() {
    formattedValue = maskDecimal(formattedValue)
  }

  function addKg() {
    if(formattedValue == '0,00' || formattedValue == '0') {
      formattedValue = formattedValue.replace('0,00', '0')
    }
    else {
      formattedValue = formattedValue + ' Kg'
    }
    
  }
  
  function removeKg() {  
    formattedValue = formattedValue.replace(' Kg', '')
    
    
  }

</script>

<input class="txt_input -{className}" 
  id={nameInput} 
  name={nameInput} 
  bind:value={formattedValue}
  maxlength={maxlength}
  on:keyup={onKeyUp}
  on:input={onInput}
  on:click={removeKg}
  on:blur={addKg}
  readonly={readonly}
  type="text"
  style="font-size: {fontSize}rem"
>

<style>

  .txt_input {
    width: 100%;
    height: 100%;
    padding: 0 3%;
    font-size: 2rem;
    text-align: center;
    background-color: var(--color-input);
    color: inherit;
  }

  .txt_input:focus { outline: .2rem solid var(--color-input-selected); }

</style>