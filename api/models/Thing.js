const mongoose = require('mongoose'); /* Appelle la dépendance Mongoose */

const thingSchema = mongoose.Schema({ /* Créer le schéma de données */
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Thing', thingSchema); /* exporte le schéma en tant que modèle Mongoose */