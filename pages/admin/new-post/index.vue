<template>
    <div class="new-post-page">
        <section class="new-post-form">
            <AdminPostForm @submit = "submitPost" />
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
    methods: {
        submitPost(postData){
            this.$store.dispatch('addPost', postData)
                .then(() => {
                    this.$router.push('/admin')
                })
        }
    }
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>

