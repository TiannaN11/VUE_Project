<script setup>
defineProps({
      postInfo: {
        type: Object,
        required: true
      }
    }
)

</script>

<template>

  <div class="post-container">

    <div class="profile">
      <div class="profile-pic">
        <img :src="'../../src/assets/Profile Pictures/' + postInfo.profile_picture" alt="profile"/>
      </div>
      <div class="user-name">
        <h4>{{ postInfo.name }}</h4>
      </div>
      <div class="date">
        <p>{{ postInfo.date }}</p>
      </div>
      <div class="button">
        <button>Follow</button>
      </div>
    </div>

    <div class="about">
      <div class="right">
        <div class="review">
          <div class="book-cover">
            <img :src="'../../src/assets/Books/' + postInfo.book_cover" alt="cover"/>
          </div>
        </div>
      </div>

      <div class="left">

        <div class="post-information">

          <div class="stars">
            <img :src="'../../src/assets/Stars/' + postInfo.stars" alt="stars"/>
            <p>{{ postInfo.rating }}</p>
          </div>

          <div class="title">
            <h6>Title: {{ postInfo.title }} </h6>
          </div>

          <div class="author">
            <h6>Author: {{ postInfo.author }} </h6>
          </div>
        </div>

        <div class="writing">
          <p>{{ postInfo.notes }}</p>
        </div>
      </div>

    </div>


  </div>

</template>

<style scoped>

p {
  color: black;
}

.post-container {
  flex-direction: column;
  background-color: #F8E6CC;
  border-radius: 20px;
  margin: 2rem;
}

.profile {
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 3.5rem;
  align-items: center;

  .profile-pic, .user-name, .date {
    padding: 1rem;
  }


  button {
    display: none;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
}


.review {
  justify-items: center;

  .book-cover {
    img {
      width: 200px;
      height: 300px;
      align-items: center;
    }
  }
}

.post-information {
  justify-items: center;

  .stars, .title, .author {
    margin: 1rem;
  }

  .stars {
    p {
      text-align: center;
      margin: 0.2rem;
    }

    img {
      height: 40px;
      width: 220px;
    }
  }
}

.writing {
  padding: 2rem;
}

/*ipad (tablet and up) */
@media only screen and (width > 900px) {

  .post-container {
    display: flex;
    flex-direction: row;

    .profile {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      margin-left: 0;

      .profile-pic, .user-name, .date {
        padding: 0;
      }

      button {
        display: block;
        font-size: 1rem;

        font-family: "Montserrat Alternates", sans-serif;
        font-style: normal;
        font-weight: 600;
        padding: .7em;
        border-radius: 2rem;
        border: none;
        width: 10em;
        background-color: #C9A97A;
        color: white;
        margin-top: 1rem;
      }

    }

  .right {
    .review {
      .book-cover {
        img {
          width: 250px;
          height: 400px;
        }
      }
    }
  }
  }


  .left {
    padding: 1rem;
    margin: 1rem;

    .post-information {
      padding: 1rem;
      margin: 1rem;
    }
  }


  .about {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

}

/*desktop*/
@media only screen and (width > 1000px) {

  .left {
    justify-content: center;
    align-items: center;

    .post-information {
      justify-content: space-around;
      display: flex;
      flex-direction: row;
    }
  }

}

</style>