<template>
    <div class="post">
        <div>
            <div><strong>Tittle:</strong> {{ post.tittle }}</div>
            <div><strong>Description:</strong> {{ post.body }}</div>
        </div>
        <div class="post_btns">
            <my-button>Delete</my-button>
        </div>
    </div>
</template>
<script>
import MyButton from '@/components/UI/MyButton.vue';
export default {
    components:{
    MyButton,
},
    props:{
        post:{
            type: Object,
            required: true
        }
    }
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