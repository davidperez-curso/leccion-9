import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datos:[],
    nombres: {
      nombre: "",
      apellido: ""}
  },
  mutations: {
    agregar(state){
      const n = state.nombres.nombre;
      const a = state.nombres.apellido;
      console.log(state.nombres);
      state.datos.push({nombre: n, apellido: a});
      state.nombres.nombre = "";
      state.nombres.apellido = "";

      //state.datos.push(state.nombres);
      console.log(state.datos)
      
    }
  },
  actions: {
  },
  modules: {
  }
})
