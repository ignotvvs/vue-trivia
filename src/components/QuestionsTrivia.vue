<script setup>
import { computed, ref, watch } from 'vue';
import {useShuffle} from '@/composable/shuffle.js'

let props = defineProps(['questions','index','timer'])

let emits = defineEmits(['sendAnswer'])

let answers = computed(() => {
    return useShuffle([props.questions[props.index].correct_answer, ...props.questions[props.index].incorrect_answers])
})

let clicked = null
let correct = ref(null)
let bDis = ref(false)

watch(() => props.index , (()=> {
    clicked = null
    correct.value = null
    bDis.value = false
}))

function isCorrect(number,answer) {
    correct.value = props.questions[props.index].correct_answer
    clicked = number;
    bDis.value = true;
    let points = correct.value === answer.trim()
    emits('sendAnswer', points)
} 

</script>
 
<template>
        <div class="text-2xl" v-html="props.questions[props.index].question"></div>
        <div class="grid grid-cols-2 gap-3 h-1/2 mx-7 mt-5">
            <div v-for="(answer, number) in answers" class="h-24 m-1" :key="number">
                <button 
                v-html="answer" 
                :class="{ '!bg-green-700': (clicked === number && correct === answer.trim()) || correct === answer.trim(),
                '!bg-red-700': (clicked === number && correct != answer.trim()) || timer===0}"
                class="text-xl bg-slate-200 h-full w-full rounded-md enabled:hover:bg-blue-900 enabled:hover:text-slate-200"
                @click="isCorrect(number,answer)"
                :disabled="!props.timer || bDis"
                ></button>
            </div>
        </div>
</template>