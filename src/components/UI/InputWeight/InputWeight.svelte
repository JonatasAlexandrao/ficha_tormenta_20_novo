<script lang="ts">
  
  export let nameInput: string
  export let value: number
  $: teste = value

  export let className :string = 'weight'
  export let maxlength :number = 3
  export let readonly :boolean = false 
  export let fontSize :number = 1.8

  function onKeyUp(e) {
    if(e.key === 'Enter') {
      e.target.blur()
    }
  }

  function onInput() {
    /*value = this.value.replace(/[^0-9]/g, '')
    this.value = value
    value = this.value.replace(/(0)(\d)/g, '$2')
  
    if(this.value === '') { value = 0 }

    /*======= MaxLength =======*/
    /*if(this.value.length > this.maxLength) {
      value = this.value.slice(0, this.maxLength)
    }*/

    value = this.value

    console.log(teste)
  }

</script>

<input class="txt_input -{className}" 
  id={nameInput} 
  name={nameInput} 
  value={teste}
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
  
  .txt_input.-weight { width: 97%; height: 85%; }

  
</style>