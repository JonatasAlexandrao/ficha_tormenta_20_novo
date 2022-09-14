<script lang="ts">
  import SvgLeftSide from './SvgLeftSide.svelte';
  import SvgRightSide from './SvgRightSide.svelte';

  import InputDefault from '../../UI/InputDefault/InputDefault.svelte'

  export let text: string
  export let nameInput: string
  export let value: string = ''
  export let valueLevel: number = 1
  export let caracterLength: number = 0

</script>


<div class="container_txt -{nameInput}">

  <div class="content -{nameInput}">
    <label class="txt_label -default -{nameInput}" for={nameInput}> {text} </label>

    <InputDefault nameInput={nameInput} caracterLength={caracterLength} bind:value={value} bind:valueLevel={valueLevel} />
  </div>
  
  <SvgLeftSide />
  <SvgRightSide />

</div>



<style>

  .container_txt {
    position: relative;
    display: flex;
    justify-content: center;
    justify-self: center;
    align-items: center;

    width: 95%;
    height: var(--text-box-height);

    background-color: var(--color-fill);
  }

  .container_txt .content {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    justify-items: center;
    justify-self: center;
    align-items: center;
    
    border-top: var(--border-width) solid var(--color-stroke);
    border-bottom: var(--border-width) solid var(--color-stroke);
  }

  .container_txt.-player { margin-bottom: .7rem;}

  .content.-class-level {
    display: grid;
    grid-template-columns: 80% 20%;
  }

  .txt_label.-default {
    position: absolute;
    bottom: 0;
    left: 0;

    transform: translateY(102%) translateX(5%);

    font-size: 1.2rem;
    text-transform: uppercase;
  }

  .txt_label.-default.-player { 
    top: 0;
    transform: translateY(-50%) translateX(5%);
  } 


</style>