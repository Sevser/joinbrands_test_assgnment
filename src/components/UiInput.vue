<template>
  <div class="ui-input" :class="{ error }">
    <label>
      {{ label }}
      <div
        v-if="required"
        class="required">
        *
      </div>
    </label>
    <input
      :value="value"
      :type="type"
      @input="handleInput"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiInput',
  components: {},
  props: {
    label: String,
    type: {
      type: String,
      default: 'text',
    },
    value: [Number, String],
    required: Boolean,
  },
  data: () => ({
    error: false,
  }),
  methods: {
    handleInput($event) {
      this.$emit('input', $event);
      this.error = false;
    },
    onSave() {
      this.error = false;
      this.$formBus.emit('input:save', new Promise((resolve, reject) => {
        if (this.required && (this.value === undefined || this.value === null)) {
          reject(new Error(`error in ${this.label} field`));
          this.error = true;
        }
        resolve(true);
      }));
    },
  },
  beforeUnmount() {
    this.$formBus.off('save', this.onSave.bind(this));
  },
  beforeMount() {
    this.$formBus.on('save', this.onSave.bind(this));
  },
});
</script>

<style scoped lang="scss">
.ui-input {
  display: flex;
  flex-direction: column;
  padding-bottom: 0.25rem;
  margin-bottom: 0.5rem;
  &.error {
    border-bottom: 1px solid red;
  }
  & label {
    display: flex;
    & .required {
     color: red;
    }
  }
}

</style>
