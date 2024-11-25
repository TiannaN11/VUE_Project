<script setup>
defineProps({
  book: {
    type: Object,
    required: true
  },
  imageOnly: {
    type: Boolean,
    default: false,
    required: false
  }
})
</script>

<template>
  <div class="container">
    <router-link :to=" { name: 'BookDetails', params: { id: book.id } }">
      <img :src="'../../src/assets/' + book.bookCover" alt="cover"/>
    </router-link>

    <div v-if="!imageOnly">
      <p v-text="book.author"/>
      <p>Rating: {{ book.rating }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px dashed gray;
}

img {
  width: 315px;
  height: 475px;
}
</style>