<script setup>
import { computed } from 'vue'
// Props del componente
const props = defineProps({
  pokemon: {
    type: [Object, Array],
    required: true
  }
})
// Computed properties para acceder a los datos del Pokémon
const pokemonData = computed(() => {
  if (Array.isArray(props.pokemon)) {
    return props.pokemon[0] || {}  
  }
  return props.pokemon || {}
})
const pokemonImage = computed(() => {
  return props.pokemon?.sprites?.front_default || ''
})
const pokemonMoves = computed(() => {
  return props.pokemon?.moves?.slice(0, 10)?.map(move => move.move.name) || []
})
const pokemonAbilities = computed(() => {
  return props.pokemon?.abilities?.map(ability => ability.ability.name) || []
})

//<img v-else="pokemonImage" src="../assets/img/card.jpg" class="card-img-top" alt="Imagen del Pokémon"> 
</script>

<template>

  <div class="card">
      <img v-if="pokemonImage" :src="pokemonImage" class="card-img-top" alt="Imagen del Pokémon" />
      <img v-else="pokemonImage" src="../assets/img/card.jpg" class="card-img-top" alt="Imagen del Pokémon"> 
      <div class="card-body">
        <h5 v-if="pokemonData.name" class="card-title">{{ pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1) }}</h5>
          <h6 class="card-title">Movimientos</h6>
            <p v-for="move in pokemonMoves" :key="move" class="card-text">{{ move }}</p>
          <h6 class="card-title">Habilidades</h6>
            <p v-for="ability in pokemonAbilities" :key="ability" class="card-text">{{ ability }}</p>
      </div>
  </div>

</template>

<style scoped>
  .card {
    width: 18rem;
    margin: 1rem auto;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    border: 2px solid var(--vt-c-black-mute);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card-img-top {
    width: 100%;
    height: 200px; 
    object-fit: cover;
  }
  .card-body {
    padding: 1rem; 
  }
  .card-title {
    text-transform: capitalize; 
    font-weight: bold; 
    color: var(--vt-c-black-mute); 
    margin-bottom: 0.5rem; 
  }
  .card-text {
    color: var(--vt-c-black-mute); 
    font-size: 0.9rem; 
    margin: 0.25rem 0; 
    line-height: 1.4; 
  }
</style>
