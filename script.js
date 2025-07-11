
///// PX

const spanPx = document.getElementById("px");
const btnPlusPx = document.getElementById("pluspx");
const btnMoinsPx = document.getElementById("moinspx");

function getPxValue() {
    return parseInt(spanPx.textContent);
}

function setPxValue(value) {
    spanPx.textContent = value + "px";
    spanPx.style.fontSize = value + "px";
}

// écouteurs d'événements
btnPlusPx.addEventListener("click", () => {
    let value = getPxValue();
    setPxValue(value + 1);
});

btnMoinsPx.addEventListener("click", () => {
    let value = getPxValue();
    setPxValue(value - 1);
});

///// %

const spanPour = document.getElementById("pour");
const btnPlusPour = document.getElementById("pluspour");
const btnMoinsPour = document.getElementById("moinspour");

function getPourValue() {
    return parseInt(spanPour.textContent);
}

function setPourValue(value) {
    spanPour.textContent = value + "%";
    spanPour.style.fontSize = value + "%";
}

// écouteurs d'événements
btnPlusPour.addEventListener("click", () => {
    let value = getPourValue();
    setPourValue(value + 10);
});

btnMoinsPour.addEventListener("click", () => {
    let value = getPourValue();
    setPourValue(value - 10);
});

/// EM

const spanEm = document.getElementById("em");
const btnPlusEm = document.getElementById("plusem");
const btnMoinsEm = document.getElementById("moinsem");

function getEmValue() {
    return parseInt(spanEm.textContent);
}

function setEmValue(value) {
    spanEm.textContent = value + "em";
    spanEm.style.fontSize = value + "em";
}

// écouteurs d'événements
btnPlusEm.addEventListener("click", () => {
    let value = getEmValue();
    setEmValue(value + 1);
});

btnMoinsEm.addEventListener("click", () => {
    let value = getEmValue();
    setEmValue(value - 1);
});

/// REM

const spanRem = document.getElementById("rem");
const btnPlusRem = document.getElementById("plusrem");
const btnMoinsRem = document.getElementById("moinsrem");

function getRemValue() {
    return parseFloat(spanRem.textContent);
}

function setRemValue(value) {
    value = Math.round(value * 10) / 10;
    spanRem.textContent = value + "rem";
    spanRem.style.fontSize = value + "rem";
}

// écouteurs d'événements
btnPlusRem.addEventListener("click", () => {
    let value = getRemValue();
    setRemValue(value + 0.1);
});

btnMoinsRem.addEventListener("click", () => {
    let value = getRemValue();
    setRemValue(value - 0.1);
});

