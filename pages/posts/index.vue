<template>
    <div class="posts-page">
        <app-posts-list :posts = 'loadedPosts' />
    </div>
</template>

<script>

import PostsList from '~/components/Posts/PostsList.vue'
export default {
    components: {
        'app-posts-list': PostsList
    },
    computed: {
        loadedPosts() {
            return this.$store.getters.loadedPosts
        }
    }
}
</script>


<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
