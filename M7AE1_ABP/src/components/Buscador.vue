<script setup>
import { pokeapi } from '@/services/pokeapi';
import { ref, onMounted } from 'vue'
import Card from '@/components/Card.vue';

// Variables reactivas
const name = ref('')
const pokemon = ref(null)
const pokemonList = ref([])
const loading = ref(false)
const error = ref('')

// Método para buscar Pokémon
const searchPokemon = async () => {
  if (!name.value.trim()) return

  loading.value = true
  error.value = ''

  try {
    pokemon.value = await pokeapi.getByName(name.value)
  } catch (error) {
    error.value = error.message || error.toString() || 'Error desconocido'
    pokemon.value = null
  } finally {
    loading.value = false
  }
}

// Método para cargar la lista de Pokémon
const loadPokemonList = async () => {
  try {
    pokemonList.value = await pokeapi.getByName()
  } catch (error) {
    console.error('Error al cargar la lista de Pokémon:', error)
  }
}

// Método para cargar Pikachu inicialmente
const loadInitialPokemon = async () => {
  name.value = 'pikachu'
  await searchPokemon()
}

// Hook created para cargar datos inicialmente
onMounted(async () => {
  await loadPokemonList()
  await loadInitialPokemon()
})
</script>

<template>
    <h1>Buscar Pokémon</h1>

        <div class="mb-3">
            <input 
                v-model="name" 
                type="text" 
                class="form-control" 
                placeholder="Buscar Pokémon específico" 
            >
            <button @click="searchPokemon" class="btn" :disabled="loading">Buscar</button>
            <div v-if="loading" class="loading">Cargando...</div>
            <div v-if="error" class="error">{{ error }}</div>
        </div>

        <div v-if="pokemon" class="mt-3">
            <h3>Pokémon Encontrado:</h3>
            <Card :pokemon="pokemon" />
        </div>
        <div v-else="pokemon" class="mt-3">
            <h3>No se ha encontrado el Pokémon: "{{ name }}"</h3>
        </div>
</template>

<style>

.form-control {
  display: block;
  margin: 0 auto; 
  width: 300px;
  border-radius: 30px;
  border: 1px solid #811313ff;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #f5e7e7ff;
  cursor: pointer;
  transition: border-color 0.25s;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;           
  justify-content: center;   
  gap: 1.5rem;               
  margin-top: 1rem;
}
.btn {
  display: block;
  margin: 20px auto;
  color: antiquewhite;
  background-color: #811313ff;
}
.btn:hover {
  background-color: rgba(207, 221, 10, 0.644);
  color: #811313ff;
  border-color: #811313ff;
  font-weight: bold;
}
.loading, .error {
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
}
.loading { color: #811313ff;}
.error { color: red;}

</style>