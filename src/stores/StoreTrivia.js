import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from "axios";
import { errorMessages } from "vue/compiler-sfc";

export const useStoreTrivia = defineStore('trivia', {
    state: () => ({
        categories: [],
        isLoading: true
    }),
    
    actions: {
        async fetchCategories() {
            try {
                const data = await axios.get('https://opentdb.com/api_category.php')
                 this.categories = data.data.trivia_categories
                 this.isLoading = false
            }
            catch (e) {
                alert(error)
                console.log(error)
            }
        }
    }
})