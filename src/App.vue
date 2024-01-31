<script setup>
import toycategory from "@/assets/toycategory.json"

const categories = toycategory.filter(item => item.type === '몸' || item.type === '시간 관리')

</script>

<template>
  <div>
    <div v-for="item in categories" :key="item.type">
      name: {{ item.type }} <br>
      prefix: {{ item.prefix }}<br>
      code: {{ item.categorySubDivision.join(', ') }} <hr>
    </div>
    <div v-if="categories.length === 0">
      No items found.
    </div>
  </div>
</template>

