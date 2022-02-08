var div = document.getElementById("questions");
var div2 = document.getElementById("answers");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var subButton = document.getElementById("sub")
var marked = document.getElementById("marked")
var markBtn = document.getElementById("markBtn")
var unMarkBtn = document.getElementById("unMarkBtn")
var markArr = []
var markIndexs = []

function Question(questText, rightAns, deg) {
    this.questionText = questText;
    this.rightAnswer = rightAns;
    this.degree = deg
    this.content = [];

}


function Answers(ans1, ans2, ans3, ans4) {
    this.answer1 = ans1;
    this.answer2 = ans2;
    this.answer3 = ans3;
    this.answer4 = ans4;
}

Question.prototype.addAnswer = function (obj) {
    if (obj.constructor !== Answers) {
        throw ("error")
    }
    this.content.push(obj);
}
//question1
var q1 = new Question("How old is Rudolf Rassendyll?", "29", 1);
var a1 = new Answers("39", "49", "19", "29");

//question2
var q2 = new Question("How many languages can Rassendyll speak?", "5", 1);
var a2 = new Answers("5", "4", "3", "6");

//question3
var q3 = new Question("What is his sister- in- law called?", "Rose", 1);
var a3 = new Answers("Antoinette", "Rose", "Amelia", "Olega");

//question4
var q4 = new Question("Where did Rassendyll pretend to travel?", "The Alps", 1);
var a4 = new Answers("India", "The Alps", "Egypt", "Ruritania");

//question5
var q5 = new Question("What's the capital city of Ruritania?", "Strelsau", 1);
var a5 = new Answers("Strelsau", "Zenda", "London", "Dresden");

//question6
var q6 = new Question("Who is going to be an ambassador in six month's time?", "Sir Bordaile", 1);
var a6 = new Answers("Sir Featherly", "Sir Bordaile", "Sir Robert", "Sir Bertrand");

//question7
var q7 = new Question("Why do you think Rudolf hid his destination?", "He was secretive", 1);
var a7 = new Answers("He was secretive", "He was lazy", "He was strict", "He was naive");

//question8
var q8 = new Question("The Duke of Strelsau was.....", "The king's brother", 1);
var a8 = new Answers("The king's cousin", "The king's brother", "The king's half-brother", "The king's uncle");

//question9
var q9 = new Question("Who recommended visiting Paris?", "Uncle William", 1);
var a9 = new Answers("Uncle Fritz", "Uncle Elphberg", "Uncle William", "Uncle Robert");

//question10
var q10 = new Question("Where does Featherly work?", "In an embassy", 1);
var a10 = new Answers("In a hospital", "In an embassy", "In a court", "In a factory");

q1.addAnswer(a1)
q2.addAnswer(a2)
q3.addAnswer(a3)
q4.addAnswer(a4)
q5.addAnswer(a5)
q6.addAnswer(a6)
q7.addAnswer(a7)
q8.addAnswer(a8)
q9.addAnswer(a9)
q10.addAnswer(a10)



var questions = [];
questions.push(q1)
questions.push(q2)
questions.push(q3)
questions.push(q4)
questions.push(q5)
questions.push(q6)
questions.push(q7)
questions.push(q8)
questions.push(q9)
questions.push(q10)


// ----------------------------------------------------------------------



var studAnswers = [];
var index = 0;
if (index == 0) {
    btn2.style.display = "none"
}
shuffle(questions)
//----------------------show first question------------------------
div.innerHTML = `${index + 1}) ${questions[0].questionText}`;
for (var j of Object.entries(questions[index].content[0])) {
    var input = document.createElement("input")
    input.setAttribute("type", "radio");
    input.setAttribute("value", j[1])
    input.setAttribute("name", "name-0")

    var label = document.createElement("label")
    var br = document.createElement("br");
    var divContent = document.createElement("div")
    divContent.setAttribute("class", "divContent")
    label.innerHTML = j[1];
    divContent.append(input);
    divContent.append(label);
    div2.append(divContent)

}
div.setAttribute("class", "question");
div2.setAttribute("class", "answer");


if (markArr.includes(questions[0].questionText)) {
    markBtn.style.display = "none"
    unMarkBtn.style.display = "inline-block"
} else {

    markBtn.style.display = "inline-block"
    unMarkBtn.style.display = "none"
}


//-----------show result-------------------------
function showresult() {
    checkit()
    index++;
    var degree = 0;
    for (var q = 0; q < questions.length; q++) {
        if (questions[q].rightAnswer === studAnswers[q]) {
            degree += questions[q].degree
        }
    }

    localStorage.setItem("degree", degree);
    window.location.replace("result.html")
    return
}

//---------check to push in array---------------
function checkit() {
    var checkedValue = document.querySelector('input[name="name-' + index + '"]:checked')?.value;
    studAnswers[index] = checkedValue
}


//----------next------------------------------------
function getNextItem() {

    checkit()
    index++
    btn2.style.display = "inline-block"
    if (index == questions.length - 1) {
        btn1.style.display = "none"
    }



    div.innerHTML = `${index + 1}) ${questions[index].questionText}`;
    div2.innerHTML = '';
    for (var j of Object.entries(questions[index].content[0])) {
        var input = document.createElement("input")
        input.setAttribute("type", "radio");
        input.setAttribute("value", j[1])
        if (j[1] === studAnswers[index]) {
            input.setAttribute("checked", "true")
        }
        input.setAttribute("name", "name-" + index)
        var label = document.createElement("label")
        var br = document.createElement("br");
        var divContent = document.createElement("div")
        divContent.setAttribute("class", "divContent")
        label.innerHTML = j[1];
        divContent.append(input);
        divContent.append(label);
        div2.append(divContent)
    }
    div.setAttribute("class", "question");
    div2.setAttribute("class", "answer");




    if (markArr.includes(questions[index].questionText)) {

        markBtn.style.display = "none"
        unMarkBtn.style.display = "inline-block"
    } else {

        markBtn.style.display = "inline-block"
        unMarkBtn.style.display = "none"
    }

}

//-----------------drawformark---------------------------
function drawForCheck(element) {

    checkit()
    index = Number(element.dataset.id);
    console.log(element)
    btn2.style.display = "inline-block"
    btn1.style.display = "inline-block"
    if (index == 0) {
        btn2.style.display = "none"
    console.log("hide btn2")
    }
    
    if (index == questions.length - 1) {
        btn1.style.display = "none"
        console.log("hide btn1")
    }
    console.log(index)
    div.innerHTML = `${index + 1}) ${questions[index].questionText}`;
    div2.innerHTML = '';
    for (var j of Object.entries(questions[index].content[0])) {
        var input = document.createElement("input")
        input.setAttribute("type", "radio");
        input.setAttribute("value", j[1])
        if (j[1] === studAnswers[index]) {
            input.setAttribute("checked", "true")
        }
        input.setAttribute("name", "name-" + index)
        var label = document.createElement("label")
        var br = document.createElement("br");
        var divContent = document.createElement("div")
        divContent.setAttribute("class", "divContent")
        label.innerHTML = j[1];
        divContent.append(input);
        divContent.append(label);
        div2.append(divContent)
    }
    div.setAttribute("class", "question");
    div2.setAttribute("class", "answer");




    if (markArr.includes(questions[index].questionText)) {

        markBtn.style.display = "none"
        unMarkBtn.style.display = "inline-block"
    } else {

        markBtn.style.display = "inline-block"
        unMarkBtn.style.display = "none"
    }
}


//-----------previous function--------------
function getPreviousItem() {
    checkit()
    index--;
    if (index < questions.length - 1) {
        btn1.style.display = "inline-block"
    }

    if (index == 0) {
        btn2.style.display = "none"
    }
    if (index < 0) {
        return
    }
    div.innerHTML = `${index + 1}) ${questions[index].questionText}`;
    div2.innerHTML = '';
    for (var j of Object.entries(questions[index].content[0])) {
        console.log(j)
        console.log(questions[index])
        var input = document.createElement("input")
        input.setAttribute("type", "radio");
        input.setAttribute("value", j[1]);
        input.setAttribute("name", "name-" + index)
        if (j[1] === studAnswers[index]) {
            input.setAttribute("checked", "true")
        }
        var label = document.createElement("label")
        var br = document.createElement("br");
        var divContent = document.createElement("div")
        divContent.setAttribute("class", "divContent")
        label.innerHTML = j[1];
        divContent.append(input);
        divContent.append(label);
        div2.append(divContent)
    }
    div.setAttribute("class", "question");
    div2.setAttribute("class", "answer")



    if (markArr.includes(questions[index].questionText)) {
        markBtn.style.display = "none"
        unMarkBtn.style.display = "inline-block"
    } else {

        markBtn.style.display = "inline-block"
        unMarkBtn.style.display = "none"
    }

}
//--------- counter----------------

var progress = document.getElementById("counter");


var intital = setInterval(counter, 6000)

function counter() {
    ++progress.value
    if (progress.value == 100) {
        showresult()
    }
}


// --------------shuffle------------------
function shuffle(array) {
    for (var i = array.length; i > 1; i--) {

        var r = Math.floor(Math.random() * i);
        var temp = array[r];
        array[r] = array[i - 1];
        array[i - 1] = temp;
    }
}

//--------------mark----------------------

unMarkBtn.style.display = "none";
function markIt() {
    console.log(questions[index]);
    markArr.push(questions[index].questionText)
    markIndexs.push(index)
    // marked.innerHTML = ""
    // for (let i = 0; i < markArr.length; i++) {
    //     console.log(markArr);
    //     var item = document.createElement("p");
    //     item.textContent = `${markIndexs[i] + 1} ${markArr[i]}`
    //     item.setAttribute('onclick', "drawForCheck(this)");
    //     item.setAttribute("data-id", markIndexs[i])
    //     marked.append(item);
    // }


    var item = document.createElement("p");
    item.textContent = `${index + 1} ${markArr[markArr.length-1]}`
    item.setAttribute('onclick', "drawForCheck(this)");
    item.setAttribute("data-id", index)
    marked.append(item);

    markBtn.style.display = "none"
    unMarkBtn.style.display = "inline-block"
    marked.style.display = "block"

}
//------------------unmark---------------------
function undoMark() {
    var tex = markArr.indexOf(questions[index].questionText);
    markArr.splice(tex, 1)
    markIndexs.splice(tex, 1)

    markBtn.style.display = "inline-block"
    unMarkBtn.style.display = "none"
    marked.innerHTML = ""
    for (let i = 0; i < markArr.length; i++) {
        console.log(markArr);
        var item = document.createElement("p");
        item.textContent = `${markIndexs[i] + 1} ${markArr[i]}`
        item.setAttribute("data-id", markIndexs[i])
        item.setAttribute('onclick', "drawForCheck(this)");
        marked.append(item);
    }
    if (markArr == "") {
        marked.style.display = "none"
    }

}
