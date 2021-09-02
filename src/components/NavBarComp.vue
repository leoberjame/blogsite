<template>
  <div class="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
    <a class="logout" @click="Logout">Logout</a>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { mapActions } from "vuex";

export default {
  name: "NavBar",
  methods: {
    ...mapActions({
      setUserCredentials: "user/setUserCredentials",
    }),
    Logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          const userData = {
            id: null,
            email: null,
            name: null,
            refreshToken: null,
          };
          this.setUserCredentials({ ...userData });
          this.$router.push({ name: "Login" });
          alert("Signed Out!");
        })
        .catch((e) => alert(e.message));
    },
  },
};
</script>
<style lang="scss" scoped>
.nav {
  background-color: #145da0;
  height: 5em;
  color: white;

  position: sticky;
  top: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3em;
}

a {
  color: #b1d4e0;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #2e8bc0;
  }
}

.router-link-exact-active {
  color: white;
  &:hover {
    color: white;
    text-shadow: 2px 2px 5px #b1d4e0;
  }
}
</style>
