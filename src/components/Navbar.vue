<template>
    <div class="navbar">
        <div>First App with Vue3</div>
        <div class="navbar_btns">
            <my-button @click="$router.push('/')">Main</my-button>
            <my-button @click="$router.push('/posts')" style="margin-left: 15px;">Posts</my-button>
            <my-button @click="$router.push('/about')" style="margin-left: 15px;">About</my-button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
.navbar{
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0px 15px;
}
.navbar_btns{
    margin-left: auto;
}
</style>