<script setup>
import {useRoute, useRouter} from "vue-router"
import allBooks from "./Data Sets/MOCK_DATA.js"
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
import Carousel from "./Carousel.vue";
import Revieww from "./Revieww.vue";


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
                <img :src="'../../src/assets/books/' + book.bookCover" alt="cover"/>
              </router-link>
            </div>

            <div class="rating">
              <img :src="'../../src/assets/stars/' + book.stars" alt="stars"/>
              <p>{{book.rating}}</p>
            </div>
          </div>

          <div class="book-info">
            <h6>Book Title:</h6>  <p>{{ book.book_title}}</p>
            <h6>Author:</h6> <p>{{ book.author}}</p>
            <h6>Summary:</h6> <p> {{ book.about }}</p>
            <h6>Genre:</h6> <p>{{ book.genre }}</p>
            <h6>Page Count:</h6> <p>{{ book.page_count }}</p>
            <h6>Publication Date:</h6> <p>{{book.publication_date}}</p>

            <div class="button">
              <router-link :to="{name: 'Write'}">Review</router-link>
            </div>
          </div>
        </div>
      </div>


      <div class="bookstores">
        <h2>Where to Find</h2>
        <carousel/>
      </div>

      <div class="reviews">
        <h2>Reviews</h2>

        <Revieww/>
        <Revieww/>
        <Revieww/>
        <Revieww/>
        <Revieww/>

      </div>



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
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 5px;


  .book-info {
    flex-direction: column;
    margin-bottom: 5rem;
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

.book-cover {
  img {
    width: 220px;
    height: 320px;
  }
}

.rating {
  img {
    width: 200px;
    height: 35px;
    padding: 1rem;
  }

  p{
    text-align: center;
    margin: 0;
  }
}


.left {
  justify-items: center;
}

.bookstores {
  h2{
    text-align:center;
    margin-bottom: 2rem;
  }
  margin-bottom: 10rem;
}

.reviews {
  h2{
    text-align:center;
    margin-bottom: 2rem;
  }
}

/*ipad (tablet and up) */
@media only screen and (width > 700px) {

  .main {
    .book-title {
      margin-top: 9rem;
    }
  }

  .container {
    display: flex;
    flex-direction: row;
    padding: 4rem;

    .book-info {
      flex-direction: row;
    }
  }

}


/*desktop*/
@media only screen and (width > 1000px) {
  .book-cover {
    img {
      width: 380px;
      height: 550px;
    }
  }

  .rating {
    img {
      width: 370px;
      height: 65px;
      padding: 1rem;
    }
  }
}

</style>