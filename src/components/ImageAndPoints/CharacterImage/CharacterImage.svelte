<script lang='ts'>

  let label :object
  let srcImage = ''
    $: noImage = srcImage ? '' : 'Adicionar Imagem <br> (130 x 170)'
 
  function addCharacterImage(input) {

    const file = input.target.files[0]
    
    if(file) {
      srcImage = file.path
    }
    else {
      console.log('não selecionou nada')
    }
    
  }

</script>

<label for="selectImage" class="container" bind:this={label}>
  {@html noImage}
  <img src={srcImage} alt="" class="characterImage">
</label>

<input type="file" id="selectImage" bind:value={srcImage} on:change={addCharacterImage}>

<style>

  .container {
    position: relative;
    width: 13rem;
    height: 16.9rem;
    aspect-ratio: 1/1.3;
    border: .3rem solid #000;

    font-size: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .characterImage {
    position: absolute;
    width: 100%;
  }

  #selectImage {
    display: none;
  }
  
</style>