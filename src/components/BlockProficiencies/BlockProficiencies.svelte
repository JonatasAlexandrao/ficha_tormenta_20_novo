<script lang="ts">

  import ProficiencyBox from "./ProficiencyBox/ProficiencyBox.svelte";
  import SizeBox from "./SizeBox/SizeBox.svelte";
  import DisplacementBox from "./DisplacementBox/DisplacementBox.svelte";
  

</script>

<div class="container_proficiency_size_displacement">

  <ProficiencyBox />
  <SizeBox />
  <DisplacementBox />
  
</div>



<style>
  .container_proficiency_size_displacement {
    position: relative;
    width: 100%;
    height: 21rem;

    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 11rem 5rem 5rem;

  }

</style>