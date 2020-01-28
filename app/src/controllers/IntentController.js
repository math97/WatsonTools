import intent from '../models/Intent';

class IntentController{

    async Store(req,res){
        let response = await intent.CreateIntent(req.body,()=>{
             res.json({
                 "response":response
             })
         });

    }
     async Update(req,res){
         let response = await intent.UpdateIntent(req.body);
      res.json({
            "response":response
        });

    }
    async get(req,res){
        let response=await intent.GetIntent(req.body);
        res.json("Intente coletada pelo "+JSON.stringify(response, null, 2))
    }
    async List(req,res){
        let response=await intent.List(req.body)
        res.json({
            "response":response
        });

    }
    async Delete(req,res){
       let response=await intent.DeleteIntent(req.body);
       res.json({
            "response":response
        });

    }
}
export default new IntentController();