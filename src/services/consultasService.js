const db = require('../config/db');

const getAllConsultas  = async() => {
    let sql = 'select * from consultas';
    let  consultas = await db.query(sql);
    return consultas.rows;
}

const getConsultasById = async (params) => {
    let sql = `
    select
     * 
    from consultas
    where id = $1`;
    let consulta = await db.query(sql, [params.id]);
    return consulta.rows;
}
const postConsultas = async (params) => {
    let { data_consulta, id_medico, id_paciente } = params;
    let sql = `
        insert into consultas (
            data_consulta,
            id_medico,
            id_paciente
        ) values ($1, $2, $3) returning id`;
    let insert = await db.query(sql, [data_consulta, id_medico, id_paciente]);
    return insert.rows[0];
} 
const deleteConsultas = async (params) => {
    let sql = 'delete from consultas where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
} 
const patchConsultas = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update consultas set ${fields} where id = ${params.id}`;
    await db.query(sql);
}
module.exports.getAllConsultas = getAllConsultas;
module.exports.getConsultasById = getConsultasById;
module.exports.postConsultas = postConsultas;
module.exports.deleteConsultas = deleteConsultas;
module.exports.patchConsultas = patchConsultas;