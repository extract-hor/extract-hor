/*
 * 
 *   INITIALISATION DU GESTIONNAIRE DE MESSAGE
 *   OPTION PAGE
 * 
 */


chrome.runtime.onMessage.addListener(
  function(request, sender, response) {
    //Voir d'ou vient le message
    //console.log(request);      
    var textzone = document.getElementById('text-val');
    textzone.innerHTML =''; //Effacer le contenu de la zone de texte
    
    switch(request.message){
        case 'updatetextzone':       
                    
                    
                    textzone.innerHTML = request.textzone;
                    
                    response({message: 'La zone de texte est remplie'});
                    break;
                    
        default:
                    response({message: "option invalide"});
                    break;                    
                    
            
    }
  }
);





/*
 * 
 * 
 * 
 * 
 */
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("dwn-btn").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    var text = document.getElementById("text-val").value;
    var filename = "calendrier.ics";
    
    download(filename, text);
}, false);
