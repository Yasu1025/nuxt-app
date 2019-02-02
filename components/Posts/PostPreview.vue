<template>
    <nuxt-link :to="'/posts/' + 1" class="post-preview">
        <article>
            <div class="post-thumbnail" style="background-image: url(http://www.logo-asia.com/images/logo_design/loop_logo.jpg)"></div>
            <div class="post-content">
                <h1>Title</h1>
                <p>Preview</p>
            </div>
        </article>
    </nuxt-link>
</template>

<script>
export default {
  name: 'post-preview',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: false
    },
    thumbnail: {
      type: String,
      required: false
    }
  }
    
}
</script>


<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
  transition: .2s;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
