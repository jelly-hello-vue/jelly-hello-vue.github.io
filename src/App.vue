<script setup>
import { reactive, computed, ref } from 'vue'

const author = ref({
name: 'John Doe',
books: [1, 2, 3]
})

const check = computed(() => {
	return author.value.books.lenth > 2 ? 'Yes' : 'No'
	})

//a computed ref
//const publishedBooksMessage = computed(() => { return author.value.name.length > 2 ? 'Yes' : 'No' })
</script>

<template>
<span>🐰: </span>
<span>{{ author.books.length > 2 ? 'Yes' : 'No' }}</span>
<div>computed ⬇️ </div>
<div>{{ check }}</div>

<!-- <p>Has published books:</p>
<span>{{ publishedBookMessage }}</span> -->
</template>
