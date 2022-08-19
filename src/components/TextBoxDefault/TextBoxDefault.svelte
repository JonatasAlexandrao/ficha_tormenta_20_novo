<script lang="ts">
  import SvgLeftSide from './SvgLeftSide.svelte';
  import SvgRightSide from './SvgRightSide.svelte';

  import InputDefault from '../UI/InputDefault/InputDefault.svelte'

  export let text: string
  export let nameInput: string
  export let value: string = ''
  export let valueLevel: number = 1
  export let caracterLength: number = 0

</script>

<div class="container">
  <label class="txt_label -default -{nameInput}" for={nameInput}> {text} </label>

<div class="container_txt -{nameInput}">
  <SvgLeftSide />
  <SvgRightSide />

  <InputDefault nameInput={nameInput} caracterLength={caracterLength} bind:value={value} bind:valueLevel={valueLevel} />
  
</div>

</div>


<style>

  .container {
    height: 100%;

    display: grid;
    grid-template-rows: 1.3rem 3.2rem;
    align-items: center;
    
  }

  .container_txt {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;

    width: 95%;
    height: 100%;

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

  /*.container_txt.-player { height: 3.2rem; margin-bottom: .8rem;}*/

  /*.container_txt.-race { width: 17%; }
  .container_txt.-origin { width: 25%; }
  .container_txt.-divinity { width: 17%; }*/

  .container_txt.-class-level {
    display: grid;
    grid-template-columns: 80% 20%;
  }

  .txt_label.-default {

    height: 100%;
    justify-self: left;
    margin-left: 10px;
    font-size: var(--font-size);
    text-transform: uppercase;
    /*position: absolute;
    bottom: 3%;
    left: 1%;
    transform: translateY(100%);

    font-size: var(--font-size);
    text-transform: uppercase;

    position: absolute;

    text-transform: uppercase;  */
  }

  .txt_label.-default.-player { bottom: 155%; }


</style>