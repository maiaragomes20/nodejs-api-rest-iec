const Pool = require('pg').Pool
const pool = new Pool({
    user: 'iec',
    host: 'localhost',
    database: 'iec_database',
    password: 'iec',
    port: 5432,
})
const getValor = (request, response) => {
    const mes = parseInt(request.params.id)
    const ano = parseInt(request.params.id_one)
    const uf = (request.params.id_two)
    pool.query('SELECT cotacao FROM precos_boigordo WHERE mes = $1 AND ano = $2 AND uf = $3', [mes, ano, uf], (error, results) => {
         if(error){
            throw error
                }
    response.status(200).json(results.rows)
    })
}


const getAno = (request, response) => {
    pool.query('SELECT DISTINCT ano FROM precos_boigordo ORDER BY ano DESC', (error, results) => {
         if(error){
            throw error
                }
    response.status(200).json(results.rows)
    })
}

/*const getEstadoSC = (request, response) => {
    pool.query('SELECT DISTINCT ano FROM precos_boigordo ORDER BY ano DESC', (error, results) => {
         if(error){
            throw error
                }
    response.status(200).json(results.rows)
    })
}

const getEstadoPR = (request, response) => {
    pool.query('SELECT DISTINCT ano FROM precos_boigordo ORDER BY ano DESC', (error, results) => {
         if(error){
            throw error
                }
    response.status(200).json(results.rows)
    })
}*/
const getUsuario = (request, response) => {
    pool.query('SELECT * FROM usuario ORDER BY id_usuario ASC', (error, results) => {
        if(error){
            throw error
            }
    response.status(200).json(results.rows)
    })
}

const getUsuarioByName = (request, response) => {
    const nome = (request.params.id)

    pool.query('SELECT * FROM usuario WHERE nome = $1', [nome], (error, results) => {
        if(error){
            throw error
            }
    response.status(200).json(results.rows)
    })
}

const createUsuario = (request, response) => {
    const { nome, email, senha } = request.body

    pool.query('INSERT INTO usuario (nome, email, senha) VALUES ($1, $2, $3)', [nome, email, senha], (error, results) => {
        if(error){
            throw error
            }
    response.status(201).send('User added with ID: ')
    })
}
const updateUsuario = (request, response) => {
    const id_usuario = parseInt(request.params.id)
    const { nome, email } = request.body

    pool.query(
    'UPDATE usuario SET name = $1, email = $2 WHERE id_usuario = $3',
    [nome, email, id_usuario],
    (error, results) => {
        if(error){
            throw error
            }
    response.status(200).send('User modified with ID: ${id}')
    }
 )
}
const deleteUsuario = (request, response) => {
    const id_usuario = parseInt(request.params.id)

    pool.query('DELETE FROM usuario WHERE id_usuario = $1', [id], (error, results) => {
        if(error){
            throw error
            }
        response.status(200).send('User deleted with ID: ${id}')
    })
}
module.exports = {
    getValor,
    getAno,
    getUsuario,
    getUsuarioByName,
    createUsuario,
    updateUsuario,
    deleteUsuario,
}
