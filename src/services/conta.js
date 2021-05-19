import {http} from "../plugins/http";

let endpoint = 'conta/'
let transacao = 'transacao/'

export default {
    listar: (id) => {
        return http.get(transacao+id)
    },
    salvar: (conta) => {    
        return http.post(transacao, conta)
    },
    saldo:(conta)=>{
        return http.get(endpoint+conta)
    }
}
