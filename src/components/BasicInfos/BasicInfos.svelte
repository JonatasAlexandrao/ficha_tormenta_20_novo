<script lang="ts">

  import { VAR_character, VAR_player } from '../../utils/store'

  import TextBoxCaracter from "./TextBoxCaracter/TextBoxCaracter.svelte"
  import TextBoxDefault from "./TextBoxDefault/TextBoxDefault.svelte";

</script>

<section class="basic_infos">
  <div class="line_1">
    <TextBoxCaracter bind:value={$VAR_character.name} />
    <TextBoxDefault text='Jogador' nameInput='player' numVisibleCharacter={18} bind:value={$VAR_player} />
  </div>

  <div class="line_2">
    <TextBoxDefault text='Raça' nameInput='race' numVisibleCharacter={10} bind:value={$VAR_character.race} />
    <TextBoxDefault text='Origem' nameInput='origin' numVisibleCharacter={13} bind:value={$VAR_character.origin} />
    <TextBoxDefault text='Classe & Nível' nameInput='class-level' numVisibleCharacter={14} bind:value={$VAR_character.class} bind:valueLevel={$VAR_character.level} />
    <TextBoxDefault text='Divindade' nameInput='divinity' numVisibleCharacter={13} bind:value={$VAR_character.divinity} />

  </div>

  
</section>

<style>

  .basic_infos {
    position: relative;
    width: 100%;

    display: grid;
    grid-template-rows: 4.5rem 3.2rem;
    align-items: flex-end;
    justify-items: center;
    row-gap: 1rem;

    margin-bottom: 3rem;

    background-image: url("../../public/images/Fundos/Basic-Info.svg"); 
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 95%;

  }

  .line_1 {
    position: relative;
    width: 80%;

    display: grid;
    grid-template-columns: 60% 38%;
    column-gap: 2%;
    grid-template-rows: 4.5rem;

    align-items: flex-end;

  }

  .line_2 {
    width: 100%;
    display: grid;
    padding: 0 1rem;
    justify-content: space-between;
    grid-template-columns: 19% 23% 30% 23%;
  }

</style>