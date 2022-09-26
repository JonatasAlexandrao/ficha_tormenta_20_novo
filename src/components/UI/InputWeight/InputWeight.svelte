<script lang="ts">

  import { maskMoney } from '../../../utils/maskFunctions'
  
  export let nameInput: string
  export let value: number
  let weightValue: number = 0
  $: if(value){
    weightValue = value
    console.log(weightValue)
  }


  
  //$: teste = value

  export let className :string = 'weight'
  export let maxlength :number = 7
  export let readonly :boolean = false 
  export let fontSize :number = 1.4

  function onKeyUp(e) {
    if(e.key === 'Enter') {
      e.target.blur()
    }
  }

  function onInput() {

    this.value = maskMoney(this.value)
    value = this.value


    //console.log(value)
    

  }

</script>

<input class="txt_input -{className}" 
  id={nameInput} 
  name={nameInput} 
  bind:value = {weightValue}
  maxlength={maxlength}
  on:keyup={onKeyUp}
  on:input={onInput}
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