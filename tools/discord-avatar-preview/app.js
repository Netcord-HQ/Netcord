function toggleMode() {
    const input = document.getElementById('preview');

    if (input.className == "prvMessage dark") {
        input.setAttribute('class', "prvMessage light")
    } else {
        input.setAttribute('class', "prvMessage dark")
    }


    const input2 = document.getElementById('preview2');

    if (input2.className == "prvRole dark") {
        input2.setAttribute('class', "prvRole light")
    } else {
        input2.setAttribute('class', "prvRole dark")
    }
}

// Role Color
const theInput = document.getElementById("roleColor");
theInput.addEventListener("input", function () {
    let theColor = theInput.value;
    document.getElementById("roleColorText").style.color = theColor;
    document.getElementById("roleColorText2").style.color = theColor;
    document.getElementById("roleColorText3").style.color = theColor;
    document.getElementById("roleColorText4").style.color = theColor;
}, false);

// Upload Avatar
let loadFile = function(event) {
	let image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);

    // document.getElementById('output2').src = URL.createObjectURL(event.target.files[0]);
    document.getElementById('output3').src = URL.createObjectURL(event.target.files[0]);
    // document.getElementById('output4').src = URL.createObjectURL(event.target.files[0]);
};

// Sync Username

function username() {
    document.getElementById('roleColorText').innerHTML = document.getElementById('username').value;
    document.getElementById('roleColorText3').innerHTML = document.getElementById('username').value;
}