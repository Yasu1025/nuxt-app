<template>
    <section class="posts-list">
        <!-- have to pass props -->
        <app-post-preview
         v-for = "post in posts"
         :key = "post.id"
         :post = "post"
         :is-admin = "isAdmin">
         </app-post-preview>
    </section>
</template>

<script>
import PostPreview from './PostPreview.vue'

export default {
    components: {
        'app-post-preview': PostPreview
    },
    props: {
        isAdmin: {
            type: Boolean,
            default: false
        },
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>


<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
