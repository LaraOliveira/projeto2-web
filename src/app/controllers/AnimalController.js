let animais = [
    {id: 1, tipo: "Cachorro", raça: "Vira-lata", idade: "3 meses", condição: "Para adoção"},
    {id: 2, tipo: "Cachorro", raça: "Poodle", idade: "1 ano", condição: "Para adoção"},
    {id: 3, tipo: "Gato", raça: "Siamês", idade: "4 meses", condição: "Para adoção"},
    {id: 4, tipo: "Gato", raça: "Persa", idade: "2 meses", condição: "Adotado"}
]

class AnimalController{
    //Lista os animais
    index(req,res) {
        return res.json(animais)
    }
    
    //Recupera um cadastro
    show(req,res) {
        const id = parseInt(req.params.id)
        const animal = animais.find(items => items.id === id)
        const status = animal ? 200 : 404

        return res.status(status).json(animal)
    }
   
    //Adiciona um novo animal
    create(req,res) {
        const {tipo, raça, idade, condição} = req.body
        const id = animais[animais.length - 1].id + 1
        
        const novoAnimal = {id, tipo, raça, idade, condição}
        animais.push(novoAnimal)
        
        return res.status(201).json(novoAnimal)
    }

    //Atualiza o cadastro
    update(req,res) {
        const id = parseInt(req.params.id)
        const {tipo, raça, idade, condição} = req.body

        const index = animais.findIndex(item => item.id === id)
        const status = index >= 0 ? 200:404

        if(index >= 0){
            animais[index] = {id: parseInt(id), tipo, raça, idade, condição}
        }
        return res.status(status).json(animais[index])
    }
    
    //Exclui um cadastro
    destroy(req,res) {
        const id = parseInt(req.params.id)
        const index = animais.findIndex(item => item.id === id)
        const status = index >= 0 ? 200 : 404
        
        if(index >= 0){
            animais.splice(index, 1)
        }
        
        return res.status(status).json()
    }
}

export default new AnimalController()