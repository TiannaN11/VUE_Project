<script setup>
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
import Newsletter from "./Newsletter.vue";
import CommunityCard from "./CommunityCard.vue";
import CommunityData from "./Data Sets/CommunityData.js";
import GenreCarousel from "./GenreCarousel.vue";


</script>

<template>
  <primary-template>

    <h2> Straight From Book Tok</h2>

    <genre-carousel/>

    <community-card v-for="(post,index) in CommunityData.data"
                    :key="index" :post-info="post">
    </community-card>

    <Newsletter/>

  </primary-template>

</template>

<style scoped>

h2 {
  margin: 5rem 0 2rem 0;
  color: #4F2210;
  text-align: center;
}

/*ipad (tablet and up) */
@media only screen and (width > 700px) {
  h2 {
    margin-top: 9rem;
  }
}


</style>