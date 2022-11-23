<template>
  <h1>Thanos Todo List</h1>
  <!-- <h4>Tareas: {{ $store.state.todos.length }}</h4> -->
  <h4>Tareas: {{ pending.length }}</h4>

  <hr />
  <button class="active">Todos</button>
  <button>Pendientes</button>
  <button>Completados</button>

  <div>
    <ul>
      <li
        v-for="todo in allTodos"
        :key="todo.id"
        :class="{ completed: todo.completed }"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    // console.log(store);

    return {
      allTodos: computed(() => store.getters["allTodos"]),
      completed: computed(() => store.getters["completedTodos"]),
      pending: computed(() => store.getters["pendingTodos"]),
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}
</style>
