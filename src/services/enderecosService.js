const db = require('../config/db');

const getAllEnderecos  = async() => {
    let sql = 'select * from enderecos';
    let  enderecos = await db.query(sql);
    return enderecos.rows;
}

const getEnderecosById = async (params) => {
    let sql = `select * from enderecos where id = $1`;
    let endereco = await db.query(sql, [params.id]);
    return endereco.rows;
}
const postEnderecos = async (params) => {
    let { endereco, numero, cep, cidade, uf, pais } = params;
    let sql = `
        insert into enderecos (
            endereco, 
            numero, 
            cep, 
            cidade, 
            uf, 
            pais
        ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning id`;
    let insert = await db.query(sql, [endereco, numero, cep, cidade, uf, pais]);
    return insert.rows[0];
} 
const deleteEnderecos = async (params) => {
    let sql = 'delete from enderecos where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
} 
const patchEnderecos = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update enderecos set ${fields} where id = ${params.id}`;
    await db.query(sql);
}
module.exports.getAllEnderecos = getAllEnderecos;
module.exports.getEnderecosById = getEnderecosById;
module.exports.postEnderecos = postEnderecos;
module.exports.deleteEnderecos = deleteEnderecos;
module.exports.patchEnderecos = patchEnderecos;