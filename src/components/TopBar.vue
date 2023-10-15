<template>
    <header>
        <img class="logo" alt="Vehicles list logo" src="../assets/logo.png">
        <p>Vehicles list</p>
    </header>
</template>

<script>
    export default {
        name: 'TopBar'
    }

</script>

<style scoped>
    header{
        height: 45px;
        max-height: 45px;
        border-bottom: 1px solid grey;
        display: flex;
        justify-content: start;
        align-items: center;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 5px 0 rgba(0,0,0,.23);

        img.logo{
            max-width: 30px;
            padding: 5px 15px;
        }

        p{
            font-size: 1em;
            font-weight: 700;
            margin: 0;
        }
    }
</style>