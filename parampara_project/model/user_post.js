const db = require('../connection/database');

const users_post_data = () =>{
    return db.select('*').from('user_post');
}

const post_data = (userData) =>{
    return db('user_post').insert(userData);
}


const updateData = (id , data)=>{
    return db.table('user_post').where('userId', id).update(data);
}


const deleteData = (id)=>{
    return db.table('user_post').where('userId',id).delete();
}
module.exports = {users_post_data, post_data, updateData, deleteData}