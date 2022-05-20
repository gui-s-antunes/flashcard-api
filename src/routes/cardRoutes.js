import { Router } from 'express';
import cardController from '../controllers/CardController';

import loginRequired from '../middlewares/loginRequired';
import deckRequired from '../middlewares/deckRequired';

const router = new Router();

router.get('/:deck_id', loginRequired, deckRequired, cardController.index);
router.get('/:id/:deck_id', loginRequired, deckRequired, cardController.show);
router.post('/:deck_id', loginRequired, deckRequired, cardController.store);
router.put('/:id/:deck_id', loginRequired, deckRequired, cardController.update);
router.delete('/:id/:deck_id', loginRequired, deckRequired, cardController.delete);

export default router;
