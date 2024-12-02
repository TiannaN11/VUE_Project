<template>
  <div class="newsletter">
    <h1>Join our Newsletter!</h1>
    <h3>Be the first to know about the latest trends and up and coming great reads!</h3>
  </div>
</template>
<script>
export default {
  name: 'Newsletter'
}
</script>
<style scoped>

BookPreviewCard img {
  align-content: center;
}


.newsletter {
  background-color: #5B54BC;
  margin-top: 5rem;
  height: 20rem;
  text-align: center;

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