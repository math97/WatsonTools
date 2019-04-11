const {assistant} = require('./authentication');
const {Sust_Homol} = require('../credentials');

module.exports={

    listExamples:(intent)=>{
        const params = {
            workspace_id: Sust_Homol.workspace_id,
            intent: intent
          };
          
          assistant.listExamples(params)
            .then(res => {
              console.log(JSON.stringify(res, null, 2));
            })
            .catch(err => {
              console.log(err)
            });
    },

    createExample:(intent,text)=>{
        const params = {
            workspace_id: Sust_Homol.workspace_id,
            intent: intent,
            text: text
          };
          
          assistant.createExample(params)
            .then(res => {
              console.log(JSON.stringify(res, null, 2));
            })
            .catch(err => {
              console.log(err)
            });
    },

    updateExample:(intent,text,new_text)=>{

        const params = {
            workspace_id: Sust_Homol.workspace_id,
            intent: intent,
            text: text,
            new_text: new_text         
          };
          
          assistant.updateExample(params)
            .then(res => {
              console.log(JSON.stringify(res, null, 2));
            })
            .catch(err => {
              console.log(err)
            });
    },
    deleteExample:(intent,text)=>{
        const params = {
            workspace_id: Sust_Homol.workspace_id,
            intent: intent,
            text: text
          };
          
          assistant.deleteExample(params)
            .then(res => {
              console.log(JSON.stringify(res, null, 2));
            })
            .catch(err => {
              console.log(err)
            });
    }
}
