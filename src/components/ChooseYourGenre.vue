<script>
import Carousel from "./Carousel.vue";

export default {
  name: 'ChooseYourGenre',
  components: {Carousel}

}

</script>

<template>

  <div class="Choose">
    <h2>Choose Your Genre!</h2>
    <h4>With so many books to choose from, let's narrow some niche's down for you</h4>
    <Carousel/>
  </div>


</template>

<style scoped>



.Choose {
  margin: 4rem 0 4rem 0;

  h2, h4 {
    text-align: center;
    justify-content: center;
  }

  Carousel {
    margin: 4rem 0 0 4rem;
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