<script setup>
import bookData from './Data Sets/MOCK_DATA.js'
import BookPreviewCard from "./BookPreviewCard.vue";
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";

</script>

<template>
  <primary-template>

    <header>
      <h1>My List</h1>
    </header>

    <h2>Wishlist</h2>
    <div class="wish-books">
      <div class="wishlist-books" v-for="(book, index) in bookData.data" :key="index">
          <book-preview-card :book="book"/>
        </div>
      <div class="arrow">
        <svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="62" cy="62" r="62" fill="#C93285"/>
          <path d="M87.7837 60.627C89.1209 61.8029 89.1357 63.8846 87.8154 65.0929L51.0084 98.7799C49.0892 100.536 46.008 99.203 45.9896 96.608L45.5183 30.1392C45.4999 27.5442 48.5617 26.1358 50.5055 27.8451L87.7837 60.627Z" fill="white"/>
          <path d="M71.6295 62.8295L27.3783 103.33L26.8117 23.4176L71.6295 62.8295Z" fill="#C93285"/>
        </svg>
        <p>See More</p>
      </div>
    </div>

    <h2>Read</h2>
    <div class="read-books">
      <div class="readBooks" v-for="(book, index) in bookData.data" :key="index">
        <book-preview-card :book="book"/>
      </div>
      <div class="arrow">
        <svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="62" cy="62" r="62" fill="#313283"/>
          <path d="M87.7837 60.627C89.1209 61.8029 89.1357 63.8846 87.8154 65.0929L51.0084 98.7799C49.0892 100.536 46.008 99.203 45.9896 96.608L45.5183 30.1392C45.4999 27.5442 48.5617 26.1358 50.5055 27.8451L87.7837 60.627Z" fill="white"/>
          <path d="M71.6295 62.8295L27.3783 103.33L26.8117 23.4176L71.6295 62.8295Z" fill="#313283"/>
        </svg>
        <p>See More</p>
      </div>
    </div>

    <h2>Recently Read</h2>
    <div class="recent-books">
      <div class="recentBooks" v-for="(book, index) in bookData.data" :key="index">
        <book-preview-card :book="book"/>
      </div>
      <div class="arrow">
        <svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="62" cy="62" r="62" fill="#6C9856"/>
          <path d="M87.7837 60.627C89.1209 61.8029 89.1357 63.8846 87.8154 65.0929L51.0084 98.7799C49.0892 100.536 46.008 99.203 45.9896 96.608L45.5183 30.1392C45.4999 27.5442 48.5617 26.1358 50.5055 27.8451L87.7837 60.627Z" fill="white"/>
          <path d="M71.6295 62.8295L27.3783 103.33L26.8117 23.4176L71.6295 62.8295Z" fill="#6C9856"/>
        </svg>
        <p>See More</p>
      </div>
    </div>


  </primary-template>
</template>

<style scoped>

h1 {
  color: #4F2210;
  margin: 5rem 2rem 0 2rem;
  text-align: center;
}

h2 {
  margin: 2rem 2rem 0 2rem;
  border-bottom: solid 1px #4F2210;
  line-height: 5rem;
}


.arrow {
  margin: 0 2rem 2rem 2rem;

  p{
    color: #4F2210;
    text-align: center;
  }
}


.wish-books, .read-books, .recent-books {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
}

.read-books {
  background-color: #C93285;
  p{
    color: white;
  }
}

.recent-books {
  background-color: #313283;
  p{
    color: white;
  }
}


/*tablet and beyond*/
@media only screen and (width > 750px) {

  h1 {
    margin-top: 10rem;
  }

  .arrow {
    margin: 7rem 2rem 2rem 2rem;
  }

  .read-books, .recent-books {
    border-top-right-radius: 50rem;
    border-bottom-right-radius: 50rem;
  }

}

/*Desktop */
@media only screen and (width > 1200px) {

}


</style>