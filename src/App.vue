<template>
  <div id="app" class="container">
    <Cabecera titulo="Stock" />
    <Lista />
  </div>
</template>

<script> 
import Cabecera from './components/Cabecera.vue'
import Lista from './components/Lista.vue'

export default {
  name: 'app',
  components: { 
    Cabecera,
    Lista
  }
}
</script>

<style> 
body{
  background:black;
  color: white
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
