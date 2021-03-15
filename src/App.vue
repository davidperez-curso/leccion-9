<template>
  <div id="app" class="container">
    <Header class="mb-4" />
    <Lista />
    <Input class="my-4"/>
   
  </div>
</template>

<script>

import Lista from './components/Lista.vue'
import Input from './components/Input.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Lista,
    Input,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
