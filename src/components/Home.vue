<script setup>
/* import bookData from './MOCK_DATA.js'*/
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
import BookDetails from "./BookDetails.vue";
import bookData from "./MOCK_DATA.js";
import BookPreviewCard from "./BookPreviewCard.vue";
</script>

<template>

  <primary-template>
    <section class="main">

      <div class="introduction">
        <h1>Stories For Everyone</h1>
        <h3>Get Ready to Find your new favorite book and dive into a whole new world</h3>
      </div>

      <div class="picks">
        <h2>Picks Made Just For You</h2>
        <div v-for="(book, index) in bookData.data" :key="index">
          <book-preview-card :book="book" :image-only="true"/>
        </div>
      </div>

    </section>
  </primary-template>
</template>

<style scoped>
h1 {
  text-align: center;
  font-family: "Montsterrat", sans-serif;
  font-size: 5em;
}

h2 {
  text-align: center;
  font-family: "Montsterrat", sans-serif;
  display: flex;
  font-size: 2em;
}


h3 {
  text-align: center;
  font-family: "Montsterrat", sans-serif;
  font-size: 1.5em;
}


img {
  padding: 1rem;
}

.picks {
  background-color: orange;
  display: flex;
  flex-wrap: wrap;
}
</style>


