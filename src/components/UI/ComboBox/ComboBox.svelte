<script lang="ts">
  import { VAR_attributesModifier } from '../../../utils/store'
  export let className :string = ''
  export let idName :string = ''
  export let textDefault :string = ''
  export let returnValue
  export let list = $VAR_attributesModifier
 
  let textInput = textDefault || ''

  function clickComboBox() {
    const listBox = this.nextElementSibling
    listBox.classList.toggle('-active')  
  }

  function selected() {
    const text = this.textContent
    textInput = text

    const input = this.parentElement.previousElementSibling

    if(text.length > 5)
      input.style.fontSize = "1.2rem"
    if(text.length > 6)
      input.style.fontSize = "1.1rem"
    if(text.length > 8)
      input.style.fontSize = ".9rem"
    

    list.forEach((item, index) => {
      if(item.name === text) { returnValue(index) }
    })
  }

  function closedComboBox() {
    const listBox = this.nextElementSibling
    listBox.classList.remove('-active')
  }

</script>
<div class="content_combo_box" >
  <input class="combo_box -{className}" id={idName} type="text" value={textInput} on:click={clickComboBox} readonly on:blur={closedComboBox}>

  <ul class="listBox">
    {#each list as item}
      <li on:mousedown={selected}>{item.name}</li>
    {/each}
  </ul>
</div>

<style>

  .content_combo_box {
    position: relative;
    width: 100%;
    height: 100%;

    display: grid;
    align-items: center;
    justify-items: center;
  }
  .combo_box {
    width: 100%;
    height: 75%;
    font-size: 1.3rem;
    text-align: center;
    cursor: pointer;
    background-color: var(--color-input);
  }

  .combo_box:focus { outline: .2rem solid var(--color-input-selected); }

  .combo_box.-modifier {
    font-size: 1rem;
  }
  .combo_box.-modifier ~ .listBox li {
    font-size: 1rem;
  }
    
  .combo_box.-size {
    font-size: 1.3rem;
    padding: 0 5%;
  }

  .combo_box.-skill_modifier {
    width: 90%;
  }

  .listBox {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);

    
    display: none;
    flex-direction: column;
    margin-top: .5rem;

    background-color: var(--color-fill);
    border: .2rem solid var(--color-stroke);
    z-index: 1;
    
  }

  .listBox.-active {
    display: flex;
  }

  .listBox::before {
    content: '';
    display: inline-block;
    width: 1.5rem; 
    height: 1.5rem; 

    position: absolute;
    top: 6%;
    left: 50%;
    transform: translateY(-100%) translateX(-50%) rotate(45deg);

    background-color: var(--color-fill);
    border: .2rem solid var(--color-stroke);
  }

  .listBox::after {
    content: '';
    display: inline-block;
    width: 90%; 
    height: 100%; 
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);

    background-color: var(--color-fill);
  }
      
  li {
    width: 100%;
    height: 100%;
    padding: .5rem .8rem;

    font-size: 1.4rem;
    text-align: center;
    cursor: pointer;
    z-index: 1;
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

</style>