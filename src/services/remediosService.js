
const db = require('../config/db');

const getAllRemedios  = async() => {
    let sql = 'select * from remedios';
    let remedio = await db.query(sql);
    return remedio.rows;
}
const getRemediosById = async (params) => {
    let sql = `select * from remedios where id = $1`;
    let Remedios = await db.query(sql, [params.id]);
    return Remedios.rows;
}
const postRemedios = async (params) => {
    let { nome } = params;
    let sql = `
        insert into remedios (
            nome
        ) values ($1) returning id`;
    let insert = await db.query(sql, [nome]);
    return insert.rows[0];
} 
const deleteRemedios = async (params) => {
    let sql = 'delete from remedios where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
} 
const patchRemedios = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update remedios set ${fields} where id = ${params.id}`;
    await db.query(sql);
}
module.exports.getAllRemedios = getAllRemedios;
module.exports.getRemediosById = getRemediosById;
module.exports.postRemedios = postRemedios;
module.exports.deleteRemedios = deleteRemedios;
module.exports.patchRemedios = patchRemedios;