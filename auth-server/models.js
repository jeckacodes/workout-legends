const {Pool} = require('pg');
const pool = new Pool({
    user: 'mattshin64',
    host: 'localhost',
    database: 'auth'
})
module.exports = {
    post: (callback, info) => {
        console.log(info.body, 'MODELS')
        pool.query(`Insert into users (username, password, firstname, lastname, age, email) values ('${info.body.username}', '${info.body.password}', '${info.body.firstname}', '${info.body.lastname}', ${info.body.age}, '${info.body.email}')`, (err, results)=> {
            if(err){
                callback(err, null)
            }
            callback(null, results)
        })
    }
}