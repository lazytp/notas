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
}

function somaEtapa(){  

  const etapa1 = document.getElementById('etapa1');
  const etapa2 = document.getElementById('etapa2');
  const etapa3 = document.getElementById('etapa3');
  const etapa4 = document.getElementById('etapa4');
  const etapa5 = document.getElementById('etapa5');
  const etapa6 = document.getElementById('etapa6');
  const etapa7 = document.getElementById('etapa7');
  const etapa8 = document.getElementById('etapa8');
  const etapa9 = document.getElementById('etapa9');
  const etapa10 = document.getElementById('etapa10');

  let nome_temp = document.getElementById('nome-temp');
  let mail_temp = document.getElementById('mail-temp');
  let tel_temp = document.getElementById('tel-temp');
  let disp_temp = document.getElementById('disp-temp');
  let plan_temp = document.getElementById('plan-temp');
  let prov_temp = document.getElementById('prov-temp');
  let proto_temp = document.getElementById('proto-temp');
  let terc_temp = document.getElementById('terc-temp');
  let vinc_temp = document.getElementById('vinc-temp');
  let motivo_temp = document.getElementById('motivo-temp');
  let resumo_temp = document.getElementById('resumo-temp');
  let feed_temp = document.getElementById('feed-temp');
  let stat_temp = document.getElementById('stat-temp');
  let tag_temp = document.getElementById('tag-temp'); 

  let nota_final = 
  '⭐: ' + proto_temp.value + '\n' + '\n' +
  '🔐 Dados de Verificação' + '\n' +
  'Nome: ' + nome_temp.value + '\n' + 
  'E-mail: ' + mail_temp.value + '\n' + 
  'Telefone: ' + tel_temp.value + '\n' + 
  'Dispositivo: ' +disp_temp.value + '\n' + 
  'Plano: ' + plan_temp.value + '\n' + 
  'Provedor: ' + prov_temp.value + '\n' + '\n' + 

  '🙎‍♂️ Quem entra em contato' + '\n' +
  'Nome: ' + terc_temp.value + '\n' + 
  'Vínculo: ' + vinc_temp.value + '\n' + '\n' +

  '📞 Motivo do contato: ' + motivo_temp.value + '\n' + '\n' +
  '📄 Resumo do contato: ' + resumo_temp.value + '\n' + '\n' +
  '📋 Etapas de resolução: ' + '\n' + 
  '→ ' + etapa1.value + '\n' + 
  '→ ' + etapa2.value + '\n' + 
  '→ ' + etapa3.value + '\n' + 
  '→ ' + etapa4.value + '\n' + 
  '→ ' + etapa5.value + '\n' + 
  '→ ' + etapa6.value + '\n' + 
  '→ ' + etapa7.value + '\n' + 
  '→ ' + etapa8.value + '\n' + 
  '→ ' + etapa9.value + '\n' + 
  '→ ' + etapa10.value + '\n' + '\n' + 
  '🙎 Feedback/Sentimeto: ' + feed_temp.value + '\n' + '\n' +
  '🏅 Status: ' + stat_temp.value + '\n' + '\n' +
  '🏷️ Tag: ' + tag_temp.value  
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