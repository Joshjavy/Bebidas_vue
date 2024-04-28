import { ref, onMounted,reactive } from 'vue'
import { defineStore} from 'pinia'
import APIService from '../services/APIService'

export const useBebidasStore = defineStore('bebida',()=>{

    const categorias = ref ([])
    const busqueda = reactive({
        nombre:'',
        categoria:''
    })

    onMounted(async()=>{
        const {data:{drinks}} = await APIService.obtenerCategorias()
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