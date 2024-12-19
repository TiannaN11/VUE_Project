<script>
</script>

<template>
  <div class="newsletter">
    <h1>Join our Newsletter!</h1>
    <h3>Be the first to know about the latest trends and up and coming great reads!</h3>

    <div class="form">
      <form>
        <label for="email"></label>
        <input type="text" id="email" name="email" placeholder="bookworm@gmail.com">
        <input type="submit">
      </form>
    </div>
  </div>
</template>

<style scoped>

/*text format*/
h1 {
  padding-top: 3rem;
}

h3 {
  padding: 0 3rem 0 3rem;
}


.newsletter {
  background-color: #5B54BC;
  margin-top: 5rem;
  height: 20rem;
  text-align: center;
  margin-bottom: 6rem;
}

/*form*/
.form, input[type="text"], input[type="submit"] {
  font-family: "Montserrat Alternates", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: clamp(0.2em, 6vw, 1em);
  color: white;
  padding: .7em;
  border-radius: 2rem;
}

input[type="text"] {
  color: black;
  margin-right: 0.5rem;
  width: 15em;
}

input[type="submit"] {
  width: 8em;
  background-color: #C9A97A;
  color: white;
}


/*ipad (tablet and up) */
@media only screen and (width > 700px) {
  .newsletter {
    margin-bottom: 0;
  }

  input[type="text"] {
    width: 20em;
  }

  input[type="submit"] {
    width: 10em;
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

  input[type="text"] {
    width: 25em;
    margin-right: 1.5rem;
  }

  input[type="submit"] {
    width: 15em;
  }
}

</style>