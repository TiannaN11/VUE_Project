<script setup>
import PrimaryTemplate from "../components/Template/PrimaryTemplate.vue";
import {useRoute, useRouter} from "vue-router";
import allBooks from "./Data Sets/MOCK_DATA.js";
import helpers from "../utils/helpers.js";
import BookLine2 from "./BookLine2.vue";

const route = useRoute()
const router = useRouter()

const genreName = route.params.genreName
const filteredBooks = allBooks.data.filter(book => helpers.replaceSpaceWithDash(book.genre).includes(genreName))
</script>

<template>
  <primary-template>
    <h2> {{ genreName }} books</h2>
    <book-line2 :book-data="filteredBooks"/>
  </primary-template>
</template>

<style scoped>
h2 {
  margin: 2rem 1rem 0 1rem;
  color: #4F2210;
  text-transform: capitalize;
  text-align: center;
  border-bottom: #4F2210 solid 2px;
  line-height: 5rem;
}

/*ipad (tablet and up) */
@media only screen and (width > 700px) {
  h2 {
    margin-top: 8rem;
  }
}

</style>