<template>
    <v-content class="blue-grey lighten-4">
        <v-container fluid>
            <router-view></router-view>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: 'Content'
    }
</script>

<style scoped>
    .content {
        background-color: #f3f3f4;
    }

</style>
