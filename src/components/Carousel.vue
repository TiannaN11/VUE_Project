<script setup>
import 'vue3-carousel/dist/carousel.css'
import bookData from "./MOCK_DATA.js";
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'
import BookDetails from "./BookDetails.vue";

const bookCover = bookData.data
bookCover.sort(() => Math.random() - 0.5)
bookCover.length = 5

console.log('bookCover: ', bookCover)

const carouselConfig = {
  itemsToShow: 2.5,
  wrapAround: true,
  autoplay: 5000,
  gap: 10
}

</script>

<template>



</template>

<style scoped>

</style>