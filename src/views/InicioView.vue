<script setup>
    import Receta from '../components/Receta.vue'
    import {  useBebidasStore } from '../stores/bebidas.js'
    
    const bebidas = useBebidasStore();

</script>

<template>
    
    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  my-10 gap-10">
        <Receta
            v-for="receta in bebidas.recetas"
            :receta="receta"
            :key="receta.idDrink"
        />
    </div>



</template>

