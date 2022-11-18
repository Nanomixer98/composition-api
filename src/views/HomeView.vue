<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="changeIronman">Cambiar Ironman</button>
    <button @click="changeHulk">Cambiar Hulk</button>

    <h3>Ironman: {{ ironmanIsAlive }}</h3>
    <h3>Hulk: {{ hulkIsAlive }}</h3>
    <button @click="changeStatus">Cambiar Status</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  name: 'HomeView',

  setup() {
    const ironman = ref({ name: 'Toni', age: 50 })
    const hulk = reactive({ name: 'Bruce', age: 50 })

    let ironmanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value
      ironmanIsAlive = reactive(!ironmanIsAlive)
    }

    return {
      ironman,
      hulk,

      ironmanIsAlive,
      hulkIsAlive,

      changeIronman: () => {
        ironman.value.name = 'Stark'
        ironman.value.age = 24
      },
      changeHulk: () => {
        hulk.name = 'Banner'
        hulk.age = 27
      },

      changeStatus
    }
  }
}
</script>
