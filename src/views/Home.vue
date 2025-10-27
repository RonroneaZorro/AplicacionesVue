<script>
import Buscador from '@/components/Buscador.vue';
export default {
    components: {
        Buscador
    }
}
</script>

<template>
    <div class="Home">
  <Buscador />
    </div>
</template>

<style>
.Home {
    background-image: url('../assets/img/PokemonBackground.jpg');
    background-size: cover;
    background-position: center;
    min-height: 720px;
    display: flex;
    flex-direction: column;
    justify-content: center;

}
</style>
