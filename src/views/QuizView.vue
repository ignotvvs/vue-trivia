<script setup>
import { useStoreTrivia } from '@/stores/StoreTrivia';
import { useFetch } from '@/composable/fetch';
import { computed, ref, inject} from 'vue';
import QuestionsTrivia from '@/components/QuestionsTrivia.vue'
import { router } from '@/router';

const token = inject('token');
const opts = useStoreTrivia();
const quizSet = useFetch(`https://opentdb.com/api.php?amount=10&category=${opts.category}&difficulty=${opts.difficulty}&type=multiple&token=${token.value.token}`,'questions');
let index = ref(0);
let timer = ref(10);
let showEnd = ref(false);
let stopT = ref(false);
let points = ref(0);

let letsBegin = computed(() => {
  if(quizSet != null) {
      countdown();
      return timer;
  } else return 0;
});


function countdown() {
     setInterval(() => {
  if (timer.value === 0 || stopT.value === true) {
    setTimeout(() => {
      nextI();
      clearInterval()},500);
  } else {
    timer.value--;
  }             
}, 1500);
};

function nextI() {
  if (index.value < quizSet.value.results.length - 1) 
    {
        stopT.value = false ;
        index.value++;
        timer.value = 10;
    } 
    else {showEnd.value = true}
};

function goBack() {
  opts.addPoints(points.value);
  router.push('/');
};


</script>

<template>
    <div class="rounded-md bg-slate-100/50 mt-2 h-dvh mb-5 text-center p-4">
        <div v-if="quizSet" class="my-auto mx-0">
          <div v-if="quizSet['response_code'] === 0">
            <div class="flex justify-between h-1/6 text-xl">
              <div>Question {{index+1}}/10</div>
              <div>
                <div>Timer: {{ letsBegin }}</div>
                <div v-if="!timer">Run out of time! Next question >>></div>
              </div>
              <div class="flex flex-col">
                <div>Category: {{ opts.category }}</div>
                <div>Difficulty: {{ opts.difficulty }}</div>
              </div>
            </div>
            <div class="flex flex-col h-5/6 ">
              <QuestionsTrivia :questions="quizSet.results" :index="index" :timer="timer" @sendAnswer="(n) => {if (n) points++; stopT = true}"></QuestionsTrivia>
              <div>Points: {{ points }}</div>
              <div v-if="showEnd" class="h-24 w-1/2 my-2 mx-auto">
                <button
                class="text-xl bg-slate-200 h-full w-full rounded-md enabled:hover:bg-purple-900 enabled:hover:text-slate-200"
                @click="goBack()"
                >Go back to choose menu</button>
              </div>
            </div>
          </div>
          <div v-else-if="quizSet.response_code === 4" class="mt-10 p-4 text-2xl">
            You solved all quizzes with this category and difficulty combination.
            <button 
                class="text-xl bg-slate-200 h-20 w-1/2 rounded-md enabled:hover:bg-purple-900 enabled:hover:text-slate-200"
                @click="goBack()"
                >Choose something else</button>
          </div>
        </div>
        <div v-else class="flex place-content-center h-full">
          <div class="mx-2 my-auto"><span class="loader"></span></div>
        </div>

        
    </div>
</template>

<style scoped>
/* HTML: <div class="loader"></div> */
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