import assistant from './Assistant'

class Dialog{
    constructor(dialogData={}){
        
    }

    ListDialog(dialogData){
      return new Promise((resolve,reject)=>{
        assistant.listDialogNodes(dialogData)
        .then(res =>{
            console.log(JSON.stringify(res, null, 2));
            resolve(res)
        })
        .catch(err => {
            console.log(err);
            reject(err)
          });

      })
    }

    CreateDialog(dialogData){
      return new Promise((resolve,reject)=>{
        dialogData.forEach(element => {
          assistant.createDialogNode(element)
            .then(res => {
              console.log(JSON.stringify(res, null, 2));
              resolve(res)
            })
            .catch(err => {
              console.log(err)
              reject(err)
            });          
        });
        
      })
          
    }

    UpdateDialog(dialogData){
      return new Promise((resolve,reject)=>{
        dialogData.forEach(element => {
          assistant.updateDialogNode(element)
            .then(res => {
              console.log(JSON.stringify(res, null, 2));
              resolve(res)
            })
            .catch(err => {
              console.log(err);
              reject(err)
            });          
        });

      })

    }

    GetDialog(dialogData){
      return new Promise((resolve,reject)=>{
        dialogData.forEach(element => {
          assistant.getDialogNode(element)
            .then(res => {
              console.log(JSON.stringify(res, null, 2));
              resolve(res)
            })
            .catch(err => {
              console.log(err)
              reject(err)
            });          
        });
      })         
    }

    DeleteDialog(dialogData){
      return new Promise((resolve,reject)=>{
        dialogData.forEach(element=>{
          assistant.deleteDialogNode(element)
            .then(res => {
              console.log(JSON.stringify(res, null, 2));
              resolve(res)
            })
            .catch(err => {
              console.log(err);
              reject(err)
            });
        })
      })
    }

}

export default new Dialog()