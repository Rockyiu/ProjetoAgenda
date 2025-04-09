// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: 'Um titulo de testes',
//     descricao: 'Uma descrição de teste;'
// })
    // .then(dados => console.log(dados))
    // .catch(e => console.log(e));

const Contato = require('../models/ContatoModel');
exports.index = async(req, res) => {
   const contatos = await Contato.buscaContatos();
   res.render('index', {contatos});
};

