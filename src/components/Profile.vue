<script setup>
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
import RecentlyRead from "./RecentlyRead.vue";
import Carousel from "./GenreCarousel.vue";
import Rewards from "./Rewards.vue";
</script>

<template>
  <primary-template>

    <header>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </header>

    <body>
    <div class="image-container">
      <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="image">

      <div class="overlay-text">
        <div class="top">
          <h1> Profile </h1>
        </div>

        <div class="bottom">
          <div class="follow-count">
            <div class="following">
              <h2> 100 </h2>
              <h5> following </h5>
            </div>

            <div class="profile-pic">
              <img src="../assets/Profile%20Pictures/profile-picture.png" alt=profilePic/>
            </div>

            <div class="followers">
              <h2> 100K </h2>
              <h5> followers </h5>
            </div>
          </div>
        </div>
      </div>

      <div class="User-name">
        <h4>User Name</h4>
        <p> been a user since 2022 </p>
      </div>

      <div class="stats">
        <div class="books-read">
          <h2>400</h2>
          <h5>books read</h5>
        </div>

        <div class="hours-logged">
          <h2>100,000</h2>
          <h5>hours logged</h5>
        </div>

        <div class="written-reviews">
          <h2>395</h2>
          <h5>written reviews</h5>
        </div>
      </div>

      <div class="fave-genres">
        <div class="fave-title">
          <h4>Favourite Genres</h4>
        </div>

        <div class="genre-buttons">
          <button>Science Fiction</button>
          <button>Fantasy</button>
          <button>Realistic Fiction</button>
          <button>Dystopian</button>
        </div>
      </div>


      <div class="profile-facts">
        <h2>Recently Read</h2>
        <RecentlyRead/>

        <h2>Wishlist</h2>
        <RecentlyRead/>

      </div>

      <div class="BookStoreVisited">
        <h2>Book Stores Visited</h2>
        <carousel/>
      </div>

      <Rewards/>

    </div>
    </body>
  </primary-template>
</template>

<style scoped>

/*text format*/
h2, h4, h5, p {
  text-align: center;
  margin: 0 0;
  justify-content: center;
  align-items: center;
  color: #4F2210;
}

.profile-facts {
  h2 {
    color: #4F2210;
    margin: 2rem 0 0 2rem;
    text-align: left;
  }
}

.BookStoreVisited {
  h2 {
    margin-bottom: 2rem;
  }
}

.image-container {
  img {
    display: block;
    opacity: 80%;
    width: 100%;
    background-size: auto;
    height: 400px;
    background-position: center top;
    background-repeat: no-repeat;
  }

  .overlay-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 35px;
    left: 50%;
    right: 50%;

    .follow-count {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }

    /*profile img*/
    img {
      opacity: 100%;
      border-radius: 100%;
      width: 200px;
      height: 200px;
    }
  }
}

.User-name {
  background-color: #F8E6CC;
  height: 50px;
  padding: 2rem;
}

.stats {
  display: flex;
  gap: 55px;
  justify-content: center;
  background-color: #F8E6CC;
  height: 120px;
  align-items: center;
  padding: 0 2rem 2rem 2rem;

  h2, h5 {
    text-align: center;
  }

  .books-read, .hours-logged, .written-reviews {
    padding: 0;
  }

}

.fave-genres {
  display: flex;
  flex-direction: column;
  margin: 2rem;
  .fave-title {
    margin-bottom: 1rem;
  }
}

/* buttons */
.genre-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    font-family: "Montserrat Alternates", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    padding: 0.7rem;
    border-radius: 2rem;
    border: none;
    width: 10em;
    background-color: #C9A97A;
    color: white;
    margin: 0.5rem;
  }
}


/*ipad (tablet and up) */
@media only screen and (width > 700px) {
  .overlay-text {
    margin-top: 5rem;

    .bottom {
      .follow-count {
        gap: 5rem;
      }
    }
  }

  .User-name {
    padding-top: 4rem;
  }

  .image-container {
    img {
      background-size: auto 1500px;
    }
  }

  .genre-buttons {
    flex-direction: row;
    justify-content: center;
  }


}

/*desktop*/
@media only screen and (width > 800px) {

  .overlay-text {
    margin-top: 0;
  }

  .User-name {
    padding-top: 7.5rem;
  }
}

</style>