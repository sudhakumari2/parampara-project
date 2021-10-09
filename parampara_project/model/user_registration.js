const db = require('../connection/database')

const users_data = () =>{
    return db.select('*').from('user_registration');
}

const signUp = (userData) =>{
    return db('user_registration').insert(userData);
}

const updateData = (id , data)=>{
    return db.table('user_registration').where('userID', id).update(data);
}

const deleteData = (id)=>{
    return db.table('user_registration').where('userID',id).delete();
}
module.exports = {users_data, signUp, updateData, deleteData};