<template>
  <div class="sign-in-container">
    <div class="body">
      <UiInput
        required
        label="email"
        type="email"
        v-model="email" />
      <UiInput
        required
        label="password"
        type="password"
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
    email: '',
    password: '',
  }),
  methods: {
    async logIn() {
      return true;
    },
    async sendForm() {
      const validation = await this.logIn();
      if (validation) {
        await this.$router.push({
          name: 'Profile',
        });
      }
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
