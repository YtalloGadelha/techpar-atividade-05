// pessoaservicos.js
angular.module("atividade05").service("pessoaservicos", function ($http){

    this.buscapessoas = () => $http.get("/listar");
  
    this.salvapessoa = (p) => $http.post("/salvar",p);
  
  });