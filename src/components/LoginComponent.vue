<template>
  <form id="login-form" @submit="Login">
    <img alt="Travel Logo" src="../assets/travel-logo.png" />
    <h1 class="title-page">Log In</h1>
    <input type="text" id="email" />
    <input type="password" id="password" />
    <p>
      Don't have an account?
      <router-link id="register" :to="{ name: 'Register' }">
        Register
      </router-link>
    </p>
    <button id="login-btn">Log In</button>
  </form>
</template>

<script>
export default {
  name: "Register",
};
</script>
<style lang="scss" scoped>
#register {
  text-decoration: none;
  color: red;
  &:hover {
    color: pink;
  }
}
img {
  width: 15em;
  margin: 0 auto;
  @media (min-width: 768px) {
    position: absolute;
    top: -5em;
  }
}
</style>
