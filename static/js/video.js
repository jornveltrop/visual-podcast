let videoUrl = '/json/video.json';

let videoData;

fetch(videoUrl)
    .then(res => res.json())
    .then(data => {
        console.log("videoData:", data)
        videoData = data
        audio.addEventListener("timeupdate", readVideoScript);
    })
    .catch(err => { throw err });


function readVideoScript() {
    displayVideoText()
}

function displayVideoText() {
    let videoData_convert = Object.entries(videoData);
    videoData_convert.forEach(videoEl => {
        
        let delayedTime = videoEl[1].start + .2
        console.log(delayedTime)

        if (audio.currentTime > videoEl[1].start && audio.currentTime < delayedTime) {
            
        }
    });
}

