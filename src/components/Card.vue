<script setup>

import MOCK_DATA from "./MOCK_DATA.js";

</script>

<template>
  Name: {{ MOCK_DATA.book_title }}, {{MOCK_DATA.bookCover}}

</template>

<style scoped>


&:hover {
  border-color: Black;
}

p {
  font-size: 3rem;
}

</style>
