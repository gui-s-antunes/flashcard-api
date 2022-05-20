import { Router } from 'express';

import deckController from '../controllers/DeckController';

import loginRequired from '../middlewares/loginRequired';
import deckRequired from '../middlewares/deckRequired';

const router = Router();

router.get('/', loginRequired, deckController.index);
router.get('/:deck_id', loginRequired, deckRequired, deckController.show);
router.post('/', loginRequired, deckController.store);
router.put('/:deck_id', loginRequired, deckRequired, deckController.update);
router.delete('/:deck_id', loginRequired, deckRequired, deckController.delete);

export default router;
