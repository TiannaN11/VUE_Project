<template>
  <div class="where">
    <h2> Where to Find </h2>

    <div class="bookstore">

    </div>
  </div>
</template>
<script>
export default {
  name: 'Bookstores'
}
</script>
<style scoped>

h1, h2, h4, p {
  color: black;
  margin: 0.5rem;
}


img {
  width: 200px;
  height: 320px;
}


/*ipad (tablet and up) */
@media only screen and (width > 700px) {


  img {
    width: 380px;
    height: 550px;
  }

}


/*desktop*/
@media only screen and (width > 800px) {

}

</style>