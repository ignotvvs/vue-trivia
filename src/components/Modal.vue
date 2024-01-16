<script setup>
import { useStoreTrivia } from '@/stores/StoreTrivia.js';
import {ref} from 'vue'

let show = ref(true);

let buttonStyle = {"text-3xl rounded h-20 bg-slate-300 hover:bg-emerald-900 hover:text-slate-200 mt-5 text-black basis-1/2" : true}

let trivia = useStoreTrivia();

function close() {
    show.value = false;
}

</script>

<template>
    <Transition name="modal">
        <div class="modal-mask" v-if="show">
            <div class="modal-container">
                <div class="h-full flex flex-col place-content-center ">
                    <h1 class="text-7xl text-center border-b-2 mb-1">TriviaRealm</h1>
                    <p class="text-center text-xl">App to quiz yourself</p>
                    <div class="flex place-content-center">
                        <button
                            :class="buttonStyle"
                            @click="close()">BEGIN</button>

                        <button
                            :class="buttonStyle" class ="ml-3"
                            @click="close()">BEGIN</button>
                    </div>
                </div>

            </div>
        </div>
    </Transition>
</template>

<style scoped>
@import url(https://db.onlinewebfonts.com/c/6f4150a1b16f82a0278e27e4b903deab?family=Funkydori-Bold);

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

.modal-container h1 {
    font-family: "Funkydori-Bold";
}

.modal-leave-active {
    transition: opacity 0.4s ease;
}

.modal-leave-to {
    opacity: 0;
}
</style>