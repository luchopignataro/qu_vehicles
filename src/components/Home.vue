<template>
  <div>
    <h1>{{ title }}</h1>
    
    <div>
      <p>Items quantity: {{ $root.resource.count }}</p>
      <ul>
        <li class="item" v-for="v in $root.resource.results" :key="v.name">
         <p> Name: {{ v.name }} </p>
         <p> Model: {{ v.model }} </p>
         <router-link :to="{ name:'details', params:{id: $root.getItemId(v.url)} }" >View details</router-link>
        </li>
        <br>
      </ul>
    </div>
    
    <PaginationNav />
    
    
  </div>
</template>

<script>
import PaginationNav from '@/components/PaginationNav.vue';
export default {
  name: 'Home',
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
