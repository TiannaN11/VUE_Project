<script setup>

import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
</script>

<template>
  <primary-template>
    <slot>
      <div class="book-carousel">
        <h1>Straight from BookTok</h1>
      </div>

    </slot>
  </primary-template>
</template>

<style scoped>

h1, h2, h3, h4 {
  font-family: "Montserrat Alternates", sans-serif;
  font-style: normal;
}

</style>