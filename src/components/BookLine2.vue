<script setup>
import BookPreviewCard from "./BookPreviewCard.vue";

const props = defineProps({
  bookData: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="book-line" v-if="props.bookData.length > 0">
    <book-preview-card v-for="(book, index) in props.bookData" :key="index" :book="book" :image-only="true"/>
  </div>
  <p v-else>We don't currently have any books of this genre in stock!</p>
</template>

<style scoped>

/*text styles*/
p {
  color: black;
}

/*book display*/
.book-line {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}


/*ipad (tablet and up) */
@media only screen and (width > 700px) {
  .book-line {
    background-size: 100rem;
    flex-wrap: inherit;
  }
}

</style>