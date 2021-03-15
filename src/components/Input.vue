<template>
  <div class="input-group">
      <input type="text" class="form-control" placeholder="Nombre" v-model="nombres.nombre">
      <input type="text" class="form-control" placeholder="Apellido" v-model="nombres.apellido"> 
      <div class="input-group-append">
          <button class="btn btn-outline-danger" @click="agregar">Agregar</button>
      </div>
  </div>

</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(['nombres','datos'])
  },
  methods: {
    ...mapMutations(['agregar'])
  }

}
</script>

<style>

</style>