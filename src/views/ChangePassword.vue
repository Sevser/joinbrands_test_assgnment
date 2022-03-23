<template>
  <div class="change-password-container">
    <div class="body">
      <UiInput
        required
        label="new password"
        type="password"
        v-model="password" />
      <UiButton
        @click="sendForm"
      >
        Update password
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
    password: '',
  }),
  methods: {
    async validate() {

      return true;
    },
    async sendForm() {
      const validation = await this.validate();
      if (validation) {
        this.$router.push({
          name: 'Profile',
        });
      }
    },
  },
});
</script>
<style scoped lang="scss">
.change-password-container {
  display: flex;
  justify-content: center;
  align-content: center;
  & .body {
    width: 100%;
    max-width: 40rem;
  }
}

</style>
