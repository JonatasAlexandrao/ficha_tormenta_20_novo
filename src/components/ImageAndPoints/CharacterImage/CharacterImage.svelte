<script lang='ts'>

let srcImage = "public/images/"
  $: srcFormatted = "public/images/" + srcImage.replace('C:\\fakepath\\', '')
  function teste() {
    console.log(this)
  }

  

</script>

<div class="image">
  <img src={srcFormatted} alt="">
</div>

<input type="file" name="" id="" on:click={teste} bind:value={srcImage}>

<style>

  .image {

    height: 95%;
    aspect-ratio: 1/1.3;
    border: .3rem solid #000;
  }

  .image img {
    width: 100%;
    opacity: .9;
  }
  
</style>