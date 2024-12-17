<script setup>
import {useRoute, useRouter} from "vue-router"
import allBooks from "./MOCK_DATA.js"
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
import Bookstores from "./Bookstores.vue";

const route = useRoute()
const router = useRouter()

const paramId = route.params.id
const book = allBooks.data.filter(book => book.id === paramId)[0]
</script>

<template>
  <section v-if="book">
    <primary-template>

      <div class="main">

        <div class="book-title">
          <h2>{{ book.book_title}}</h2>
          <h4>{{ book.author}}</h4>
        </div>

        <div class="container">

          <div class="left">

            <div class="book-cover">
              <router-link :to=" { name: 'BookDetails', params: { id: book.id } }">
                <img :src="'../../src/assets/' + book.bookCover" alt="cover"/>
              </router-link>
            </div>

            <div class="rating">
              <img :src="'../../src/assets/' + book.stars" alt="stars"/>
            </div>
          </div>


          <div class="book-info">
            <h6>Book Title:</h6>  <p>{{ book.book_title}}</p>
            <h6>Author:</h6> <p>{{ book.author}}</p>
            <h6>Summary:</h6> <p> {{ book.about }}</p>
            <h6>Genre:</h6> <p>{{ book.genre }} </p>
            <h6>Page Count:</h6> <p>{{ book.page_count }}</p>
            <h6>Publication Date:</h6> <p>{{book.publication_date}}</p>

            <div class="button">
              <router-link :to="{name: 'Write'}">Review</router-link>
            </div>
          </div>

        </div>
      </div>

      <Bookstores/>


    </primary-template>
  </section>
</template>

<style scoped>

h1, h2, h4, p {
  color: black;
  margin: 0.5rem;
}


.main {
 flex-direction: column;

  .book-title {
    text-align: center;
    margin-top: 3rem;
  }

}

.container {
  display: flex;
  padding: 0.5rem;
  border-radius: 5px;


  .book-info {
    flex-direction: column;
  }

}

.button {
  background-color: green;
  border-radius: 5rem;
  text-align: center;
  padding: 0.5rem;

  a {
    color: white;
    margin: 1rem;
  }
}


img {
  width: 200px;
  height: 320px;
}



/*ipad (tablet and up) */
@media only screen and (width > 700px) {

  .main {
    .book-title {
      margin-top: 8rem;
    }
  }

  .container {
    .book-info {
      flex-direction: row;
    }

  }


  img {
    width: 380px;
    height: 550px;
  }

}


/*desktop*/
@media only screen and (width > 800px) {

}

</style>