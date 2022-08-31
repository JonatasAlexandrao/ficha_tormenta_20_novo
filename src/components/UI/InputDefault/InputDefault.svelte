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

  .txt_input:focus { outline: 2px solid var(--color-input-selected); }
  
  .txt_input.s-1 { 
    font-size: calc(1rem * 1.8);
  }
  .txt_input.s-2 { 
    font-size: calc(1rem * 1.6);
  }
  .txt_input.s-3 { 
    font-size: calc(1rem * 1.5);
  }
  .txt_input.s-4 { 
    font-size: calc(1rem * 1.4); 
  }
  .txt_input.s-5 { 
    font-size: calc(1rem * 1.35); 
  }
  .txt_input.small { 
    font-size: calc(1rem * 1.25); 
  }
  .txt_input.-max_points.s-1 { font-size: calc(1rem * 2.3); }

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
    font-size: calc(1rem * 1.6);
    border-bottom: .2rem solid #000;
  }

  .txt_input.-armor_shield.s-4 { 
    font-size: calc(1rem * 1.5);
  }
  .txt_input.-armor_shield.s-5 { 
    font-size: calc(1rem * 1.4);
  }
  .txt_input.-armor_shield.small { 
    font-size: calc(1rem * 1.3);
  }
  /*.txt_input.-armor_shield.s-4 { 
    font-size: calc(1rem * 1.25); 
  }
  .txt_input.-armor_shield.s-5 { 
    font-size: calc(1rem * 1.20); 
  }
  .txt_input.-armor_shield.small { 
    font-size: calc(1rem * 1.1); 
  }*/
  
</style>