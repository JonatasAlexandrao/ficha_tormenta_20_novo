<script>

  import { VAR_skills } from '../../utils/store'
  import SkillLine from './SkillLine/SkillLine.svelte';
  import SvgSkillsBotton from './SvgSkillsBotton.svelte';
  import SvgSkillsTop from './SvgSkillsTop.svelte';

  

</script>


<div class="container_skills">
  <table>
    <thead>
      <tr>
        <th>Perícias</th>
        <th>Total</th>
        <th>1/2 do Nível</th>
        <th>Mod. de Atributo</th>
        <th>Treino</th>
        <th>Outros</th>
      </tr>
    </thead>
    
    <tbody>

      {#each $VAR_skills as {text, attribute, className}, index}
        <SkillLine text={text} attributeDefault={attribute} className={className} num={index} />
      {/each}
      
    </tbody>
    <tfoot class="table_footer">
      <p>⌂ Somente Treinado.</p>
      <p>¤ Penalidade de Armadura.</p>
    </tfoot>
      
  </table>
  

  <SvgSkillsTop />
  <SvgSkillsBotton />

</div>

<style>

.container_skills {
  width: 100%;
  height: auto;
  position: relative;

  margin-top: 1.5rem;
  z-index: 1;
}

table {
  position: relative;
  display: grid;
}

table thead { 
  width: 100%;
  padding: 0 1.5rem;
  font-size: .9rem;
}

table thead, tbody { 
  display: inherit;
  grid-auto-rows: 3.3rem; 
}

thead tr {
  display: grid;
  grid-template-columns: 38.5% 10% 9% 12% 9% 9%;
  grid-column-gap: 2.5%;
  align-items: flex-end;
  padding-bottom: 1rem;
  font-size: .8rem;
}

thead tr th:nth-of-type(1) {
  font-size: 2rem;
  justify-self: left;
}

thead tr th:nth-of-type(2) {
  font-size: 1.3rem;
}

tbody, tfoot {
  padding: 0 1rem;
  border-left: var(--color-stroke) .3rem solid;
  border-right: var(--color-stroke) .3rem solid;
  background-color: var(--color-fill);
}

tfoot {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  padding: 2rem 0 0 0;

  font-size: 1.3rem;
  z-index: 1;
}
tfoot p {
  width: 58%;
  text-align: center;
}
tfoot p:nth-of-type(1) {
  justify-self: right;
}

</style>