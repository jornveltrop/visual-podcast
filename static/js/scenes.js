audio.addEventListener("timeupdate", scenes);

let sceneData;
let sceneUrl = '/json/scenes.json';

fetch(sceneUrl)
    .then(res => res.json())
    .then(data => {
        console.log("scenes:", data)
        sceneData = data
        audio.addEventListener("timeupdate", scenes);
    })
    .catch(err => { throw err });

function scenes() {
    let upperLi = document.querySelector(".upper_box")
    let lowerLi = document.querySelector(".lower_box")    

    let scenes_convert = Object.entries(sceneData);
    scenes_convert.forEach(scene => {
        if (audio.currentTime > scene[1].upper.start) {
            upperLi.classList.remove('transparent')
        } else {
            upperLi.classList.add('transparent')
        }

        if (audio.currentTime > scene[1].lower.start) {
            lowerLi.classList.remove('transparent')
        } else {
            lowerLi.classList.add('transparent')
        }

        if (audio.currentTime > scene[1].upper.end) {
            upperLi.classList.add('transparent')
        } 

        if (audio.currentTime > scene[1].lower.end) {
            lowerLi.classList.add('transparent')
        } 
    });
}


