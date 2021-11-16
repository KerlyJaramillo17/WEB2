const axios    = require('axios').default;
const cheerio  = require('cheerio');
const mongoose = require('mongoose');
const cron     = require('node-cron');

const { MONGO_URI } =  require('./config');
const {Pinterest } = require('./models');


    cron.schedule('* * * * *',async ()=>{
        try
        {
            const resconexion =  await mongoose.connect(MONGO_URI)
            const html=  await axios.get("https://www.pinterest.es/");
            const $ = cheerio.load(html.data)
            const titulos =  $(".headline__title");
            let arregloPinterest=[];
            titulos.each(async (index, element)=>{
                const pinte = {
                    titulo:$(element).text().toString() ,
                    enlace: $(element).children().attr("href") 
                }
                //await Pinterest.create(Noticia);
                arregloPinterest= [...arregloPinterest, Noticia];
            })
            //console.log(arregloPinterest)
                Pinterest.create(arregloPinterest);
        }
        catch(err){
            console.log(err)
        }
    }); 