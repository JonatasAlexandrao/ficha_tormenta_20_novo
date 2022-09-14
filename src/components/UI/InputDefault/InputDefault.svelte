<script lang="ts">

  
  export let nameInput: string
  export let value: string
    //$: fontSize = value.length > caracterLength ? calcFontSize() : ''
  
  export let valueLevel: number = 1
  export let className: string = 'default'
  export let caracterLength: number = 5
  export let maxlength: number = 200
  export let readonly: boolean = false
  
  
  let fontSize = 2

  function calcFontSize() {
    const result = value.length - caracterLength

    if (result >= 6)
      return 'small'
    else
      return `s-${result}`
  }

  let previousValue = value

  function onKeyPress(e) {
    if(e.key === 'Enter') {
      e.target.blur()
    }

    const sizeDefault = (this.size / 10)
    const overflowed = this.clientWidth < this.scrollWidth
    
   // const increaseText = this.scrollWidth == this.clientWidth
    const minimumSize = fontSize <= (sizeDefault/2)
    const maximumSize = fontSize >= sizeDefault

    const reducedCharacters = previousValue.length > value.length

    if(overflowed) {
      console.log('diminue')
      fontSize = (fontSize * .9)
      console.log(fontSize)
      console.log('minimumSize', minimumSize)
      console.log('maximumSize', fontSize >= sizeDefault)
      
      /*if(minimumSize){
        fontSize = (sizeDefault/1.5)
      }
      if(maximumSize){
        
        fontSize = sizeDefault
        /*console.log('max')
        console.log(fontSize)*//*
      }*/

      if(maximumSize) {
          //fontSize = sizeDefault
          console.log('wwwwww')
          console.log(maximumSize, fontSize, sizeDefault)
        }
           
    }
    else {
      if(reducedCharacters) {
        let amountErased = previousValue.length - value.length
        console.log(amountErased)

        fontSize = (fontSize * (1.1 * amountErased))
        console.log('aumenta')
        if(maximumSize) {
          fontSize = sizeDefault
          console.log('aqui')
        }
        
      }

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