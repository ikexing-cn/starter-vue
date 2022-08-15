<script lang="ts" setup>
const { increment, decrement, count } = $(useCount())
</script>

<template>
  <div>hello world</div>
  <div flexc children-ml-2 mt-2>
    <button btn @click="increment">
      increment
    </button>

    <span>{{ count }}</span>

    <button btn @click="decrement">
      decrement
    </button>
  </div>
</template>
