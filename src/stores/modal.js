import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal',()=>{
    const modal= ref(false);
    
    function handleClikModal(){
        modal.value = !modal.value
    }

    return{
        modal,
        handleClikModal,
    }

})