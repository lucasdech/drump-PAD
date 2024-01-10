let pressA = document.querySelector("div[data-key='65']")

      document.addEventListener("keydown", function(event){

            if (event.key == 'a' ) {

       document.querySelector("audio[data-key='65']").play();
              event.Classlist.add = ("playing")
           
          
              
          }   
  })


                          
let pressZ = document.querySelector("div[data-key='90']")

      document.addEventListener("keydown", function(event){

            if (event.key == 'z' ) {

       document.querySelector("audio[data-key='90']").play();
          }   
  })
        

let pressE = document.querySelector("div[data-key='69']")

      document.addEventListener("keydown", function(event){

            if (event.key == 'e' ) {

       document.querySelector("audio[data-key='69']").play();
          }   
  })


let pressQ = document.querySelector("div[data-key='81']")

      document.addEventListener("keydown", function(event){

            if (event.key == 'q' ) {

       document.querySelector("audio[data-key='81']").play();
          }   
  })




let pressS = document.querySelector("div[data-key='83']")

      document.addEventListener("keydown", function(event){

            if (event.key == 's' ) {

       document.querySelector("audio[data-key='83']").play();
          }   
  })




let pressD = document.querySelector("div[data-key='68']")

      document.addEventListener("keydown", function(event){

            if (event.key == 'd' ) {

       document.querySelector("audio[data-key='68']").play();
          }   
  })




let pressW = document.querySelector("div[data-key='87']")

      document.addEventListener("keydown", function(event){

            if (event.key == 'w' ) {

       document.querySelector("audio[data-key='87']").play();
          }   
  })



let pressx = document.querySelector("div[data-key='88']")

      document.addEventListener("keydown", function(event){

            if (event.key == 'x' ) {

       document.querySelector("audio[data-key='88']").play();
          }   
  })




let pressC = document.querySelector("div[data-key='67']")

      document.addEventListener("keydown", function(event){

            if (event.key == 'c' ) {

       document.querySelector("audio[data-key='67']").play();
          }   
  })  


  let keys = document.querySelectorAll(".key");

  document.addEventListener('keydown', function(e) {
      let test = document.querySelector(`div[data-key="${e.keyCode}"]`);
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      if (audio) {
          audio.play();
      }
      if (test) {
          test.classList.add("playing");
      }
      console.log(e.keyCode);
  });
  
  document.addEventListener('keyup', function(e) {
      let test = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (test) {
          test.classList.remove("playing");
      }
  });



async function beatBOX() {
  // ... (le reste de votre code beatBOX ici)
}


      // FONCTION BEATBOX

let play = document.querySelector("div[data-key='76']")

  play.addEventListener("click",beatBOX)

  // FONCTION BEAT BOX  

async function beatBOX(){

  // SIMULATE KEY & DISPACH
  function simulateKEY(key){
    
    let event = new KeyboardEvent('keydown', {key: key});    
    document.dispatchEvent(event);
    
  }        
 
 // FIN SIMULATE KEY & DISPACH
  
 
  // PLAY BEAT
  
  function playBEAT(key) {
  return new Promise((resolve) => {
    setTimeout(() => {
 
      resolve(simulateKEY(key));
     }, 300);
  })
  
}
  
  await playBEAT("w")
  await playBEAT("a")
  await playBEAT("e")
  await playBEAT("w")
  await playBEAT("a")
  await playBEAT("e")
  await playBEAT("a")
  await playBEAT("w")
  await playBEAT("a")
  await playBEAT("e")
  // FIN PLAY BEAT
    }

  
