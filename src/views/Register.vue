<template>
  <div id="loginBG">
    <div class="container">
      <div id="form-container">
        <form id="register-form" @submit.prevent="Register">
          <img alt="Travel Logo" src="../assets/travel-logo.png" />
          <h1 class="title-page">Register</h1>
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
            Already have an account?
            <router-link id="login" :to="{ name: 'Login' }">
              Login
            </router-link>
          </p>
          <button id="form-btn" type="submit">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from "../firebase/firebaseInit";
import { mapActions } from "vuex";

export default {
  name: "RegisterComponent",
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
    async Register() {
      this.errorMssg = ``;
      if (this.email && this.password) {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((data) => {
            const firestoreDB = db.collection("users").doc(data.user.uid);
            const userData = {
              id: data.user.uid,
              email: data.user.email,
              name: data.user.email.split("@")[0],
              refreshToken: data.user.refreshToken,
            };
            this.setUserCredentials({ ...userData });
            firestoreDB.set({
              email: data.user.email,
              name: data.user.email.split("@")[0],
            });
            this.$router.push({ name: "Home" });
          })
          .catch((e) => {
            this.errorMssg = e.message;
          });
        return;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#login {
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
