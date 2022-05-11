audio.addEventListener("timeupdate", speakerInit);

function speakerInit() {
    let upperPs = document.querySelectorAll('.upper_box p:not(.none)')
    let lowerPs = document.querySelectorAll('.lower_box p:not(.none)')
    let nuanceUpperDiv = document.querySelector('.upper_box .nuance')
    let nuanceLowerDiv = document.querySelector('.lower_box .nuance')
    let upperSpeaker = document.querySelector('.upper_box h5')
    let lowerSpeaker = document.querySelector('.lower_box h5')
    
    nuanceUpperDiv.textContent = ''
    nuanceLowerDiv.textContent = ''

    setSpeaker(upperPs, 'upper')
    setSpeaker(lowerPs , 'lower')

    function setSpeaker(ps, place) {
        ps.forEach(p => {
            let nuance = p.getAttribute('nuance') 
            let speaker = p.getAttribute('speaker') 

            if (place == 'upper') {
                nuanceUpperDiv.textContent = nuance 
                upperSpeaker.textContent = speaker || "Siona (Vlaams)"
            } else if (place == 'lower') {
                nuanceLowerDiv.textContent = nuance
                lowerSpeaker.textContent = speaker || "Voorbijlopende Vlaamse man"
            }
        })
    }
}


