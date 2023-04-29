module.exports = app => {

app.get('/loginprodutor', (req, res) => res.send('Você está na rota do login do produtor e está realizando um GET'))

app.post('/loginprodutor', (req, res) => {

console.log(req.body)

 res.send('Você está na rota do login do produtor e está realizando um POST')

})

}

