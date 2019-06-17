import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stock: [ 
      {
        id: 1,
        nombre: 'Cassete',
        cantidad: 3
      }, 
      {
        id: 2,
        nombre: 'CD',
        cantidad: 5
      }, 
      { 
        id: 3,
        nombre: 'Vynils',
        cantidad: 8
      }
    ]
  },
  mutations: {
    aumentar(state, index){
      state.stock[index].cantidad++
    }, 
    reiniciar(state){ 
      state.stock.forEach(elemento => {
        elemento.cantidad = 0
      })
    }
  },
  actions: {

  }
})
