<script setup>
import { ref } from 'vue';
import { useAuth } from '@/services/useAuth'; 
import { useRouter } from 'vue-router';  

const router = useRouter();
const email = ref('');
const password = ref('');
const { login, error } = useAuth();

async function onSubmit() {
  try {
    await login(email.value, password.value);
    if (!error.value) {
      router.push('/home');
    }
  } catch (err) {
    console.error('Error en login:', err);
  }
}
</script>

<template>
  <div class="login">
    <h1>Login</h1>
    
    <form @submit.prevent="onSubmit">
      <input v-model="email" type="email" placeholder="Ingrese su correo" required>
      <input v-model="password" type="password" placeholder="Ingrese su contraseña" required>
      <button type="submit">Login</button> 
    </form>
    
    <p v-if="error" style="color: red;">{{ error }}</p>
  </div>
</template>

<style scoped>

.login {
    background-image: url('../assets/img/PokemonBackground2.jpg');
    background-size: cover;
    background-position: center;
    min-height: 720px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
  margin: auto;
}

input:focus {
  outline: none;
  border: 2px solid rgba(95, 168, 27, 0.562);
  box-shadow: 1px 1px 5px rgba(9, 255, 0, 1);
}

button {
  padding: 12px;
  background-color: #801616ff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: auto;
}

button:hover {
  background-color: #da4e4eff;
}


</style>