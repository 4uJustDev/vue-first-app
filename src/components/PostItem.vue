<template>
    <div class="post">
        <div><strong>Tittle:</strong> {{ post.tittle }}</div>
        <div><strong>Description:</strong> {{ post.body }}</div>
    </div>
</template>
<script>
export default {
    props:{
        post:{
            type: Object,
            required: true
        }
    }
}
</script>