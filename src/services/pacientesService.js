const db = require('../config/db');

const getAllPacientes  = async() => {
    let sql = 'select * from pacientes';
    let  pacientes = await db.query(sql);
    return pacientes.rows;
}

const getPacientesById = async (params) => {
    let sql = `select * from pacientes where id = $1`;
    let paciente = await db.query(sql, [params.id]);
    return paciente.rows;
}
const postPaciente = async (params) => {
    let { cpf, rg, nome, sexo,data_nascimento, tipo_sanguineo,doador_orgaos,email,telefone,id_endereco } = params;
    let sql = `
        insert into pacientes (
            cpf, 
            rg, 
            nome, 
            sexo,
            data_nascimento, 
            tipo_sanguineo,
            doador_orgaos,
            email,
            telefone,
            id_endereco
        ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning id`;
    let insert = await db.query(sql, [cpf, rg, nome, sexo,data_nascimento, tipo_sanguineo,doador_orgaos,email,telefone,id_endereco]);
    return insert.rows[0];
} 
const deletePaciente = async (params) => {
    let sql = 'delete from pacientes where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
} 
const patchPaciente = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update Pacientes set ${fields} where id = ${params.id}`;
    await db.query(sql);
}
module.exports.getAllPacientes = getAllPacientes;
module.exports.getPacientesById = getPacientesById;
module.exports.postPaciente = postPaciente;
module.exports.deletePaciente = deletePaciente;
module.exports.patchPaciente = patchPaciente;