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

input = document.querySelector('#max');

    settings = {
      maxLen: 40,
    }

    keys = {
      'backspace': 8,
      'shift': 16,
      'ctrl': 17,
      'alt': 18,
      'delete': 46,
      // 'cmd':
      'leftArrow': 37,
      'upArrow': 38,
      'rightArrow': 39,
      'downArrow': 40,
    }

    utils = {
      special: {},
      navigational: {},
      isSpecial(e) {
        return typeof this.special[e.keyCode] !== 'undefined';
      },
      isNavigational(e) {
        return typeof this.navigational[e.keyCode] !== 'undefined';
      }
    }

    utils.special[keys['backspace']] = true;
    utils.special[keys['shift']] = true;
    utils.special[keys['ctrl']] = true;
    utils.special[keys['alt']] = true;
    utils.special[keys['delete']] = true;

    utils.navigational[keys['upArrow']] = true;
    utils.navigational[keys['downArrow']] = true;
    utils.navigational[keys['leftArrow']] = true;
    utils.navigational[keys['rightArrow']] = true;

    input.addEventListener('keydown', function(event) {
      let len = event.target.innerText.trim().length;
      hasSelection = false;
      selection = window.getSelection();
      isSpecial = utils.isSpecial(event);
      isNavigational = utils.isNavigational(event);
      
      if (selection) {
        hasSelection = !!selection.toString();
      }
      
      if (isSpecial || isNavigational) {
        return true;
      }
      
      if (len >= settings.maxLen && !hasSelection) {
        event.preventDefault();
        return false;
      }
      
    });


    input = document.querySelector('#max2');

    settings = {
      maxLen: 23,
    }

    keys = {
      'backspace': 8,
      'shift': 16,
      'ctrl': 17,
      'alt': 18,
      'delete': 46,
      // 'cmd':
      'leftArrow': 37,
      'upArrow': 38,
      'rightArrow': 39,
      'downArrow': 40,
    }

    utils = {
      special: {},
      navigational: {},
      isSpecial(e) {
        return typeof this.special[e.keyCode] !== 'undefined';
      },
      isNavigational(e) {
        return typeof this.navigational[e.keyCode] !== 'undefined';
      }
    }

    utils.special[keys['backspace']] = true;
    utils.special[keys['shift']] = true;
    utils.special[keys['ctrl']] = true;
    utils.special[keys['alt']] = true;
    utils.special[keys['delete']] = true;

    utils.navigational[keys['upArrow']] = true;
    utils.navigational[keys['downArrow']] = true;
    utils.navigational[keys['leftArrow']] = true;
    utils.navigational[keys['rightArrow']] = true;

    input.addEventListener('keydown', function(event) {
      let len = event.target.innerText.trim().length;
      hasSelection = false;
      selection = window.getSelection();
      isSpecial = utils.isSpecial(event);
      isNavigational = utils.isNavigational(event);
      
      if (selection) {
        hasSelection = !!selection.toString();
      }
      
      if (isSpecial || isNavigational) {
        return true;
      }
      
      if (len >= settings.maxLen && !hasSelection) {
        event.preventDefault();
        return false;
      }
      
    });

    