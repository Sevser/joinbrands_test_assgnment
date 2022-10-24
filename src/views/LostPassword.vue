<template>
  <div class="lost-password-container">
    <div class="body">
      <NoCodeNoEmail v-if="showEnterEmail" />
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
import NoCodeNoEmail from '@/components/LostPassword/NoCodeNoEmail.vue';

export default defineComponent({
  name: 'SignUp',
  components: {
    NoCodeNoEmail,
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
    showEnterEmail() {
      return this.code === undefined && this.email === undefined;
    },
  },
  methods: {
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
