angular.module('app.controllers', [])

.controller('inicioCtrl', function($scope) {
    console.log("to aqui!");

    var json = JSON.parse(localStorage.perguntasFaceis);
     localStorage.questaoAtual = 1;

    localStorage.primeira = Math.floor((Math.random() * json.length));
     localStorage.segunda = Math.floor((Math.random() * json.length));
     while(localStorage.segunda == localStorage.primeira){
      localStorage.segunda = Math.floor((Math.random() * json.length));
    }
     localStorage.terceira = Math.floor((Math.random() * json.length));
    while(localStorage.terceira == localStorage.segunda || localStorage.terceira == localStorage.primeira){
      localStorage.terceira = Math.floor((Math.random() * json.length));
    }


})

.controller('ajudaCtrl', function($scope) {

})


.controller('questoesCtrl', function($scope, $state) {

    document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-balanced"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Fácil</h1> </div>';
    document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + json[localStorage.primeira].pergunta + '</p>';


  $scope.callNextQuestion = function(){

        var valor = document.getElementById("resposta").value;
        var jsonF = JSON.parse(localStorage.perguntasFaceis);
        var jsonM = JSON.parse(localStorage.perguntasMedias);
        var jsonD = JSON.parse(localStorage.perguntasDificeis);


        if(localStorage.questaoAtual == 1){
            if(valor == jsonF[localStorage.primeira].resposta){
              $state.go('fimDeJOGO');
                /*document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-balanced"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Fácil</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + jsonF[localStorage.segunda].pergunta + '</p>';
                localStorage.questaoAtual = 2;
                document.getElementById("resposta").value = "";*/
            } else {
                /*alert('Errou!');
                document.getElementById("resposta").value = "";

                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-balanced"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Fácil</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + json[localStorage.primeira].pergunta + '</p>';
                localStorage.questaoAtual = 1;*/
                $state.go('fimDeJOGO');
            }
        } else if (localStorage.questaoAtual == 2){
            if(valor == jsonF[localStorage.segunda].resposta){
                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-balanced"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Fácil</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + jsonF[localStorage.terceira].pergunta + '</p>';
                localStorage.questaoAtual = 3;
                document.getElementById("resposta").value = "";
            } else {
                alert('Errou!');
                document.getElementById("resposta").value = "";


                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-balanced"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Fácil</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + json[localStorage.primeira].pergunta + '</p>';
                localStorage.questaoAtual = 1;
                $state.go('inicio');
            }
        } else if (localStorage.questaoAtual == 3) {
            if(valor == jsonF[localStorage.terceira].resposta){
                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-energized"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Médio</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + jsonM[localStorage.primeira].pergunta + '</p>';
                localStorage.questaoAtual = 4;
                document.getElementById("resposta").value = "";
            } else {
                alert('Errou!');
                document.getElementById("resposta").value = "";

            document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-balanced"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Fácil</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + json[localStorage.primeira].pergunta + '</p>';
                localStorage.questaoAtual = 1;                $state.go('inicio');
            }
        } else if (localStorage.questaoAtual == 4) {
            if(valor == jsonM[localStorage.primeira].resposta){
                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-energized"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Médio</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + jsonM[localStorage.segunda].pergunta + '</p>';
                localStorage.questaoAtual = 5;
                document.getElementById("resposta").value = "";
            } else {
                alert('Errou!');
                document.getElementById("resposta").value = "";

                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-balanced"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Fácil</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + json[localStorage.primeira].pergunta + '</p>';
                localStorage.questaoAtual = 1;
                $state.go('inicio');
            }
        } else if (localStorage.questaoAtual == 5) {
            if(valor == jsonM[localStorage.segunda].resposta){
                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-energized"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Médio</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + jsonM[localStorage.terceira].pergunta + '</p>';
                localStorage.questaoAtual = 6;
                document.getElementById("resposta").value = "";
            } else {
                alert('Errou!');
                document.getElementById("resposta").value = "";

                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-balanced"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Fácil</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + json[localStorage.primeira].pergunta + '</p>';
                localStorage.questaoAtual = 1;
                $state.go('inicio');
            }
        }  else if (localStorage.questaoAtual == 6) {
            if(valor == jsonM[localStorage.terceira].resposta){
                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-royal"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Difícil</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + jsonD[localStorage.primeira].pergunta + '</p>';
                localStorage.questaoAtual = 7;
                document.getElementById("resposta").value = "";
            } else {
                alert('Errou!');
                document.getElementById("resposta").value = "";

                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-balanced"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Fácil</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + json[localStorage.primeira].pergunta + '</p>';
                localStorage.questaoAtual = 1;
                $state.go('inicio');
            }
        } else if (localStorage.questaoAtual == 7) {
            if(valor == jsonD[localStorage.primeira].resposta){
                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-royal"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Difícil</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + jsonD[localStorage.segunda].pergunta + '</p>';
                localStorage.questaoAtual = 8;
                document.getElementById("resposta").value = "";
            } else {
                alert('Errou!');
                document.getElementById("resposta").value = "";

                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-balanced"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Fácil</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + json[localStorage.primeira].pergunta + '</p>';
                localStorage.questaoAtual = 1;
                $state.go('inicio');
            }
        } else if (localStorage.questaoAtual == 8) {
            if(valor == jsonD[localStorage.segunda].resposta){
                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-dark"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >DESAFIO!</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar" style="font-size:16px;">' +'Porque estudar matemática hoje em dia é<br>algo tão chato e evitado? Qualquer pessoa<br>que tente negar isso, invariávelmente vai<br>estar se enganando.<br>Faz muito tempo que alunos jovens<br>olham a matemática com uma certa<br>repulsa. Certas questões enormes<br>trazem o pensamento aos alunos de<br>you lose para aquela matéria.<br>2 somado com 2 evoluir gradativamente<br>para equações inversas e logaritmos é algo<br>que nem todos conseguem acompanhar<br>nas escolas, e muitas vezes acabam<br>desistindo de achar uma solução para o<br>problema. Isso, apesar de acontecer até<br>mesmo com os maiores estudiosos da<br>área, é algo que não deve ser feito, afinal,<br>em uma ciência exata como a matemática,<br>a resposta é algo que eventualmente vai<br>ser encontrada, nem que seja necessário<br>procurá-la das mais diversas formas e<br>ângulos.' + '</p>';
                localStorage.questaoAtual = 9;
                document.getElementById("resposta").value = "";
            } else {
                alert('Errou!');
                document.getElementById("resposta").value = "";
                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-balanced"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Fácil</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + json[localStorage.primeira].pergunta + '</p>';
                localStorage.questaoAtual = 1;
                $state.go('inicio');
            }
        } else if (localStorage.questaoAtual == 9) {
            if(valor == "42"){
                $state.go('fimDeJOGO');
            } else {
                alert('Errou!');
                alert('Errou feio!');
                alert('Errou rude!');
                document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-balanced"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Fácil</h1> </div>';
                document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + json[localStorage.primeira].pergunta + '</p>';
                localStorage.questaoAtual = 1;
                document.getElementById("resposta").value = "";
                $state.go('inicio');
            }
        }


    }



})

.controller('fimDeJOGOCtrl', function($scope,$state) {

    document.getElementById("fim").innerHTML = '<p class="perguntar">Parabéns, você concluiu o QuizOEIRA! <br><br><br>Isso mostra que você realmente possui um bom conhecimento de matemática e tem o raciocínio lógico bem trabalhado, capaz de solucionar até as questões mais difíceis.<br><br><br>Compartilhe esse feito com seus amigos!</p>';

    $scope.voltarAoInicio = function(){
        document.getElementById("resposta").value = "";
        document.getElementById("barraDeNivel").innerHTML = '<div class="bar bar-header bar-balanced"><button class="button icon" ui-sref="inicio"></button><h1 class="title" >Fácil</h1> </div>';
        document.getElementById("perguntas").innerHTML = '<p class="perguntar">' + json[localStorage.primeira].pergunta + '</p>';
        localStorage.questaoAtual = 1;
        $state.go('inicio');
    }

})
