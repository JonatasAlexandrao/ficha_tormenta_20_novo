<script>

  import { VAR_totalWeight, VAR_maxWeight, VAR_totalLifting, VAR_totalTibar, VAR_totalTibarO } from '../../utils/store'

  import EquipmentLine from './EquipmentLine/EquipmentLine.svelte';
  import InputDefault from '../UI/InputDefault/InputDefault.svelte'
  import InputMoney from '../UI/InputMoney/InputMoney.svelte';

  import SvgEquipmentTop from './SvgEquipmentTop.svelte'
  import SvgEquipmentBottom from './SvgEquipmentBottom.svelte'
  

  $: exceeded = $VAR_totalWeight > $VAR_maxWeight ? '-exceeded' : ''

</script>

<div class="container_equipment">
  
  <div class="equipment_top">
    <SvgEquipmentTop />
    <h3 class="title">Equipamento</h3>  
  </div>

  <div class="equipment_main">
    <div class="header_equipment">
      <span>Item</span>
      <span>Peso (Kg)</span>
    </div>
  
    <div class="content_equipment">
      <EquipmentLine num={1} />
      <EquipmentLine num={2} />
      <EquipmentLine num={3} />
      <EquipmentLine num={4} />
      <EquipmentLine num={5} />
      <EquipmentLine num={6} />
      <EquipmentLine num={7} />
      <EquipmentLine num={8} />
      <EquipmentLine num={9} />
      <EquipmentLine num={10} />
      <EquipmentLine num={11} />
      <EquipmentLine num={12} />
      <EquipmentLine num={13} />
      <EquipmentLine num={14} />
      <EquipmentLine num={15} />
    </div>
    
    
    <div class="container_totals">
  
      <div class="maximum_weight {exceeded}">
        <span>
          <InputDefault nameInput="total_weight" className="total_weight" value={$VAR_totalWeight.toString().replace('.', ',')} readonly={true} fontSize={1.4}/>
          <span>de</span>
          <InputDefault nameInput="max_weight" className="max_weight" value={$VAR_maxWeight + 'Kg'} readonly={true} fontSize={1.4}/> 
        </span>
        
        <label for="max_weight">Carga Máxima (3x Força)</label>
      </div>
  
      <div class="total_lifting">
        <span>
          <InputDefault nameInput="total_lifting" className="total_lifting" value={$VAR_totalLifting.toString()} readonly={true} />
        </span>
        <label for="total_lifting">Levantar (até 10x Força)</label>
      </div>
  
      <div class="total_money">
        <div class="container -tibar">
          <label for="total_tibar">T$:</label>
          <div class="container_input">
            <InputMoney className="total_tibar" nameInput="total_tibar" value={$VAR_totalTibar} />
          </div>
        </div>
        <div class="container -tibarO">
          <label for="total_tibarO">TO:</label>
          <div class="container_input">
            <InputMoney className="total_tibarO" nameInput="total_tibarO" value={$VAR_totalTibarO} />
          </div>
          
        </div>
      </div>
  
    </div>
  
  </div>
    
  <div class="equipment_bottom">
    <SvgEquipmentBottom />
  </div> 

</div>

<style>

  .container_equipment {
    position: relative;
    width: 100%;
    z-index: 1;
  }

  .equipment_top {
    position: relative;
    width: 100%;
  }

  .equipment_top::before {
    content: '';
    display: block;
    width: 100%;
    height: 1rem;
    position: absolute;
    bottom: -.5rem;
    left: 50%;
    transform: translateX(-50%);
    border-left: var(--color-stroke) .2rem solid;
    border-right: var(--color-stroke) .2rem solid;
    background-color: var(--color-fill);
  }

  .equipment_top .title {

    text-transform: uppercase;
    font-size: 1.5rem;
    font-family: Tormenta20, Arial, sans-serif;
    font-weight: 100;

    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 40%);

  }

  .equipment_bottom {
    position: relative;
    width: 100%;
    aspect-ratio: 23/1;
    z-index: -1;
  }

  .equipment_bottom::before {
    content: '';
    display: block;
    width: 99.8%;
    height: 1rem;
    position: absolute;
    top: -.5rem;
    left: 50%;
    transform: translateX(-50%);
    border-left: var(--color-stroke) .2rem solid;
    border-right: var(--color-stroke) .2rem solid;
    background-color: var(--color-fill);
  }

  .equipment_main {
    position: relative;
    background-color: var(--color-fill);
    border-right: .2rem var(--color-stroke) solid;
    border-left: .2rem var(--color-stroke) solid;
    padding: 0 3%;
  }

  /* === equipment_main === */
  .header_equipment {
    width: 100%;
    
    display: grid;
    grid-template-columns: 80% 17%;
    padding: 0 3% .5% 3%;

    font-size: 1.2rem;
  }

  .header_equipment span:nth-child(2) {
    text-align: center;
  }

  .content_equipment {
    width: 100%;
    height: 25.7rem;
    overflow: hidden;
    overflow-y: auto;
    padding: 1% 2%;

    display: grid;
    grid-auto-rows: 2.3rem;
    row-gap: 2%;
    
  }

  /* === container_totals === */
  .container_totals {
    width: 100%;
    height: 6rem;
    margin-top: 1.2rem;
    padding-left: 2%;
    display: grid;
    grid-template-columns: 26% 18% 50%;
    gap: 3%;

  }

  .maximum_weight, .total_lifting {
    display: grid;
    grid-template-rows: 50% 50%;
  }

  .total_lifting > span,
  .maximum_weight > span {
    border-bottom: .2rem solid #000;
    align-self: end;
    padding-bottom: 4%;
  }

  .maximum_weight > span {
    display: grid;
    grid-template-columns: 1fr 1rem 1fr;
    align-items: center;  
  }

  .maximum_weight.-exceeded {
    color: var(--color-alert);
  }

  .total_lifting > label,
  .maximum_weight > label {
    padding-top: 4%;
  }

  /* === total === */

  .total_money {
    width: 100%;
    display: grid;
    grid-template-rows: 45% 45%;
    gap: 10%;
  }

  .total_money .container {

    /*height: 3rem;*/
    display: grid;
    grid-template-columns: 1fr 85%;
    align-items: center;
  }

  .total_money .container.-tibar {
   /* margin-bottom: 1rem;*/
  }

  .total_money .container label {
    font-size: 1.4rem;
    justify-self: center;
  }

  .container_input {
    height: 100%;
  }

</style>