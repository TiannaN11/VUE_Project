<script>
import Carousel from "./GenreCarousel.vue";

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

  /*text format*/
  h2, h4 {
    text-align: center;
    justify-content: center;
    margin: 1rem 2rem 1rem 2rem;
  }

  Carousel {
    margin: 4rem 0 0 4rem;
  }
}


/*ipad (tablet and up) */
@media only screen and (width > 700px) {

  /*text format*/
  .Choose {
    h2 {
      margin: 1rem 5rem 1rem 5rem;
    }
    h4 {
      margin-bottom: 3.5rem;
    }
  }

}

/*desktop*/
@media only screen and (width > 800px) {
  .hero img {
    width: 100%;
    border-bottom-left-radius: 20em;
  }
}

</style>