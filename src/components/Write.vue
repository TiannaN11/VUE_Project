<script setup>
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
import BookDetails from "./BookDetails.vue";
import Newsletter from "./Newsletter.vue";
import ReflectionQuestions from "./ReflectionQuestions.vue";
import ReflectionResponse from "./ReflectionResponse.vue";
</script>

<template>
<primary-template>

  <h1>Personal Reflection</h1>

  <book-details/>

  <ReflectionResponse/>

  <ReflectionQuestions>
    <h4>What was most surprising, intriguing, or challenging to you about this book?</h4>
    </ReflectionQuestions>

  <ReflectionQuestions>
    <h4>Were you reminded of anything in your own life while reading this story? What and
      how?</h4>
  </ReflectionQuestions>

  <ReflectionQuestions>
  <h4>What are the next steps for you after reading this book? What would you like to do, read, or learn more about?</h4>
  </ReflectionQuestions>

  <newsletter/>

</primary-template>
</template>

<style scoped>

h1 {
  color: black;
  padding-top: 5rem;
  margin-left: 1.5rem;
}

h4 {
  margin-left: 1rem;
}


</style>