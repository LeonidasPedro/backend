const db = require('../config/db');

const getAllReceitaRemedios  = async() => {
    let sql = 'select * from receita_remedios';
    let  receitaRemedios = await db.query(sql);
    return receitaRemedios.rows;
}

const getReceitaRemediosById = async (params) => {
    let sql = `select * from receita_remedios where id = $1`;
    let receitaRemedios = await db.query(sql, [params.id]);
    return receitaRemedios.rows;
}
const postReceitaRemedios = async (params) => {
    let { id_receita, id_remedios } = params;
    let sql = `
        insert into receita_remedios (
            id_receita, id_remedios
        ) values ($1, $2) returning id`;
    let insert = await db.query(sql, [id_receita, id_remedios]);
    return insert.rows[0];
} 
const deleteReceitaRemedios = async (params) => {
    let sql = 'delete from receita_remedios where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
} 
const patchReceitaRemedios = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update receita_remedios set ${fields} where id = ${params.id}`;
    await db.query(sql);
}
module.exports.getAllReceitaRemedios = getAllReceitaRemedios;
module.exports.getReceitaRemediosById = getReceitaRemediosById;
module.exports.postReceitaRemedios = postReceitaRemedios;
module.exports.deleteReceitaRemedios = deleteReceitaRemedios;
module.exports.patchReceitaRemedios = patchReceitaRemedios; 