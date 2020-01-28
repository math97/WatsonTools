import assistant from './Assistant'

class Entity{
    constructor(entityData={}){

    }

    listEntity(entityData){
      return new Promise((resolve,reject)=>{
        assistant.listEntities(entityData)
        .then(res => {
          console.log(JSON.stringify(res, null, 2));
          resolve(res)
        })
        .catch(err => {
          console.log(err);
          reject(err)
        });

      })

    }

    CreateEntity(entityData){     
      return new Promise((resolve,reject)=>{
        entityData.forEach(element => {
          assistant.createEntity(element)
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

    GetEntity(entityData){
      return new Promise((resolve,reject)=>{
        entityData.forEach(element => {
          assistant.getEntity(element)
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

    UpdateEntity(entityData){   
      return new Promise((resolve,reject)=>{
        entityData.forEach(element => {
          assistant.updateEntity(element)
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

    DeleteEntity(entityData){
      return new Promise((resolve,reject)=>{
        entityData.forEach(element => {
          assistant.deleteEntity(element)
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


}

export default new Entity();