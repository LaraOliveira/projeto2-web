let dono = [
    {id: 1, nome: "Pedro", contato: "(88) 9 9999-8888", animais_adotados: ""},
]

class DonoController{
    //Lista os donos
    index(req,res) {
        return res.json(dono)
    }
}

export default new DonoController()