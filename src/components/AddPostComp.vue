<template>
  <div class="post-card-container add-grid">
    <div id="avatar">
      <img src="@/assets/travel-logo.png" alt="User Avatar" />
    </div>
    <div class="post-content">
      <input
        type="text"
        id="title"
        v-model="title"
        placeholder="Enter title Here!..."
        autocomplete="off"
      />
      <textarea
        name="content"
        id="content"
        v-model="content"
        placeholder="Enter what you want to post here..."
      />
      <button id="add-btn" @click="addPost">Add Post</button>
    </div>
  </div>
</template>

<script>
import Post from "@/class/Post.js";
import { mapActions } from "vuex";

export default {
  name: "AddPostComp",
  data() {
    return {
      content: "",
      title: "",
    };
  },
  props: {
    user: Object,
  },
  methods: {
    ...mapActions({
      creatPost: "posts/creatPost",
    }),
    addPost() {
      const date = new Date(Date.now());
      Post.addPost(
        this.formatData(
          this.user.uid,
          this.title,
          this.content,
          date.toString().substr(4, 11)
        )
      ).then((data) => {
        const post = {
          ...this.formatData(
            this.user.uid,
            this.title,
            this.content,
            date.toString().substr(4, 11),
            data.id
          ),
        };
        this.creatPost(post);
        this.$emit("newPostAdded", post);
        this.title = "";
        this.content = "";
      });
    },
    formatData(userId, title, content, dateCreated, id = null) {
      let data = {
        userId: userId,
        title: title,
        content: content,
        dateCreated: dateCreated,
      };
      return id ? { id: id, ...data } : data;
    },
  },
};
</script>
<style lang="scss" scoped>
#avatar {
  width: 5em;
  height: 4em;
  border: 1px solid rgb(73, 72, 72);
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  margin: 0 auto;

  img {
    width: 100%;
    border-radius: 50%;
  }
}
.add-grid {
  display: grid;
  grid-template-columns: 0.3fr 0.9fr;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 768px) {
    grid-template-columns: 0.4fr 1.8fr;
  }
}
.post-content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.2em;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    gap: 0.4em;
  }
  input {
    width: auto;
    height: 1.5em;
    border-radius: 0.4em;
    &:focus {
      outline-color: skyblue;
    }
  }
  textarea {
    height: 5em;
    &:focus {
      outline-color: skyblue;
    }
  }
  input,
  textarea,
  button {
    margin: 0.2em 0;
  }
}
#content {
  resize: vertical;
}
</style>
