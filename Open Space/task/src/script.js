let okButton = document.getElementById("ok-button");
let password = document.getElementById('password');
let launchButton = document.getElementById('launch-button');
let checkButtons = document.querySelectorAll('.checkbox');
let levers = document.querySelectorAll('.range');
let rocket = document.querySelector('.rocket');
let rightPassword = "TrustNo1";

okButton.addEventListener('click', () => {
    if (password.value === rightPassword) {
        password.value = "";
        for (let checkButton of checkButtons) {
            checkButton.disabled = false;
        }
        for (let lever of levers) {
            lever.disabled = false;
        }
        okButton.disabled = true;
        password.disabled = true;
    }
})

function readinessCheck() {
    for (let checkButton of checkButtons) {
        if (checkButton.checked === false) {
            return false;
        }
    }
    for (let lever of levers) {
        if (lever.value !== "100") {
            return false;
        }
    }
    return true;
}

function changeLaunchButton() {
    launchButton.disabled = !readinessCheck();
    if (readinessCheck()) {
        launchButton.classList.add('active-launch-button');
    } else {
        launchButton.classList.remove('active-launch-button');
    }
}

for (let checkButton of checkButtons) {
    checkButton.addEventListener('click', () => {
        changeLaunchButton();
    })
}

for (let lever of levers) {
    lever.addEventListener('click', () => {
        changeLaunchButton();
    })
}


launchButton.addEventListener("click", () => {
    rocket.classList.add('move');
})