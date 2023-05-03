<template>
    <div class="post">
        <div>
            <div><strong>Tittle:</strong> {{ post.title }}</div>
            <div><strong>Description:</strong> {{ post.body }}</div>
        </div>
        <div class="post_btns">
            <my-button
            @click = "$emit('remove', post)"
            >
            Delete 
            </my-button>
        </div>
    </div>
</template>
<script>
export default {

    props: {
        post: {
            type: Object,
            required: true
        }
    },
}
</script>
<style scoped>
.post{
    padding: 15px;
    border: 2px solid teal;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>