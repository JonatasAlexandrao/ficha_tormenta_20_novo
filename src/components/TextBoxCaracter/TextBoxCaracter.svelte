<script>
  
  import { fetchSvg } from '../../utils/functionSVG'
  import InputDefault from '../UI/InputDefault/InputDefault.svelte'

  export let value = ''

</script>

<div class="container_txt -character">

  <InputDefault className='character' nameInput='character' caracterLength=25 bind:value={value} />
  <label class="txt_label -character" for="character">Personagem</label>

  <img src="../../../public/images/TextBox/Personagem.svg" alt="" use:fetchSvg>
  

</div>

<style>

.container_txt.-character {
  width: 100%;
  aspect-ratio: 5.5/1;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 0;
  
}


.txt_label.-character {
    position: absolute;
    
    bottom: 14%;
    left: 5%;
    transform: translateY(100%);

    font-size: var(--font-size);
    font-family: Tormenta20, sans-serif;
    text-transform: uppercase;   
  }









:global(.container_txt.-character > svg) {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  z-index: -1;
}
:global(.container_txt.-character > svg > path) {
  fill: var(--color-fill);
  stroke:var(--color-stroke);
  stroke-width: .1rem;
}

 
</style>