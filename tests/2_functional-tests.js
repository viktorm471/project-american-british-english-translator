const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
test("#1 Translate with text and locale",function(done){
 let input = {text:"Mangoes are my favorite fruit.", locale:"american-to-british"}
  chai
  .request(server)
  .post("/api/translate")
  .send(input)
  .end((err,res)=>{
    
     assert.equal(res.status,200);
    assert.equal(res.body.translation,'Mangoes are my <span class="highlight">favourite</span> fruit.');
    done();
  })
})

  test("#2 Translate with invalid locale",function(done){
 let input = {text:"Mangoes are my favorite fruit.", locale:"american"}
  chai
  .request(server)
  .post("/api/translate")
  .send(input)
  .end((err,res)=>{
    
     assert.equal(res.status,200);
     assert.equal(res.body.error,'Invalid value for locale field');
    done();
  })
})

  test("#3 Translate without text",function(done){
 let input = { locale:"american-to-british"}
  chai
  .request(server)
  .post("/api/translate")
  .send(input)
  .end((err,res)=>{
    
     assert.equal(res.status,200);
     assert.equal(res.body.error,'Required field(s) missing');
    done();
  })
})

    test("#4 Translate without locale",function(done){
 let input = { text:"here a text"}
  chai
  .request(server)
  .post("/api/translate")
  .send(input)
  .end((err,res)=>{
    
     assert.equal(res.status,200);
     assert.equal(res.body.error,'Required field(s) missing');
    done();
  })
})

  test("#5 Translate with empty text",function(done){
 let input = { text:"", locale:""}
  chai
  .request(server)
  .post("/api/translate")
  .send(input)
  .end((err,res)=>{
    
     assert.equal(res.status,200);
     assert.equal(res.body.error,'No text to translate');
    done();
  })
})

  test("#6 Text that dont need translation",function(done){
 let input = { text:"i don't need translate", locale:"american-to-british"}
  chai
  .request(server)
  .post("/api/translate")
  .send(input)
  .end((err,res)=>{
    
     assert.equal(res.status,200);
     assert.equal(res.body.translation,'Everything looks good to me!');
    done();
  })
})
});
