import entity from '../models/Entity';

class EntityController{

    async Store(req,res){
       let response = await entity.CreateEntity(req.body)
       res.json({"Entidade criada":response})
    }
    async Get(req,res){
        let response = await entity.getEntity(req.body)
        res.json({"Entidade":response})
    }

    async List(req,res){
        let response = await entity.listEntity(req.body)
        res.json({"Entidades":response})
    }

    async Update(req,res){
        let response = await entity.updateEntity(req.body)
        res.json({"Entidade atualizada":response})

    }
    async Delete(req,res){
        let response = await entity.deleteEntity(req.body);
        res.json({"Entidade deletada":response})
    }



}

export default new EntityController();

