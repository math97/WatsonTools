import assistant from './Assistant'

class Intent{
  constructor(intentData={}){

  }

    ListIntent(intentData){
      return new Promise((resolve,reject)=>{
          assistant.listIntents(intentData)
            .then(res => {
              console.log(JSON.stringify(res, null, 2));
              resolve(res)
            })
            .catch(err => {
              console.log(err)
              reject(err)
            });

      })
    }

    CreateIntent(intentData){
      return new Promise((resolve,reject)=>{
        intentData.forEach(element => {
          assistant.createIntent(element)
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
    UpdateIntent(intentData){
      return new Promise((resolve,reject)=>{
        intentData.forEach(element=>{
          assistant.updateIntent(element)
            .then(res => {
              console.log(JSON.stringify(res, null, 2));
              resolve(res)
            })
            .catch(err => {
              console.log(err)
              reject(err)
            });
        })
           

      })
    }
    GetIntent(intentData){
      return new Promise((resolve,reject)=>{
        intentData.forEach(element=>{
           assistant.getIntent(element, function(err, response) {
              if (err) {
                console.error(err);
                resolve(err)
              } else {
                console.log(JSON.stringify(response, null, 2));
                resolve(response)
              }                  
          });
        })
        })
        }
    DeleteIntent(intentData){
      return new Promise((resolve,reject)=>{
        intentData.forEach(element=>{
          assistant.deleteIntent(element)
            .then(res => {
              console.log(JSON.stringify(res, null, 2));
              resolve(res)
            })
            .catch(err => {
              console.log(err)
              reject(err)
            });
        })
      })
    }
}
export default new Intent();