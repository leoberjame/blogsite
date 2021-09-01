<template>
  <div id="loginBG">
    <div class="container">
      <div id="form-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>
<style lang="scss" scoped>
#loginBG {
  height: 100%;
  background-image: url("../assets/LoginBG2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 5%;
}
#form-container {
  font-size: 1em;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  position: absolute;
  padding: 0.5rem;

  @media (min-width: 768px) {
    border-radius: 0.5em;
    height: 25em;
    width: 30em;
    left: 10em;
    top: 10em;
  }
}

form {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
