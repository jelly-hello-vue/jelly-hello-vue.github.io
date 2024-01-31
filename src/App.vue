<script setup>
import { ref } from 'vue'

const parentMessage = ref('Category')
const items = ref([{ name: '푸드', code: 'CATE_01' }, { name: '음료', code: 'CATE_02' }, { name: '상품', code: 'CATE_03' }])
const categories = ref([
  { "name": "푸드", "image_url": "https://image-server.kr/def/cate-1.jpg", "code": "CATE_01" },
  { "name": "음료", "image_url": "https://image-server.kr/def/cate-2.jpg", "code": "CATE_02" },
  { "name": "상품", "image_url": "https://image-server.kr/def/cate-3.jpg", "code": "CATE_03" },
  { "name": "고객센터", "image_url": "https://image-server.kr/def/cate-4.jpg", "code": "CATE_04" }
])
</script>

<template>
  <div>

    <ul>
      <li v-for="(category, index) in categories" :key="index">
        {{ parentMessage }} - {{ index + 1 }} - Name: {{ category.name }} - Code: {{ category.code }}
      </li>
    </ul>
  </div>
</template>

