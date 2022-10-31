console.log("welcome to typing test website");
let erornumber=0

textBox = document.getElementById("textBox")
inputBox = document.getElementById("inputBox")

resultcontianer = document.getElementById("resultcontianer")
resultcontianer.style.display = "none"
stats=document.getElementById("stats")
stats.style.display="none"

startBtn = document.getElementById("startBtn")
startBtn.addEventListener("click", () => {
    fetch('dummy.json', {
        method: "GET",
    }).then(response => response.text())
        .then((text) => {
            erornumber=0
            startBtn.innerHTML=`&#8635`
            startBtn.style.fontSize="35px"
            stats.style.display="none"
            resultcontianer.style.display = "none"
            inputBox.classList = "inputBox"
            inputBox.removeAttribute('readonly', 'readonly');
            inputBox.focus()
            inputBox.value = ""

            startTimer()
            startTypingTest(JSON.parse(data))
        }
        );
})

let spliceTextTotal = ""


startTypingTest = function (content) {

    testcontent = JSON.parse(data)

    random = Math.random() * 6
    randomVal = random.toFixed()

    for (item of testcontent) {
        if (item.id == randomVal) {
            totaltestcontent = item.text
            totalword = totaltestcontent.split(' ')

            textBox.innerText = ""

            totalword.forEach((element, index) => {
                newSpan = document.createElement('span')
                newSpan.style.marginLeft = "5px"
                newSpan.style.height = "40px"
                newSpan.style.marginTop = "5px"
                newSpan.innerText = element
                textBox.appendChild(newSpan)
            });
            return totaltestcontent
        }
    }
}



inputBox.addEventListener("input", () => {
    inputVal = inputBox.value.split(" ")
    arrayQuote = textBox.querySelectorAll('span')

    arrayQuote.forEach((element, index) => {
        if (inputVal[index] === totalword[index]) {
            a = inputVal[index].length
            element.classList = "correct"
            element.classList.remove("current")
        }
        else if (arrayQuote[index].innerText.includes(inputVal[index])) {
            element.classList = "current"
        }
        else if (inputVal[index] == null) {
            element.classList = ""
        }
        else {
            element.classList = "error"
            erornumber=erornumber+1
            console.log("the number is ",erornumber);
        }

        if (index < inputVal.length) {
            if (inputVal[index - 1] != totalword[index - 1]) {
                element.previousSibling.classList = 'error'
                inputBox.classList = "inputBox newBox"

                inputleght = inputBox.value.length
                inputBox.setAttribute('maxlength', inputleght + 0);
            }

            else {
                inputBox.classList = "inputBox"
                inputBox.removeAttribute('maxLength')
               
            }

            if (index > 0) {
                if (inputVal[index - 1] == totalword[index - 1]) {
                    // element.previousSibling.classList.add("hide")
                    element.previousSibling.classList = "hide"
                }
                // if(inputVal[index]==totalword[index]){
    
                // }
            }
        }


    });


})

let startTime
function startTimer() {
    second = document.getElementById("second")
    minits = document.getElementById("minits")
    speed = document.getElementById("speed")
    let num = 0
    startTime = new Date()
    // console.log(startTime);

    let times = setInterval(() => {
        timer = getTimerTime()
        let timerlength = 60
        miniitslength = Math.floor(((timerlength - timer) / 60))
        speeda = Math.floor(((timerlength * inputBox.value.length) / timer) / 5)

        minits.innerText = miniitslength
        second.innerText = timerlength - timer
        speed.innerText = speeda += " WPM"

        // console.log("the timer is", timer);
        if (second.innerText == "0" || second.innerHTML == "0" || second.innerText == "00" || second.innerHTML == "00") {

            inputBox.setAttribute('readonly', 'readonly');
            clearInterval(times)
            showResult(speeda)
            showstats()
        }
    }, 1000)
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}

function showResult(speed) {
    resultcontianer.style.display = "block"
    rspeed = document.getElementById("rspeed")
    raccuracy = document.getElementById("raccuracy")
    rword = document.getElementById("rword")
    rcharacter = document.getElementById("rcharacter")
    rtime=document.getElementById("rtime")
    typedcharacter=inputBox.value.length
    accurat=Math.floor(((typedcharacter-erornumber)*100)/typedcharacter)
    console.log("the eroor number is ",erornumber);

    words = inputBox.value.split(" ")

    rspeed.innerText = speed
    rword.innerText = words.length
    rcharacter.innerText = inputBox.value.length
    rtime.innerText="60 Second"
    raccuracy.innerText=accurat+"%"

}

function showstats(){
    stats.style.display="block"

    statscontent=document.getElementById("statscontent")
    statscontent.innerText=inputBox.value
}