<template>
  <button
    class="button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
  text-transform: capitalize;
}

</style>
