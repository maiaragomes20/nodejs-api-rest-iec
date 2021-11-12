const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

Tabelas.init(conexao)

const app = customExpress()

app.get('/usuario', conexao.getUsuario)
app.get('/pr/:id/:id_one', conexao.getEstadoPR)
app.get('/sc/:id/:id_one', conexao.getEstadoSC)
app.get('/rs/:id/:id_one', conexao.getEstadoRS)
app.get('/usuario/:id', conexao.getUsuarioById)
app.post('/usuario', conexao.createUsuario)
app.put('/usuario/:id', conexao.updateUsuario)
app.delete('/usuario/:id', conexao.deleteUsuario)

app.get('/', function(req,res){
        res.send('Oi');
});


app.listen(3000, () => console.log('servidor rodando na porta 3000'))
            






            






