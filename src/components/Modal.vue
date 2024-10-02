<script setup>
import { router } from '@/router';
import {ref} from 'vue';

let show = ref(true);

const buttonStyle = {"text-3xl rounded h-24 sm:h-20 bg-slate-300 hover:bg-emerald-900 hover:text-slate-200 mt-5 text-black sm:basis-1/2" : true};

const emit = defineEmits(['exit']);

function close() {
    router.push('/');
    show.value = false;
    emit('exit');
};

</script>

<template>
    <Transition name="modal">
        <div class="modal-mask" v-if="show">
            <div class="modal-container h-1/2 sm:h-auto flex flex-col place-content-center text-slate-800">
                <div class="h-full">
                    <h1 class="text-3xl sm:text-7xl text-center border-b-2 mb-1 text-balance  text-slate-300">Trivia</h1>
                    <p class="text-center text-3xl">Quiz yourself on many topics!</p>
                    <div class="flex place-content-center flex-col sm:flex-row">
                        <button
                            :class="buttonStyle"
                            @click="close()">START</button>
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
    /* height: 300px; */
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