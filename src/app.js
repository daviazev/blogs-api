const express = require('express');

// ...

const app = express();

app.use(express.json());

// ... vai brasiiiiiiiiil 🇧🇷🇧🇷🇧🇷🇧🇷🇧🇷🇧🇷🇧🇷🇧🇷

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
