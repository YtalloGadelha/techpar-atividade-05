// roteamento
angular.module("atividade05").config(($routeProvider) => {

    $routeProvider.when("/listar", {
      controller:"listarcontrollers",
      templateUrl:"listarcontatos.html",
      controllerAs:"ctl"
    });
  
    $routeProvider.when("/salvar", {
      controller:"salvarcontrollers",
      templateUrl:"salvarcontatos.html",
      controllerAs:"ctl"
    });
  
    $routeProvider.otherwise("/listar");
  
  });