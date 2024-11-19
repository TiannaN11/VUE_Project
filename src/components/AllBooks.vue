<script setup>
import bookData from './MOCK_DATA.js'
import BookPreviewCard from "./BookPreviewCard.vue";
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";

</script>

<template>
  <primary-template>
    <div class="all-books">
      <div v-for="(book, index) in bookData.data" :key="index">
        <book-preview-card :book="book"/>
      </div>
    </div>
  </primary-template>
</template>

<style scoped>
.all-books {
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
}
</style>