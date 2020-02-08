var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/', (req, res, next) => {
    delete req.body._id; /* supprimé l'id envoyé par le front-end */
    const thing = new Thing({
      ...req.body /* L'opérateur spread ... est utilisé pour faire une copie de tous les éléments de req.body (éléments du schéma)*/
    });
    thing.save() /* méthode save() qui enregistre simplement Thing dans la base de données. (Promise) */
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
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