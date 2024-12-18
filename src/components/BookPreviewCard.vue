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
      <img :src="'../../src/assets/books/' + book.bookCover" alt="cover"/>
    </router-link>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem 0.5rem 2rem 0;
  flex-grow: 4;
}

img {
  width: 200px;
  height: 320px;
}

img:hover {
  scale: 105%;
}

</style>