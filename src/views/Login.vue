<template>
  <div id="loginBG">
    <div class="container">
      <div id="form-container">
        <form id="login-form" @submit.prevent="Login">
          <img alt="Travel Logo" src="@/assets/travel-logo.png" />
          <h1 class="title-page">Log In</h1>
          <input
            type="text"
            id="email"
            placeholder="Email"
            v-model="email"
            autocomplete="off"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            v-model="password"
          />
          <div class="error" v-if="this.errorMssg">{{ errorMssg }}</div>
          <p>
            Don't have an account?
            <router-link id="register" :to="{ name: 'Register' }">
              Register
            </router-link>
          </p>
          <button id="form-btn" type="submit">Log In</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import "../firebase/firebaseInit";
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errorMssg: "",
    };
  },
  methods: {
    ...mapActions({
      setUserCredentials: "user/setUserCredentials",
    }),
    Login() {
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then((data) => {
              const userData = {
                id: data.user.uid,
                email: data.user.email,
                name: data.user.email.split("@")[0],
                refreshToken: data.user.refreshToken,
              };
              this.setUserCredentials({ ...userData });
              this.$router.push({ name: "Home" });
              this.errorMssg = "";
            })
            .catch((e) => {
              this.errorMssg = e.message;
            });
        });
    },
  },
};
</script>
<style lang="scss" scoped>
#register {
  text-decoration: none;
  color: rgba(223, 37, 37, 0.85);
  &:hover {
    color: red;
    font-weight: bold;
  }
}
img {
  width: 15em;
  @media (min-width: 768px) {
    position: absolute;
    top: -5em;
  }
}
</style>
