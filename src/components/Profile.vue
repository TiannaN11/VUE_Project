<script setup>
import PrimaryTemplate from "./Template/PrimaryTemplate.vue";
import bookData from "./MOCK_DATA.js";
import BookPreviewCard from "./BookPreviewCard.vue";
import Hero from "./Hero.vue";

</script>

<template>
<primary-template>

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
  <div class="image-container">
    <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="image">
    <div class="overlay-text">
      <h1> Profile </h1>
      <img src="../assets/profile-picture.png" alt =profilePic/>

      <div class="follow-count">
        <div class="following">
          <h2> 100 </h2>
          <h5> following </h5>
        </div>

        <div class="followers">
          <h2> 100K </h2>
          <h5> followers </h5>
        </div>
      </div>

    </div>
  </div>
  </body>



</primary-template>
</template>

<style scoped>

.image-container {

  img {
    display: block;
    width: 100%;
    opacity: 80%;
  }
}

.overlay-text {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  padding: 1rem;
  text-align: center;


  .follow-count {
    display: flex;
    gap: 15rem;
    margin-top: 3rem;

    h2, h5 {
      text-align: center;
      margin: 0 0;
    }

  }


  img {
    opacity: 100%;
    border-radius: 100%;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    margin-top: 7rem;
    left: 50%;
    position: absolute;
  }
}

/*ipad (tablet and up) */
@media only screen and (width > 700px) {
  .overlay-text {
    .follow-count{
      gap: 20rem;
    }
  }
}

/*desktop*/
@media only screen and (width > 800px) {

}

</style>