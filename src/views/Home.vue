<template>
  <div class="home">
    <router-link to="/sign-up">SignUp</router-link> |
    <router-link to="/sign-in">SignIn</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>
