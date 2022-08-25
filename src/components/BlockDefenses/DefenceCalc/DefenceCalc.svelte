<script lang="ts">

import { VAR_attributesModifier, VAR_armor, VAR_shield, VAR_otherNumDefense, VAR_armorPenalty } from '../../../utils/store'
import ComboBox from '../../UI/ComboBox/ComboBox.svelte'
import InputDefault from '../../UI/InputDefault/InputDefault.svelte'
import SvgDefenceCalc from './SvgDefenceCalc.svelte';

export let modifierDefault = 'Des'
let index = 1
let returnValue = (selected) => { index = selected }

$: valueModifier = isNumber($VAR_attributesModifier[index].value)
$: bonus = isNumber($VAR_armor.bonus) + isNumber($VAR_shield.bonus)
$: other = isNumber($VAR_otherNumDefense)
$: difficultyClass = (10 + (valueModifier + bonus + other))

function isNumber(num) { 
  return num ? parseInt(num) : 0
}
 

</script>

<div class="defense_calc">

  <div class="container_defense_value">
    <span class="defense_title">Defesa</span>
    <span class="defense_value">{difficultyClass}</span>
  </div>
  
  <span class="value_default">=10</span>

  <div class="container_calc">

    <div class="container_top">

      <div class="column -modifier">
        <div class="content_title">
          <span class="modifier_title">Mod. de</span>
          <ComboBox className="modifier" idName="modifier" textDefault={modifierDefault} returnValue={returnValue}/>
        </div>
        <span class="value -modifier">{$VAR_attributesModifier[index].value}</span>
      </div>

      <div class="column -armor_bonus">
        <span class="content_title">Bonus de Armadura</span>
        <span class="value -armor_bonus">{$VAR_armor.bonus}</span>
      </div>

      <div class="column -shield_bonus">
        <span class="content_title">Bonus de Escudo</span>
        <span class="value -shield_bonus">{$VAR_shield.bonus}</span>
      </div>

      <div class="column -others">
        <span class="content_title">Outros</span>
        <div class="container_input_other">
          <InputDefault className="others" nameInput="defense_calc_others" bind:value={$VAR_otherNumDefense} />
        </div>
      </div>

    </div>
    
    <div class="container_armor_penalty">
      <span class="penalty_text">Penalidade de Armadura</span>
      <span class="penalty_value"> {$VAR_armorPenalty} </span>
    </div>
    
  </div>

  <SvgDefenceCalc />
</div>

<style>

.defense_calc {
  --font-calcDefence-total: 3.3rem;
  --font-calcDefence-1: 1.2rem;
  --font-calcDefence-2: 1rem;
  --font-calcDefence-3: .8rem;

  position: relative;
  width: 100%;
  aspect-ratio: 3.1/1;
 
  display: grid;
  grid-template-columns: 25% 5% 70%;
  justify-content: center;
  justify-items: center;
  align-items: center;

  /*padding: .4rem .6rem .4rem .4rem;*/
  font-size: var(--font-calcDefence-1);
  
  z-index: 2;
}
.container_defense_value {
  position: relative;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 20% 60% 20%;
  justify-content: center;
  align-items: center;
}

.defense_title {
  font-family: Tormenta20, sans-serif;
  font-size: var(--font-calcDefence-1);
  text-align: center;
}

.defense_value {
  font-size: var(--font-calcDefence-total);
  text-align: center;
}


/*-----------------------------------------*/
.value_default {
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-rows: 24% 41% 35%;

  font-size: var(--font-calcDefence-2);
}
.value_default::before {
  content: '';
}

/*-----------------------------------------*/  


.container_calc {
  width: 90%;
  height: 95%;
  display: grid;
  grid-auto-rows: 70% 25%;
}

.container_top {  
  display: grid;
  grid-template-columns: repeat(4, 25%);

  width: 100%;
  /*height: 5rem;*/
}
.container_top span {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.container_top .column {
  position: relative;
  /*padding: .3rem;*/
  font-size: var(--font-calcDefence-3);

  display: grid;
  grid-template-rows: 50% 50%;
  align-items: center;
  text-align: center;
}

.content_title {
  display: grid;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  align-content: center;
}





.container_armor_penalty {
  width: 85%;
  display: grid;
  grid-template-columns: 70% 30%;
  align-items: flex-end;
  justify-items: center;
}

.penalty_text {
  font-size: var(--font-calcDefence-3);
}

.penalty_value {
  width: 90%;
  font-size: var(--font-calcDefence-2);
  text-align: center;
  border-bottom: #000 2px solid;
}

.value {
  font-size: var(--font-calcDefence-2);
}

/*



      

.container_top .container::after {
  content: '+';
  position: absolute;
  top: 70%;
  left: .3rem;
  transform: translateX(-50%) translateY(-50%);
  font-size: 1.4rem;
}

.container_input_other {
  position: relative;
  width: 100%;
  height: 100%;
  border-bottom: #000 2px solid;
}

.value {
  position: relative;
  width: 100%;
  font-size: 1.4rem;
  border-bottom: #000 2px solid;
}


*/
</style>