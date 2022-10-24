<template>
  <div class="lost-password-container">
    <div class="body">
      <NoCodeNoEmail v-if="showEnterEmail" />
      <div v-if="hasEmail && !hasCode">
        <router-link :to="`/lost-password?code=${codeRecieved}&email=${email}`">
          /lost-password?code={{ codeRecieved }}&email={{ email }}
        </router-link>
      </div>
      <div v-if="hasCode">
        <UiInput
          required
          label="new password"
          type="password"
          regex="(?=.*?[A-Z])(?=.*?[0-9])"
          v-model="newPassword"
        />
        <UiButton @click="updatePassword"> Update password </UiButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NoCodeNoEmail from '@/components/LostPassword/NoCodeNoEmail.vue';
import userController from '@/utills/UserController';
import userManager from '@/utills/UserManager';
import UiInput from '@/components/UiInput.vue';
import UiButton from '@/components/UiButton.vue';
import { createGUID } from '@/utills';

export default defineComponent({
  name: 'SignUp',
  provide() {
    return {
      formId: this.formId,
    };
  },
  components: {
    UiInput,
    UiButton,
    NoCodeNoEmail,
  },
  props: {
    email: String,
    code: String,
  },
  data: () => ({
    enterEmail: '',
    codeRecieved: '',
    newPassword: '',
    validationArray: new Array<any>(),
    validating: false,
    formId: createGUID(),
  }),
  computed: {
    hasEmail() {
      return this.email && this.email.length;
    },
    showEnterEmail() {
      return this.code === undefined && this.email === undefined;
    },
    hasCode() {
      return this.code && this.code.length;
    },
  },
  watch: {
    hasEmail(newValue) {
      if (newValue && !this.hasCode) {
        this.populateCode();
      }
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
    async validate() {
      this.validating = true;
      this.$formBus.on('input:save', this.handleSaveEvent.bind(this));
      this.$formBus.emit('save');
      this.wait();
      this.$formBus.off('input:save', this.handleSaveEvent.bind(this));
      try {
        await Promise.all(this.validationArray);
      } catch (e) {
        console.error(e);
        return false;
      }
      return true;
    },
    handleSaveEvent(pending: any) {
      this.validationArray.push(pending);
    },
    async updatePassword() {
      const validation = await this.validate();
      if (validation) {
        const result = await userManager.changePasswordWithCode({
          newPassword: this.newPassword,
          code: this.code as string,
          email: this.email as string,
        });
        if (result.result) {
          this.$router.push({
            name: 'Profile',
          });
        }
      }
    },
    async populateCode() {
      const result = await userController.getCode({
        email: this.email as string,
      });
      if (result.data.code) {
        this.codeRecieved = result.data.code;
      }
    },
  },
  mounted() {
    if (this.hasEmail && !this.hasCode) {
      this.populateCode();
    }
  },
});
</script>
<style scoped lang="scss">
.lost-password-container {
  display: flex;
  justify-content: center;
  align-content: center;
  & .body {
    width: 100%;
    max-width: 40rem;
  }
}
</style>