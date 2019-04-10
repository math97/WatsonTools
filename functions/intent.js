
const {assistant} = require('./authentication');
const {Sust_Homol} = require('../credentials');

if(authentication) console.log(`Logado com Sucesso `);

module.exports={
  getIntent:(intent)=>{
    const params = {
        workspace_id:Sust_Homol.workspace_id;
        intent: intent
      };
      
      assistant.getIntent(params, function(err, response) {
        if (err) {
          console.error(err);
        } else {
          console.log(JSON.stringify(response, null, 2));
        } 
      });
  },


}
//const getIntent=(intent)=>{

    

const deleteIntent=()=>{

};

const updateIntent=()=>{

};

const listIntent=()=>{

};

