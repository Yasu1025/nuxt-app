<template>
    <div class="admin-post-page">
        <section class="update-post">
            <AdminPostForm :loadedPost = 'loadedPost' @submit = "editPost" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm.vue'

export default {
    layout: 'admin',
    middleware: ['checkAuth', 'auth'],
    components: {
        AdminPostForm
    },
    asyncData(context) {
        return context.app.$axios.get(`/posts/${context.params.postId}.json`)
                    .then(res => {
                      return {
                        loadedPost: {...res.data, id: context.params.postId}
                      }
                    })
                    .catch(e => context.error(e))
    },
    methods: {
        editPost(editedPost) {
            this.$store.dispatch('editPost', editedPost)
                .then(() => {
                    this.$router.push('/admin')
                })
        }
    }
}
</script>

<style scoped>
.update-post {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
