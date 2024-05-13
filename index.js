document.addEventListener('keydown', function(event){
    console.log('Touche : ', event);
    // Recuperer la div qui correspond a mon keyCode
    // Recuperer l'audio qui correspond a mon keyCode
    let div = document.querySelector(`div[data-key="${event.keyCode}"]`)
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    // console.log(div, audio);
    div.classList.add('playing')
    audio.play()
    div.addEventListener('transitionend', function(){
        div.classList.remove('playing')
    })
})

async function beatBox(){
    function simulateKey(key){
        let event = new KeyboardEvent('keydown', {
            keyCode: key
        })
        document.dispatchEvent(event)
    }
     function playBeat(key, time){
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(simulateKey(key));
            }, time);
        })
     }
     await playBeat(65, 1000);
     await playBeat(65, 1000);
     await playBeat(90, 500);
     await playBeat(65, 400);
     await playBeat(65, 400);
}