<script setup>
import { onMounted } from 'vue';
import Trivia from './components/Trivia.vue';
import { useStoreTrivia } from '@/stores/StoreTrivia.js';

const categories = useStoreTrivia();

onMounted(() => {
  categories.fetchCategories();
})

</script>

<template>

  <div class="">
    <Trivia></Trivia>
  </div>

</template>

<style scoped>
</style>

