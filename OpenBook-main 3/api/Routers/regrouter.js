const router=require('express').Router();

const regc=require('../Controllers/regcontroller');

router.post('/register',regc.register)
router.post('/login',regc.login)

module.exports=router;