"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _DeckController = require('../controllers/DeckController'); var _DeckController2 = _interopRequireDefault(_DeckController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _deckRequired = require('../middlewares/deckRequired'); var _deckRequired2 = _interopRequireDefault(_deckRequired);

const router = _express.Router.call(void 0, );

router.get('/', _loginRequired2.default, _DeckController2.default.index);
router.get('/:deck_id', _loginRequired2.default, _deckRequired2.default, _DeckController2.default.show);
router.post('/', _loginRequired2.default, _DeckController2.default.store);
router.put('/:deck_id', _loginRequired2.default, _deckRequired2.default, _DeckController2.default.update);
router.delete('/:deck_id', _loginRequired2.default, _deckRequired2.default, _DeckController2.default.delete);

exports. default = router;
