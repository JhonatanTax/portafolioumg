const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    Numero_expediente: String,
    nombre_juicio: String,
    Cliente: String,
    Abogado: String,
    status:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Expedientes',TaskSchema);