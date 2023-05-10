<template>
    <div class="app">
        <h1>Page with vue</h1>
        <div class="btns">
           <my-button
            @click="showModal"
            >
            Create post
            </my-button> 
            <my-select 
            v-model="selectedSort"
            :options="sortOptions"
            />
        </div>
        
        <Transition name="bounce">
                <my-modal v-model:showing="modalVisible">
                <post-form 
                    @create = "createPost"
                /> 
                </my-modal>
        </Transition>


        <post-list 
        :posts="sortedPosts"
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
                isDataLoading: Boolean,
                selectedSort: '',
                sortOptions:[
                    {value:"title", name: "By name"},
                    {value:"body", name: "By description"}
                ]
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
        },
        computed:{
            sortedPosts(){
                return[...this.posts].sort((post1, post2)=> post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
            }
        },
        watch : {
            // selectedSort(newValue){
            //     this.posts.sort((post1, post2)=>{
            //         return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            //     })
            // }
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
    .btns{
        display: flex;
        justify-content: space-between;
        margin: 15px 0px;
    }
</style>
<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>