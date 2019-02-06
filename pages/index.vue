<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest news!!</h1>
    </section>
    <app-posts-list :posts = "loadedPosts" />

  </div>
</template>

<script>
import PostsList from '~/components/Posts/PostsList.vue'

export default {
  components: {
      'app-posts-list': PostsList
  },
  data() {
    return {
      loadedPosts: []
    }
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: "1",
              title: "title1",
              previewText: "Prev Text",
              thumbnail: "http://www.logo-asia.com/images/logo_design/loop_logo.jpg",
            },
            {
              id: "2",
              title: "title2",
              previewText: "Prev Text",
              thumbnail: "http://www.logo-asia.com/images/logo_design/loop_logo.jpg",
              
            }
          ]
        })
    }, 1000);
    //reject(new Error())
    })
    .then(data => {
      return data
    })
    .catch(e=> {
        context.error(new Error())
      }
    )    
    
  },
  created() {
    
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
