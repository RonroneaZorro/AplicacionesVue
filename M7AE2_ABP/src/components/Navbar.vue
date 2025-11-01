<script setup>

import { useAuth } from '@/services/useAuth'; 
import { useRouter } from 'vue-router';  

const router = useRouter();
const { logout } = useAuth();

async function onSubmit() {
  try {
    await logout();
    router.push('/');  
  } catch (err) {
    console.error('Error en logout:', err);
  }
}

</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <img src="../assets/img/icono.png" class="icono" alt="icono">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li>
                            <router-link class="nav-link" to="/home">Home</router-link>
                        </li>
                        <li>
                            <router-link class="nav-link" to="/pokedex">Pokedex</router-link>
                        </li>
                        <li>
                            <button @click="onSubmit" class="nav-link">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<style>
.icono {
    width: 50px;
    height: 50px;
    background-color: #d12a2aff;
    border-radius: 40%;
    margin-left: 20px;
}
.navbar-nav {
    margin-right: 20px;
}
.router-link-active {
  color: #da4e4eff !important;
  font-weight: bold;

}

</style>