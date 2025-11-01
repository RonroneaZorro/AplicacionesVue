import axios from "axios";

const apiUrl = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
});

export const pokeapi = {
    async getPokemons(limit = 5000) {
        const response = await apiUrl.get(`pokemon?limit=${limit}`);
        return response.data.results; 
    },
    
    async getByName(name) {
        try {
            const response = await apiUrl.get(`pokemon/${name.toLowerCase()}`);
            return response.data;
        } catch (error) {
            console.error ('Error al obtener el Pokémon: ' + error.message);
            console.error(error);
            } 
        }
};