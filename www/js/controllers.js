angular.module('app.controllers', [])

.controller('inicioCtrl', function($scope) {

      $scope.iniciarJogo = function(){
        sessionStorage.primeira = "";
        sessionStorage.segunda = "";
        sessionStorage.terceira = "";

        //random das fáceis
        var json = JSON.parse(sessionStorage.perguntasFaceis);
        var random = Math.floor((Math.random() * json.length));
        sessionStorage.primeira = random;
        random = Math.floor((Math.random() * json.length));
        while(random === sessionStorage.primeira){
          random = Math.floor((Math.random() * json.length));
        }
        sessionStorage.segunda = random;
        var igual;
        do {
          random = Math.floor((Math.random() * json.length));
          if (random == sessionStorage.primeira || random == sessionStorage.segunda) {
            igual = true;
          } else {
            igual = false;
          }
        } while (igual);
        sessionStorage.terceira = random;

        sessionStorage.questaoAtual = 1;

        document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-balanced"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Fácil</h1> </div>';
        document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + json[sessionStorage.primeira].pergunta + '</p>';
      }

})

.controller('ajudaCtrl', function($scope) {

})


.controller('questoesCtrl', function($scope) {
  var jsonF = JSON.parse(sessionStorage.perguntasFaceis);
  var jsonM = JSON.parse(sessionStorage.perguntasMedias);
  var jsonD = JSON.parse(sessionStorage.perguntasDificeis);

  $scope.irProximaQuestao = function(){
    var valor = document.getElementById("resposta").value;
    /*  if(valor == json[sessionStorage.primeiraFacil].resposta){
        alert("resposta correta!");
      }else{
        alert("errou!!");
      } */


  }

})
