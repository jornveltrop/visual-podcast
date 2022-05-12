audio.addEventListener("timeupdate", highlight_word);

function highlight_word() {
    let upperSpans = document.querySelectorAll('.upper_box span')
    let lowerSpans = document.querySelectorAll('.lower_box span')

    startHighlight(upperSpans)
    startHighlight(lowerSpans)

    function startHighlight(spans) {
        let i;
        // style spoken text
        for (i = 0; i < spans.length; i++) {
            let time = spans[i].id;
            let timeEnd = spans[i].getAttribute("end")
            if (audio.currentTime > time) {
                if (i > 0) {
                    spans[i - 1].classList.add('beenRead');
                    spans[i - 1].classList.remove('highlight');
                }
                spans[i].classList.add('highlight');
            } else {
                spans[i].classList.remove('beenRead');
                spans[i].classList.remove('highlight');
            }

            if (audio.currentTime > timeEnd) {
                spans[i].classList.remove('highlight');
                spans[i].classList.add('beenRead');
            }
        }
    }
}



