<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';

let showModal = ref(true);

</script>

<template>
    <div></div>

    <Teleport to="body">
        <Modal @close="showModal = false" v-if="showModal" />
    </Teleport>
</template>