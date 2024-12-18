<script setup>
import BookStoreData from "./Data Sets/BookStoreData.js";
import BookStoreCard from "./BookStoreCard.vue";
</script>

<template>

  <book-store-card v-for="(store,index) in BookStoreData.data"
              :key="index" :store-info="store">
  </book-store-card>
  
</template>

<style scoped>

</style>