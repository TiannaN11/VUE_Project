<template>
  <div class="Choose">
    <h2>Choose Your Genre!</h2>
    <div class="genres">

    </div>
    <h4>With so many books to choose from, let's narrow some niche's down for you</h4>
  </div>
</template>
<script>
export default {
  name: 'ChooseYourGenre'
}
</script>
<style scoped>

.Choose {
  h2, h4 {
    padding: 1rem;
    text-align: center;
    justify-content: center;
  }
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
}

</style>