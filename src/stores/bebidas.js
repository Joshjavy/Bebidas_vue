import { ref, onMounted,reactive } from 'vue'
import { defineStore} from 'pinia'
import axios from 'axios'
export const useBebidasStore = defineStore('bebida',()=>{

    const categorias = ref ([])
    const busqueda = reactive({
        nombre:'',
        categoria:''
    })

    onMounted(async()=>{
        const {data:{drinks}} = await axios('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        categorias.value = drinks;
    })

    function obtenerRecetas(){
        console.log('consultando')
    }


    return {
        categorias,
        busqueda,
        obtenerRecetas
    }
})