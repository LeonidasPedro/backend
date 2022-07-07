const db = require('../config/db');

const getAllConsultorios  = async() => {
    let sql = 'select * from consultorios';
    let  consultorios = await db.query(sql);
    return consultorios.rows;
}
const getConsultoriosById = async (params) => {
    let sql = `
    select
     * 
    from consultorios
    where id = $1`;
    let consultorio = await db.query(sql, [params.id]);
    return consultorio.rows;
}
const postConsultorios = async (params) => {
    let { andar, id_especializacao } = params;
    let sql = `
        insert into consultorios(
            andar,
            id_especializacao
        ) values ($1, $2) returning id`;
    let insert = await db.query(sql, [andar, id_especializacao]);
    return insert.rows[0];
} 
const deleteConsultorios = async (params) => {
    let sql = 'delete from consultorios where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
} 
const patchConsultorios = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update consultorios set ${fields} where id = ${params.id}`;
    await db.query(sql);
}
module.exports.getAllConsultorios = getAllConsultorios;
module.exports.getConsultoriosById = getConsultoriosById;
module.exports.postConsultorios = postConsultorios;
module.exports.deleteConsultorios = deleteConsultorios;
module.exports.patchConsultorios = patchConsultorios;