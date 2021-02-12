/*
Initialisation du gestionnaire d'événement click
paramètres:
Entrées
event click
e : objet événement

Sorties :
message :  horaire ou options

 **/


document.addEventListener("click", (e)=>{    
  
  var choix = e.target.className;  

  switch (choix) {      
    case "horaire":
      //Envoyer un message avec horaire vers le background
      chrome.runtime.sendMessage({message:'horaire'},(response)=>{});
      break;
      
    case "options":      
      //Envoyer un message pour options vers le background
      chrome.runtime.sendMessage({message:'options'},(response)=>{});
      break; 

    case "upload":      
      //Envoyer un message pour options vers le background
      chrome.runtime.sendMessage({message:'upload'},(response)=>{});
      break;         
        
    case "fermer":
      window.close();  //Remermer la popup
      chrome.runtime.sendMessage('fermer');
      break;         
  }  
});

