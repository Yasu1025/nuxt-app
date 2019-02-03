<template>
    <section class="posts-list">
        <!-- have to pass props -->
        <app-post-preview :is-admin = "isAdmin" />
        <app-post-preview :is-admin = "isAdmin" />
        <app-post-preview :is-admin = "isAdmin" />
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
