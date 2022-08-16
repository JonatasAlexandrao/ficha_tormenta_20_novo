<script>
  import { fetchSvg } from '../../utils/functionSVG'
  import InputDefault from '../UI/InputDefault/InputDefault.svelte'

  export let value = ''
  export let valueLevel = ''
  export let text = ''
  export let nameInput = ''
  export let caracterLength

</script>

<div class="container_txt -{nameInput}">
  <img src="../../../public/images/TextBox/lateral-padrao-E.svg" alt="" use:fetchSvg>
  <img src="../../../public/images/TextBox/lateral-padrao-D.svg" alt="" use:fetchSvg>

  <label class="txt_label -default -{nameInput}" for={nameInput}> {text} </label>
  <InputDefault nameInput={nameInput} caracterLength={caracterLength} bind:value={value} bind:valueLevel={valueLevel} />
  
</div>

<style>

.container_txt {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;

  width: 95%;

  background-color: var(--color-fill);
}

.container_txt.-race { width: 17%; }
.container_txt.-origin { width: 25%; }
.container_txt.-divinity { width: 17%; }

.container_txt.-class-level {
  display: grid;
  grid-template-columns: 80% 20%;
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

.txt_label.-default {
  position: absolute;
  bottom: 3%;
  left: 1%;
  transform: translateY(100%);

  font-size: var(--font-size);
  text-transform: uppercase;
  
  position: absolute;

  text-transform: uppercase;  
}
.txt_label.-default.-player {
  bottom: 140%;
}

:global(.container_txt .side_edge) {
  position: absolute;
  height: 100%;
  top: 50%; 
}

:global(.container_txt .side_edge.-left) {
  left: .5%;
  transform: translateY(-50%) translateX(-100%);
}

:global(.container_txt .side_edge.-right) {
  right: .5%;
  transform: translateY(-50%) translateX(100%);
}

:global(.container_txt .side_edge > path) {
  fill: var(--color-fill);
  stroke:var(--color-stroke);
  stroke-width:1;
}


</style>