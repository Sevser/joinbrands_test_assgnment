<template>
  <div>
    <UiInput required label='email' v-model='enterEmail' />
    <UiButton @click='resetPassword'> Восстановить пароль </UiButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UiInput from '@/components/UiInput.vue';
import UiButton from '@/components/UiButton.vue';
import userController from '@/utills/UserController';

export default defineComponent({
  name: 'NoCodeNoEmail',
  components: {
    UiInput,
    UiButton,
  },
  data() {
    return {
      enterEmail: '',
    };
  },
  methods: {
    async resetPassword() {
      await userController.resetPassword({
        email: this.enterEmail,
      });
      this.$router.push({
        path: `/lost-password?email=${this.enterEmail}`,
      });
    },
  },
});
</script>

<style scoped lang='scss'>

</style>
