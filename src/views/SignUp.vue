<template>
  <div class="sign-up-container">
    <div class="body">
      <UiInput
        required
        label="user name"
        v-model="userName"
      />
      <UiInput
        required
        label="email"
        type="email"
        regex="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
        v-model="email" />
      <UiInput
        required
        label="password"
        type="password"
        regex="(?=.*?[A-Z])(?=.*?[0-9])"
        v-model="password" />
      <div
       class="error-container"
       v-if="showError"
       >
        {{ errorLabel }}
      </div>
      <UiButton
        @click="sendForm"
        >
        SignUp
      </UiButton>
      <router-link class="link-to-sign-in" to="/sign-in">SignIn</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import UiInput from '@/components/UiInput.vue';
import UiButton from '@/components/UiButton.vue';
import userController from '@/utills/UserController';
import { createGUID, wait } from '@/utills';

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
    userName: '',
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
    async validate() {
      this.validationArray = [];
      this.errorLabel = '';
      this.$formBus.emit(`${this.formId}save`);
      await this.wait();
      try {
        await Promise.all(this.validationArray);
      } catch (e) {
        console.error(e);
        return false;
      }
      return true;
    },
    async sendForm(event: Event) {
      const validation = await this.validate();
      if (validation) {
        try {
          await userController.signUp({
            email: this.email,
            password: this.password,
            userName: this.userName,
          });
          this.$router.push({
            name: 'SignIn',
          });
        } catch (e: any) {
          this.errorLabel = e.toString();
        }
      } else {
        console.log('error');
      }
      return event;
    },
    handleSaveEvent(pending: any) {
      this.validationArray.push(pending);
    },
  },
  beforeMount() {
    this.$formBus.on(`${this.formId}input:save`, this.handleSaveEvent.bind(this));
  },
  beforeUnmount() {
    this.$formBus.off(`${this.formId}input:save`, this.handleSaveEvent.bind(this));
  },
  setup() {
    inject('wait');
    return {
      wait,
    };
  },
});
</script>
<style scoped lang="scss">
.sign-up-container {
  display: flex;
  justify-content: center;
  align-content: center;
  & .body {
    width: 100%;
    max-width: 40rem;
    & .error-container {
      width: 100%;
    }
    & .link-to-sign-in {
      margin-top: 20px;
    }
  }
}

</style>
