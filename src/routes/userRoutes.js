import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// não usaremos no sistema real
// router.get('/:id', userController.show);
// router.get('/', loginRequired, userController.index);

// usaremos
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos -> GET
store/create -> insert novo registro ou documento -> POST
delete -> deleta um registro ou documento -> DELETE
update -> atualize o registro ou documento -> GET
show -> mostra um registro ou documento -> PUT ou PATCH (patch pega todo o objeto e substitui)
*/
