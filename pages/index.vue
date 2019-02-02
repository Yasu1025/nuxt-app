<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest news!!</h1>
    </section>
    <section class="featured-posts">

<!-- have to pass props -->
      <app-post-preview />
      <app-post-preview />
      <app-post-preview />
      <app-post-preview />
      <app-post-preview />

    </section>
  </div>
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview.vue'

export default {
  components: {
    'app-post-preview': PostPreview
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

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
