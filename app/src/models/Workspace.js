import assistant from './Assistant'
require('dotenv/config')

class Workspace{

    createWorkspace(workspaceParams){
          assistant.createWorkspace(workspaceParams)
            .then(res => {
              console.log(JSON.stringify(res, null, 2));
            })
            .catch(err => {
              console.log(err)
            });
    }

    updateWorkspace(workspaceParams){    
          service.updateWorkspace(workspaceParams)
            .then(res => {
              console.log(JSON.stringify(res, null, 2));
            })
            .catch(err => {
              console.log(err)
            });
    }

    listWorkspace(){
        assistant.listWorkspaces()
        .then(res => {
          console.log(JSON.stringify(res, null, 2));
        })
        .catch(err => {
          console.log(err)
        });
    }

    getWorkspaceDetails(workspaceParams){
        const params = {
            "workspaceId": workspaceParams.workspaceId,
            "_export":workspaceParams.export
        }
        assistant.getWorkspace(params)
        .then(res => {
          console.log(JSON.stringify(res.result, null, 2));
        })
        .catch(err => {
          console.log(err)
        });
      }
      

    deleteWorkspace(workspaceParams){
        service.deleteWorkspace(workspaceParams)
        .then(res => {
          console.log(JSON.stringify(res, null, 2));
        })
        .catch(err => {
          console.log(err)
        });
    }

}

export default new Workspace()