<script setup>
/* import bookData from './MOCK_DATA.js'*/
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
import bookData from "./Data Sets/MOCK_DATA.js";
import BookPreviewCard from "./BookPreviewCard.vue";
import Checkout from "./Checkout.vue";
import ChooseYourGenre from "./ChooseYourGenre.vue";
import Hero from "./Hero.vue";
import Newsletter from "./Newsletter.vue";
import Carousel from "./Carousel.vue";
import BookLine from "./BookLine.vue";
import Genres from "./Data Sets/genreData.js";

</script>

<template>


  <primary-template>

    <Hero/>

    <div class="picks">

      <div class="picks-title">
        <h2>Picks Made Just For You</h2>
      </div>

        <div class="book-line" v-for="(book, index) in bookData.data" :key="index">
          <book-preview-card :book="book" :image-only="true"/>
        </div>

    </div>

    <Checkout/>

    <ChooseYourGenre/>

    <div class="pick-up">

      <div class="picks-title">
        <h2>Pick Up Where You Left Off</h2>
      </div>

      <div class="book-line" v-for="(book, index) in bookData.data" :key="index">
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
  background-image: url("../assets/bookmark-orange.png");
}

.picks-title {
  margin: 1rem 2rem 2rem 1.5rem;
}

.pick-up {
  background-image: url("../assets/bookmark-green.png");
}

.book-line {
  display: flex;
  flex-wrap: wrap;
}

/*bookmarks*/
.picks, .pick-up {
  background-size: 32rem;
  background-repeat: no-repeat;
  margin: 1rem 0 2rem 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}



/*ipad (tablet and up) */
@media only screen and (width > 700px) {
  .picks, .pick-up {
    background-size: 100rem;
    overflow: hidden;
    flex-wrap:unset;
  }

  .picks-title {
    margin-top: 2rem;
  }

}

/*desktop*/
@media only screen and (width > 800px) {
  .hero img {
    width: 100%;
    border-bottom-left-radius: 20em;
  }

  .picks, .pick-up {
    background-size: 115rem;
    padding: 1rem;
  }

  .picks-title {
    width: 20%;
    margin-top: 5rem;
  }

  h1, h2 {
    padding-right: 2rem;
    margin: 0;
  }
}

</style>


