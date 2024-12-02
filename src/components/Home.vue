<script setup>
/* import bookData from './MOCK_DATA.js'*/
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
import bookData from "./MOCK_DATA.js";
import BookPreviewCard from "./BookPreviewCard.vue";
import Checkout from "./Checkout.vue";
import ChooseYourGenre from "./ChooseYourGenre.vue";
import Hero from "./Hero.vue";
import Newsletter from "./Newsletter.vue";
</script>

<template>


  <primary-template>

    <Hero/>

    <div class="picks">
      <img src="../assets/bookmark_orange.png" alt="bookmark_orange"/>
      <div class="picks-title">
        <h2>Picks Made Just For You</h2>
      </div>
      <div v-for="(book, index) in bookData.data" :key="index">
        <book-preview-card :book="book" :image-only="true"/>
      </div>
    </div>

    <Checkout/>

    <ChooseYourGenre/>

    <div class="pick-up">
      <div class="picks-title">
        <h2>Pick Up Where You Left Off</h2>
      </div>
      <div v-for="(book, index) in bookData.data" :key="index">
        <book-preview-card :book="book" :image-only="true"/>
      </div>
    </div>

    <Newsletter/>

  </primary-template>
</template>

<style scoped>

BookPreviewCard img {
  align-content: center;
}

.picks {
  display: flex;
  flex-wrap: wrap;

  h2 {
    /*background*/
    background-image: url("../assets/bookmark_orange.png");
  }

  .picks-title {
    margin: 2rem;
    width: 100%;
  }

  img {
    display: block;
    width: 100%;
    text-align: center;
    line-height: 100px;
    color: green;
  }

}

.pick-up {
  background-color: #88BA1A;
  display: flex;
  flex-wrap: wrap;
}


/*ipad (tablet and up) */
@media only screen and (width > 700px) {
  .picks {
    img {
      max-width: 50%;
      margin-bottom: 5em;
    }
  }
}

/*desktop*/
@media only screen and (width > 800px) {
  .hero img {
    width: 100%;
    border-bottom-left-radius: 20em;
  }

  .picks-title {
    width: 20%;
  }

  h1, h2 {
    padding-right: 2rem;
    margin: 0;
  }
}

</style>


