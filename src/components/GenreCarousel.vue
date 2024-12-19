<script setup>
import 'vue3-carousel/dist/carousel.css'
import genreData from "./Data Sets/genreData.js";
import helpers from "../utils/helpers.js";
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

const genres = genreData.data
genres.sort(() => Math.random() - 0.5)
genres.length = 5

console.log('genres: ', genres)

const carouselConfig = {
  itemsToShow: 3,
  wrapAround: true,
  autoplay: 5000,
  gap: 10
}

</script>

<template>

  <carousel v-bind="carouselConfig">
    <slide v-for="(genre, index) in genres" :key="index">
      <router-link :to="{ name: 'GenreDetails', params: { genreName: helpers.replaceSpaceWithDash(genre.topic)} }"
                   class="carousel__item"
                   :style="'background-image: url(../../src/assets/GenreImages/' + genre.image + ');'">
        <h5>{{ genre.topic }}</h5>
      </router-link>
    </slide>

    <template #addons>
      <navigation/>
      <pagination/>
    </template>
  </carousel>

</template>

<style scoped>

section.carousel {
  margin: 0 2rem 0 2rem;

  .carousel__item {
    width: 100%;
    display: flex;
    min-height: 200px;
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: auto 150%;

    .genre img {
      width: 100rem;
      height: 200rem;
    }

    h5 {
      color: white;
    }
  }
}


/*ipad (tablet and up) */
@media only screen and (width > 700px) {

  section.carousel {
    .carousel__item {
      min-height: 400px;
    }
  }
}

/*desktop*/
@media only screen and (width > 800px) {
  section.carousel {
    .carousel__item {
      min-height: 500px;
    }
  }
}

</style>
