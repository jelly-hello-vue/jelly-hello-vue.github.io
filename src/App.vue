<!-- 아침체조 -->

<script setup>
import { ref } from 'vue'

const show = ref(true)
const list = ref([1, 2, 3])

const toggleRendering = () => {
  show.value = !show.value;
};

const addItem = () => {
  list.value.push(list.value.length + 1);
};

const removeItem = () => {
  if (list.value.length > 0) {
    list.value.pop();
  }
};

const reverseList = () => {
  list.value = list.value.reverse();
};
</script>

<template>
  <div>
    <button @click="toggleRendering">List 렌더링 ON/OFF </button>
    <button @click="addItem">List 추가 </button>
    <button @click="removeItem">List 제거  </button>
    <button @click="reverseList">List 뒤집기  </button>

    <ul v-if="show">
      <li v-for="item of list" :key="item">{{ item }}</li>
    </ul>
    <p v-else-if="list.length">List is not empty, but hidden.</p>
    <p v-else>List is empty.</p>
  </div>
</template>

