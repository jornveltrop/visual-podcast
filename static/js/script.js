let url = '/json/text_transcript.json';

const audio = document.querySelector("audio");
const video = document.querySelector("video");



let fetchedData;

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log("text_transcript:", data)
        fetchedData = data
        renderText()
        audio.addEventListener("timeupdate", readScript);
    })
    .catch(err => { throw err });


function readScript() {
    video.classList.add('videoVis')
    video.play()
    displayText()
}

audio.addEventListener("pause", pause);

function pause() {
    video.classList.remove('videoVis')
}

const videoButton = document.querySelector(".controls button")
const videoButtonImg = document.querySelector(".controls button img")
videoButton.addEventListener('click', videoVisable)

function videoVisable() {
    video.classList.toggle('videoHidden')
    videoButtonImg.classList.toggle('videoButtonOpacity')
}

function renderText() {
    
    let fetchedData_convert = Object.entries(fetchedData);
    fetchedData_convert.forEach(box => {
        //Convert in array om door te loopen
        let box_convert = Object.entries(box[1]);

        //Voor elke paragraaf
        box_convert.forEach(paragraaf => {
            let content = paragraaf[1].content
            let p = document.createElement('p')
                p.setAttribute("start", paragraaf[1].start);
                p.setAttribute("end", paragraaf[1].end);
                p.setAttribute("nuance", paragraaf[1].nuance);
                p.classList.add("none")
                p.setAttribute("speaker", paragraaf[1].speaker);

            content.forEach(wordObject => {
                let span = document.createElement('span')
                    span.id = wordObject.start;
                    span.setAttribute("end", wordObject.end);
                    span.textContent = wordObject.word + " "
                p.appendChild(Object.assign(span))
            });

            if (box[0] == "upper_box") {
                let li_upper_box = document.querySelector('.upper_box')
                li_upper_box.insertAdjacentElement('beforeend', p)
            } else if (box[0] == "lower_box") {
                let li_lower_box = document.querySelector('.lower_box')
                li_lower_box.insertAdjacentElement('beforeend', p)
            }
        });
    });
}

function displayText() {

    let fetchedData_convert = Object.entries(fetchedData);
    fetchedData_convert.forEach(box => {
 
        //Convert in array om door te loopen
        let box_convert = Object.entries(box[1]);

        //Voor elke paragraaf
        box_convert.forEach(paragraaf => {
            selectedP = document.querySelector(`p[start="${paragraaf[1].start}"`)

            //Als audio tijd groter is dan start paragraaf > visable
            if (audio.currentTime > paragraaf[1].start && audio.currentTime < paragraaf[1].end) {
                selectedP.classList.remove('none')
            } else {
                selectedP.classList.add('none')
            }
        });
    })
}


const header = document.querySelector("body > header");
const headerButton = document.querySelector("body > header button");

headerButton.addEventListener('click', function () {
    header.classList.toggle('disco')
})