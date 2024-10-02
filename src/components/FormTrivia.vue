<script setup>
import { useFetch } from '@/composable/fetch.js'
import ButtonFormTrivia from './ButtonFormTrivia.vue';
import { useStoreTrivia } from '@/stores/StoreTrivia.js';
import { router } from '@/router.js'
import Swal from 'sweetalert2'


const categories = useFetch('https://opentdb.com/api_category.php', 'category');
const difficulties = ['easy', 'medium', 'hard'];
const opts = useStoreTrivia();


function sendQuizP() {
    if (opts.difficulty === null && opts.category === null) {Swal.fire("Please pick a difficulty and a category")}
    else if (opts.difficulty === null) {
        Swal.fire("Please pick a difficulty");    
    } else if (opts.category === null) {
        Swal.fire("Please pick a category");
    } else {
        router.push('/quiz');
    }
};

</script>

<template>
    <div v-if="categories">
        <div class="flex place-content-center h-12 mb-5 flex-wrap">
            <button 
                class="text-xl bg-slate-200 w-36 h-full my-2 rounded-md hover:bg-blue-900 hover:text-slate-200"
                @click="sendQuizP()"
            >BEGIN</button>
        </div>

        <div class="mb-5">
            <ButtonFormTrivia :loops="categories" :type="'name'">CATEGORY</ButtonFormTrivia>
            <ButtonFormTrivia :loops="difficulties" :type="''">DIFFICULTY</ButtonFormTrivia>
        </div>
        
    </div>
    <div v-else class="flex place-content-center h-full">
        <div class="mx-2 my-auto"><span class="loader"></span></div>
    </div>
</template>

<style scoped>

.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
</style>