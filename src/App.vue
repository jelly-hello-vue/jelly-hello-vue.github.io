<script setup>

import { ref } from 'vue'

const message = ref({name: "LIN", age: 30})
const name = "LIN"

</script>
<template>
<h1>{{ message }}</h1>
</template>
