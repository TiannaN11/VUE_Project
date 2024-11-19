<script setup>
import {useRoute, useRouter} from "vue-router"
import allBooks from "./MOCK_DATA.js"
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";

const route = useRoute()
const router = useRouter()

const paramId = route.params.id
const book = allBooks.data.filter(book => book.id === paramId)[0]
</script>

<template>
  <section v-if="book">
    <primary-template>
      <h1>Author: {{ book.author}}</h1>
      <h1>Author: {{ book.book_title}}</h1>
    </primary-template>
  </section>
</template>

<style scoped>

</style>