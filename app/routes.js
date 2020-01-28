import { Router, response } from 'express';
import intentController from './src/controllers/IntentController'
import dialogController from './src/controllers/DialogController'
import workspaceController from './src/controllers/WorkspaceController'
import entityController from './src/controllers/EntityController'
import final from './src/controllers/FinalController'

const routes = new Router();

//rota de interpretação geral
routes.get('/imperium',final.extract)

//rotas de ações separadas

routes.get('/intent',intentController.get);
routes.get('/intents',intentController.List);
routes.put('/intent',intentController.Update);
routes.post('/intent',intentController.Store);
routes.delete('/intent',intentController.Delete);

routes.get('/dialog',dialogController.Get);
routes.get('/dialogs',dialogController.List);
routes.put('/dialog',dialogController.Update);
routes.post('/dialog',dialogController.Store);
routes.delete('/dialog',dialogController.Delete);

routes.get('/entity',entityController.Get)
routes.put('/entity',entityController.Update);
routes.post('/entity',entityController.Store);
routes.get('/entities',entityController.List);
routes.delete('/entity',entityController.Delete);

export default routes;
