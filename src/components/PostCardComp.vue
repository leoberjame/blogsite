<template>
  <div class="post-card-container custom-styles">
    <div class="card-content">
      <h3>{{ title }}</h3>
    </div>
    <div class="card-content">
      <label>{{ dateCreated }}</label>
    </div>
    <div class="card-content">
      <p class="content">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCardComp",
  props: {
    id: String,
    userId: String,
    title: String,
    content: String,
    dateCreated: String,
  },
};
</script>
<style lang="scss" scoped>
.card-content {
  word-break: break-word;
  margin: 0 auto;
  width: 75%;
}
h3 {
  margin: 0.45em 0;
}
.content {
  text-align: justify;
}
.custom-styles {
  min-height: 5em;
}
</style>
