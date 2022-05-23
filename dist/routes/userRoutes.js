"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// não usaremos no sistema real
// router.get('/:id', userController.show);
// router.get('/', loginRequired, userController.index);

// usaremos
router.post('/', _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/*
index -> lista todos -> GET
store/create -> insert novo registro ou documento -> POST
delete -> deleta um registro ou documento -> DELETE
update -> atualize o registro ou documento -> GET
show -> mostra um registro ou documento -> PUT ou PATCH (patch pega todo o objeto e substitui)
*/
