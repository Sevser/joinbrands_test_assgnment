<template>
  <button
    class="button"
    @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiButton',
});

</script>

<style scoped lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
}

</style>
