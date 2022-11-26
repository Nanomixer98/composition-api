<template>
  <h1>Thanos Todo List</h1>
  <!-- <h4>Tareas: {{ $store.state.todos.length }}</h4> -->
  <h4>Tareas: {{ pending.length }}</h4>

  <hr />
  <button :class="{ active: currentTab == 'all' }" @click="currentTab = 'all'">
    Todos
  </button>
  <button
    :class="{ active: currentTab == 'pending' }"
    @click="currentTab = 'pending'"
  >
    Pendientes
  </button>
  <button
    :class="{ active: currentTab == 'completed' }"
    @click="currentTab = 'completed'"
  >
    Completados
  </button>

  <div>
    <ul>
      <li
        v-for="todo in getTodosByTab"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        @dblclick="toggleTodo(todo.id)"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>

  <button @click="isModalOpen = true">Crear Todo</button>
  <!-- Modal -->
  <modal v-if="isModalOpen" @on:close="isModalOpen = false">
    <template v-slot:header>
      <h1>Agregar nueva tarea</h1>
    </template>

    <template v-slot:body>
      <form
        @submit.prevent="
          createTodo(newTodoText);
          isModalOpen = false;
        "
      >
        <input type="text" placeholder="Nueva tarea" v-model="newTodoText" />
        <br />
        <button type="submit">Guardar</button>
      </form>
    </template>
  </modal>
</template>

<script>
import { ref } from "vue";
import useTodos from "@/composables/useTodos";
import Modal from "@/components/Modal";

export default {
  components: { Modal },
  setup() {
    const { currentTab, pending, getTodosByTab, toggleTodo, createTodo } =
      useTodos();

    return {
      currentTab,
      pending,
      getTodosByTab,
      toggleTodo,
      createTodo,
      isModalOpen: ref(false),
      newTodoText: ref(""),
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
