const db = require('../config/db');

const getAllEspecializacoes  = async() => {
    let sql = 'select * from especializacoes';
    let  especializacoes = await db.query(sql);
    return especializacoes.rows;
}

const getEspecializacoesById = async (params) => {
    let sql = `select * from especializacoes where id = $1`;
    let especializacao= await db.query(sql, [params.id]);
    return especializacao.rows;
}
const postEspecializacao = async (params) => {
    let {nome} = params;
    let sql = `
        insert into especializacoes(
           nome
        )values ($1) returning id`;
    let insert = await db.query(sql, [nome]);
    return insert.rows[0];
} 
const deleteEspecializacao = async (params) => {
    let sql = 'delete from especializacoes where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
} 
const patchEspecializacao = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update especializacoes set ${fields} where id = ${params.id}`;
    await db.query(sql);
}
module.exports.getAllEspecializacoes = getAllEspecializacoes;
module.exports.getEspecializacoesById = getEspecializacoesById;
module.exports.postEspecializacao = postEspecializacao;
module.exports.deleteEspecializacao = deleteEspecializacao;
module.exports.patchEspecializacao = patchEspecializacao; 