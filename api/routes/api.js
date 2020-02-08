var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
      message: 'Objet créé !'
    });
});

router.use('/', (req, res, next) => {
    const stuff = [
      {
        _id: 'Objet 1',
        title: 'Appareil photo',
        description: 'Permet de prendre des photos',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'Yves',
      },
      {
        _id: 'Objet 2',
        title: 'Appareil photo',
        description: 'Permet de prendre des photos',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'Fred',
      },
    ];
    res.status(200).json(stuff);
  });


module.exports = router;