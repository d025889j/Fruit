//get references to interactive elements
const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const txtOutput = document.getElementById("output");
const btnSpin = document.getElementById("spinbtn");
const btnCredit = document.getElementById("creditbtn");
const btnCollect = document.getElementById("collectbtn");
const displayCredit = document.getElementById("creditValue");
const displayWinnings = document.getElementById("winningsValue");
let totalWin = 0;

//add event listeners
btnSpin.addEventListener("click", spinroll);
btnCredit.addEventListener("click", addcredit);
btnCollect.addEventListener("click", collectcredit);


//when page loaded


displayCredit.innerText = 0;
displayWinnings.innerText = totalWin;

txtOutput.innerText = "";
let fruit1 = Math.floor(Math.random() * 9) + 1;
slot1.setAttribute("src", "images/fruit" + fruit1 + ".png");
let fruit2 = Math.floor(Math.random() * 9) + 1;
slot2.setAttribute("src", "images/fruit" + fruit2 + ".png");
let fruit3 = Math.floor(Math.random() * 9) + 1;
slot3.setAttribute("src", "images/fruit" + fruit3 + ".png");

if (displayCredit.innerText <= 0) {
    document.getElementById("spinbtn").disabled = true;
}
if (displayWinnings.innerText <= 0) {
    document.getElementById("collectbtn").disabled = true;
}

//when spin button clicked
function spinroll() {

    if (displayCredit.innerText >= 1) {
        displayCredit.innerText--;

        txtOutput.innerText = "";
        let fruit1 = Math.floor(Math.random() * 9) + 1;
        slot1.setAttribute("src", "images/fruit" + fruit1 + ".png");
        let fruit2 = Math.floor(Math.random() * 9) + 1;
        slot2.setAttribute("src", "images/fruit" + fruit2 + ".png");
        let fruit3 = Math.floor(Math.random() * 9) + 1;
        slot3.setAttribute("src", "images/fruit" + fruit3 + ".png");

        if (fruit1 == fruit2 && fruit2 == fruit3) {
            txtOutput.innerText = "Big Win";
            totalWin += 10;
            displayWinnings.innerText = totalWin;

        }
        else if (fruit2 == fruit3) {
            txtOutput.innerText = "Small Win";
            totalWin += 5;
            displayWinnings.innerText = totalWin;

        }
        else {
            txtOutput.innerText = "";
        }

    }

    if (displayCredit.innerText <= 0) {
        document.getElementById("spinbtn").disabled = true;
    }
    if (displayWinnings.innerText >= 1) {
        document.getElementById("collectbtn").disabled = false;
    }
}


//when credit button clicked
function addcredit() {
    displayCredit.innerText++;
    document.getElementById("spinbtn").disabled = false;
    txtOutput.innerText = "Credit Added";
}

//when collect button clicked
function collectcredit() {
    txtOutput.innerText = totalWin + " Winning Credits Collected";
    totalWin = 0;
    displayWinnings.innerText = totalWin;
    
    if (displayWinnings.innerText <= 0) {
        document.getElementById("collectbtn").disabled = true;
    }
}