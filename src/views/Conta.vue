<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex lg-12>
        <BaseWidget title="Nova Movimentação">
          <v-layout row wrap>
            <v-flex xs12 md3>
              <v-label>Valor:</v-label>
               <v-text-field
                    v-model="conta.valor"
                    label="Valor"
                  ></v-text-field>
            </v-flex>
            <v-flex xs12 md3>
              <v-label>Tipo:</v-label>
              <v-autocomplete
                label="Tipo"
                clearable
                v-model="conta.tipoId"
                :items="itens"
                item-value="value"
                item-text="descricao"
              ></v-autocomplete>
            </v-flex>

            <v-flex xs12 sm12>
              <v-layout row wrap>
                <div style="padding: 5px" />
                <v-btn @click="novaMovimentacao" color="success">
                  <v-icon left>add_circle</v-icon>Adicionar Movimentação
                </v-btn>
              </v-layout>
            </v-flex>
          </v-layout>
        </BaseWidget>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <v-toolbar color="white" class="elevation-1">
          <v-toolbar-title>
            <h5>Saldo Atual: R$ {{saldo}}</h5>
            <h5>Conta: {{numconta}}</h5> 
          </v-toolbar-title>
        </v-toolbar>
        <v-flex class="p-4 white" color="white">
          <template class="p-5">
            <v-data-table
              :headers="headers"
              :items="lista"
              item-key="id"
            >
              <template v-slot:item.tipo="{ item }">
                <v-chip

                  style="font-size: 0.72rem, "
                  :color="getColor(item.tipo)"
                  dark
                >{{ item.tipo }}</v-chip>
              </template>
            </v-data-table>
          </template>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import BaseWidget from "../components/BaseWidget";
import { validationMixin } from "vuelidate";
import { mapActions, mapMutations } from "vuex";
import Conta from '../services/conta';

export default {
  name: "Conta",
  components: { BaseWidget },
  mixins: [validationMixin],
  data() {
    return {
      itens: [
        { descricao: "Saque", value: 2},
        { descricao: "Depósito", value: 1 }
        ],
      headers: [
        { text: "Id", align: "left", value: "id" },
        { text: "Valor",align:"center", value: "valor", sortable: false },
        { text: "Data",align:"center", value: "created_at" },
        { text: "Tipo",align:"center", value: "tipo" },
      ],
      saldo: 0,
      numconta: '4342343',
      contaId:null,
      conta:{
        tipoId: 1,
        valor:0,
        contaId:null
      },
      lista:[

      ]
     
    };
  },
  mounted() {
     Conta.saldo(this.numconta).then(response=>{
        this.saldo = response.data.valor 
        this.contaId = response.data.id
        Conta.listar(this.contaId).then(listagem=>{
          this.lista = []
          Object.values(listagem.data).forEach(element => {
            this.lista.push({id:element.id, valor:element.valor,created_at:element.created_at,tipo:element.tipo.nome})
          });

          console.log( Object.values(listagem.data))
        })
        
      }).catch(error=>{
        console.log(error)
      })

     },
  computed: {
     
  },
  methods: {
    ...mapActions(["snackSuccess", "snackError"]),
    ...mapMutations(["setLoading"]),

    getColor(status) {
      if (status == "Depósito") {
        return "green";
      } else {
        return "blue";
      }
    },
    novaMovimentacao(){
      this.conta.contaId = this.contaId;
      if((this.conta.valor>this.saldo) && this.conta.tipoId == 2){
          this.snackError('Não foi possível realizar a operação, verifique os campos e seu saldo e tente novamente')
      }else if(this.conta.valor<0){
           this.snackError('Não foi possível realizar a operação, o valor deve ser maior que 0')
      }else{
        Conta.salvar(this.conta).then(response=>{
              this.saldo = response.data.valor;
              Conta.listar(this.contaId).then(listagem=>{
                this.lista = []
                Object.values(listagem.data).forEach(element => {
                  this.lista.push({id:element.id, valor:element.valor,created_at:element.created_at,tipo:element.tipo.nome})
                });
              })
        })
      }
    }
  },

};
</script>
<style>
.vue-treeselect__control {
  border-radius: 0;
}
</style>
