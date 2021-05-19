<template>
    <v-app-bar
            app>
        <v-app-bar-nav-icon @click.stop="$emit('drawer')"
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title class="headline text-uppercase">
            Teste<span class="font-weight-light d-none d-sm-inline"> App {{ appMode }}</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'Header',
        computed: {
            appMode () {
                return process.env.VUE_APP_MODE || ''
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .rounded-0{
        border-radius: 0;
        color: red;
        font-size: 30px;
    }
</style>
