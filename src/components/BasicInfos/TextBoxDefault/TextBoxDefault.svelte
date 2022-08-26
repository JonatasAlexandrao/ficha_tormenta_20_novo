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

  <label class="txt_label -default -{nameInput}" for={nameInput}> {text} </label>

  <InputDefault nameInput={nameInput} caracterLength={caracterLength} bind:value={value} bind:valueLevel={valueLevel} />

  <SvgLeftSide />
  <SvgRightSide />

</div>



<style>

  .container_txt {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;

    width: 95%;
    height: var(--text-box-height);

    background-color: var(--color-fill);
  }

  .container_txt::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5%;
    background-color: var(--color-stroke);
  }

  .container_txt::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5%;
    background-color: var(--color-stroke);
  }

  .container_txt.-player { margin-bottom: .7rem;}

  .container_txt.-class-level {
    display: grid;
    grid-template-columns: 80% 20%;
  }

  .txt_label.-default {
    position: absolute;
    bottom: 0;
    left: 0;

    transform: translateY(102%) translateX(5%);

    font-size: calc(var(--font-size-default) * 1.3);
    text-transform: uppercase;
  }

  .txt_label.-default.-player { 
    top: 0;
    transform: translateY(-50%) translateX(5%);
  } 


</style>