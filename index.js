function copiar(text) {
  // const textarea = document.getElementById('nome-nota');
  // textarea.select();
  // document.execCommand('copy');
  // //alert('Text copied to clipboard');

  navigator.clipboard.writeText(text)
  .then(() => {
    console.log('Text copied to clipboard:', text);
  })
  .catch(err => {
    console.error('Could not copy text: ', err);
  });

}

function tabRename(){

    // Assume you have a variable named 'content' with the content you want to display
    var content = "This is the content of the variable.";

    // Find the element where you want to display the content
    var titleName = document.getElementById("title");
 
    // Set the innerHTML of that element to the content of the variable
    titleName.innerHTML = document.getElementById('proto-temp').value;

}

function del_app(){
  if(etapa1 = " "){
    document.getElementById('etapa1').value = "appdelete "
  }
  
}

function des_rot(){
  document.getElementById('ts_pool').value += "offrouter "
}

function des_ipv6(){
  document.getElementById('ts_pool').value += "ipv6 "
}

function dns_upd(){
  document.getElementById('ts_pool').value += "dns "
}

function cabo(){
  document.getElementById('ts_pool').value += "cabo "
}

function out_rede(){
  document.getElementById('ts_pool').value += "altnet "
}

function out_rede(){
  document.getElementById('ts_pool').value += "altnet "
}

function tema(){
  document.getElementById('ts_pool').value += "altnet "
}


function clearField() {
   document.getElementById('nome-temp').value = "";
   document.getElementById('mail-temp').value = "";
  document.getElementById('tel-temp').value = "";
   document.getElementById('disp-temp').value = "";
   document.getElementById('plan-temp').value = "";
   document.getElementById('prov-temp').value = "";
   document.getElementById('proto-temp').value = "";
   document.getElementById('terc-temp').value = "";
   document.getElementById('vinc-temp').value = "";
   document.getElementById('motivo-temp').value = "";
   document.getElementById('resumo-temp').value = "";
   document.getElementById('feed-temp').value = "";
   document.getElementById('stat-temp').value = "";
  document.getElementById('tag-temp').value = ""; 

  document.getElementById('etapa1').value = ""; 
  document.getElementById('etapa2').value = ""; 
  document.getElementById('etapa3').value = ""; 
  document.getElementById('etapa4').value = ""; 
  document.getElementById('etapa5').value = ""; 
  document.getElementById('etapa6').value = ""; 
  document.getElementById('etapa7').value = ""; 
  document.getElementById('etapa8').value = ""; 
  document.getElementById('etapa9').value = ""; 
  document.getElementById('etapa10').value = ""; 
  document.getElementById('etapa11').value = ""; 
  document.getElementById('etapa12').value = ""; 
  document.getElementById('etapa13').value = ""; 
  document.getElementById('etapa14').value = ""; 
  document.getElementById('etapa15').value = ""; 
}

let simbolo = "• "

function symbol1(){
  simbolo = "• "
}
function symbol2(){
  simbolo = "— "
}
function symbol3(){
  simbolo = "» "
}
function symbol4(){
  simbolo = "→ "
}

function spam(){

  document.getElementById('motivo-temp').value = "Cliente entrou em contato, não informou o motivo e ficou inativo"
  document.getElementById('etapa1').value = "Chat encerrado por falta de comunicação"
  document.getElementById('stat-temp').value = "Spam"

}

function somaEtapa(){  

  let etapa1 = simbolo + document.getElementById('etapa1').value;
  let etapa2 = simbolo + document.getElementById('etapa2').value;
  let etapa3 = simbolo + document.getElementById('etapa3').value;
  let etapa4 = simbolo + document.getElementById('etapa4').value;
  let etapa5 = simbolo + document.getElementById('etapa5').value;
  let etapa6 = simbolo + document.getElementById('etapa6').value;
  let etapa7 = simbolo + document.getElementById('etapa7').value;
  let etapa8 = simbolo + document.getElementById('etapa8').value;
  let etapa9 = simbolo + document.getElementById('etapa9').value;
  let etapa10 = simbolo + document.getElementById('etapa10').value;
  let etapa11 = simbolo + document.getElementById('etapa11').value;
  let etapa12 = simbolo + document.getElementById('etapa12').value;
  let etapa13 = simbolo + document.getElementById('etapa13').value;
  let etapa14 = simbolo + document.getElementById('etapa14').value;
  let etapa15 = simbolo + document.getElementById('etapa15').value;

  let nome_temp = document.getElementById('nome-temp').value;
  let mail_temp = document.getElementById('mail-temp').value;
  let tel_temp = document.getElementById('tel-temp').value;
  let tel_temp2 = document.getElementById('tel-temp').value;
  let disp_temp = document.getElementById('disp-temp').value;
  let plan_temp = document.getElementById('plan-temp').value;
  let prov_temp = document.getElementById('prov-temp').value;
  let proto_temp = '⭐: ' + document.getElementById('proto-temp').value;
  let terc_temp = document.getElementById('terc-temp').value;
  let vinc_temp = document.getElementById('vinc-temp').value;
  let motivo_temp = document.getElementById('motivo-temp');
  let resumo_temp = '📄 Resumo do contato: ' + document.getElementById('resumo-temp').value;
  let feed_temp = document.getElementById('feed-temp');
  let stat_temp = document.getElementById('stat-temp');
  let tag_temp = '🏷️ Tag: ' + document.getElementById('tag-temp').value; 

  if (etapa1 == simbolo ){
    etapa1 = ""
  } else (etapa1 = etapa1 + '\n' + '\n')

  if (etapa2 == simbolo){
    etapa2 = ""
  } else (etapa2 = etapa2 + '\n' + '\n')

  if (etapa3 == simbolo){
    etapa3 = ""
  } else (etapa3 = etapa3 + '\n' + '\n')

  if (etapa4 == simbolo){
    etapa4 = ""
  } else (etapa4 = etapa4 + '\n' + '\n')

  if (etapa5 == simbolo){
    etapa5 = ""
  } else (etapa5 = etapa5 + '\n' + '\n')

  if (etapa6 == simbolo){
    etapa6 = ""
  } else (etapa6 = etapa6 + '\n' + '\n')

  if (etapa7 == simbolo){
    etapa7 = ""
  } else (etapa7 = etapa7 + '\n' + '\n')
  
  if (etapa8 == simbolo){
    etapa8 = ""
  } else (etapa8 = etapa8 + '\n' + '\n')

  if (etapa9 == simbolo){
    etapa9 = ""
  } else (etapa9 = etapa9 + '\n' + '\n')

  if (etapa10 == simbolo){
    etapa10 = ""
  } else (etapa10 = etapa10 + '\n' + '\n')

  if (etapa11 == simbolo){
    etapa11 = ""
  } else (etapa11 = etapa11 + '\n' + '\n')

  if (etapa12 == simbolo){
    etapa12 = ""
  } else (etapa12 = etapa12 + '\n' + '\n')

  if (etapa13 == simbolo){
    etapa13 = ""
  } else (etapa13 = etapa13 + '\n' + '\n')

  if (etapa14 == simbolo){
    etapa14 = ""
  } else (etapa14 = etapa14 + '\n' + '\n')

  if (etapa15 == simbolo){
    etapa15 = ""
  } else (etapa15 = etapa15 + '\n' + '\n')
  
  if (tag_temp == '🏷️ Tag: '){
    tag_temp = ""
  } else (tag_temp = '\n' + '\n' + tag_temp)

  if (nome_temp == ''){
    nome_temp = ""
  } else (nome_temp = '🔐 Dados de Verificação' + '\n' +
  'Nome: ' + nome_temp)

  if (mail_temp == ''){
    mail_temp = ""
  } else (mail_temp = '\n' + 'E-mail: ' + mail_temp)

  if (tel_temp == ''){
    tel_temp = ""
  } else (tel_temp = '\n' + 'Telefone: ' + tel_temp)

  if (tel_temp2 == ''){
    tel_temp2 = ""
  } else (tel_temp2 = '\n' + '\n' + '📞 Telefone: ' + tel_temp2)
  
  if (disp_temp == ''){
    disp_temp = ""
  } else (disp_temp = '\n' + 'Dispositivo: ' + disp_temp)
  
  if (plan_temp == ''){
    plan_temp = ""
  } else (plan_temp = '\n' + 'Plano: ' + plan_temp)

  if (prov_temp == ''){
    prov_temp = ""
  } else (prov_temp = '\n' + 'Provedor: ' + prov_temp)

  if (proto_temp == '⭐: '){
    proto_temp = ""
  } else (proto_temp = proto_temp + '\n')

  if (resumo_temp == '📄 Resumo do contato: '){
    resumo_temp = ""
  } else (resumo_temp = resumo_temp + '\n' + '\n')

  

  if (terc_temp == ''){
    terc_temp = ""
  } else ( terc_temp = '\n' + '\n' + '🙎‍♂️ Quem entra em contato' + '\n' +
  'Nome: ' + terc_temp + '\n' + "Vínculo: " + vinc_temp) 



  let nota_final = 
  proto_temp +
  nome_temp + 
  mail_temp +  
  tel_temp + 
  disp_temp + 
  plan_temp +
  prov_temp + 
  terc_temp +  
  tel_temp2 + '\n' + '\n' +
  '📌 Motivo do contato: ' + motivo_temp.value + '\n' + '\n' +
  resumo_temp +
  '📋 Etapas de resolução: ' + '\n' + 
  etapa1 + 
  etapa2 + 
  etapa3 + 
  etapa4 + 
  etapa5 + 
  etapa6 + 
  etapa7 + 
  etapa8 + 
  etapa9 + 
  etapa10 + 
  etapa11 + 
  etapa12 + 
  etapa13 + 
  etapa14 + 
  etapa15 +
  '🙎 Feedback/Sentimento: ' + feed_temp.value + '\n' + '\n' +
  '🏅 Status: ' + stat_temp.value + tag_temp 
  ;

  document.getElementById('etapas-nota').value = 
  etapa1.value + '\n' + 
  etapa2.value + '\n' + 
  etapa3.value + '\n' + 
  etapa4.value + '\n' + 
  etapa5.value + '\n' + 
  etapa6.value + '\n' + 
  etapa7.value + '\n' + 
  etapa8.value + '\n' + 
  etapa9.value + '\n' + 
  etapa10.value;

  document.getElementById('nome-nota').value = nota_final

  copiar(nota_final);
  
}


// document.addEventListener("DOMContentLoaded", function() {
//     const nome1 = document.getElementById('nome-temp');
//     const nome2 = document.getElementById('nome-nota');

//     const mail1 = document.getElementById('mail-temp');
//     const mail2 = document.getElementById('mail-nota');

//     const tel1 = document.getElementById('tel-temp');
//     const tel2 = document.getElementById('tel-nota');

//     const disp1 = document.getElementById('disp-temp');
//     const disp2 = document.getElementById('disp-nota');

//     const plan1 = document.getElementById('plan-temp');
//     const plan2 = document.getElementById('plan-nota');

//     const prov1 = document.getElementById('prov-temp');
//     const prov2 = document.getElementById('prov-nota');

//     const proto1 = document.getElementById('proto-temp');
//     const proto2 = document.getElementById('proto-nota');

//     const terc1 = document.getElementById('terc-temp');
//     const terc2 = document.getElementById('terc-nota');

//     const vinc1 = document.getElementById('vinc-temp');
//     const vinc2 = document.getElementById('vinc-nota');

//     const motivo1 = document.getElementById('motivo-temp');
//     const motivo2 = document.getElementById('motivo-nota');

//     const resumo1 = document.getElementById('resumo-temp');
//     const resumo2 = document.getElementById('resumo-nota');

    
   

//     const soma_etapas = etapa1
// const etapas_notas = document.getElementById('etapas-nota');




//     // Add event listener to input1 for keyup event
//     nome1.addEventListener('keyup', nameBus);    
//     mail1.addEventListener('keyup', nameBus);

//     soma_etapas.addEventListener('keyup', nameBus);

//     tel1.addEventListener('keyup', nameBus);
//     disp1.addEventListener('keyup', nameBus);

//     plan1.addEventListener('keyup', nameBus);
//     prov1.addEventListener('keyup', nameBus);

//     proto1.addEventListener('keyup', nameBus);
//     terc1.addEventListener('keyup', nameBus);

//     vinc1.addEventListener('keyup', nameBus);
//     motivo1.addEventListener('keyup', nameBus);

//     resumo1.addEventListener('keyup', nameBus);

   

//     // Define nameBus function
//     function nameBus() {
//       // Set the value of input2 to the value of input1

//       nome2.value = nome1.value;
//       mail2.value = mail1.value;

//       resumo2.value = resumo1.value;

//       tel2.value = tel1.value;
//       disp2.value = disp1.value;

//       plan2.value = plan1.value;
//       prov2.value = prov1.value;

//       proto2.value = proto1.value;
//       terc2.value = terc1.value;

//       vinc2.value = vinc1.value;
//       motivo2.value = motivo1.value;

     
//       inputs.forEach(function(input) {
//         input.setAttribute('autocomplete', 'off');
//       });
      
//     }
//   });