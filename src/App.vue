<template>
  <div id="nav">
    <router-link to="/">Homepage</router-link> |
    <router-link to="/sign-up">SignUp</router-link> |
    <router-link to="/sign-in">SignIn</router-link> |
    <router-link to="/lost-password">LostPassword</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/change-password">ChangePassword</router-link> |
    <router-link to="/sign-out">SignOut</router-link>
  </div>
  <div>
    <h2>
      {{ title }}
    </h2>
  <router-view/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
  },
  computed: {
    title() {
      return this.$route.name;
    },
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
</style>
