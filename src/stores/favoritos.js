import { defineStore} from 'pinia'

export const useFavoritosStore=('favoritos',()=>{

    const handleClickFavorito =()=>{
        console.log('agregando')
    }
    return {
        handleClickFavorito
    }
})