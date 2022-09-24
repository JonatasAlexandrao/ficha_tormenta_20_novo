<script lang="ts">
  import InputNumber from "../InputNumber/InputNumber.svelte";

  
  export let nameInput: string
  export let value: string

  export let valueLevel: number = 1
  export let className: string = 'default'
  export let numVisibleCharacter = 13
  export let maxlength: number = 200
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

    function rounding(calc:number) :number {
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

    previousValue = this.value

  }

</script>

<input class="txt_input -{className}" 
id={nameInput} name={nameInput} bind:value={value}
maxlength={maxlength}
on:keyup={onKeyPress}
readonly={readonly}
style="font-size: {fontSize}rem"
>

{#if nameInput === "class-level"}
  <InputNumber className="level" nameInput="level" maxlength={2} bind:value={valueLevel} />
{/if}


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
  .txt_input.-default { width: 97%; height: 85%; }

  .txt_input.-character { 
    height: auto; 
    margin: .5% 5% 0;
    aspect-ratio: 9/1;
    overflow-x: hidden;
  }

  .txt_input.-max_points { 
    padding: 0;
  }
    
  .txt_input.-armor_shield { 
    border-bottom: .2rem solid var(--color-stroke);
  }

  .txt_input.-total_weight,
  .txt_input.-max_weight,
  .txt_input.-total_lifting {
    background-color: transparent;
    cursor: default;
    outline: none;
  }
  
</style>