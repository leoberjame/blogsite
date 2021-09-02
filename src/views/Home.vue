<template>
  <div class="home">
    <nav-bar-comp />
    <div class="content-container">
      <home-content :msg="`Welcome to Explore Travel Blogs, ${userName}`" />
      <add-post-comp :user="user" @newPostAdded="updatePost" />
      <post-card-comp
        v-for="post in posts"
        :id="post.id"
        :userId="post.userId"
        :title="post.title"
        :content="post.content"
        :dateCreated="post.dateCreated"
        :key="post.id"
      />
    </div>
  </div>
</template>

<script>
import HomeContent from "@/components/HomeContent.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import NavBarComp from "@/components/NavBarComp.vue";
import AddPostComp from "@/components/AddPostComp.vue";
import PostCardComp from "@/components/PostCardComp.vue";
import Post from "@/class/Post.js";

export default {
  name: "Home",
  components: {
    HomeContent,
    NavBarComp,
    AddPostComp,
    PostCardComp,
  },
  data() {
    return {
      userName: "",
      user: null,
      posts: [],
    };
  },
  methods: {
    getPost() {
      Post.getPostsData().then((data) => {
        data.response.map((d) => {
          this.posts.push(d);
        });
      });
    },
    updatePost() {
      this.posts = [];
      this.getPost();
    },
    setStatic() {
      this.posts = [
        {
          id: "static id 01",
          userId: "static userId",
          title: "static title",
          content:
            "static content Lorem ipsum dolor sit amet elit. qui optio, ab cumque autem debitis.",
          dateCreated: "static Sep 2 2021",
        },
        {
          id: "static id 02",
          userId: "static userId",
          title: "static title",
          content:
            "static content Lorem ipsum dolor sit amet elit. qui optio, ab cumque autem debitis.",
          dateCreated: "static Sep 2 2021",
        },
      ];
    },
  },
  mounted() {
    this.user = firebase.auth().currentUser;
    this.userName = this.user ? this.user.email.split("@")[0] : "No User";
    this.posts.length > 0 ? null : this.setStatic();
    this.getPost();
  },
};
</script>
<style lang="scss" scoped>
.home {
  background-color: #ebf5f7;
  height: 100%;
  overflow-x: scroll;
  padding-bottom: 2em;
}
.content-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
}
</style>
