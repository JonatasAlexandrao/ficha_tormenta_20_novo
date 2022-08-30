<script lang="ts">

import { VAR_armor, VAR_shield } from '../../../utils/store'
import InputDefault from '../../UI/InputDefault/InputDefault.svelte'
import SvgArmorAndShield from "./SvgArmorAndShield.svelte";

</script>

<!-- <div class="armor_and_shield">
  <div class="columns -name">
    <span class="title -name">Armadura & Escudo</span>
    <div class="container_input_armor_and_shield">
      <InputDefault className="armor_and_shield" nameInput="name_armor_and_shield_1" caracterLength={12} bind:value={$VAR_armor.name} />
    </div>
    <div class="container_input_armor_and_shield">
      <InputDefault className="armor_and_shield" nameInput="name_armor_and_shield_2" caracterLength={12} bind:value={$VAR_shield.name} />
    </div>
  </div>

  <div class="columns -defense_num">
    <span class="title">Defesa</span>
    <div class="container_input_armor_and_shield">
      <InputDefault className="armor_and_shield" nameInput="defense_num_armor_and_shield_1" caracterLength={2} bind:value={$VAR_armor.bonus} />
    </div>
    <div class="container_input_armor_and_shield">
      <InputDefault className="armor_and_shield" nameInput="defense_num_armor_and_shield_2" caracterLength={2} bind:value={$VAR_shield.bonus} />
    </div>
  </div>

  <div class="columns -penalty_num">
    <span class="title">Penalidade</span>
    <div class="container_input_armor_and_shield">
      <InputDefault className="armor_and_shield" nameInput="penalty_num_armor_and_shield_1" caracterLength={2} bind:value={$VAR_armor.penalty} />
    </div>
    <div class="container_input_armor_and_shield">
      <InputDefault className="armor_and_shield" nameInput="penalty_num_armor_and_shield_2" caracterLength={2} bind:value={$VAR_shield.penalty} />
    </div>
  </div>

  <SvgArmorAndShield />
  
</div> -->
<div class="armor_and_shield">
  <table>
    <thead>
      <tr>
        <th>Armadura & Escudo</th>
        <th>Defesa</th>
        <th>Penalidade</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td>
          <InputDefault className="description" nameInput="description_armor_and_shield_1" caracterLength={12} value={''} />
        </td>
        <td>
          <InputDefault className="defense_num" nameInput="defense_num_armor_and_shield_1" caracterLength={2} value={''} />
        </td>
        <td>
          <InputDefault className="penalty_num" nameInput="penalty_num_armor_and_shield_1" caracterLength={2} value={''} />
        </td>
      </tr>
      <tr>
        <td><InputDefault className="description" nameInput="description_armor_and_shield_2" caracterLength={12} value={''} /></td>
        <td><InputDefault className="defense_num" nameInput="defense_num_armor_and_shield_2" caracterLength={2} value={''} /></td>
        <td><InputDefault className="penalty_num" nameInput="penalty_num_armor_and_shield_2" caracterLength={2} value={''} /></td>
      </tr>

    </tbody>
    
  </table>

  <SvgArmorAndShield />
</div>



<style>

  .armor_and_shield {
    position: relative;
    width: 100%;
    aspect-ratio: 3/1;
   /* display: grid;
    grid-template-columns: 54% 20% 20%;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 2%;
    justify-content: center;
    justify-items: center;
    align-items: center;*/
    margin-bottom: 1rem;
  }

</style>