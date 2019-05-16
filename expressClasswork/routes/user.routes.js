const express = require('express')
let users = require('../Users.js')
console.log(users)
const router = express.Router();


router.get('/:id', (req, res) => {
    let userId = req.params.id;
    
    let posts = users.filter(user => user.userId = userId);
    res.json(posts);
})

module.exports = router;