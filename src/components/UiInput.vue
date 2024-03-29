<template>
  <div class="ui-input" :class="{ error }">
    <label :for="guid">
      <div class="header">
        {{ label }}
        <div
          v-if="required"
          class="required">
          *
        </div>
      </div>
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :id="guid"
        :value="modelValue"
        :type="type"
        @paste="handleInput"
        @input="handleInput"/>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { createGUID } from '@/utills/index';

export default defineComponent({
  inject: ['formId'],
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
    guid: createGUID(),
  }),
  methods: {
    handleInput($event: any) {
      if ($event.target !== null) {
        this.$emit('update:modelValue', $event.target.value);
        this.error = false;
      }
    },
    onSave() {
      this.$formBus.emit(`${this.formId}input:save`, new Promise((resolve, reject) => {
        this.error = false;
        if (this.required && (this.modelValue === undefined || this.modelValue === null)) {
          this.error = true;
          reject(new Error(`${this.label} required`));
        }
        if (this.modelValue !== undefined
          && this.regex
          && this.regex.length
          && !(new RegExp(this.regex)).test(this.modelValue.toString())) {
          console.log(this.regex, !(new RegExp(this.regex)).test(this.modelValue.toString()), this.modelValue);
          this.error = true;
          reject(new Error(`error in ${this.label} field`));
        }
        resolve(true);
      }));
    },
  },
  beforeUnmount() {
    this.$formBus.off(`${this.formId}save`, this.onSave.bind(this));
  },
  beforeMount() {
    this.$formBus.on(`${this.formId}save`, this.onSave.bind(this));
  },
  mounted() {
    console.log(this.formId);
  },
  setup() {
    const formId = inject('formId');

    return {
      formId,
    };
  },
});
</script>

<style scoped lang="scss">
.ui-input {
  display: flex;
  flex-direction: column;
  padding-bottom: 0.25rem;
  margin-bottom: 1rem;
  &.error {
    border-bottom: 1px solid red;
  }
  & label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-transform: capitalize;
    & .header {
      display: flex;
      margin-bottom: 10px;
      & .required {
        padding-left: 10px;
        color: red;
      }
    }
    & input {
      width: 100%;
      padding: 8px;
    }
  }
}

</style>
