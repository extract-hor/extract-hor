/*
 * 
 *   INITIALISATION DU GESTIONNAIRE DE MESSAGE
 *   CONTENT-SCRIPT
 * 
 */


chrome.runtime.onMessage.addListener(
  function(request, sender, response) {
    //Voir d'ou vient le message
    console.log(sender);      
      
    switch(request.message){
        case 'extracthorraire':       
                    
                    var elements = parseHoraire();
                    
                    response({message: elements});
                    break;
                    
        case 'generateics':
                    response({message: "generer le fichier ics...après"});
                    break;                    
                    
            
    }
  }
);








/*
 * 
 * @function parseHoraire
 * @description  Parcourir et extraire toutes les périodes de l'horaire 
 * 
 * 
 * @returns {object} element   le text description des périodes 
 * 
 */
//Parcourir tous les éléments de la classe
function parseHoraire() {
  var x, i, elements;
  x = document.querySelectorAll(".styletexte");
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "red";
    elements += x[i].textContent;
  }
  return elements;
}