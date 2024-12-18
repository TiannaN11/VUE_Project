<script setup>
defineProps({
      storeData: {
        type: Object,
        required: true
      }
    }
)
</script>

<template>

  <div class="store-container">
    <div class="store-image">
      <img :src="'../../src/assets/Book Stores/' + storeData.store_image" alt="store"/>
    </div>

  <div class="store-name">
    <h4>{{ storeData.store_name }}</h4>
    <p>Address: {{ storeData.address }}</p>
    <p>Website: {{ storeData.website }}</p>
    <p> Phone Number: {{ storeData.phone_number }}</p>
  </div>
  </div>

</template>

<style scoped>

.store-container {
  display: flex;
  flex-direction: column;
}

.store-image {
  img {
    border-radius: 20px;
  }
}

.store-name {
  h4, p {
    color: #4F2210;
  }
}
</style>