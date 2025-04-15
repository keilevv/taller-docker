const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;
app.use(express.json());

// URL y nombre de base de datos desde variables de entorno
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017';
const dbName = process.env.MONGO_DB || 'mensajesdb';

let db;

// Conectar a MongoDB
MongoClient.connect(mongoUrl)
  .then(client => {
    console.log('Conectado a MongoDB');
    db = client.db(dbName);
  })
  .catch(err => {
    console.error('Error al conectar a MongoDB:', err);
  });

// Endpoint GET
app.get('/', (req, res) => {
  res.send('Hola Docker con MongoDB');
});

// Endpoint POST
app.post('/mensaje', async (req, res) => {
  const { mensaje } = req.body;
  if (!mensaje) {
    return res.status(400).json({ error: 'Mensaje requerido' });
  }

  try {
    await db.collection('mensajes').insertOne({ mensaje, fecha: new Date() });
    res.json({ status: 'Mensaje guardado en MongoDB' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al guardar en MongoDB' });
  }
});

app.listen(port, () => {
  console.log(`App escuchando en http://localhost:${port}`);
});
