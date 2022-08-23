<script lang="ts">

  import InputDefault from '../UI/InputDefault/InputDefault.svelte'
  import SvgHealthMana from './SvgHealthMana.svelte'

  export let valuePoints = ''
  export let valueHistoric = ''
  export let text = ''
  export let subClass = ''

</script>


<div class="container_health_mana -{subClass}">
  <div class="container_max_points">
    <InputDefault className='max_points' nameInput='points_{subClass}' maxlength={3} caracterLength={2} bind:value={valuePoints} />
    <span class="text_max">Máximos</span>
  </div>
  <div class="container_historic">
    <span class="text_title">Pontos de {text}</span>
    <InputDefault className='historic' nameInput='_historic_{subClass}' caracterLength={13} bind:value={valueHistoric} />
    <span class="text_current">Atuais</span>
  </div>

  
  
  

  <SvgHealthMana />

  </div>

<style>

.container_health_mana {

  position: relative;
  /*width: 90%;*/
  height: 8rem;
  aspect-ratio: 3/1;

}


.container_max_points {
  width: 33%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6% 6% 3% 6%;
  flex-direction: column;
}

.container_historic {
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

  font-size: .8rem;
  width: 100%;
  margin-right: 41%;
  padding: 4% 0;
}

.text_max {
  width: 100%;
  text-align: center;
  font-size: .8rem;
  padding: 3%;
}

.text_current {
  font-size: .8rem;
  width: 100%;
  text-align: center;
  margin-right: 38%;
  padding: 4% 0;

}


</style>