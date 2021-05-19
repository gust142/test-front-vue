<template>
    <v-list-item :to="{'name': routeName}"
                 exact
                 active-class="white--text"
                 class="item-menu"
    >
        <v-list-item-action>
            <v-icon class="item-menu">{{ icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title> {{ title }}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
    export default {
        name: 'MenuItem',
        props: {
            icon: String,
            title: String,
            routeName: String
        }
    }
</script>

<style scoped>
    .item-menu {
        color: #a7b1c2;
    }

</style>
