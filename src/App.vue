<template>
    <div class="app">
        <h1>Page with vue</h1>
        <my-input
        v-model="searchQuery"
        placeholder="Searching..."
        />
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
        :posts="sortedAndSearchedPosts"
        @remove = 'removePost'
        v-if="!isDataLoading"
        />
        <div v-else>Data loading ...</div>
        <div ref="observer" class="observer"></div>
        <!-- <div class="page_wrapper">
            <div 
            v-for="pageNumber in totalPages" 
            :key="pageNumber"
            class="page"
            :class="{
                'current_page': page === pageNumber
            }"
            @click="changePage(pageNumber)"
        >
        {{ pageNumber }}</div>
        </div> -->
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
                searchQuery:'',
                page:1,
                limit:10,
                totalPages:0,
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
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params:{
                            _page: this.page,
                            _limit: this.limit
                        }
                    });
                    this.totalPages = Math.ceil(response.headers['x-total-count']/this.limit)
                    this.posts = response.data; 
                }catch(err){
                    alert("Data loading bad")
                }finally{
                    this.isDataLoading = false;
                }
            },
            async loadInfinityPages() {
                try{
                    this.page+=1;
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params:{
                            _page: this.page,
                            _limit: this.limit
                        }
                    });
                    this.totalPages = Math.ceil(response.headers['x-total-count']/this.limit)
                    this.posts = [...this.posts, ...response.data]; 
                }catch(err){
                    alert("Data loading bad")
                }
            },
            // changePage(pageNumber){
            //     this.page = pageNumber;
            // }
        },
        mounted() {
            this.fetchPosts();
            console.log(this.$refs.observer)
            let options = {
            rootMargin: "0px",
            threshold: 1.0,
            };
            let callback = (entries,observer)=>{
                if(entries[0].isIntersecting && this.page < this.totalPages){
                    this.loadInfinityPages()
                }
            }

            let observer = new IntersectionObserver(callback, options);
            observer.observe(this.$refs.observer);
        },
        computed:{
            sortedPosts(){
                return[...this.posts].sort((post1, post2)=> post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
            },
            sortedAndSearchedPosts(){
                return this.sortedPosts.filter(post=>post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
            }
        },
        watch : {
            // page(){
            //     this.fetchPosts();
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
    .page_wrapper{
        display: flex;
        margin-top: 15px;
    }
    .page{
        border: 1px solid black;
        padding: 10px;
        margin-left: 4px;
    }
    .current_page{
        border: 2px solid teal;
    }
    .observer{
        height: 30px;
        background-color: green;
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