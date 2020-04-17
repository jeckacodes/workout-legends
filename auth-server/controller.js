const Model =  require('./models.js');

module.exports = {
    post: (req, res) => {
        Model.post((error, data) => {
            if(error){
                res.status(400).send(error)
            }
            else{
                res.status(200).send(data)
            }
        }, req)
    }
}