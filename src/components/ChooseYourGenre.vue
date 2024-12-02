<template>
  <div class="Choose">
    <h2>Choose Your Genre!</h2>
    <h4>With so many books to choose from, let's narrow some niche's down for you</h4>
  </div>
</template>
<script>
export default {
  name: 'ChooseYourGenre'
}
</script>
<style scoped>
BookPreviewCard img {
  align-content: center;
}


/*ipad (tablet and up) */
@media only screen and (width > 700px) {
}

/*desktop*/
@media only screen and (width > 800px) {
  .hero img {
    width: 100%;
    border-bottom-left-radius: 20em;
  }

  h1, h2 {
    padding-right: 2rem;
    margin: 0;
  }
}

</style>