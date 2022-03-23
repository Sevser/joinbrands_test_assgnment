<template>
  <div class="lost-password-container">
    <div class="body">
      <div v-if="hasNoData">
        <UiInput
          required
          label="email"
          v-model="enterEmail"
          />
        <UiButton
          @click="resetPassword"
        >
          Восстановить пароль
        </UiButton>
      </div>
      <router-link
        v-else-if="hasEmail"
        :to="`/lost-password?code=${code}`">
        /lost-password?code={{ code }}
      </router-link>
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
    UiInput,
    UiButton,
  },
  props: {
    email: String,
    code: String,
  },
  data: () => ({
    enterEmail: '',
  }),
  computed: {
    hasEmail() {
      return this.email && this.email.length;
    },
    hasNoData() {
      return !this.hasEmail
        && (!this.code || !this.code.length);
    },
  },
  methods: {
    resetPassword() {
      this.$router.push({
        path: `/lost-password?email=${this.enterEmail}`,
      });
    },
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
