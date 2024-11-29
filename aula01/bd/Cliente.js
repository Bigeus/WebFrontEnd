async function connect() {
    const mysql = require('mysql2/promise');

    if(global.connection && global.connection.state !== 'disconnected'){
        return global.connection;
    } 

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'usbw',
        database: 'vendased',
        port: 3308
    })
    console.log('Conexão criada com sucesso');
    global.connection = connection;
    return connection;
}


async function getClientes(req, res){
    const conn = await connect();

    const rows = await conn.query('SELECT * FROM cliente');
    res.send(rows[0]);
}


async function getOneCliente(req, res){
    const conn = await connect();
    
    const {id} = req.params;
    
    const rows = await conn.query('SELECT * FROM cliente WHERE id = ?', [id]);
    res.send(rows[0]);
}

async function atualizarCliente(req, res){
    const conn = await connect();
    let id = req.params.id;
    const {nome, rg, cpf, email, telefone, } = req.body;
}

async function excluirCliente(req, res){
    conn = await connect();
    let id = req.params.id;
    const result = await conn.query('delete from cliente where id = ?', [id]);
    res.send(result);
}
module.exports = {
    getClientes,
    getOneCliente
}