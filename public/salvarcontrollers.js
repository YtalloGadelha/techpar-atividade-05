// salvarcontrollers.js
angular.module("atividade05").controller("salvarcontrollers", function(pessoaservicos){

    this.novo = {};
  
    this.salvar = () => {
        pessoaservicos.salvapessoa(this.novo).then( (ret) => {
        alert("Pessoa salva com id " + ret.data[0].idpessoa);
        this.novo = {};
      });
    };
  });