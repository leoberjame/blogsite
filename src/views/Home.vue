<template>
  <div class="home">
    <home-content :msg="`Welcome to Explore Travel Blogs, ${userName}`" />
    <button class="logout" @click="Logout">Logout</button>
  </div>
</template>

<script>
import HomeContent from "@/components/HomeContent.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    HomeContent,
  },
  data() {
    return {
      userName: "",
    };
  },
  mounted() {
    const user = firebase.auth().currentUser;
    this.userName = user ? user.email.split("@")[0] : "No User";
  },
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
