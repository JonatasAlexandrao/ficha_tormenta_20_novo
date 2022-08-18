<script lang="ts">

  
  export let nameInput:string
  export let caracterLength: number = 8
  export let className: string = 'default'
  export let maxlength: number = 10
  export let readonly:boolean = false

  export let value = ''
    $: fontSize = value.length > caracterLength ? calcFontSize() : ''
  export let valueLevel = ''

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
    aspect-ratio: 9/1;
    font-size: 2rem;
    text-align: center;
    background-color: var(--color-input);
    color: inherit;
    justify-self: center;

  }

  .txt_input.-character { height: auto; margin: .5% 5% 0; }

  .txt_input:focus { outline: 2px solid var(--color-input-selected); }
  
</style>