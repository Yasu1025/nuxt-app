<template>
    <div class="admin-post-page">
        <section class="update-post">
            <AdminPostForm :loadedPost = 'loadedPost' />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm.vue'

export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    data() {
        return {
            loadedPost: {
                author: 'Default Author',
                title: 'Default Title',
                thumbnailLink: 'Default Link',
                content: 'Default Content'
            }
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
