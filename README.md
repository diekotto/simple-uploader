# Servidor de Subida de Archivos

Un servidor web sencillo basado en Express que permite subir ficheros a través de una interfaz web y los almacena en una carpeta local.

## Características

- Interfaz de usuario intuitiva con soporte para arrastrar y soltar archivos
- Soporte para archivos binarios y de cualquier tipo
- Almacenamiento de archivos en la carpeta local `uploads`
- Frontend estático servido en la ruta raíz (`/`)
- API para subida de archivos en la ruta `/upload`

## Requisitos

- Node.js (v14 o superior recomendado)
- npm (v6 o superior recomendado)

## Instalación

1. Clona este repositorio o descarga los archivos
2. Navega hasta la carpeta del proyecto
3. Instala las dependencias:

```bash
npm install
```

## Uso

1. Inicia el servidor:

```bash
npm start
```

2. Accede a la aplicación web en tu navegador: `http://localhost:3000`

3. Selecciona o arrastra un archivo para subirlo

4. Los archivos subidos se guardarán en la carpeta `uploads` en la raíz del proyecto

## Estructura del Proyecto

```
.
├── server.js         # Servidor Express
├── index.html        # Interfaz de usuario para subir archivos
├── package.json      # Definición de dependencias y scripts
├── uploads/          # Carpeta donde se almacenan los archivos subidos (se crea automáticamente)
└── README.md         # Este archivo
```

## Tecnologías Utilizadas

- Express.js: Framework web para Node.js
- Multer: Middleware para gestionar la subida de archivos
- JavaScript vanilla para el frontend

## Notas Importantes

- Este servidor está diseñado para ejecutarse en una red local
- No incluye autenticación ni limitaciones de tamaño de archivo por defecto
- Para uso en producción, considera agregar medidas de seguridad adicionales

## Personalización

Para modificar el puerto del servidor, edita la variable `port` en el archivo `server.js`:

```javascript
const port = 3000; // Cambia este valor
```
