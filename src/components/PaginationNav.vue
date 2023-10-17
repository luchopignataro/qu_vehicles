<template>
    <ul class="pagination">
      <li class="waves-effect" @click="$root.goPage($root.currentPage-1)" v-if="$root.resource.previous"><i class="material-icons left">chevron_left</i></li>
      <slot v-for="(page, index) in pages" :key="index">
        <li class="btn waves-effect" :class="{'active': (index == $root.currentPage - 1)}" @click="$root.goPage(index+1)">{{ index+1 }}</li>
      </slot>
      <li class="waves-effect" @click="$root.goPage($root.currentPage+1)" v-if="$root.resource.next"><i class="material-icons right">chevron_right</i></li>
    </ul>
</template>

<script>
export default{
    name: 'PaginationNav',
    data(){
        return {
            pages: [],
            total: this.$root.resource.count
        }
    },
    mounted() {
        this.cretePagesButtons
    },
    computed: {
        cretePagesButtons(){
            this.pages.length = Math.ceil(this.total / 10)
        }
    }

}
</script>

<style scoped>
    .pagination{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        li.active{
            background-color: #2bbbad !important;
        }

        
    }
</style>