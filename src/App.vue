<script setup>
import { ref, onMounted } from 'vue'

const parentMessage = ref('Category')
const categories = ref([])

onMounted(async () => {
  try {
    const response = await fetch('/src/assets/category.json')
    const data = await response.json()
    categories.value = data
  } catch (error) {
    console.error('Error fetching category data:', error)
  }
})
</script>

<template>
  <div>
    <ul>
      <li v-for="(category, index) in categories" :key="index">
        {{ parentMessage }} - Name: {{ category.name }} - Code: {{ category.code }}
      </li>
    </ul>
  </div>
</template>

