const {Router} =require ('express');
const router = Router();
const fetch = require('node-fetch');

router.get('/', async (req,res) =>{ //async await
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    const users = await response.json(); //la respuesta que se convierta en un json 
    res.json(users);

}); 


module.exports = router; 