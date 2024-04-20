import { ref } from 'vue'
import { defineStore} from 'pinia'

export const useBebidasStore = defineStore('bebida',()=>{

    const categorias = ref ([])

    return {
        categorias
    }
})