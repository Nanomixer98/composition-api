import { ref } from 'vue'

const useCounter = (initValue = 2022) => {
    const counter = ref(initValue)

    return {
      counter,

      decrease: () => counter.value--,
      increase: () => counter.value++
    }
}

export default useCounter