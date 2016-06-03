angular.module('app.controllers', [])

.controller('inicioCtrl', function($scope) {
    

})

.controller('ajudaCtrl', function($scope) {

})


.controller('questoesCtrl', function($scope) {  
   
    document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-balanced"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Fácil</h1> </div>';
    document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + json[localStorage.primeira].pergunta + '</p>';
 

  $scope.irProximaQuestao = function(){
      console.log("deveria chamar a próxima questão.");

        var valor = document.getElementById("resposta").value;
        var jsonF = JSON.parse(localStorage.perguntasFaceis);
        var jsonM = JSON.parse(localStorage.perguntasMedias);
        var jsonD = JSON.parse(localStorage.perguntasDificeis);


        if(localStorage.questaoAtual == 1){
            if(valor == jsonF[localStorage.primeira].resposta){
                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-balanced"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Fácil</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + jsonF[localStorage.segunda].pergunta + '</p>';
                localStorage.questaoAtual = 2;
                document.getElementById("resposta").value = "";
            } else {
                alert("Errou!");
            }
        } else if (localStorage.questaoAtual == 2){
            if(valor == jsonF[localStorage.segunda].resposta){
                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-balanced"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Fácil</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + jsonF[localStorage.terceira].pergunta + '</p>';
                localStorage.questaoAtual = 3;
                document.getElementById("resposta").value = "";
            } else {
                alert("Errou!");
            }
        } else if (localStorage.questaoAtual == 3) {
            if(valor == jsonF[localStorage.terceira].resposta){
                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-energized"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Médio</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + jsonM[localStorage.primeira].pergunta + '</p>';
                localStorage.questaoAtual = 4;
                document.getElementById("resposta").value = "";
            } else {
                alert("Errou!");
            }
        } else if (localStorage.questaoAtual == 4) {
            if(valor == jsonM[localStorage.primeira].resposta){
                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-energized"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Médio</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + jsonM[localStorage.segunda].pergunta + '</p>';
                localStorage.questaoAtual = 5;
                document.getElementById("resposta").value = "";
            } else {
                alert("Errou!");
            }
        } else if (localStorage.questaoAtual == 5) {
            if(valor == jsonM[localStorage.segunda].resposta){
                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-energized"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Médio</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + jsonM[localStorage.terceira].pergunta + '</p>';
                localStorage.questaoAtual = 6;
                document.getElementById("resposta").value = "";
            } else {
                alert("Errou!");
            }
        }  else if (localStorage.questaoAtual == 6) {
            if(valor == jsonM[localStorage.terceira].resposta){
                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-royal"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Difícil</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + jsonD[localStorage.primeira].pergunta + '</p>';
                localStorage.questaoAtual = 7;
                document.getElementById("resposta").value = "";
            } else {
                alert("Errou!");
            }
        } else if (localStorage.questaoAtual == 7) {
            if(valor == jsonD[localStorage.primeira].resposta){
                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-royal"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Difícil</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + jsonD[localStorage.segunda].pergunta + '</p>';
                localStorage.questaoAtual = 8;
                document.getElementById("resposta").value = "";
            } else {
                alert("Errou!");
            }
        } else if (localStorage.questaoAtual == 8) {
            if(valor == jsonD[localStorage.segunda].resposta){
                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-royal"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Difícil</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + jsonD[localStorage.terceira].pergunta + '</p>';
                localStorage.questaoAtual = 9;
                document.getElementById("resposta").value = "";
            } else {
                alert("Errou!");
            }
        } else if (localStorage.questaoAtual == 9) {
            if(valor == jsonD[localStorage.terceira].resposta){
                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-dark"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >DESAFIO!</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' +'<img src="../img/DESAFIO.png">' + '</p>';
                localStorage.questaoAtual = 1;
                document.getElementById("resposta").value = "";
            } else {
                alert("Errou!");
            }
        }


    }



})
