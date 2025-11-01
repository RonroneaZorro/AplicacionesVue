<script>
import Navbar from '@/components/Navbar.vue';
import Listado from '@/components/Listado.vue';
export default {
    components: {
        Navbar,Listado
    }
}
</script>

<template>
    <header>
    <Navbar />     
    </header>  
    <div class="pokedex">
    <Listado />
    </div>
</template>

<style>

</style>