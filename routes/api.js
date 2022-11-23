'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
     
      const {text,locale}=req.body;
        
      
      if(text==""){
        return  res.json({error: 'No text to translate'});
      }
      if(!locale || !text){
        return  res.json({error: 'Required field(s) missing'})
      }
      
      const localeArr=["american-to-british", "british-to-american"];
      if(localeArr.indexOf(locale)==-1){
       return  res.json({error: 'Invalid value for locale field'});
      }
      
      let finalText= translator.translate(locale,text);
      if(finalText==text){
        finalText= "Everything looks good to me!";
      }
      
     
      
      res.json({text, translation:finalText})
    });
};
