import mongoose = require("mongoose");

const IndividuoSchema = new mongoose.Schema({
    txt_nombre: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 40,
        trim: true
    },
    tip_individuo: {
        type: String,
        ref: 'Tipo',
        required: true,
        trim: true
    },
    flg_activo: {
        type: Number,
        required: true,
        default: 1
    }
},
{
    timestamps: true,
    collection: "individuo"
});

module.exports = mongoose.model("Individuo", IndividuoSchema);