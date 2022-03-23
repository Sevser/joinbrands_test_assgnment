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
      :value="modelValue"
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
    modelValue: [Number, String],
    required: Boolean,
    regex: String,
  },
  emits: ['update:modelValue'],
  data: () => ({
    error: false,
  }),
  methods: {
    handleInput($event) {
      this.$emit('update:modelValue', $event.target.value);
      this.error = false;
    },
    onSave() {
      this.error = false;
      this.$formBus.emit('input:save', new Promise((resolve, reject) => {
        if (this.required && (this.modelValue === undefined || this.modelValue === null)) {
          reject(new Error(`${this.label} required`));
          this.error = true;
        }
        if (this.regex && this.regex.length && !(new RegExp(this.regex)).test(this.modelValue)) {
          console.log(this.regex, !(new RegExp(this.regex)).test(this.modelValue), this.modelValue);
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
