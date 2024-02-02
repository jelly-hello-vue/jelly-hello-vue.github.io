<script setup>
import { ref, watch } from 'vue'

const todoId = ref(1); const todoData = ref(null)

async function fetchData() {
    todoData.value = null
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${todoId.value}`
		)
	todoData.value = await res.json()
}

//Watchers
//todoId 변수의 값이 변경될 때마다 fetchData 함수를 호출하도록 감시 설정

watch(todoId, fetchData)

fetchData() //막으면 버튼 막힘.

    function get() {
	todoId.value++
	    fetchData()
    }
</script>

<template>
<p>Todo id: {{ todoId }}</p>
<button @click="todoId++" :disabled="!todoData">Fetch next todo</button>
<p v-if="!todoData">Loading...</p>
<pre v-else>{{ todoData }}</pre>
</template>

