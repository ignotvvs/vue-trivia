<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';

const blurred = ref({'blur-md': true})


</script>

<template>
    <div class="w-full xl:w-1/2  my-0 mx-auto h-dvh flex text-black flex-col" :class="blurred">
            <RouterView ></RouterView>

    </div>

    <Teleport to="body">
        <Modal @exit="blurred['blur-md'] = false" />
    </Teleport>
</template>