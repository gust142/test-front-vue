<template>
  <v-app>
    <SnackBar :show="snack.show" :text="snack.msg" :type="snack.type" @dismissed="onDismissed"/>
    <Menu v-model="drawer"/>
    <Header @drawer="drawer = !drawer"/>
    <Content />
    <Footer/>
  </v-app>
</template>

<script>
  import Header from './components/template/Header'
  import Footer from './components/template/Footer'
  import Content from './components/template/Content'
  import Menu from './components/template/Menu'
  import SnackBar from './components/SnackBar'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'App',
    components: { SnackBar, Menu, Content, Header, Footer },
    computed: {
      ...mapGetters(['snack', 'loading'])
    },
    data () {
      return {
        drawer: false
        //
      }
    },
    methods: {
      ...mapActions(['clearSnack']),
      onDismissed () {
        this.clearSnack()
      }
    }
  }
</script>
