<template>
    <header class="z-depth-2">
        <nav>
            <div class="nav-wrapper black lighten-1">
                <a href="#"><Logo :width="150" :height="70" /></a>
                <ul id="nav-mobile" class="right">
                    <li><router-link class="btn-small" :to="{name: 'home'}">Vehicles</router-link></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup>
import Logo from '@/components/Logo.vue'

</script>

<style scoped>
    header{
        height: 75px;
        max-height: 75px;
        border-bottom: 1px solid #d7c31a;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-shadow: 0 2px 5px 0 #d7c31a, 0 2px 5px 0 rgb(163, 157, 157);

        img.logo{
            max-width: 90px;
            padding: 15px 8px;
        }

        p{
            font-size: 1em;
            font-weight: 700;
            margin: 0;
        }
    }

    nav{
        height: 70px;
    }
</style>