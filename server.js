const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const app = express();
const port = 3000;

// Asegurarse de que la carpeta uploads exista
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configurar multer para gestionar la subida de archivos
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    // Mantener el nombre original del archivo
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Servir la página principal estática
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para manejar la subida de archivos
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No se ha subido ningún archivo');
  }
  
  res.send({
    message: 'Archivo subido correctamente',
    filename: req.file.originalname,
    size: req.file.size
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
