<script lang="ts">

  import InputDefault from '../../UI/InputDefault/InputDefault.svelte'
  import SvgHealthMana from './SvgHealthMana.svelte'

  export let valuePoints = ''
  export let valueHistoric = ''
  export let text = ''
  export let subClass = ''

</script>


<div class="container -{subClass}">
  <div class="content_max_points">
    <InputDefault className='max_points' nameInput='points_{subClass}' maxlength={3} caracterLength={2} bind:value={valuePoints} />
    <span class="text_max">Máximos</span>
  </div>
  <div class="content_historic">
    <span class="text_title">Pontos de {text}</span>
    <InputDefault className='historic' nameInput='_historic_{subClass}' caracterLength={13} bind:value={valueHistoric} />
    <span class="text_current">Atuais</span>
  </div>
  
  <SvgHealthMana />

  </div>

<style>

.container {
  position: relative;
  height: 8.5rem;
  aspect-ratio: 3/1;
  font-size: var(--font-size-default);
}

.container.-health { margin-bottom: 1rem; }

.content_max_points {
  width: 33%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6% 6% 3% 6%;
  flex-direction: column;
}

.content_historic {
  width: 67%;
  height: 100%;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-right: 5%;
  flex-direction: column;
}


.text_title {
  font-family: Tormenta20, Arial, sans-serif;
  text-align: center;

  width: 100%;
  margin-right: 37%;
  padding: 4% 0;
}

.text_max {
  width: 100%;
  text-align: center;
  padding: 3%;
}

.text_current {
  width: 100%;
  text-align: center;
  margin-right: 37%;
  padding: 4% 0;

}


</style>