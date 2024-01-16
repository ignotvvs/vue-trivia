<script setup>
import { useStoreTrivia } from '@/stores/StoreTrivia.js';


let trivia = useStoreTrivia();


</script>

<template>
    <Transition 
        v-leave-active-class="opacity-0"
    >
        <div class="modal-mask">
            <div class="modal-container">
                <div class="h-full grid place-content-center gap-2">
                    <h1 class="text-3xl">Welcome To Triva App</h1>
                    <button
                        class="text-xl rounded h-20 bg-amber-500 hover:bg-amber-600"
                        @click="$emit('close')"
                    >BEGIN</button>
                </div>
        
            </div>
        </div>
    </Transition>

</template>

<style scoped>
    .modal-mask {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.8);
        display: grid;
        place-items: center;
    }

    .modal-container {
        background-color: rgb(117, 137, 130);
        height: 300px;
        padding: 2rem;
        width: 60vw;
        max-width: 500px;
        border-radius: 7px;
    }
</style>