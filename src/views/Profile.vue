<template>
  <div class="profile-container">
    <div class="body">
      <div>
        {{ userName }}
      </div>
      <div>
        {{ email }}
      </div>
      <router-link to="/change-password">Change password</router-link>
      <router-link to="/sign-out">SignOut</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import userManager from '@/utills/UserManager';

export default defineComponent({
  name: 'SignUp',
  data: () => ({
    email: userManager.user.email,
    userName: userManager.user.userName,
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
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 40rem;
  }
}

</style>
