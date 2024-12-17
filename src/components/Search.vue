<script setup>
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
import {watch} from "vue";
import {useRoute} from 'vue-router'
import bookData from "./MOCK_DATA.js"
import BookPreviewCard from "./BookPreviewCard.vue";

const route = useRoute()
let searchFor = route.query.for.toLowerCase()
const books = bookData.data.filter(book =>
        book.book_title.toLowerCase().includes(searchFor)
    // || book.genre.toLowerCase().includes(searchFor)
)

watch(
    () => route.query.for,
    (newVal, oldVal) => {
      searchFor = newVal
      window.location.reload()
    }
)
</script>

<template>
  <primary-template>

    <div v-if="searchFor" class="results">
      <h1>Search results for "{{ route.query.for }}"</h1>

      <pre> {{ books }}</pre>
    </div>

  </primary-template>
</template>

<style scoped>
.results {
  margin-top: 5rem;
  color: black;

  h1 {
    color: black;
  }
}
</style>