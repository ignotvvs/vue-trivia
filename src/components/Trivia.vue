<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';

</script>

<template>
    <div></div>

    <Teleport to="body">
        <Modal />
    </Teleport>
</template>