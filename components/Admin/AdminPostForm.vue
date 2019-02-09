<template>
    <form @submit.prevent = "onSubmit">
        <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
        
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
                        
        <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
                        
        <AppControlInput
            control-type="textarea"
            v-model="editedPost.content">Content</AppControlInput>
        <AppControlInput
            control-type="textarea"
            v-model="editedPost.previewText">previewText</AppControlInput>
                        
        <AppButton type="submit">Save</AppButton>
                        
        <AppButton
            type="button"
            style="margin-left: 10px"
            btn-style="cancel"
            @click="onCancel">Cancel</AppButton>
            </form>
</template>

<script>
import AppControlInput from '~/components/UI/AppControlInput.vue'
import AppButton from '~/components/UI/AppButton.vue'

export default {
    components: {
        AppControlInput,
        AppButton
    },
    props: {
        loadedPost: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            editedPost: this.loadedPost ? {...this.loadedPost} : {
                author: '',
                title: '',
                thumbnail: '',
                content: '',
                previewText: ""
            }
        }
    },
    methods: {
        onSubmit() {
            this.$emit('submit', this.editedPost)
        },
        onCancel() {
            this.$router.push('/admin')
        }
    }
}
</script>