<template>
    <v-navigation-drawer
            class="menu-lateral blue-grey darken-4"
            dark
            v-model="localDrawer"
            absolute
            overflow
            app
    >
        <v-app-bar flat class="transparent">
            <v-list class="pa-0">
                <v-list-item>
                    <v-list-item-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>{nome}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-app-bar>
        <v-list dense>
            <v-divider></v-divider>
            <template v-for="(item, index) in itens">
                <MenuItem :icon="item.icon" :title="item.title" :route-name="item.routeName" :key="index"/>
            </template>
        </v-list>
        <v-divider></v-divider>

    </v-navigation-drawer>
</template>

<script>
    import MenuItem from './MenuItem'
    import { menu } from '../../config'

    export default {
        name: 'Menu',
        components: { MenuItem },
        props: { value: { type: Boolean } },
        computed: {
            itens () {
                return menu
            }
        },
        data () {
            return {
                localDrawer: this.value
            }
        },
        watch: {
            value () {
                this.localDrawer = this.value
            },
            localDrawer () {
                this.$emit('input', this.localDrawer)
            }
        }
    }
</script>

<style scoped>
    .menu-lateral {
        background-color: #2f4050;
        /*color: #293846;*/
    }

</style>
