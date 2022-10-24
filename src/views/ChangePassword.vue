<template>
  <div class="change-password-container">
    <div class="body">
      <UiInput
        required
        label="old password"
        type="password"
        v-model="password"
      />
      <UiInput
        required
        label="new password"
        type="password"
        regex="(?=.*?[A-Z])(?=.*?[0-9])"
        v-model="newPassword"
      />
      <UiButton @click="sendForm"> Update password </UiButton>
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
  props: {
    code: String,
  },
  data: () => ({
    validationArray: new Array<any>(),
    validating: false,
    password: '',
    newPassword: '',
    formId: createGUID(),
  }),
  computed: {
    showCurrentPassword() {
      console.log(this.code);
      return this.code === undefined;
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
      this.$formBus.on(`${this.formId}input:save`, this.handleSaveEvent.bind(this));
      this.$formBus.emit(`${this.formId}save`);
      this.wait();
      this.$formBus.off(`${this.formId}input:save`, this.handleSaveEvent.bind(this));
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
    async sendForm() {
      const validation = await this.validate();
      if (validation) {
        const result = await userManager.changePassword({
          newPassword: this.newPassword,
          password: this.password,
        });
        if (result.result) {
          this.$router.push({
            name: 'Profile',
          });
        }
      }
    },
  },
  mounted() {
    console.log(this.code);
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
