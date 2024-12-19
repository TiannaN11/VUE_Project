<script setup>
import bookData from './Data Sets/MOCK_DATA.js'
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
import BookLine2 from "./BookLine2.vue";
import BookPreviewCard from "./BookPreviewCard.vue";

</script>

<template>
  <primary-template>

    <header>
      <h1>My List</h1>
    </header>

    <body>
    <div class="wish books">
      <div class="wish-list-title">
        <h2>Wish List</h2>
      </div>
      <div class="wish-list body">
        <book-line2 :book-data="bookData.data" />
        <div class="arrow">
          <svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="62" cy="62" r="62" fill="#C93285"/>
            <path
                d="M87.7837 60.627C89.1209 61.8029 89.1357 63.8846 87.8154 65.0929L51.0084 98.7799C49.0892 100.536 46.008 99.203 45.9896 96.608L45.5183 30.1392C45.4999 27.5442 48.5617 26.1358 50.5055 27.8451L87.7837 60.627Z"
                fill="white"/>
            <path d="M71.6295 62.8295L27.3783 103.33L26.8117 23.4176L71.6295 62.8295Z" fill="#C93285"/>
          </svg>
          <p>See More</p>
        </div>
      </div>
    </div>

    <div class="read books">
      <div class="read-books-title">
        <h2>Read</h2>
      </div>
      <div class="read-books body">
        <book-line2 :book-data="bookData.data" />
        <div class="arrow">
          <svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="62" cy="62" r="62" fill="#313283"/>
            <path
                d="M87.7837 60.627C89.1209 61.8029 89.1357 63.8846 87.8154 65.0929L51.0084 98.7799C49.0892 100.536 46.008 99.203 45.9896 96.608L45.5183 30.1392C45.4999 27.5442 48.5617 26.1358 50.5055 27.8451L87.7837 60.627Z"
                fill="white"/>
            <path d="M71.6295 62.8295L27.3783 103.33L26.8117 23.4176L71.6295 62.8295Z" fill="#313283"/>
          </svg>
          <p>See More</p>
        </div>
      </div>
    </div>

    <div class="recent books">
      <div class="recent-books-title">
        <h2>Recently Read</h2>
      </div>
      <div class="recent-books body">
        <book-line2 :book-data="bookData.data" />
        <div class="arrow">
          <svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="62" cy="62" r="62" fill="#6C9856"/>
            <path
                d="M87.7837 60.627C89.1209 61.8029 89.1357 63.8846 87.8154 65.0929L51.0084 98.7799C49.0892 100.536 46.008 99.203 45.9896 96.608L45.5183 30.1392C45.4999 27.5442 48.5617 26.1358 50.5055 27.8451L87.7837 60.627Z"
                fill="white"/>
            <path d="M71.6295 62.8295L27.3783 103.33L26.8117 23.4176L71.6295 62.8295Z" fill="#6C9856"/>
          </svg>
          <p>See More</p>
        </div>
      </div>
    </div>

    </body>

  </primary-template>
</template>

<style scoped>


/*text styles*/
h1 {
  color: #4F2210;
  margin: 5rem 2rem 0 2rem;
  text-align: center;
}

h2 {
  margin: 2rem 0 0 2rem;
}


/*arrow*/
.arrow {
  margin: 0 2rem 0 2rem;
  p {
    color: #4F2210;
    text-align: center;
  }
}

/*collective panel layouts*/

.books {
  flex-direction: column;
  margin: 4rem 0 4rem 0;
}

.body {
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem;
  padding-bottom: 2rem;
}


.wish-list-title {
  border-bottom: 2px solid #4F2210;
  margin: 0 2rem 0 2rem;
  line-height: 4rem;
}

.read {
  background-color: #C93285;
  display: flex;
  flex-direction: column;

  h2, p {
    color: white;
  }
}

.recent {
  background-color: #313283;
  display: flex;
  flex-direction: column;

  h2, p {
    color: white;
  }
}


/*tablet and beyond*/
@media only screen and (width > 750px) {

  /*text styles*/
  h1 {
    margin-top: 10rem;
  }

  /*layout panels*/
  .books {
    border-top-right-radius: 50rem;
    border-bottom-right-radius: 50rem;
    margin: 4rem 2rem 4rem 0;
  }

  .recent {
    background-color: #313283;
  }
}


</style>