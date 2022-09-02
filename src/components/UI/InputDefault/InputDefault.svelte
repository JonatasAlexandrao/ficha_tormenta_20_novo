<script lang="ts">

  
  export let nameInput: string
  export let value: string
    $: fontSize = value.length > caracterLength ? calcFontSize() : ''
  
  export let valueLevel: number = 1
  export let className: string = 'default'
  export let caracterLength: number = 5
  export let maxlength: number = 200
  export let readonly: boolean = false
  
  

  function calcFontSize() {
    const result = value.length - caracterLength

    if (result >= 6)
      return 'small'
    else
      return `s-${result}`
  }

  function onKeyPress(e) {
    if(e.key === 'Enter') {
      e.target.blur()
    }
  }

</script>

<input class="txt_input -{className} {fontSize}" 
id={nameInput} name={nameInput} bind:value={value}
maxlength={maxlength}
on:keypress={onKeyPress}
readonly={readonly}
>

{#if nameInput === "class-level"}
  <input class="txt_input -level" id="level" maxlength="2" bind:value={valueLevel}>
{/if}


<style>

  .txt_input {
    width: 100%;
    height: 100%;
    font-size: 2rem;
    font-size: calc(1rem * 2);
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

  .txt_input.-default,
  .txt_input.-level { 
    width: 97%; height: 80%;
   }

  .txt_input.-character { 
    height: auto; 
    margin: .5% 5% 0;
    aspect-ratio: 9/1;
  }

  .txt_input.-max_points { 
    font-size: calc(1rem * 3.5);
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
  
</style>