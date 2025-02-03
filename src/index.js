const express = require('express')
const path = require('path')

const app = express()

let listaNomes = []

// configuração do servidor
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// configuração de body
app.use(express.urlencoded({ extended: true}))

// arquivo estatico
app.use(express.static('public'))

// rota do index
app.get('/', (req, res) => {
    res.render('index')
})

// criando a rota signup
app.post('/signup', (req, res) => {
    const { username } = req.body

    if(!username) {
        res.redirect('/')
    } else {
        listaNomes.push(username)
        res.redirect('/success')
    }
})

// renderizando a rota success
app.get('/success' , (req, res) => {
    res.render('success')
})

// criando a rota com os nomes conmfirmados
app.get('/nomeConfirmados', (req, res) => {
    res.render('nomeConfirmados', { nome: listaNomes })
})



const PORT = 3000

app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}`))