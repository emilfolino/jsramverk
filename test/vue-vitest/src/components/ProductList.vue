<script setup>
  import { ref, onMounted } from 'vue'

  const products = ref([])

  const fetchProducts = async function() {
    const response = await fetch("https://lager.emilfolino.se/v2/products?api_key=a1963bba7c5ad2d272f18a45b819cb55")

    const result = await response.json()

    products.value = result.data
  }

  onMounted(() => {
    fetchProducts();
  })
</script>

<template>
  <h1>List</h1>
  <li v-for="product in products" :key="product.name">
    {{ product.name }}
  </li>
</template>
