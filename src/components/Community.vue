<script setup>
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
import Newsletter from "./Newsletter.vue";
import CommunityCard from "./CommunityCard.vue";
import CommunityData from "./Data Sets/CommunityData.js";
import Carousel from "./Carousel.vue";


</script>

<template>
  <primary-template>

    <h2> Straight From Book Tok</h2>
    <carousel/>

    <community-card v-for="(post,index) in CommunityData.data"
                    :key="index" :post-info="post">
    </community-card>


    <Newsletter/>

  </primary-template>

</template>

<style scoped>

h2 {
  margin: 9rem 0 2rem 0;
  color: #4F2210;
  text-align: center;
}


</style>