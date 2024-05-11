import {ref, watch, onMounted } from 'vue'
import { defineStore} from 'pinia'
import { useBebidasStore } from './bebidas'
import { useModalStore } from './modal'

export const useFavoritosStore = defineStore('favoritos',()=>{

    const bebidas = useBebidasStore();
    const modal = useModalStore();
    const favoritos = ref([]);

    onMounted(()=>{
        favoritos.value =  JSON.parse(localStorage.getItem('favoritos')) ?? []
    })
    watch(favoritos,()=>{
        sincronizarLocalStorage()
    },{
        deep:true
    })

    const sincronizarLocalStorage=()=>{
        localStorage.setItem('favoritos',JSON.stringify(favoritos.value))
    }

    const existeFavorito=()=>{
        const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos')) ?? []
        
        return favoritosLocalStorage.some(favorito => favorito.idDrink === bebidas.receta.idDrink)
    }

    const elimiarFavorito=()=>{
        favoritos.value = favoritos.value.filter( favorito => favorito.idDrink !== bebidas.receta.idDrink)
    }

    const agregarFavorito =()=>{
        favoritos.value.push(bebidas.receta)
    }
    const handleClickFavorito =(e)=>{

        if(existeFavorito(bebidas.receta.idDrink)){
            elimiarFavorito();
            //e.target.textContent = 'Agregar a Favoritos'
        }else{
            agregarFavorito();
            //e.target.textContent = 'Eliminar de Favoritos'
        }

        modal.modal = false;
    }
    
    return {
        favoritos,
        existeFavorito,
        handleClickFavorito
    }
})



