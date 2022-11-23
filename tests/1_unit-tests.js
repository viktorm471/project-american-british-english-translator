const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator;
suite('Unit Tests', () => {
  // american to british
  test('Translate #1', function () {
      let input= "Mangoes are my favorite fruit.";
      
      assert.equal(translator.translate("american-to-british",input),'Mangoes are my <span class="highlight">favourite</span> fruit.');
       })

  test('Translate #2', function () {
      let input= "I ate yogurt for breakfast.";
      
      assert.equal(translator.translate("american-to-british",input),'I ate <span class="highlight">yoghurt</span> for breakfast.');
       })

  test('Translate #3', function () {
      let input= "We had a party at my friend's condo.";
      
      assert.equal(translator.translate("american-to-british",input),`We had a party at my friend's <span class="highlight">flat</span>.`);
       })

  test('Translate #4', function () {
      let input= "Can you toss this in the trashcan for me?";
      
      assert.equal(translator.translate("american-to-british",input),'Can you toss this in the <span class="highlight">bin</span> for me?');
       })

  test('Translate #5', function () {
      let input= "The parking lot was full.";
      
      assert.equal(translator.translate("american-to-british",input),'The <span class="highlight">car park</span> was full.');
       })

  test('Translate #6', function () {
      let input= "Like a high tech Rube Goldberg machine.";
      
      assert.equal(translator.translate("american-to-british",input),'Like a high tech <span class="highlight">Heath Robinson device</span>.');
       })

  test('Translate #7', function () {
      let input= "To play hooky means to skip class or work.";
      
      assert.equal(translator.translate("american-to-british",input),'To <span class="highlight">bunk off</span> means to skip class or work.');
       })

  test('Translate #8', function () {
      let input= "No Mr. Bond, I expect you to die.";
      
      assert.equal(translator.translate("american-to-british",input),'No <span class="highlight">Mr</span> Bond, I expect you to die.');
       })




  test('Translate #9', function () {
      let input= "Dr. Grosh will see you now.";
      
      assert.equal(translator.translate("american-to-british",input),'<span class="highlight">Dr</span> Grosh will see you now.');
       })

  test('Translate #10', function () {
      let input= "Lunch is at 12:15 today.";
      
      assert.equal(translator.translate("american-to-british",input),'Lunch is at <span class="highlight">12.15</span> today.');
       })
  // British to american
  test('Translate #11', function () {
      let input= "We watched the footie match for a while.";
      
      assert.equal(translator.translate("british-to-american",input),'We watched the <span class="highlight">soccer</span> match for a while.');
       })

  test('Translate #12', function () {
      let input= "Paracetamol takes up to an hour to work.";
      
      assert.equal(translator.translate("british-to-american",input),'<span class="highlight">Tylenol</span> takes up to an hour to work.');
       })

  test('Translate #13', function () {
      let input= "First, caramelise the onions.";
      
      assert.equal(translator.translate("british-to-american",input),'First, <span class="highlight">caramelize</span> the onions.');
       })

  test('Translate #14', function () {
      let input= "I spent the bank holiday at the funfair.";
      
      assert.equal(translator.translate("british-to-american",input),'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
       })

  test('Translate #15', function () {
      let input= "I had a bicky then went to the chippy.";
      
      assert.equal(translator.translate("british-to-american",input),'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
       })

  test('Translate #16', function () {
      let input= "I've just got bits and bobs in my bum bag.";
      
      assert.equal(translator.translate("british-to-american",input),`I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`);
       })

  test('Translate #17', function () {
      let input= "The car boot sale at Boxted Airfield was called off.";
      
      assert.equal(translator.translate("british-to-american",input),'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
       })

  test('Translate #18', function () {
      let input= "Have you met Mrs Kalyani?";
      
      assert.equal(translator.translate("british-to-american",input),'Have you met <span class="highlight">Mr.</span>s Kalyani?');
       })

  test('Translate #19', function () {
      let input= "Prof Joyner of King's College, London.";
      
      assert.equal(translator.translate("british-to-american",input),`<span class="highlight">Prof.</span> Joyner of King's College, London.`);
       })

  test('Translate #20', function () {
      let input= "Tea time is usually around 4 or 4.30.";
      
      assert.equal(translator.translate("british-to-american",input),'Tea time is usually around 4 or <span class="highlight">4:30.</span>');
       })

  test('Translate #21 check highlight', function () {
      let input= "Mangoes are my favorite fruit.";
      
      assert.include(translator.translate("american-to-british",input),'highlight');
       })

  test('Translate #22', function () {
      let input= "I ate yogurt for breakfast.";
      
      assert.include(translator.translate("american-to-british",input),'highlight');
       })

  test('Translate #23', function () {
      let input= "We watched the footie match for a while.";
      
      assert.include(translator.translate("british-to-american",input),'highlight');
       })

  test('Translate #24', function () {
      let input= "Paracetamol takes up to an hour to work.";
      
      assert.include(translator.translate("british-to-american",input),'highlight');
       })
});
