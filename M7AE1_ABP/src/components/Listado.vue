<script>
import { pokeapi } from '@/services/pokeapi'; 

export default {
    data() {
        return {
            pokemones: [],
            loading: true,
            error: null
        };
    },
    async mounted() {
        try {
            this.pokemones = await pokeapi.getPokemons(1024);

            const detailPromises = this.pokemones.map(pokemon => pokeapi.getByName(pokemon.name));
            const details = await Promise.all(detailPromises);
            this.pokemones.forEach((pokemon, index) => {
                pokemon.details = details[index];
            });
        } catch (error) {
            this.error = 'Error cargando Pokémon: ' + error.message;
            console.error(error);
        } finally {
            this.loading = false;
        }
    }
}

</script>

<template>
    <h2>Base de datos de Pokémon</h2>
    
    <div v-if="loading" class="loading">Cargando Pokedex...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="pokemones.length === 0" class="nopoke">No hay Pokemones disponibles por el momento.</div>

    <div v-else class="container">
        <div class="row">   
            <div class="col" style="font-weight: bold; font-size: 18px; color: #000;">Nombre</div>
            <div class="col" style="font-weight: bold; font-size: 18px; color: #000;">Movimientos</div>
            <div class="col" style="font-weight: bold; font-size: 18px; color: #000;">Habilidades</div>
        </div>
        <div class="row" v-for="pokemon in pokemones" :key="pokemon.name">
            <div class="col">{{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }} #{{ pokemon.details ? pokemon.details.id : '???' }}</div>
            <div class="col">
                {{ pokemon.details ? pokemon.details.moves.slice(0, 5).map(a => a.move.name).join(', ') : 'Cargando...' }}
            </div>
            <div class="col">
                {{ pokemon.details ? pokemon.details.abilities.map(a => a.ability.name).join(', ') : 'Cargando...' }}
            </div>
        </div>
    </div>
</template>


<style>
.container {
    display: block;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: silver;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
}
.row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 10px 0;

}
.col {
    flex: 1;
    padding: 15px;
    border: 1px solid #333; 
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    text-align: center;
    margin: 0 5px; 
}
.loading, .error, .nopoke {
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
}
.loading { color: #811313ff;}
.error { color: red; }
.nopoke { color: var(--vt-c-divider-light-2);}

@media (max-width: 768px) {
    .row { flex-direction: column; width: 100%; }
}
</style>