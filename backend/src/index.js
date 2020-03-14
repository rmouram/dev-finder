const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

mongoose.connect('mongodb+srv://romulo:12345@cluster0-ocqa5.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333)

/*--------------------------------------------------------------------------------------
métodos HTTP: GET, POST, PUT, DELETE
Tipos de parâmetros:

Query params: req.query (Filtros, ordenação, paginação, ...)(mais usado em GET)
Route params: req.params (identificar um recurso na alteração ou remoção   )(usado mais em metodos PUT e DELETE)
Body:  req.body (Dados para criação ou alteração de um registro)
--------------------------------------------------------------------------------------*/

/* usado para exemplificar a ROUTE PARAMS
app.delete('/users/:id', (req, res) => {
    console.log(req.params)
    return res.json({message:'Ola OmniStack'})
})
*/
/*
 //usado para exemplificar a ROUTE PARAMS
app.post('/users', (req, res) => {
    console.log(req.body)
    return res.json({message:'Ola OmniStack'})
})
*/


