<script lang="ts">

  import TextBoxCaracter from "../../components/TextBoxCaracter/TextBoxCaracter.svelte"
  import TextBoxDefault from "../../components/TextBoxDefault/TextBoxDefault.svelte";

</script>

<section class="basic_infos">
  <div class="line_1">
    <TextBoxCaracter />
    <TextBoxDefault nameInput='player' text='Jogador' />
  </div>
  <div class="line_2">

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

  }

  .line_1 {
    position: relative;
    width: 80%;

    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 4.5rem;

    align-items: flex-end;

    background-color: blueviolet;
  }

  .line_2 {
    width: 100%;
    height: 100%;
    background-color: brown;
  }

</style>