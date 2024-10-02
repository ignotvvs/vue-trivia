<script setup>
import {ref } from 'vue';
import { useStoreTrivia } from '@/stores/StoreTrivia';

const props = defineProps(['loops', 'type'])
let indexB = ref(null);
const values = useStoreTrivia()

function selectButton(index,item) {
    indexB.value = index;
    console.log(typeof item)
    if ((typeof item) == 'string') {
        values.changeDiff(item)
    } else {
        values.changeCat(item.id)
    }
}

</script>

<template>
    <p class="text-center text-2xl my-3 border-y-2 mx-20"><slot /></p>
    <div class="flex flex-wrap place-content-center h-auto">
        <div v-for="(item,index) in props.loops" :key="index" class="basis-1/5 m-1">
            <button 
            class="text-xl bg-slate-200 w-full h-full rounded-md hover:bg-green-900 hover:text-slate-200 p-2"
            :class="{'!bg-green-900 !text-slate-200': indexB === index}"
            @click="selectButton(index,item)"
            >{{ props.type ? item[props.type] : item }}</button>
        </div>
    </div>
</template>