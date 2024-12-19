<script>
</script>

<template>
  <div class="review-card">
    <div class="profile">

      <div class="profile-pic">
        <img src="../assets/Profile Pictures/profile-pic-6.png"/>
      </div>

      <div class="user-name">
        <p>username</p>
      </div>

    </div>

    <div class="right">
      <h4>Reviewer</h4>
      <img src="../assets/Stars/4stars.png"/>
      <p>I thought this book was amazing and it really made me think about how we live our lives. The author's unique
        approach to the storyline introduced a diverse view into how our environment affects who we are as people. I'd
        recommend this book to anyone looking for a thought-provoking read.</p>
    </div>

  </div>

</template>

<style scoped>

/*text format*/
h1, h2, h4, p {
  color: black;
  margin: 0.5rem;
}


.review-card {
  display: flex;
  margin: 2rem;
  background-color: #F8E6CC;
  border-radius: 2rem;
  padding: 2rem;

  .profile {
    justify-items: center;
    align-items: center;
    margin: 0.5rem;

    /*profile picture*/

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }

  /*stars*/

  .right {
    padding: 0.5rem;

    img {
      width: 200px;
      height: 35px;
    }
  }
}


</style>