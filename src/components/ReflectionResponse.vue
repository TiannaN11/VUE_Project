<template>
  <div class="reflection">
    <form>
      <textarea name="text" rows="14" cols="10" wrap="soft" placeholder="Start typing your reflection here"></textarea>
        <button id="save">SAVE</button>
        <button id="post">POST</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'ReflectionResponse'
}
</script>
<style scoped>

h1 {
  color: black;
  padding-top: 5rem;
  margin-left: 1.5rem;
}


.reflection {
  margin: 1.5rem;

  textarea {
    height: 30em;
  }
}

textarea, button {
  font-family: "Montserrat Alternates", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
  padding: .7em;
  border-radius: 2rem;
}

textarea {
  color: #4F2210;
  border: #A07234 1px solid;
  box-sizing: border-box;
  width: 100%;
  line-height: 1.8rem;
  padding: 1.5rem;
}



  button {
    border: none;
    width: 10em;
    color: white;
    margin: 1rem 0 0 1rem;
    border-radius: 5rem;
  }

  #save {
    background-color: #C9A97A;
  }
  #post {
    background-color: #535bf2;
  }






</style>