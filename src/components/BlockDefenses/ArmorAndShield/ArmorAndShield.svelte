<script lang="ts">
 
import { VAR_armor, VAR_shield } from '../../../utils/store'
import InputDefault from '../../UI/InputDefault/InputDefault.svelte'
import InputNumber from '../../UI/InputNumber/InputNumber.svelte';
import SvgArmorAndShield from "./SvgArmorAndShield.svelte";

function te() {
  console.log($VAR_armor)
}
</script>

<div class="armor_and_shield">
  <table>
    <thead>
      <tr>
        <th>Armadura & Escudo</th>
        <th>Defesa</th>
        <th>Penalidade</th>
      </tr>
    </thead>
    <tbody on:click={te}>

      <tr>
        <td>
          <InputDefault className="armor_shield -description" nameInput="description_armor_and_shield_1" numVisibleCharacter={10} bind:value={$VAR_armor.name} fontSize={1.4} />
        </td>
        <td>
          <InputNumber className="armor_shield -defense_num" nameInput="defense_num_armor_and_shield_1" numVisibleCharacter={2} bind:value={$VAR_armor.bonus} maxlength={3} />
        </td>
        <td>
          <InputDefault className="armor_shield -penalty_num" nameInput="penalty_num_armor_and_shield_1" numVisibleCharacter={2} bind:value={$VAR_armor.penalty} maxlength={3} />
        </td>
      </tr>
      <tr>
        <td><InputDefault className="armor_shield -description" nameInput="description_armor_and_shield_2" numVisibleCharacter={10} bind:value={$VAR_shield.name} fontSize={1.4} /></td>
        <td><InputDefault className="armor_shield -defense_num" nameInput="defense_num_armor_and_shield_2" numVisibleCharacter={2} bind:value={$VAR_shield.bonus} maxlength={3} /></td>
        <td><InputDefault className="armor_shield -penalty_num" nameInput="penalty_num_armor_and_shield_2" numVisibleCharacter={2} bind:value={$VAR_shield.penalty} maxlength={3} /></td>
      </tr>

    </tbody>
    
  </table>

  <SvgArmorAndShield />
</div>



<style>

  :global(.-armor_shield.-description) {
    font-size: 1.8rem;
  }

  .armor_and_shield {
    position: relative;
    width: 100%;
    aspect-ratio: 3/1;
    padding: 5%;
    z-index: 2;
  }

  table {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 25% 75%;
  }

  tbody, thead, td, th, tr {
    width: 100%;
    height: 100%;
    display: grid;
  }

  tbody, thead {
    align-items: center;
    align-content: center;
  }

  tbody {
    grid-template-rows: 48% 48%;
    gap: 2%;
  }

  th { font-size: .8rem; }

  tr {
    grid-template-columns: 55% 22% 22%;
    justify-content: space-between;
  }


</style>