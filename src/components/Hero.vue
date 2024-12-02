<template>
  <div class="hero">
    <img src="../assets/home-hero-2.png" alt="hero"/>
    <div class="bottom-right">
      <h1>Stories For Everyone</h1>
      <h3>Get ready to find your new favorite book and dive into a whole new world</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Hero'
}
</script>
<style scoped>

/*mobile first*/
.hero {
  position: relative;
  text-align: right;
  color: white;

  img {
    max-width: 150%;
    align-content: flex-start;
    display: flex;
    margin-bottom: 5em;
  }

}

.bottom-right {
  position: absolute;
  bottom: 5px;
  right: 10px;
  margin: 1rem;
}


/*ipad (tablet and up) */
@media only screen and (width > 700px) {
  .hero {
    img {
      width: 100%;
      border-bottom-left-radius: 10em;
    }

    .bottom-right {
      h3 {
        text-align: right;
        margin-right: 2rem;
        margin-left: 10rem;
      }
    }
  }
}

/*desktop*/
@media only screen and (width > 800px) {
  .hero img {
    width: 100%;
    border-bottom-left-radius: 20em;
  }

  h1, h2 {
    padding-right: 2rem;
    margin: 0;
  }

  h3 {
    margin-left: 20rem;
  }

}

</style>