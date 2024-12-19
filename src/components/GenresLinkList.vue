<script setup>
import helpers from "../utils/helpers.js";

const props = defineProps({
  genres: {
    type: String,
    required: true
  }
})

let genresArray = props.genres.split(',')
</script>

<template>
  <router-link v-for="(genre, index) in genresArray"
               :to="{ name: 'GenreDetails', params: { genreName: helpers.replaceSpaceWithDash(genre) } }">
    {{ genre }}
  </router-link>
</template>

<style scoped>

</style>