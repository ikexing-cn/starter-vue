export const useCount = defineStore('count', () => {
  let count = $ref<number>(0)

  function decrease() {
    count--
  }

  function increment() {
    count++
  }

  return $$({
    count,
    decrease,
    increment
  })
})
