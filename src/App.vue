<template>
    <div class="app">
        <h1>Page with vue</h1>

        <my-button
        @click="showModal"
        style="margin: 15px 0px;"
        >
        Create post
        </my-button>

        <my-modal v-model:showing="modalVisible">
            <post-form 
                @create = "createPost"
            /> 
        </my-modal>

        <post-list 
        :posts="posts"
        @remove = 'removePost'
        />
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
                ],
                modalVisible:false
            }
        },
        methods:{
            createPost(post){
                this.posts.push(post);
                this.modalVisible = false;
            },
            
            removePost(post){
                this.posts = this.posts.filter(p => p.id !== post.id)
            },
            showModal(){
                this.modalVisible = true;
            }
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