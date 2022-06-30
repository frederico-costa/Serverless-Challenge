const controller = {};
require('dotenv').config()
const axios = require('axios');

//Realização a conexão com a API e traz um array dos Funcionários para ser exibido na page Lista Funcionário
controller.get = (req, res) => {
  let config = {
    method: 'get',
    url: `${process.env.API_URL}employee`,
    headers: { }
  };
  axios(config)
  .then(function (response) {
    res.render('funcionario_List', {
      data: response.data.Items
   });
  })
  .catch(function (error) {
    res.status(200).send(`ERROR: ${error}`);
  });
};

// Função de Inicialização
controller.init = (req, res) => {
  res.render('funcionario', {
    data: {}
 });
};

// Função Post: Salva um novo funcionário na API
controller.post = (req, res) => {
  const body = req.body;
  var data = JSON.stringify({
    "nome": body.nome,
    "idade": body.idade,
    "cargo": body.cargo
  });
  
  var config = {
    method: 'post',
    url: `${process.env.API_URL}employee`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log('$$$ -- SUCESSO -- $$$');
    res.redirect('/list');
  })
  .catch(function (error) {
    res.status(200).send(`ERROR: ${error}`);
  });
};


// Função Edit: Seleciona o funcionário para ser exibido na Page Edit
controller.edit = (req, res) => {
  const { id } = req.params;
  
  let config = {
    method: 'get',
    url: `${process.env.API_URL}employeeId/${id}`,
    headers: { }
  };

  axios(config)
  .then(function (response) {
    res.render('funcionario_edit', {
      data: response.data.Item
    });
  })
  .catch(function (error) {
    res.status(200).send(`ERROR: ${error}`);
  });
};

// Função Put: faz as alterações em um determinado funcionário a partir do seu ID.
controller.put = (req, res) => {
  const { id } = req.params;
  const newFuncionario = req.body;

  var data = JSON.stringify({
    "id": id,
    "idade": newFuncionario.idade,
    "nome": newFuncionario.nome,
    "cargo": newFuncionario.cargo
  });
  
  var config = {
    method: 'put',
    url: `${process.env.API_URL}employee`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log('$$$ -- SUCESSO -- $$$');
    res.redirect('/list');
  })
  .catch(function (error) {
    res.status(200).send(`ERROR: ${error}`);
  });
};

// Função Delete: apaga um funcionário cadastrado a partir do seu ID.
controller.delete = (req, res) => {
  const { id } = req.params;

  var data = JSON.stringify({
    "id": id
  });

  var config = {
    method: 'delete',
    url: `${process.env.API_URL}employee`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    console.log('$$$ -- SUCESSO -- $$$');
    res.status(200).send('sucess');
  })
  .catch(function (error) {
    res.status(200).send(`ERROR: ${error}`);
  });
}

module.exports = controller;