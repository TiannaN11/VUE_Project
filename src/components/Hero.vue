<template>
  <div class="hero">
    <img src="../assets/home-hero-2.png" alt="hero"/>
    <div class="bottom-right">
      <h1>Stories For Everyone</h1>
      <h3>Get ready to find your new favorite book and dive into a whole new world</h3>
    </div>
    <div class="top-left">
      <img src="../assets/homepagegif.gif"/></div>
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
    margin-bottom: 3em;
  }

}

.bottom-right {
  position: absolute;
  bottom: 5px;
  right: 10px;
  margin: 1rem;
}

.top-left {
  position: absolute;
  margin: 0.5rem;
  top: 0;
  height: 150px;
  width: 150px;
}

/*ipad (tablet and up) */
@media only screen and (width > 700px) {
  .hero {

    img {
      width: 100%;
      border-bottom-left-radius: 10em;
      margin-bottom: 5em;
    }

    .bottom-right {
      h3 {
        text-align: right;
        margin-right: 2rem;
        margin-left: 10rem;
      }
    }
  }

  .top-left {
    top: 4rem;
    height: 300px;
    width: 300px;
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

  .top-left {
    top: 4rem;
    height: 350px;
    width: 350px;
  }
}



</style>