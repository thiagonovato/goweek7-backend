// Chamando as bibliotecas
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

// Criando o app
const app = express();

mongoose.connect(
  "mongodb+srv://semana:semana@cluster0-jerve.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

// Habilitando cors
app.use(cors());

// Configurando o acess externo
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

// Rotas
app.use(require("./routes"));

// Configurando a porta
app.listen(3333);
