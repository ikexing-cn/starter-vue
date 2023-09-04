<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const { count } = storeToRefs(useCount())
const { increment, decrement } = useCount()
</script>

<template>
  <div>hello world</div>
  <div flex="~ center" children-ml-2 mt-2>
    <button @click="increment">
      increment
    </button>

    <span>{{ count }}</span>

    <button @click="decrement">
      decrement
    </button>
  </div>
</template>
