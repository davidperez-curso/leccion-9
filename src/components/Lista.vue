<template>
  <div class="row">
    <div class="col">
      <h3>Nombre</h3>
      <ul class="list-group">
        <li class="list-group-item" v-for="dato of datos" :key="dato.id">{{dato.nombre}}</li> 
      </ul>
    </div>
    <div class="col">
      <h3>Apellido</h3>
      <ul class="list-group">
        <li class="list-group-item" v-for="dato of datos" :key="dato.id">{{dato.apellido}}</li>  
      </ul>
    </div>
    
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed:{
    ...mapState(['datos'])
  }

}
</script>

