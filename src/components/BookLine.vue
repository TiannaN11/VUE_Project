
<template>
  <div class="line">
    <div v-for="(book, index) in bookData.data" :key="index">
      <book-preview-card :book="book" :image-only="true"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookLine'
}
import bookData from "./MOCK_DATA.js";
</script>


<style scoped>

BookPreviewCard img {
  align-content: center;
}

.line {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0 2rem 0;
}




/*ipad (tablet and up) */
@media only screen and (width > 700px) {

}

/*desktop*/
@media only screen and (width > 800px) {
}

</style>