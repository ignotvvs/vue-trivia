import { defineStore } from "pinia";
import { reactive } from "vue";

export const useStoreTrivia = defineStore('trivia', {
    state: () => reactive({
        difficulty: null,
        category: null,
        points: 0
    }),

    actions: {
        changeDiff(chosen) {
            this.difficulty = chosen; 
        },
        changeCat(chosen) {
            this.category = chosen;
        },
        addPoints(val) {
            this.points += val;
        }

    }
})