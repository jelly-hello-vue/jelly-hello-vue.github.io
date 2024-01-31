<script setup>
import { ref, onMounted } from 'vue'

const count = ref(1)

function increment() {
    count.value = count.value + 1
 }

onMounted(() => {
	console.log('The initial count is ${count.value}.')
})
 </script>

    <template>
    <button @click="increment">Count is: {{ count }}</button>
    </template>

    <style scoped>
    button {
	font-weight: bold;
    }
</style>
