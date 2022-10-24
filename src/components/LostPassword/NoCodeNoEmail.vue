<template>
  <div>
    <UiInput required label="email" v-model="enterEmail" />
    <UiButton @click="resetPassword">Restore password</UiButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UiInput from '@/components/UiInput.vue';
import UiButton from '@/components/UiButton.vue';
import userController from '@/utills/UserController';
import { createGUID } from '@/utills';

export default defineComponent({
  name: 'NoCodeNoEmail',
  provide() {
    return {
      formId: this.formId,
    };
  },
  components: {
    UiInput,
    UiButton,
  },
  data() {
    return {
      enterEmail: '',
      formId: createGUID(),
    };
  },
  methods: {
    async resetPassword() {
      const result = await userController.resetPassword({
        email: this.enterEmail,
      });
      if (result.data.userInfo && result.data.userInfo.email) {
        this.$router.push({
          path: '/lost-password',
          query: {
            email: result.data.userInfo.email,
          },
        });
      }
    },
  },
});
</script>

<style scoped lang="scss"></style>
