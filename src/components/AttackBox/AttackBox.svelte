<script lang="ts">

import { VAR_infoAttack } from '../../utils/store'
import InputDefault from '../UI/InputDefault/InputDefault.svelte'
import SvgAttackBox from './SvgAttackBox.svelte';

</script>

<div class="container">

  <table class="table_attack">
    <thead>
      <tr>
        <th>Ataques</th>
        <th>Teste de Ataque</th>
        <th>Dano</th>
        <th>Crítico</th>
        <th>Tipo</th>
        <th>Alcance</th>
      </tr>
    </thead>

    <tbody>
 
      {#each $VAR_infoAttack as line}
        <tr>
          {#each line as item, i}
            <td>
              <InputDefault className="attack" nameInput={item.nameInput} fontSize={1.6} numVisibleCharacter={i >= 1 ? 1 : 8} bind:value={item.value} />
            </td>
          {/each}
        </tr>
      {/each}

    </tbody>

  </table>

  <SvgAttackBox />

</div>


<style>

  .container {
    position: relative;
    width: 100%;
    height: 18rem;

    margin-bottom: 2rem;
    padding: 1rem 1rem 2rem 1rem;

    z-index: 1;
  }

  .table_attack {
    border-collapse: collapse;
  }
  tr { height: 16%; }
  th { width: 14%; font-size: .9rem; }
  td { height: 2.65rem; }

  th:first-child {
    font-size: 1.3rem;
    text-transform: uppercase;
    width: 30%;
  }

</style>