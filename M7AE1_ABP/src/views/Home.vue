<script>
import Buscador from '@/components/Buscador.vue';
import Navbar from '@/components/Navbar.vue';
export default {
    components: {
        Navbar,Buscador
    }
}
</script>

<template>
    <header>
    <Navbar />     
    </header>  
    <div class="home">
  <Buscador />
    </div>
</template>

<style>
.home {
    background-image: url('../assets/img/PokemonBackground.jpg');
    background-size: cover;
    background-position: center;
    min-height: 720px;
    display: flex;
    flex-direction: column;
    justify-content: center;

}
</style>
