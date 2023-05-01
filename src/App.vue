<template>
    <div class="app">
        <post-form @create = "createPost"></post-form>
        <post-list :posts="posts"></post-list>
    </div>
</template>
<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
    export default{
        components:{
            PostForm, PostList
        },
        data(){
            return{
                posts:[
                    {id:1, tittle:'JavaScript 1', body:'the text body 1'},
                    {id:2, tittle:'JavaScript 2', body:'the text body 2'},
                    {id:3, tittle:'JavaScript 3', body:'the text body 3'},
                ]
            }
        },
        methods:{
            createPost(post){
                this.posts.push(post);
            },
        }
    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .app{
        padding: 20px;
    }
</style>