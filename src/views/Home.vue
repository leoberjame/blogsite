<template>
  <div class="home">
    <home-content msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HomeContent from "@/components/HomeContent.vue";

export default {
  name: "Home",
  components: {
    HomeContent,
  },
};
</script>
