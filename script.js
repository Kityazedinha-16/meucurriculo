alert("Olá mundo!"); 

// Uma variável guarda algum valor temporariamente 
//Entrada de dados 
var nome = "Helena";
var idade = 45;
var senha = "123";
//estrutura de condição
if(idade > 17 ){
   alert("Pode votar! "+ nome) 
} else{
    alert("Vai embora daqui! "+ nome);
}


if(nome == "Helena" && senha=="123"){
    alert("Login concedido!");
}else{
    alert("Tente Novamente! seu intruso");
}

//laço de repedição
contador =0;
while(contador <1000){
    contador = contador +1;
    console.log(contador); 
}


var celular = document.querySelector('.celular');  //icone de menu
var listamenu = document.querySelector('.menu ul');  //icone de menu

celular.addEventListener('click', function(){
    listamenu.classList.toggle('mostrarMenu');
});
    
    
