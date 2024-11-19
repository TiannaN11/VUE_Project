<script setup>

defineProps( {
  firstName: {
    type: String,
    required: true
  },
  lastname: {
    type:String,
    required:true
  },
  dob: {
    type: String,
    required:false,
    default: '01/01/1980'
  },
  highestEduAttained: {
    type: String,
    required: false
  },
  ethnicity: {
    type: String,
    required: true
  }
})
</script>

<template>
  Name: {{ data.book_title }}, {{data.book_cover}}

</template>

<style scoped>
section.card {
  display: flex;
  border: 1px solid gray;
  border-radius: 10px;
}

&:hover {
  border-color: Black;

}

p {
  font-size: 3rem;
}

 @media screen and (width)
</style>