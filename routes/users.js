var router = express.Router();
var focoC= require('../Controllers/Userontroller');

/* GET users listing. */
router.get('/', focoC.getAll);

router.post('/', focoC.registrar);

router.get('/:id', focoC.buscarporId);

router.put('/:id', focoC.actualizar);

router.delete('/:id', focoC.deletear);

module.exports = router;