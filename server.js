const { json } = require('express')
const express = require('express')

const app = express()

app.use(express.json())

let animais = [
    {id: 1, tipo: "Cachorro", raça: "Vira-lata", idade: "3 meses", status: "Para adoção"},
    {id: 2, tipo: "Cachorro", raça: "Poodle", idade: "1 ano", status: "Para adoção"},
    {id: 3, tipo: "Gato", raça: "Siamês", idade: "4 meses", status: "Para adoção"},
    {id: 4, tipo: "Gato", raça: "Persa", idade: "2 meses", status: "Adotado"}
]

app.get('/animais', (req, res) => {
    res.json(animais)
})

app.get('/animais/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const animal = animais.find(items => items.id === id)
    const status = animal ? 200 : 404

    return res.status(status).json(animal)
})

app.delete('/animais/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const index = animais.findIndex(item => item.id === id)
    const status = index >= 0 ? 200 : 404

    if(index >= 0){
        animais.splice(index, 1)
    }

    return res.status(status).json()
})

app.post('/animais', (req,res) => {
    const {tipo, raça, idade, status} = req.body
    const id = animais[animais.length - 1].id + 1

    const novoAnimal = {id, tipo, raça, idade, status}
    animais.push(novoAnimal)

    return res.status(201).json(novoAnimal)

})

app.listen(3001)