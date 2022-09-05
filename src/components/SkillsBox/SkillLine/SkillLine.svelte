<script>
  import { onMount } from 'svelte';


  import { VAR_attributesModifier, VAR_character, VAR_skills, VAR_armorPenalty } from '../../../utils/store'
  import ComboBox from '../../UI/ComboBox/ComboBox.svelte' 
  import InputDefault from '../../UI/InputDefault/InputDefault.svelte'
  import SvgSkillTotal from './SvgSkillTotal.svelte'

  export let text = ''
  export let attributeDefault = 'For'
  export let num = ''
  export let className = ''

  let checkBox = false
  let indexSelecting = 1
  let returnValue = (selected) => { indexSelecting = selected }

  $: $VAR_skills[num].halfLevel = parseInt($VAR_character.level / 2)
  $: halfLevel = parseInt($VAR_character.level / 2)

  $: attributeValue = $VAR_attributesModifier[indexSelecting].value

  $: trained = checkBox ? 2 : 0

  $VAR_attributesModifier.forEach((item, index) => {
    if(item.name === attributeDefault) { returnValue(index) }
  });

  let others = 0
  $: $VAR_skills[num].others = parseInt(others)

  let havePenalty = $VAR_skills[num].armorPenalty
  $: armorPenaltyValue = havePenalty ? $VAR_armorPenalty : 0

 
  let onlyTrained = $VAR_skills[num].onlyTrained
  $: notTrained = onlyTrained & !checkBox ? '-only_trained' : ''
  
  /* ====== TOTAL ====== */
  $: $VAR_skills[num].total = (attributeValue + trained + halfLevel + parseInt(others)) + armorPenaltyValue

  /* ==== Teste Penalty or Training ==== */
  let title

  let isArmorPenalty = text.indexOf('¤') > -1 ? true : false
  let isTrained = text.indexOf('⌂') > -1 ? true : false

  if (isArmorPenalty && isTrained) {
    title = `Penalidade de Armadura \nSomente Treinado` 
  } else if (isArmorPenalty) { 
    title = 'Penalidade de Armadura'
  } else if (isTrained) {
    title = 'Somente Treinado'
  }

  // ============== //


</script>

<tr class="skill_line {className}" >
  <td class="skill_line_name"> 
    <input class="check_box {className}" id="check_box_{num}" type="checkbox" bind:checked={checkBox}> 
    <label class="check_label {notTrained}" for="check_box_{num}" title={title}>{text}</label>  
  </td>
  <td class="skill_line_total">
     {$VAR_skills[num].total} 
     <SvgSkillTotal />
  </td>
  <td class="skill_line_half_level"> {$VAR_skills[num].halfLevel} </td>
  <td class="skill_line_modifier" > 
    <ComboBox className="skill_modifier" idName="skill_modifier" textDefault={attributeDefault} returnValue={returnValue} />
  </td>
  <td class="skill_line_training"> {trained} </td>
  <td class="skill_line_others"> 
    <InputDefault className="skill_other -{className}" nameInput="skill_other_{num}" bind:value={others} maxlength="3" />
  </td>
</tr>


<style>


.skill_line {
  display: grid;
  grid-template-columns: 38.5% 10% 9% 12% 9% 9%;
  grid-column-gap: 2.5%;
  font-size: 1.4rem;
}
.skill_line td {
  position: relative;
  display: inherit;
  justify-content: center;
  align-items: center;
  border-bottom: solid .1rem rgba(0, 0, 0, .3);
}

.skill_line .skill_line_name { 
  grid-auto-flow: column;
  align-items: center;
  justify-content: left;
  font-size: 1.5rem;
}
.skill_line .skill_line_name .check_box { 
  opacity: .8;
  cursor: pointer;
  margin: 0 .5rem 0 0;
}
.skill_line .skill_line_name .check_label.-only_trained { 
  color: var(--color-alert);
}

.skill_line_name label[for=check_box_1],
.skill_line_name label[for=check_box_5] {
  font-size: 1.15rem;
}
.skill_line_name label[for=check_box_10] {
  font-size: 1.4rem;
}
.skill_line_name label[for=check_box_17] {
  font-size: 1.3rem;
}

.skill_line .skill_line_total {
  border-bottom: none;
  z-index: 1;
}
.skill_line_total::after {
  content: '=';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) translateX(100%);
  font-size: 1.6rem;
  font-weight: bold;
}

.skill_line_half_level::after,
.skill_line_modifier::after,
.skill_line_training::after {
  content: '+';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) translateX(100%);
  font-size: 1.6rem;
  font-weight: bold;
}

</style>