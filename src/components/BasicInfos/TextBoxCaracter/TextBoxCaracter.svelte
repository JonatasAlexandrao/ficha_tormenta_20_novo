<script lang="ts">
  import InputDefault from '../../UI/InputDefault/InputDefault.svelte'
  import SvgCharacter from './SvgCharacter.svelte';

  export let value: string = ''


</script>

<div class="container_txt -character">

  <InputDefault className='character' nameInput='character' caracterLength={5} bind:value={value} />
  <label class="txt_label -character" for="character">Personagem</label>

  <SvgCharacter />
  
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

    font-size: calc(var(--font-size) + .4rem);
    font-family: Tormenta20, sans-serif;
    text-transform: uppercase;   
  }

</style>
