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
        v-if="!isDataLoading"
        />
        <div v-else>Data loading ...</div>
    </div>
</template>
<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
import axios from 'axios'
    export default{
        components:{
            PostForm, PostList
        },
        data(){
            return{
                posts:[],
                modalVisible: false,
                isDataLoading: Boolean
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
            },
            async fetchPosts() {
                this.isDataLoading = true;
                try{
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                    this.posts = response.data; 
                }catch(err){
                    alert("Data loading bad")
                }finally{
                    this.isDataLoading = false;
                }
            }
        },
        mounted() {
            this.fetchPosts();
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