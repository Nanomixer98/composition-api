<template>
  <h1>Aprendiendo Slots</h1>
  <button @click="openModal">Abrir Modal</button>

  <modal
    v-if="isOpen"
    test1="Hola mundo from test1 prop"
    test2="test2"
    title="Hola mundo"
    @on:close="closeModal"
  >
    <!-- <p>Lorem ipsum dolor sit amet similique fuga rerum?</p>
    <button>Salir</button>
    <h2>Titulo el modal</h2> -->
    <template v-slot:body>
      <p>Lorem ipsum dolor sit amet similique fuga rerum?</p>
    </template>

    <template v-slot:footer>
      <button @click="closeModal">Salir</button>
    </template>

    <template v-slot:header>
      <h2>Titulo el modal</h2>
    </template>

    <template v-slot:exposed="{ newTitle }">
      <h2>{{ newTitle }}</h2>
    </template>
  </modal>
</template>

<script>
import Modal from "@/components/Modal";
import { ref } from "vue";

export default {
  components: { Modal },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen,
      openModal: () => (isOpen.value = true),
      closeModal: () => (isOpen.value = false),
    };
  },
};
</script>

<style></style>
