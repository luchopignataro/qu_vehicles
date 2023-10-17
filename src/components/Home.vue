<template>
  <div>
    <h1>{{ $root.title }}</h1>
    
    <div>
      <p>Items quantity: {{ $root.resource.count }}</p>
      <table>
        <thead>
          <tr>
            <td v-for="name in this.$root.headerItems" :key="name">
              {{ name }}
              <button @click="sortItems(name, 'asc')">Asc</button>
              <button @click="sortItems(name, 'desc')">Desc</button>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr class="item" v-for="v in $root.resource_clone" :key="v.name">
            <td>{{ v.name }} </td>
            <td>{{ v.model }} </td>
            <td>{{ v.manufacturer }} </td>
            <td><router-link :to="{ name:'details', params:{id: $root.getItemId(v.url)} }" >View details</router-link></td>
          </tr>
        </tbody>
        <tfoot>
          <PaginationNav />
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import PaginationNav from '@/components/PaginationNav.vue';

export default {
  name: 'Home',
  data(){
    return {
      resource_local: this.$root.resource_clone
    }
  },
  methods: {
    sortItems(sort_by, direction){
      switch(typeof sort_by){
        case 'number':
          this.resource_local = this.resource_local.sort((a,b) => {
            return (direction === 'asc' ? a : b)[sort_by] - (direction === 'asc' ? b : a)[sort_by]
          })
          break

        default:
          this.resource_local = this.resource_local.sort((a,b) => {
            return (direction === 'asc' ? a : b)[sort_by].localeCompare((direction === 'asc' ? b : a)[sort_by])
          })
          break
      }
    }
  },
  components: {
    PaginationNav
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;

  &.item{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}
a {
  color: #42b983;
}
</style>
