<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,Footer
  }
}
</script>

<template>

  <header>
    <Navbar />
  </header>
   <body>
  <main>
  <RouterView />
  </main>
  <footer>
  <Footer />
  </footer>
  </body>
</template>

<style scoped>

</style>
