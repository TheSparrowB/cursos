import mongoose = require("mongoose");

const TipoSchema = new mongoose.Schema({
    txt_tipo: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 40,
        trim: true,
        unique: true
    },
    txt_grupo: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 40,
        trim: true
    },
    flg_activo: {
        type: Number,
        required: true,
        default: 1
    },
},
{
    timestamps: true,
    collection: "tipo"
});

module.exports = mongoose.model("Tipo", TipoSchema);