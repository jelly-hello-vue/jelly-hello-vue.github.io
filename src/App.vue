<script setup>
import toycategory from "@/assets/toycategory.json"
const categories = toycategory
</script>
<template>
 <div v-for="item in categories">
  name : {{ item.type }} <br> 
  prefix : {{ item.prefix }}<br> 
  code : {{ item.categorySubDivision }} <hr>
 </div>
</template>
