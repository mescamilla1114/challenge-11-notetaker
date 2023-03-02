const router = require ('express').Router();
const fs = require ('fs');
const { stringify } = require('querystring');
const { v4: uuidv4 } = require('uuid');


router.get('/notes', (req, res) =>{
    fs.readFile('db/db.json', 'utf-8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
       
      });
});

router.post('/notes', (req, res) =>
fs.readFile('db/db.json', 'utf-8', (err, data) => {
    if (err) throw err;
    let tempdata= JSON.parse(data);
    let newNote= {
        id:uuidv4(),
        title: req.body.title,
        text: req.body.text,
    }
    tempdata.push(newNote);
    fs.writeFile('db/db.json', JSON.stringify(tempdata),err => err ? console.log(err) : res.redirect('/notes')) 
  })
);

module.exports= router;