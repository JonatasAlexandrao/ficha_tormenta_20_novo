<script lang="ts">
  
  export let nameInput: string
  export let value: Number

  export let className: string = 'number'
  export let numVisibleCharacter = 2
  export let maxlength: number = 3
  export let readonly: boolean = false 
  export let fontSize: number = 1.8
  let sizeDefault = fontSize
  let previousValue = value

  function onKeyPress(e) {

    if(e.key === 'Enter') {
      e.target.blur()
    }

    
    /* A fonte aumenta ou diminui 5% */
    /* O valor minimo que a fonte pode ter é 70% do valor original */
    /* Só vai voltar a aumentar o tamanho da fonte depois q tiver no máximo 6 caracteres a mais q o vizivel que são os 30% */

   /* function rounding(calc:number) :number {
      return +(parseFloat((calc).toString()).toFixed(2))
    }

    const variation =  rounding(sizeDefault * 0.05)
    const fontMin = rounding(sizeDefault * 0.7)
    
    const numOfCharactersIncreased = this.value.length > previousValue.length
    const textBiggerThanTheBox = this.value.length > numVisibleCharacter
    const numOfCharactersDecreased = this.value.length < previousValue.length

    if(numOfCharactersIncreased) {
      if(textBiggerThanTheBox) { 
        fontSize = rounding(fontSize - variation)
        if(fontMin > fontSize) { fontSize = fontMin }
      }
    }

    else if (numOfCharactersDecreased){
      if(this.value.length <= (numVisibleCharacter + 6)){
        fontSize = rounding(fontSize + variation)
      }
      if(fontSize > sizeDefault) { fontSize = sizeDefault }
    }

    previousValue = this.value*/

  }

</script>

<input class="txt_input -{className}" 
  id={nameInput} 
  name={nameInput} 
  bind:value={value}
  maxlength={maxlength}
  on:keyup={onKeyPress}
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


 
  
</style>