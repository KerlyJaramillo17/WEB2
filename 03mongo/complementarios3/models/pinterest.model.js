const mongoose = require("mongoose");
const {Schema} =  mongoose;

const pinteSchema =  new Schema(
    {
        titulo: {type:String},
        enlace:  {type:String},
    },
    {
        timestamps: { createdAt:true, updatedAt:true }
    }
);

module.exports = mongoose.model("Pinterest", pinteSchema);