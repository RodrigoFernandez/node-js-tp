const express = require('express')

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/generos', (req, res) => {
    //res.send({generos: ['Hombre', 'Mujer', 'Otro']})
    res.send(['Hombre', 'Mujer', 'Otro'])
})

app.listen(port, () => console.log("Servidor levantado"))
