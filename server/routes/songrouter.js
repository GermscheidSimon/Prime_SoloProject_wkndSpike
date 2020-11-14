const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload')



router.post('/upload', fileUpload({ safeFileNames: true }), (req, res) => {
       console.log(req.files.file);
       let filetype;
       if (req.files.file.mimetype === 'audio/mpeg') {
            filetype = 'mp3'
       } else if (req.files.file.mimetype === 'audio/flac') {
            filetype = 'flac'
       } else {
           console.log(filetype);
           res.sendStatus(500)
       }
       req.files.file.mv(`server/uploadDestination/${req.files.file.name}.${filetype}`, (err) => {
        if (err) {
        console.log(err);    
        res.sendStatus(500)
        }
    })
})

router.get('/', (req, res) => {
    res.sendStatus(200)
})

module.exports = router;