const express = require('express');
const router = express.Router();
const path = require('path');
const { unlink } = require('fs-extra');
const cloudinary = require('cloudinary');
const fs = require('fs-extra');

const Data = require('../models/database');

cloudinary.config({ 
    cloud_name: 'kaygua', 
    api_key: '467723897573917', 
    api_secret: 'Newfi_6Q6HRx0v3cRLKrsYeE3To' 
  });

router.post('/images/add', async (req, res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    const result = await cloudinary.v2.uploader.upload(req.params.imgpath);
    new  Data ({
        imgid: req.params.imgid,
        imgurl: result.url,
    });
    await Data.save();
    await fs.unlink(req.params.imgpath);
    res.send('Image Upload');

});

router.get('/', async (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    const data = await Data.find();
    res.json(data);
});

router.post('/', async (req, res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    const data = new Data(req.body);
    await data.save();
    res.json({
        status: 'Dato guardado'
    });
});

router.post('/update', async(req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    const data = await Data.update();
    res.json({
        status: 'Datos actualizados'
    });
})

router.get('/:id', async (req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    const data = await Data.findById(req.params.id);
    res.json(data);
})

router.put('/:id', async (req, res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    await Data.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Datos actuallizados'
    });
});

router.delete('/:id', async (req, res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    await Data.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    res.json({
        status: 'Datos eliminados'
    });
});

router.post('/upload', (req,res)=>{
    console.log(req.file);
    res.send('uploaded');
})



module.exports= router;