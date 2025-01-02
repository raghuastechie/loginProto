const knex = require('../configs/knex');

const getAllUsers = () => {
    return new Promise(async(resolve, reject) => {
        try{
            let result = await knex('userslist').select('*').where('id', 1001);
            result ? resolve(result) : reject({msg: 'not fetched'})
            
        }catch(err){
            reject(err);
        }
    })
}

module.exports = {getAllUsers}