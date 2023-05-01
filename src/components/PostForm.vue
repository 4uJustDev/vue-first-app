<template lang="">
    <form @submit.prevent>
            <h4>Creating post</h4>
            <my-input 
                v-model="post.tittle"
                type="text" 
                placeholder="Tittle"
            />
            <my-input 
                v-model="post.body"
                type="text" 
                placeholder="Description"
            />
            <my-button 1
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
export default {
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
</style>