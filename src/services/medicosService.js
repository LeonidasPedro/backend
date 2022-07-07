const db = require('../config/db');

const getAllMedicos  = async() => {
    let sql = 'select * from medicos';
    let  medicos = await db.query(sql);
    return medicos.rows;
}

const getMedicosById = async (params) => {
    let sql = `select * from medicos where id = $1`;
    let medico = await db.query(sql, [params.id]);
    return medico.rows;
}
const postMedicos = async (params) => {
    let { nome, crm, id_especializacao, id_consultorio } = params;
    let sql = `
        insert into medicos (
            nome, crm, id_especializacao, id_consultorio
        ) values ($1, $2, $3, $4) returning id`;
    let insert = await db.query(sql, [nome, crm, id_especializacao, id_consultorio]);
    return insert.rows[0];
} 
const deleteMedicos = async (params) => {
    let sql = 'delete from medicos where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
} 
const patchMedicos = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update medicos set ${fields} where id = ${params.id}`;
    await db.query(sql);
}
module.exports.getAllMedicos = getAllMedicos;
module.exports.getMedicosById = getMedicosById;
module.exports.postMedicos = postMedicos;
module.exports.deleteMedicos = deleteMedicos;
module.exports.patchMedicos = patchMedicos; 