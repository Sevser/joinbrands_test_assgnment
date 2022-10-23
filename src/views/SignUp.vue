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
      <UiButton
        @click="sendForm"
        >
        SignUp
      </UiButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UiInput from '@/components/UiInput.vue';
import UiButton from '@/components/UiButton.vue';

export default defineComponent({
  name: 'SignUp',
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
  }),
  methods: {
    async wait() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 250);
      });
    },
    async validate() {
      this.validating = true;
      this.$formBus.on('input:save', this.handleSaveEvent.bind(this));
      this.$formBus.emit('save');
      this.wait();
      this.$formBus.off('input:save', this.handleSaveEvent.bind(this));
      try {
        const validations = await Promise.all(this.validationArray);
        console.log(validations);
      } catch (e) {
        console.error(e);
        return false;
      }
      return true;
    },
    async sendForm() {
      const validation = await this.validate();
      if (validation) {
        const res = await this.$router.push({
          name: 'Profile',
        });
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
.sign-up-container {
  display: flex;
  justify-content: center;
  align-content: center;
  & .body {
    width: 100%;
    max-width: 40rem;
  }
}

</style>
