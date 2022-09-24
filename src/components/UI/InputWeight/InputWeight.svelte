<script lang="ts">
  
  export let nameInput: string
  export let value: number
  //$: teste = value

  export let className :string = 'weight'
  export let maxlength :number = 7
  export let readonly :boolean = false 
  export let fontSize :number = 1.8

  function onKeyUp(e) {
    if(e.key === 'Enter') {
      e.target.blur()
    }
    
    //value = parseFloat(this.value)
    //console.log(teste)
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

    //this.value = this.value.replace(',', '.')
    let formatValue :string
    formatValue = this.value.replace(/(0)(\d)/g, '$2')
    formatValue = this.value.replace(',', '.')

    value = parseFloat(formatValue)

    //console.log(teste)

    
  }

</script>

<input class="txt_input -{className}" 
  id={nameInput} 
  name={nameInput} 
  value = {0}
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