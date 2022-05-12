let geluidUrl = '/json/geluid.json';

let geluidData;

fetch(geluidUrl)
    .then(res => res.json())
    .then(data => {
        console.log("geluidData:", data)
        geluidData = data
        audio.addEventListener("timeupdate", readGeluidScript);
    })
    .catch(err => { throw err });


function readGeluidScript() {
    displayGeluidText()
}

function displayGeluidText() {
    let geluidP = document.querySelector('.geluid p')

    let geluidData_convert = Object.entries(geluidData);
    geluidData_convert.forEach(geluid => {

        if (audio.currentTime > geluid[1].start) {
            console.log(geluidP)
            geluidP.textContent = geluid[1].content
        }
    });
}

