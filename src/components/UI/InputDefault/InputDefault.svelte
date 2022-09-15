<script lang="ts">
  
  export let nameInput: string
  export let value: string

  export let valueLevel: number = 1
  export let className: string = 'default'

  export let numVisibleCharacter = 13

  export let maxlength: number = 200
  export let readonly: boolean = false
  
  export let fontSize = 1.8
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
  <input class="txt_input -level" id="level" maxlength="2" bind:value={valueLevel}>
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
  
  .txt_input.s-1 { 
    font-size: 1.8rem;
  }
  .txt_input.s-2 { 
    font-size: 1.6rem;
  }
  .txt_input.s-3 { 
    font-size: 1.5rem;
  }
  .txt_input.s-4 { 
    font-size: 1.4rem; 
  }
  .txt_input.s-5 { 
    font-size: 1.35rem; 
  }
  .txt_input.small { 
    font-size: 1.25rem; 
  }
  .txt_input.-max_points.s-1 { font-size: 2.3rem; }

  .txt_input.-default { width: 97%; height: 85%; }
  .txt_input.-level { width: 92%; height: 85%; }

  .txt_input.-character { 
    height: auto; 
    margin: .5% 5% 0;
    aspect-ratio: 9/1;
    font-size: 2.4rem;
    overflow-x: hidden;
  }

  .txt_input.-max_points { 
    font-size: 3.5rem;
    padding: 0;
  }
  
  .txt_input.-attribute { border-radius: 2rem;}
  
  .txt_input.-armor_shield { 
    font-size: 1.6rem;
    border-bottom: .2rem solid #000;
  }

  .txt_input.-armor_shield.s-4 { 
    font-size: 1.5rem;
  }
  .txt_input.-armor_shield.s-5 { 
    font-size: 1.4rem;
  }
  .txt_input.-armor_shield.small { 
    font-size: 1.3rem;
  }

  .txt_input.-total_weight,
  .txt_input.-max_weight,
  .txt_input.-total_lifting {
    font-size: 1.2rem;
    background-color: transparent;
    cursor: default;
    outline: none;
  }

  .txt_input.-total_lifting {
    font-size: 1.4rem;
  }

  .txt_input.-skill_other {
    height: 80%;
    font-size: 1.4rem;
  }
  
</style>