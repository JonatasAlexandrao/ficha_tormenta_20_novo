<script lang="ts">
  import InputNumber from '../../UI/InputNumber/InputNumber.svelte';


  import InputDefault from '../../UI/InputDefault/InputDefault.svelte'
  import SvgHealthMana from './SvgHealthMana.svelte'

  export let valuePoints :number = 0
  export let valueHistoric :string = ''
  export let text :string = ''
  export let subClass :string = ''

</script>


<div class="container -{subClass}">
  <div class="content_max_points">
    <InputNumber className='max_points' nameInput='points_{subClass}' maxlength={3} bind:value={valuePoints} fontSize={3.4} />
    <span class="text_max">Máximos</span>
  </div>
  <div class="content_historic">
    <span class="text_title">Pontos de {text}</span>
    <div class="container_input">
      <InputDefault className='historic' nameInput='_historic_{subClass}' numVisibleCharacter={13} bind:value={valueHistoric} />
    </div>
    <span class="text_current">Atuais</span>
  </div>
  
  <SvgHealthMana />

  </div>

<style>

.container {
  position: relative;
  height: 8.5rem;
  aspect-ratio: 3/1;
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

  display: grid;
  grid-template-rows: 20% 50% 20%;
  grid-template-columns: 100%;
  gap: 5%;

}


.text_title {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 59% 41%; 
  align-items: end;

  font-family: Tormenta20, Arial, sans-serif;
  font-size: 1.1rem;
  text-align: center;
}

.container_input {
  width: 92%;
  height: 100%;

}

.text_max {
  width: 100%;
  text-align: center;
  padding: 3%;
}

.text_current {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 59% 41%; 

  text-align: center;
}

.text_max, .text_current {
  font-size: .8rem;
}


</style>