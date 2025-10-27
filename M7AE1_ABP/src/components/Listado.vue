<script>
import data from '@/data/personajes.js'
const pokemones = data.personajes

export default {
    data() {
        return {
            pokemones
        }
    }
}
</script>

<template>
    <h2>Base de datos de Pokémon</h2>

<div class="container">
    <div class="row">
        <div class="col-1">Nombre</div>
        <div class="col-1">Descripción</div>
    </div>
    <div class="row" v-for="pokemon in pokemones" :key="pokemon.id">
        <div class="col"> {{ pokemon.name }} </div>    
        <div class="col"> {{ pokemon.description }} </div>  
    </div>
</div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  background-color: silver;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.row {
    display: flex;
    justify-content: space-between;
    margin: auto 0;
    width: 80%;
}
.col {
    flex: 1;
    padding: 15px;
    border: 1px solid #0c0404;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: auto;
    text-align: center;
    vertical-align: middle;
}
.col-1 {
    flex: 1;
    text-align: center;
    padding: 10px;
    border: 1px solid #0c0404;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    width: 100%;
    font-weight: bold;
    font-size: 18px;
    color: #000;
}
</style>