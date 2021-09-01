<template>
  <form id="register-form" @submit="Register">
    <h1 class="title-page">Register</h1>
    <input type="text" id="email" />
    <input type="password" id="password" />
    <p>
      Already have an account?
      <router-link id="register" :to="{ name: 'Login' }"> Login </router-link>
    </p>
    <button>Register</button>
  </form>
</template>

<script>
export default {
  name: "Register",
};
</script>
<style lang="scss" scoped></style>
