
var mongoose= require('mongoose');
var Schema = mongoose.Schema;

const focoSchema= new Schema({
    marca: {
        type:String,
        unique: true,
        required: true,

    },
    tipo:{
        type:String
    },
    consumo:{
        type: String
    },
eficiencia:{
type: String}

})
module.exports= mongoose.model('users',focoSchema);