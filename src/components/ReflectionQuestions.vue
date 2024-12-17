<template>
  <div class="question">
    <h3>Question #1</h3>
    <slot>
    </slot>
    <form>
      <textarea name="text" rows="8" cols="10" wrap="soft" placeholder="Start typing your answer here"></textarea>
      <button>SAVE</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'ReflectionQuestions'
}
</script>
<style scoped>

h3 {
  color: #A07234;
  margin-left: 1rem;
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

::placeholder {
  font-style: italic;
  font-size: 1em;
  padding: 6px;
}


/* button */
button {
  border: none;
  width: 10em;
  background-color: #C9A97A;
  color: white;
  margin-top: 1rem;
  border-radius: 5rem;

  :hover {
  }
}


.question {
  padding-top: 5rem;
  margin: 1.5rem;
  textarea {
    height: 15em;
  }
}



</style>