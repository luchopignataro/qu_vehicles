<template>
    <div class="container">
        <button class="btn-small" @click="$router.back()"><i class="material-icons left">chevron_left</i> Back</button>
        
        <section class="logo" v-if="star_wars">
            <Logo />
        </section>
        <div v-else>  
            <div id="content">                
                <h2>Vehicle Details</h2>
                <div v-for="(item, name) in info" :key="item">
                    <span class="">{{ name.toUpperCase() }}</span>
                    <span class="badge">{{ item }}</span>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
import { getItemDetails } from '@/helpers/resources'
import Logo from '@/components/Logo.vue'

export default {
    name: 'ItemDetails',
    props:{
    },
    data() {
        return {
            resource_name: 'vehicles',
            info: [],
            id: this.$route.params.id,
            star_wars: true,
            fields: ['name','model','vehicle_class','manufacturer','length','cost_in_credits','crew','passengers','max_atmosphering_speed','cargo_capacity','consumables','films','pilots']
        }
    },
    mounted() {
        this.loadDetails()
        
    },
    methods: {
        async loadDetails(){
            try{
                const data = await getItemDetails(this.resource_name,this.id)
                .then(data => {
                    this.info = data.data
                })
            } catch (error) {
                console.error(error)
            } finally {
                setTimeout(() => {
                    this.star_wars = false
                }, 4500)

            }
            
        }
    },
    components: {
        Logo
    }
}
</script>

<style scoped>
    .container{
        margin-top: 50px;
    }

    .logo {    
        z-index: 1;
        margin: auto;
        animation: logo 4s ease-out 2s;
        opacity: 0;
    }

    .logo svg {
        width: inherit;
        max-width: 80vw;
    }

    @keyframes logo {
        0% {
            width: 18em;        
            transform: scale(2.75);
            opacity: 1;
        }
        50% {
            opacity: 1;
            width: 18em;      
        }
        100% {
            opacity: 0;
            transform: scale(0.1);
            width: 18em;
        }
    }

    p {
        color: #FFFF82;
    }


    #board {
        font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
        transform: perspective(100px) rotateX(3deg);
        transform-origin: 50% 100%;
        text-align: justify;
        margin-left: -9em;
        font-weight: bold;
        overflow: hidden;
        height: 31em;
        width: 18em;
        bottom: 0;
        left: 50%;
    }

    #content {
        animation: scroll 3s linear 0s;
        position: absolute;
        top: 15%;
        width: 85vw;
    }

    #title, #subtitle {
        text-align: center;
    }

    @keyframes scroll {
        0% {
            top: 100%;
        }
        25% {
            top: 75%;
        }

        50%{
            top: 50%
        }

        75%{
            top: 30%
        }
    
        100% {
            top: 15%;
        }
    }

    .badge{
        color: #56f8d2!important;
    }
</style>