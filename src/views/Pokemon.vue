<template>
  <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>

  <template v-else>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    <br>
    <router-link :to="{ name: 'pokemon-search' }">Regresar</router-link>
  </template>
</template>

<script>
import { watch } from 'vue';
import usePokemon from '@/composables/usePokemon';
import { useRoute, onBeforeRouteLeave } from 'vue-router';

export default {

    setup() {

        const route = useRoute()
        // console.log(route.params);
        const { errorMessage, isLoading, pokemon, searchPokemon } = usePokemon(route.params.id)

        watch(
            () => route.params.id,
            (value, prevValue) => searchPokemon(route.params.id)
        )

        onBeforeRouteLeave(() => {
            const answer = window.confirm('¿Está seguro que desea salir?')
            console.log({answer});
            if(!answer) return false
        })

        return {
            errorMessage,
            isLoading,
            pokemon,
        }

    }

}
</script>
