function drawKeyword(keyword) {
    const container = document.getElementById('keywords');
    const newDiv = document.createElement('div');
    newDiv.className = 'keyword filtered';
    newDiv.id = keyword;
    const newA = document.createElement('a');
    newA.href = "#";
    newA.setAttribute('onclick', `removeKeyword("${keyword}")`);
    newA.innerHTML = "X";
    newDiv.appendChild(newA);
    const newSpan = document.createElement('span');
    newSpan.innerHTML = keyword;
    newDiv.appendChild(newSpan);
    container.appendChild(newDiv);
}

function removeKeyword(keyword) {
    const container = document.getElementById('keywords');
    container.removeChild(document.getElementById(keyword));
    unselectKeyword(keyword);
}

function drawSubject(subject) {
    const container = document.getElementById('keywords');
    const newDiv = document.createElement('div');
    newDiv.className = 'subject filtered';
    newDiv.id = subject;
    const newA = document.createElement('a');
    newA.href = "#";
    newA.setAttribute('onclick', `removeSubject()`);
    newA.innerHTML = "X";
    newDiv.appendChild(newA);
    const newSpan = document.createElement('span');
    newSpan.innerHTML = subject;
    newDiv.appendChild(newSpan);
    container.appendChild(newDiv);
}

function removeSubject() {
    const container = document.getElementById('keywords');
    container.innerHTML = "";
    clearSelections();
}
