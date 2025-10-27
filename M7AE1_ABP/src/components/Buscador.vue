<script>
import data from '@/data/personajes.js'
import Card from '@/components/Card.vue';
const pokemones = data.personajes

export default {
    components: {
        Card
    },
    data() {
        return {
            pokemones,
            searchQuery: '',
            isValid: true,
            filteredPokemons: []
        }
    },
    methods: {
        validateAndFilter() {
            this.isValid = this.searchQuery.trim() !== '';
                if (this.isValid) {
                    this.filteredPokemons = this.pokemones.filter(pokemones =>
                            pokemones.name.toLowerCase().includes(this.searchQuery.toLowerCase())
                            );
                } else {
                    this.filteredPokemons = [];
                };
            }
    },

}
</script>

<template>
    <div class="conteiner">
        <h1>Buscar Pokémon</h1>
        <div class="mb-3">
            <input 
                type="text" 
                v-model="searchQuery" 
                @input="validateAndFilter" 
                class="form-control" 
                placeholder="Ingresa el nombre del Pokémon" 
                :class="{ 'is-invalid': !isValid }"
            >
            <div v-if="!isValid" class="invalid-feedback">
                Debes ingresar un nombre de Pokémon para buscar.
            </div>
        </div>
    <div v-if="filteredPokemons.length > 0" class="cards-container">
      <Card v-for="pokemon in filteredPokemons" :key="pokemon.id" :pokemon="pokemon" />
    </div>
        <p v-else-if="searchQuery && filteredPokemons.length === 0" class="text-danger mt-3">
            El pokemón que desea buscar no existe o no se encuentra disponible en la base de datos.
        </p>
    </div>
</template>

<style scoped>
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
.text-danger, .invalid-feedback {
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  text-align: center;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;           
  justify-content: center;   
  gap: 1.5rem;               
  margin-top: 1rem;
}


</style>