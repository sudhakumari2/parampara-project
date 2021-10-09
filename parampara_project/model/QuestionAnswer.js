const db = require('../connection/database');

const users_data = ()=>{
    return db.select('*').from('Question-answers')
}

const post_data = (userData) =>{
    return db('Question-answers').insert(userData);
}

const updateData = (id , data)=>{
    return db.table('Question-answers').where('questionId', id).update(data);
}

const deleteData = (id)=>{
    return db.table('Question-answers').where('questionId',id).delete();
}

module.exports = {users_data, post_data, updateData, deleteData}