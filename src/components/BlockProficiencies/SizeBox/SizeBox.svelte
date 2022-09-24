<script lang="ts">

  import SvgSizeBox from "./SvgSizeBox.svelte";
    
  import { VAR_size } from '../../../utils/store'
  import ComboBox from '../../UI/ComboBox/ComboBox.svelte'

  let list = [ 
    { name:'Minúsculo', modifier:'+5/-5' }, 
    { name:'Pequeno', modifier: '+2/-2' },
    { name:'Médio', modifier: '0' },
    { name:'Grande', modifier: '-2/+2' },
    { name:'Enorme', modifier: '-5/+5' }, 
    { name:'Colossal', modifier: '-10/+10' }
  ]

  function returnValue(index:number) {
    $VAR_size.selected = list[index].name
    $VAR_size.modifier = list[index].modifier
  }

</script>

<div class="size_box">
  <label class="txt_label -size" for="size">Tamanho</label>

  <div class="container_combo_box">
    <ComboBox className="size" idName="size" list={list} returnValue={returnValue} />
  </div>
  
  <span class="text_modifiers">{$VAR_size.modifier}</span>

  <SvgSizeBox />
</div>


<style>

  .size_box {
    position: relative;
    width: 100%;
    height: 100%;

    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 33% 33% 34%;
    padding: 0 4.5% 0 2%;

    z-index: 2;
  }   

  .container_combo_box {
    width: 90%;
    aspect-ratio: 2/1;
  }
  .text_modifiers {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
  }

</style>