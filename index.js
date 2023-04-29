const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
// const Tabelas = require('./infraestrutura/tabelas')
// Tabelas.init(conexao)


const app = customExpress()

app.get('/usuario', conexao.getUsuario)
app.get('/:id/:id_one/:id_two', conexao.getValor)
app.get('/rs', conexao.getAno)
app.get('/sc', conexao.getAno)
app.get('/pr', conexao.getAno)
app.get('/usuario/:id', conexao.getUsuarioByName)
app.post('/usuario', conexao.createUsuario)
app.put('/usuario/:id', conexao.updateUsuario)
app.delete('/usuario/:id', conexao.deleteUsuario)

app.get('/', function(req,res){
        //let mes = req.query.mes;
        //let ano = req.query.ano;
        res.send('API Cálculo IEC Embrapa');
});


app.listen(3000, () => console.log('servidor rodando na porta 3000'))
            





