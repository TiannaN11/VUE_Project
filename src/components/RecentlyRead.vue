<template>
  <div class="books">
    <div v-for="(book, index) in bookData.data" :key="index">
      <book-preview-card :book="book" :image-only="true"/>
    </div>
  </div>
</template>
<script>
import BookPreviewCard from "./BookPreviewCard.vue";
import bookData from "./Data Sets/MOCK_DATA.js";


export default {
  name: 'RecentlyRead',
  computed: {
    bookData() {
      return bookData
    }
  },
  components: {BookPreviewCard}
}
</script>
<style scoped>

h3 {
  color: black;
  text-align: left;
  padding-left: 2rem;
}

.books {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}


/*ipad (tablet and up) */
@media only screen and (width > 700px) {


}

/*desktop*/
@media only screen and (width > 800px) {

}

</style>