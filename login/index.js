var em = document.getElementById('email')//pegou o valor do input
var sen = document.getElementById('senha')//pegou o valor do input
var logpas = ['Brunoanjos',1234]
var ca = document.getElementById('caixaprincipal')
var ele = document.getElementById('elementos')


function clicar(){
    var n1 = (em.value)//moveu o valor pro js usar
    var n2 = (sen.value)//moveu o valor pro js usar
   
    if(n1==logpas[0]&&n2==logpas[1]){
        alert("Bem vindo")
    }else{
        alert('Tente novamente, erro ao tentar o login')
    }


}
