<template>
  <div class="about">
    <nav-bar-comp />
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import NavBarComp from "@/components/NavBarComp.vue";
export default {
  name: "About",
  components: {
    NavBarComp,
  },
};
</script>
<style lang="scss" scoped></style>
