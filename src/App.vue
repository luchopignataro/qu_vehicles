<template>
  <Header />

  <Loading v-if="loading" />
  <router-view v-else></router-view>
</template>

<script>
import Header from './components/Header.vue'
import Loading from './components/Loading.vue'
import { getResource, goToPage } from '@/helpers/resources'

export default {
  name: 'App',
  data(){
    return {
      resource_name: 'vehicles',
      resource: [],
      resource_clone: [],
      title: 'Star Wars Vehicles list',
      loading: true
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async goPage(number){
      try{
          this.loading = true
          const info = await goToPage(this.resource_name, number)
          .then(res => {
            this.resource = res.data
            this.resource_clone = [...this.resource.results]
          })
        } catch (error) {
          console.error(error)
        } finally {
          this.loading = false
        }
    },
    getItemId(url){
      return url.split('/')[url.split('/').length - 2]
    },
    async loadData(){
      if(this.resource.length == 0){
        try{
          const info = await getResource(this.resource_name)
          .then(res => {
            this.resource = res.data
            this.resource_clone = [...this.resource.results]
          })
        } catch (error) {
          console.error(error)
        } finally {
          this.loading = false
        }
      }
    }
  },
  computed: {
    currentPage(){
      if(this.resource.previous === null){
        return 1
      } else if(this.resource.previous && this.resource.next){
        return Number(this.resource.next.split('').pop()) - 1
      } else if(this.resource.next === null){
        return Number(this.resource.previous.split('').pop()) + 1
      }
    },
    headerItems(){
      return Object.keys(this.resource.results[0]).slice(0,3)
    }
  },
  components: {
    Header,
    Loading
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: white!important;
  background: black url('assets/background.png');
}

#app {
  font-family: 'Pixelify Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.btn, .btn-small{
  color: black !important;
  background-color: #d7c31a;
}
</style>
