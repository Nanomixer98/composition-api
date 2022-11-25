import { computed, ref } from "vue";
import { useStore } from "vuex";

const useTodos = () => {
    const store = useStore();
    const currentTab = ref("all");

    return {
        currentTab,

        pending: computed(() => store.getters["pendingTodos"]),

        getTodosByTab: computed(() =>
            store.getters["getTodosByTab"](currentTab.value)
        ),

        // Methods
        toggleTodo: (id) => {
            store.commit("toggleTodo", id);
        },
    };
}

export default useTodos