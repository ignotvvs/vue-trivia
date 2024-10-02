<script setup>
import FormTrivia from './FormTrivia.vue';
import { useStoreTrivia } from '@/stores/StoreTrivia.js';

const store = useStoreTrivia()
</script>

<template>
    <div class="rounded-md bg-slate-100/50 mt-2 h-dvh mb-3 flex place-content-center flex-col ">
        <p class="text-2xl">TOTAL POINTS: {{ store.points }}</p>
        <h1 class=" md:text-5xl text-center mt-5"> Choose quiz set for you</h1>
        <div class="my-auto ">
            <p class="text-2xl text-center m-2">Every set consists of 10 questions and is multiple-choice</p>
            <FormTrivia></FormTrivia>
        </div>
    </div>
</template>