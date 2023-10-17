<template>
    <div>
        <button class="return_back" @click="$router.back()">&lt; Back</button>
        <h2>Vehicle details {{ info.name }}</h2>

        <div>
            <ul>
                <li v-for="(item, name) in info" :key="item">{{ name }}: {{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getItemDetails } from '@/helpers/resources'

export default {
    name: 'ItemDetails',
    props:{
    },
    data() {
        return {
            resource_name: 'vehicles',
            info: [],
            id: this.$route.params.id,
            fields: ['name','model','vehicle_class','manufacturer','length','cost_in_credits','crew','passengers','max_atmosphering_speed','cargo_capacity','consumables','films','pilots']
        }
    },
    mounted() {
        this.loadDetails()
        
    },
    methods: {
        async loadDetails(){
            try{
                //this.$root.loading = true
                const data = await getItemDetails(this.resource_name,this.id)
                .then(data => {
                    this.info = data.data
                    this.$root.loading = false
                })
            } catch (error) {
                console.error(error)
            } finally {
                this.$root.loading = false
            }
            
        }
    }
}
</script>
