import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Recolectar las piedras del infinito', completed: false},
      { id: '2', text: 'Piedra del alma', completed: true},
      { id: '3', text: 'Piedra de poder', completed: true},
      { id: '4', text: 'Piedra de realidad', completed: false},
      { id: '5', text: 'Reunir secuaces competentes', completed: false},
    ]
  },
  getters: {
    pendingTodos(state, getters, rootState) {
      console.log({ state, getters, rootState });
      return state.todos.filter( todo => !todo.completed)
    },
    allTodos(state, getters, rootState) {
      return [...state.todos]
    },
    completedTodos(state, getters, rootState) {
      return state.todos.filter( todo => todo.completed)
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
