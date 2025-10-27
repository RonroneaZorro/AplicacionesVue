<script>
export default {
  name: 'Card',
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>

  <div class="card" style="width: 18rem;">
    <img src="../assets/img/card.jpg" class="card-img-top" alt="Imagen del Pokémon">
    <div class="card-body">
        <h5 class="card-title">{{ pokemon.name }}</h5>
        <h6 class="card-title">Descripción</h6>
        <p class="card-text">{{ pokemon.description }}</p>
    </div>

</div>
</template>

<style scoped>
.card {
  margin: 1rem auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
}
.card-title {
  font-weight: 700;
  text-transform: capitalize;
}
.card-text {
  color: #333;
}
.btn {
  background-color: #e62a2a;
  border: none;
  border-radius: 20px;
}
</style>
