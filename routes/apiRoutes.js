const store= require('../db/store');
const router = require('express').Router();



router.delete('/notes/', (req,res)=>{
    store
    .removeNote(req.params.id)
    .then (()=>res.json({ok: true}))
    .catch ((err)=>res.status(500).json(err));
});//Beleve someting is wrong with the delete route//

router.get('/notes', (req,res)=>{
    store
    .getNotes()
    .then((notes)=>{
        return res.json(notes);
    })
    .catch((err)=>res.status(500).json(err));
    
});


router.post('/notes', (req,res)=>{
    store.addNote(req.body)
    .then((note) => res.json(note))
    .catch((err)=>res.status(500).json(err));
});












