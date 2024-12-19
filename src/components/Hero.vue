
<script>
</script>

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

<style scoped>

.hero {
  position: relative;
  text-align: right;
  color: white;
  margin: 0;

  img {
    margin-bottom: 2em;
    width: 150%;
    background-size: cover;
    display: flex;
    overflow: hidden;
  }
}

/* text overlay */
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
      border-bottom-left-radius: 10em;
      margin-bottom: 5em;
      width: 100%;
    }

    .bottom-right {
      h3 {
        text-align: right;
        margin-right: 2rem;
        margin-left: 10rem;
      }
    }
  }

  /* gif */
  .top-left {
    top: 4rem;
    height: 300px;
    width: 300px;
  }
}

/*desktop*/
@media only screen and (width > 800px) {
  .hero img {
    border-bottom-left-radius: 20em;
  }

  /*text format*/
  h1, h2 {
    padding-right: 2rem;
    margin: 0;
  }

  h3 {
    margin-left: 20rem;
  }

  /*gif*/
  .top-left {
    top: 4rem;
    height: 350px;
    width: 350px;
  }
}



</style>