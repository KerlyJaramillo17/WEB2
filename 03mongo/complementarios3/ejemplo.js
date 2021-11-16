const mongoose =  require("mongoose");
const conexion = `mongodb+srv://kerly:elizabeth@cluster0.s1fvz.mongodb.net/aplicaciones?retryWrites=true&w=majority`;

(async ()=>{
    await mongoose.connect(conexion, { useNewUrlParser:true, useUnifiedTopology:true });
    const Usuario =  mongoose.model("Usuario", { nombre:String });
    const usuario1 = new Usuario({nombre:"Kerly Jaramillo"});
    const guardo=  await usuario1.save();
    const respuesta = await Usuario.find();
    console.log(respuesta);
})();

