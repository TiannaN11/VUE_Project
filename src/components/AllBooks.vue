<script setup>
import bookData from './MOCK_DATA.js'
import BookPreviewCard from "./BookPreviewCard.vue";
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";

</script>

<template>
  <primary-template>
    <div class="all-books">

      <div class="romance" v-for="(book, index) in bookData.data" :key="index">
        <h2>Romance</h2>
        <book-preview-card :book="book"/>
      </div>

      <div class="mystery" v-for="(book, index) in bookData.data" :key="index">
        <h2>Mystery</h2>
        <book-preview-card :book="book"/>
      </div>

    </div>
  </primary-template>
</template>

<style scoped>
.all-books {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
}

.romance {
  margin-bottom: 1rem;
}
</style>