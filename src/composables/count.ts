export const useCount = defineStore('count', () => {
  const count = ref<number>(0)

  function decrement() {
    count.value--
  }

  function increment() {
    count.value++
  }

  return {
    count,
    decrement,
    increment,
  }
}, { persist: true })
