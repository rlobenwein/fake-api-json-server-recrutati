const recrutadores = require("./data/recrutadores");
const usuarios = require("./data/usuarios");
const projetos = require("./data/projetos");
const certificados = require("./data/certificados");
const linguagens = require("./data/linguagens");
const linguagensUsuarios = require("./data/linguagensUsuarios");
const idiomas = require("./data/idiomas");
const idiomasUsuarios = require("./data/idiomasUsuarios");
const mensagens = require("./data/mensagens");

module.exports = {
  recrutadores,
  usuarios,
  projetos,
  certificados,
  linguagens,
  linguagensUsuarios,
  idiomas,
  idiomasUsuarios,
  mensagens
}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

 

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
