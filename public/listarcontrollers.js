// listarcontrollers.js
angular.module("atividade05").controller("listarcontrollers", function(pessoaservicos){
  
    this.listar = () => pessoaservicos.buscapessoas().then( (ret) => {
      this.pessoas = ret.data;
    });
  
    // carregar a lista imediatamente após carregar o controlador
    this.listar();  
  });