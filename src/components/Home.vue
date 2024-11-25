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

      <div class="hero">
        <img src="../assets/home-hero-2.png" alt="hero"/>
        <div class="bottom-right">
          <h1>Stories For Everyone</h1>
          <h3>Get ready to find your new favorite book and dive into a whole new world</h3>
        </div>
      </div>

      <div class="picks">
        <h2>Picks Made Just For You</h2>
        <div v-for="(book, index) in bookData.data" :key="index">
          <book-preview-card :book="book" :image-only="true"/>
        </div>
      </div>

      <div class="checkout">
        <h1>Checkout</h1>
        <h3>to see what's new with friends and other fellow readers!</h3>
      </div>

      <div class="Choose">
        <h1>Choose Your Genre!</h1>
        <h3>With so many books to choose from, let's narrow some niche's down for you</h3>
      </div>

    </section>
  </primary-template>
</template>

<style scoped>
h1 {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: clamp(50px, 8vw, 100px);
}

h2 {
  text-align: center;
  font-family: "Montsterrat", sans-serif;
  display: flex;
  font-size: clamp(20px, 4vw, 80px);
}

h3 {
  text-align: center;
  font-family: "Montsterrat", sans-serif;
  font-size: clamp(10px, 4vw, 30px);
}

BookPreviewCard img {
  align-content: center;
}

.picks {
  background-color: orange;
  display: flex;
  flex-wrap: wrap;
}

.hero{
  position: relative;
  text-align: center;
  color: white;
}

.hero img{
  max-width: 100%;
  align-content: flex-start;
  display: flex;
  border-bottom-left-radius: 20em;
}

.bottom-right {
  position: absolute;
  bottom: 1px;
  right: 16px;
}



</style>


