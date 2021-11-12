// This is a JavaScript file

//Início

window.onload = function(){
  

  let refri = 600;
  let aqua = 200;
  let bolo = 100;
  let doce = 3;
  let salga = 10;
    
  //Cálculo
  document.querySelector("#calc").addEventListener('click', function(){
      let pessoas = document.querySelector("#pes");

      //document.querySelector("#refri").value = ((pessoas.value * refri)/1000)+"Litros";
      document.querySelector("#refri").value = (pessoas.value * refri)+"ml de refrigerante";

      document.querySelector("#aqua").value = (pessoas.value * aqua)+"ml de água";

      document.querySelector("#bolo").value = (pessoas.value * bolo)+"g de bolo";

      document.querySelector("#doce").value = (pessoas.value * doce)+" unidades de doces";

      document.querySelector("#salga").value = (pessoas.value * salga)+" unidades de salgados";

    
  });

}