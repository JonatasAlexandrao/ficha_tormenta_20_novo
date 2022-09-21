<script lang="ts">
  
  export let nameInput: string
  export let value: Number

  export let className :string = 'number'
  export let maxlength :number = 3
  export let readonly :boolean = false 
  export let fontSize :number = 1.8
  export let minValue :number = 9

  function onKeyUp(e) {
    if(e.key === 'Enter') {
      e.target.blur()
    }
  }

  function onInput() {
    value = this.value.replace(/(0)(\d)/g, '$2')
    if(!value) { value = 0 }

    /*======= MaxLength =======*/
    if(this.value.length > this.maxLength) {
      value = this.value.slice(0, this.maxLength)
    }
  }

</script>

<input class="txt_input -{className}" 
  id={nameInput} 
  name={nameInput} 
  bind:value={value}
  maxlength={maxlength}
  on:keyup={onKeyUp}
  on:input={onInput}
  readonly={readonly}
  type="number"
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
  
  .txt_input.-number { width: 97%; height: 85%; appearance: textfield;}

  .txt_input.-attribute { border-radius: 2rem;}

  .txt_input.-armor_shield { 
    border-bottom: .2rem solid var(--color-stroke);
  }

  

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

  input[type="number"] {
      -moz-appearance: textfield;
  }


 
  
</style>