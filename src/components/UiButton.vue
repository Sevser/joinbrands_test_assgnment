<template>
  <button
    class="button"
    @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiButton',
  methods: {
    onClick(event: Event) {
      if (event.stopImmediatePropagation) {
        event.stopImmediatePropagation();
      }
      if (event.stopPropagation) {
        event.stopPropagation();
      }
      if (event.preventDefault) {
        event.preventDefault();
      }
      this.$emit('click');
    },
  },
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
