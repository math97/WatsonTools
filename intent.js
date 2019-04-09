const autentication = require('./autentication');
const credentials = require('./credentials');


const getIntent=(intent)=>{

    const params = {
        workspace_id: credentials.Sust_Homol.workspace_id,
        intent: intent
      };
      
      service.getIntent(params, function(err, response) {
        if (err) {
          console.error(err);
        } else {
          console.log(JSON.stringify(response, null, 2));
        } 
      });

};

const deleteIntent=()=>{

};

const updateIntent=()=>{

};

const listIntent=()=>{

    
};
