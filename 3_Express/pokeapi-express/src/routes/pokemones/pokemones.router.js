const express = require('express');
const pokemonRouter = express.Router();

pokemonRouter.get("/", (req, res) => {
  res.send("Hola soy un pokemon!");
});

module.exports = pokemonRouter;
