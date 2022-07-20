<script lang="ts" setup>
const { increment, decrease, count } = $(useCount())
</script>

<template>
  <div>hello world</div>
  <div class="use-count">
    <button @click="increment">+</button>
    {{ count }}
    <button @click="decrease">-</button>
  </div>
</template>

<style lang="postcss" scoped>
.use-count {
  display: inline;
}
</style>
