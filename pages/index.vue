<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest news!!</h1>
    </section>
    <app-posts-list :posts = "loadedPosts" />

  </div>
</template>

<script>

export default {
  middleware: 'log',
  computed: {
        loadedPosts() {
            return this.$store.getters.loadedPosts
        }
    }
}
</script>

<style scoped>
.intro {
  height: 160px;
  position: relative;
  box-sizing: border-box;
  background-color: skyblue;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  margin: 0;
  color: black;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

</style>
