"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CardController = require('../controllers/CardController'); var _CardController2 = _interopRequireDefault(_CardController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _deckRequired = require('../middlewares/deckRequired'); var _deckRequired2 = _interopRequireDefault(_deckRequired);

const router = new (0, _express.Router)();

router.get('/:deck_id', _loginRequired2.default, _deckRequired2.default, _CardController2.default.index);
router.get('/:id/:deck_id', _loginRequired2.default, _deckRequired2.default, _CardController2.default.show);
router.post('/:deck_id', _loginRequired2.default, _deckRequired2.default, _CardController2.default.store);
router.put('/:id/:deck_id', _loginRequired2.default, _deckRequired2.default, _CardController2.default.update);
router.delete('/:id/:deck_id', _loginRequired2.default, _deckRequired2.default, _CardController2.default.delete);

exports. default = router;
