<template>
  <div class="profile-container">
    <div class="body">
      <div>
        username
      </div>
      <div>
        email
      </div>
      <router-link to="/change-password">Change password</router-link>
      <router-link to="/sign-out">SignOut</router-link>
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
.profile-container {
  display: flex;
  justify-content: center;
  align-content: center;
  & .body {
    width: 100%;
    max-width: 40rem;
  }
}

</style>
