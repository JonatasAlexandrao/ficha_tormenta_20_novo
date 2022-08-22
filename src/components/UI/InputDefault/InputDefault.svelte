<script lang="ts">

  
  export let nameInput: string
  export let caracterLength: number
  export let value: string
    $: fontSize = value.length > caracterLength ? calcFontSize() : ''
  
  export let valueLevel: number = 1
  export let className: string = 'default'
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
    width: 97%;
    height: 80%;
    font-size: 2rem;
    text-align: center;
    background-color: var(--color-input);
    color: inherit;

  }

  .txt_input.s-1   { font-size: 1.8rem; }
  .txt_input.s-2   { font-size: 1.6rem; }
  .txt_input.s-3   { font-size: 1.5rem; }
  .txt_input.s-4   { font-size: 1.4rem; }
  .txt_input.s-5   { font-size: 1.35rem; }
  .txt_input.small { font-size: 1.25rem; }

  .txt_input.-character { 
    height: auto; 
    margin: .5% 5% 0;
    aspect-ratio: 9/1;
   }

  .txt_input:focus { outline: 2px solid var(--color-input-selected); }
  
</style>