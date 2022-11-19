<template>
  <h1>Pokemon View</h1>
</template>

<script>
import { useRoute } from 'vue-router';

export default {

    setup() {

        const route = useRoute()
        console.log(route.params);

    }

}
</script>
