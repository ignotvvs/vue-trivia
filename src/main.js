import './index.css';
import'./main.css';
import { useFetch } from '@/composable/fetch.js';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import {router} from '@/router.js';

import App from './App.vue';

const app = createApp(App);
const token =  useFetch('https://opentdb.com/api_token.php?command=request');
app.provide('token', token);

app.use(router);
app.use(createPinia());

app.mount('#app');
