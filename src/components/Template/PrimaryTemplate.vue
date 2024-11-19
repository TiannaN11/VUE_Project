<script setup>

</script>

<template>

  <section class="primary-template">

    <header>
      Lit Link
      <nav>
        <router-link :to="{ name: 'Home'}">Home</router-link>
        <router-link :to="{ name: 'AllBooks'}">View our Selections</router-link>
        <router-link :to="{ name: 'Community'}">Community</router-link>
      </nav>
    </header>

    <section class="main">
      <slot></slot>
    </section>


  </section>


  <footer>

    <div class="right">
      <a href="#">Contact Us</a>
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="#">Authors</a>
    </div>

  </footer>

</template>

<style scoped>


header {
  background-color: olive;
  display: flex;
  height: 20vh;

  nav {
    a {
      padding: 1rem;
      color: white;

      &.router-link-active {
        font-weight: bold;
        text-decoration: underline;
        background-color: deeppink;
        border-color: white;
        font-size: 105%;
      }
    }
  }
}



footer {
  background-color: darkorchid;
  .right {
    text-align: right;
    padding: 1rem;
  }
}




</style>