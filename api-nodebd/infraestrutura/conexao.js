const Pool = require('pg').Pool
const pool = new Pool({
    user: 'iec',
    host: 'localhost',
    database: 'iec_database',
    password: 'iec',
    port: 5432,
})
const getEstadoRS = (request, response) => {
    const mes = parseInt(request.params.id)
    const ano = parseInt(request.params.id_one)
    pool.query('SELECT rio_grande_do_sul, mes, ano FROM precos_boigordo WHERE mes = $1 AND ano = $2', [mes, ano], (error, results) => {
         if(error){
            throw error
                }
    response.status(200).json(results.rows)
    })
}

const getEstadoSC = (request, response) => {
     const mes = parseInt(request.params.id)
    const ano = parseInt(request.params.id_one)
    pool.query('SELECT santa_catarina, mes, ano FROM precos_boigordo WHERE mes = $1 AND ano = $2', [mes,ano], (error, results) => {
        if(error){
            throw error
                }
    response.status(200).json(results.rows)
    })
}
const getEstadoPR = (request, response) => {
     const mes = parseInt(request.params.id)
    const ano = parseInt(request.params.id_one)
    pool.query('SELECT parana, mes, ano FROM precos_boigordo WHERE mes = $1 AND ano = $2', [mes, ano], (error, results) => {
        if(error){
            throw error
                }
    response.status(200).json(results.rows)
    })
}
const getUsuario = (request, response) => {
    pool.query('SELECT * FROM usuario ORDER BY id_usuario ASC', (error, results) => {
        if(error){
            throw error
            }
    response.status(200).json(results.rows)
    })
}

const getUsuarioById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM usuario WHERE id_usuario = $1', [id], (error, results) => {
        if(error){
            throw error
            }
    response.status(200).json(results.rows)
    })
}

const createUsuario = (request, response) => {
    const { nome, email } = request.body

    pool.query('INSERT INTO usuario (nome, email) VALUES ($1, $2)', [nome, email], (error, results) => {
        if(error){
            throw error
            }
    response.status(201).send('User added with ID: ${result.insertId}')
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
    getEstadoPR,
    getEstadoRS,
    getEstadoSC,
    getUsuario,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
}
