<template>
  <div class="sign-in-container">
    <div class="body">
      <UiInput required label="email" type="email" v-model="email" />
      <UiInput required label="password" type="password" v-model="password" />
      <div class="error-container" v-if="showError">
        {{ errorLabel }}
      </div>
      <UiButton @click="sendForm"> SignIn </UiButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UiInput from '@/components/UiInput.vue';
import UiButton from '@/components/UiButton.vue';
import userManager from '@/utills/UserManager';
import { createGUID } from '@/utills';

export default defineComponent({
  name: 'SignUp',
  provide() {
    return {
      formId: this.formId,
    };
  },
  components: {
    UiButton,
    UiInput,
  },
  data: () => ({
    email: '',
    password: '',
    validationArray: new Array<any>(),
    validating: false,
    errorLabel: '',
    formId: createGUID(),
  }),
  computed: {
    showError() {
      return !!this.errorLabel.length;
    },
  },
  methods: {
    async wait() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 250);
      });
    },
    async logIn() {
      return true;
    },
    async validate() {
      this.validating = true;
      this.$formBus.on('input:save', this.handleSaveEvent.bind(this));
      this.$formBus.emit('save');
      this.wait();
      this.$formBus.off('input:save', this.handleSaveEvent.bind(this));
      try {
        const validations = await Promise.all(this.validationArray);
      } catch (e) {
        console.error(e);
        return false;
      }
      return true;
    },
    async sendForm() {
      const validation = await this.validate();
      if (validation) {
        const result = await userManager.login({
          email: this.email,
          password: this.password,
        });
        if (!result.result && result.data.message) {
          this.errorLabel = result.data.message;
        } else {
          console.log(this.$router);
          await this.$router.push({
            name: 'Profile',
          });
        }
      } else {
        console.log('error');
      }
    },
    handleSaveEvent(pending: any) {
      this.validationArray.push(pending);
    },
  },
});
</script>
<style scoped lang="scss">
.sign-in-container {
  display: flex;
  justify-content: center;
  align-content: center;
  & .body {
    width: 100%;
    max-width: 40rem;
  }
}
</style>
