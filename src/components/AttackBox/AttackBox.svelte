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
              <InputDefault className="attack" nameInput={item.nameInput} caracterLength={i >= 1 ? 2 : 10} bind:value={item.value} />
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

    margin-bottom: 1rem;
    padding: 1rem 1rem 2rem 1rem;

    z-index: 1;

    font-size: var(--font-size-default);

  }

  .table_attack {
    border-collapse: collapse;
  }
  tr { height: 16%; }
  th { width: 14%; }
  td { height: 2.65rem; }

  th:first-child {
    font-size: calc(var(--font-size-default) * 1.2);
    text-transform: uppercase;
    width: 30%;
  }

</style>