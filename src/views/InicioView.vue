<script setup>
    import Receta from '../components/Receta.vue'
    import {  useBebidasStore } from '../stores/bebidas.js'
    
    const bebidas = useBebidasStore();

</script>

<template>
    <h3 class="text-6xl font-extrabold">Recetas</h3>
    <p v-if="bebidas.noRecetas"
        class="my-10 text-center text-2xl"
    > Ingresa el nombre de la bebida y selecciona la categoria </p>
    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  my-10 gap-10">
        <Receta
            v-for="receta in bebidas.recetas"
            :receta="receta"
            :key="receta.idDrink"
        />
    </div>




</template>

