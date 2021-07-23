let donos = [
    {id: 1, cpf: 10020507890, nome: "Pedro Andrade", contato: "(88) 9 9932-8160" },
    {id: 2, cpf: 94356129050, nome: "Marília Souza", contato: "(88) 9 9708-6345" },
    {id: 3, cpf: 14519579390, nome: "Robson Ferreira", contato: "(88) 9 9239-1838" },
    {id: 4, cpf: 10020507580, nome: "Thais Medeiros", contato: "(88) 9 9954-3390" }
]

class DonoController{
    //Lista os donos
    index(req,res) {
        return res.json(donos)
    }

    //Recupera um cadastro
    show(req,res) {
        const cpf = parseInt(req.params.cpf)
        const dono = donos.find(items => items.cpf === cpf)
        const status = dono ? 200 : 404

        return res.status(status).json(dono)
    }

    //Adiciona um novo cadastro
    create(req,res) {
        const {cpf, nome, contato} = req.body
        const id = donos[donos.length - 1].id + 1
        
        const novoDono = {id, cpf, nome, contato}
        donos.push(novoDono)
        
        return res.status(201).json(novoDono)
    }

    //Atualiza o cadastro
    update(req,res) {
        const id = parseInt(req.params.id)
        const {cpf, nome, contato} = req.body

        const index = donos.findIndex(item => item.id === id)
        const status = index >= 0 ? 200:404

        if(index >= 0){
            donos[index] = {id: parseInt(id), cpf: parseInt(cpf), nome, contato}
        }
        return res.status(status).json(donos[index])
    }

    //Exclui um cadastro
    destroy(req,res) {
        const cpf = parseInt(req.params.cpf)
        const index = donos.findIndex(item => item.cpf === cpf)
        const status = index >= 0 ? 200 : 404
        
        if(index >= 0){
            donos.splice(index, 1)
        }
        
        return res.status(status).json()
    }

}

export default new DonoController()