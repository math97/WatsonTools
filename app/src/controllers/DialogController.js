import dialog from '../models/Dialog';
import Intent from '../models/Intent';

class DialogController{

    async Store(req,res){
        let response = await dialog.CreateDialog(req.body)
        res.json({"Dialogo criado":response})
    } 
    async Update(req,res){
        let response = await dialog.UpdateDialog(req.body);
        res.json({"Dialogo atualizado":response})
    }
    async Get(req,res){
        let response = await dialog.GetDialog(req.body);
        res.json("dialog"+JSON.stringify(response))
    }
    async List(req,res){
       let response = await  dialog.ListDialog(req.body);
       res.json({"lista de dialogos \n":response})
    }
    async Delete(req,res){
        let response = await dialog.DeleteDialog(req.body);
        res.json({"Dialogo excluido":response})

    }
}
export default new DialogController();