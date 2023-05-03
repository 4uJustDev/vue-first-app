<template>
    <div class="modal" @click="hideModal" v-if="showing">
        <div @click.stop class="modal_content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'my-modal',
    props:{
        showing:{
            type: Boolean,
            default: false
        }
    },
    methods:{
        hideModal() {
            this.$emit('update:showing', false);
        }
    }
}


</script>
<style scoped>
    .modal{
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
    }
    .modal_content{
        margin: auto;
        background: white;
        border-radius: 14px;
        padding: 20px 40px;
        min-width: 400px;
    }
</style>