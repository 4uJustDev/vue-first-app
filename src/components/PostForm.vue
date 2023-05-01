<template lang="">
    <form @submit.prevent>
            <h4>Creating post</h4>
            <input 
                v-model="post.tittle"
                class="input" 
                type="text" 
                placeholder="Tittle"
            >
            <input 
                v-model="post.body"
                class="input" 
                type="text" 
                placeholder="Description"
            >
            <my-button 
                style = "
                    margin-top: 15px;
                    align-self: flex-end;
                "
                @click="createPost"
            >
            Create
            </my-button>
    </form>
</template>
<script>
import MyButton from '@/components/UI/MyButton';
export default {
    components:{
        MyButton,
    },
    data(){
        return{
            post:{
                tittle:'',
                body: ''
            }
        }
    },
    methods:{
        createPost(){
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                tittle:'',
                body: ''
            }
        }
    }
}

</script>
<style scoped>
    form{
        display: flex;
        flex-direction: column;

    }
    .input{
        width: 100%;
        border: 1px solid teal;
        padding: 10px 15px;
        margin-top: 15px;
    }
</style>