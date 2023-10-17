<template>
    <div class="content-nav">
      <button @click="$root.goPage($root.currentPage-1)" v-if="$root.resource.previous">&lt; Previous </button>
      <div v-for="(page, index) in pages" :key="index">
        <button @click="$root.goPage(index+1)">{{ index+1 }}</button>
      </div>
      <button @click="$root.goPage($root.currentPage+1)" v-if="$root.resource.next">Next &gt;</button>
    </div>
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