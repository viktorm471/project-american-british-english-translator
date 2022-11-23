const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
   translate (locale,text){
    if (locale== "american-to-british"){
     // check titles
      
       for (let key in americanToBritishTitles){
       
        if (text.indexOf(key)!=-1){
          
         text= text.replace(key,'<span class="highlight">'+americanToBritishTitles[key]+"</span>")
          
        }
        
      }
      
      // check normal words
      for (let key in americanToBritishSpelling){
        const regex= new RegExp(`(?<=^|[.'"\\s])${key}(?=[.'"\\s]|$)`, 'gi') 
        if (text.match(regex)){
          
           text= text.replace(regex,'<span class="highlight">'+americanToBritishSpelling[key]+"</span>")
          
        }
      }
      // check  the americanWordsOnly
       for (let key in americanOnly){
       const regex= new RegExp(`(?<=^|[.'"\\s])${key}(?=[.'"\\s]|$)`, 'gi') 
         if (text.match(regex)){
          
          text= text.replace(regex,'<span class="highlight">'+americanOnly[key]+"</span>")
          
        }
      }
      let regex= /(\d{1,2}:\d{2})/i;
    if(text.match(regex)){
      
      let newText= text.split(" ");
      for(const key in newText){
        if(newText[key].match(regex)){
          newText[key]=newText[key].replace(":",".");
          newText[key]='<span class="highlight">'+newText[key]+"</span>";
        }
      }
      text= newText.join(" ");
    }
      
     return text
    }
  if (locale== "british-to-american"){
      // check titles
   
    for (let key in americanToBritishTitles){
        
      if (text.indexOf(americanToBritishTitles[key])!=-1){
          
         text= text.replace(americanToBritishTitles[key],'<span class="highlight">'+key+"</span>")
          
        }
      }
      
    // check the normal words
      for (let key in americanToBritishSpelling){
        const regex= new RegExp(`(?<=^|[.'"\\s])${americanToBritishSpelling[key]}(?=[.'"\\s]|$)`, 'gi') 
        if (text.match(regex)){
          
          text= text.replace(regex,'<span class="highlight">'+key+"</span>")
          
        }
      }
    // check the only british words
      for (let key in britishOnly){
        const regex= new RegExp(`(?<=^|[.'"\\s])${key}(?=[.'"\\s]|$)`, 'gi') 
        if (text.match(regex)){
          
          text= text.replace(regex,'<span class="highlight">'+britishOnly[key]+"</span>")
          
        }
      }
    // check the hour 
      let regex= /(\d{1,2}.\d{2})/i;
    if(text.match(regex)){
      
      let newText= text.split(" ");
      for(const key in newText){
        if(newText[key].match(regex)){
          newText[key]=newText[key].replace(".",":");
          newText[key]='<span class="highlight">'+newText[key]+'</span>'
        }
      }
      text= newText.join(" ");
    }
    
     return text
    }
   
   
   }


}

module.exports = Translator;