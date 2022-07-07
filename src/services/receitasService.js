const db = require('../config/db');

const getAllReceita  = async() => {
    let sql = 'select * from receita';
    let  receita = await db.query(sql);
    return receita.rows;
}

const getReceitaById = async (params) => {
    let sql = `select * from receita where id = $1`;
    let receita = await db.query(sql, [params.id]);
    return receita.rows;
}
const postReceita = async (params) => {
    let { id_consulta } = params;
    let sql = `
        insert into receita (
            id_consulta
        ) values ($1) returning id`;
    let insert = await db.query(sql, [id_consulta]);
    return insert.rows[0];
} 
const deleteReceita = async (params) => {
    let sql = 'delete from receita where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
} 
const patchReceita = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update receita set ${fields} where id = ${params.id}`;
    await db.query(sql);
}
module.exports.getAllReceita = getAllReceita;
module.exports.getReceitaById = getReceitaById;
module.exports.postReceita = postReceita;
module.exports.deleteReceita = deleteReceita;
module.exports.patchReceita = patchReceita; 