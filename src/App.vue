<template>
    <div class="app">
        <form>
            <h4>Creating post</h4>
            <input class="input" type="text" placeholder="Tittle">
            <input class="input" type="text" placeholder="Description">
            <button class="btn">Create</button>
        </form>
        <div class="post" v-for="post in posts">
            <div><strong>Tittle:</strong> {{ post.tittle }}</div>
            <div><strong>Description:</strong> {{ post.body }}</div>
        </div>
    </div>
   
</template>
<script>
    export default{
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
    .post{
        padding: 15px;
        border: 2px solid teal;
        margin-top: 20px;
    }
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
    .btn{
        margin-top: 15px;
        align-self: flex-end;
        padding: 10px 15px;
        background: none;
        color: teal;
        border: 1px solid teal;
    }
</style>