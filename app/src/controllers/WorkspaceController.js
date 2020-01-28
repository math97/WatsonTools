import workspace from '../models/Workspace';

class WorskpaceController{

    Get(){

    }
    List(req,res){
        workspace.listWorkspace()
    }



}
export default  new WorskpaceController()