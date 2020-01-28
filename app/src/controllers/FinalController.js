import imperium from '../resources/imperium'

class FinalController{


    async extract(req,res){
        const data = req.body;
        const id=data.id;
        const date=data.date;
        const workspace_id=data.workspace_id;

        const deleteActions = data.actions.Delete;
        const createActions = data.actions.Create;
        const updateActions = data.actions.Update;
        const getActions = data.actions.Get;
        
        //console.log(deleteActions);
        //console.log(createActions);
        //console.log(UpdateActions);
        //console.log(GetActions);
            
        for (let x in createActions){
            let funcao='Create'+x;
            imperium[funcao](createActions[x]);   
        }
        for (let x in updateActions){
            let funcao='Update'+x;
            imperium[funcao](updateActions[x]);          
        }
        for (let x in deleteActions){
            let funcao='Delete'+x;
            imperium[funcao](deleteActions[x]);          
        }
        for (let x in getActions){
            let funcao='Create'+x;
            imperium[funcao](getActions[x]);          
        }
        res.send(`Executado rs:${id} \n
                  Data:${date} \n
                  workspace:${workspace_id}  \n
        `)

    }




}

export default new FinalController();