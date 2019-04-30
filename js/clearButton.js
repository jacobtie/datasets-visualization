function drawClearButton() {
    const container = document.getElementById('clear');
    container.innerHTML = '<a href="#" onclick="clearAll()">Clear</a>';
}

function clearAll() {
    const container = document.getElementById('keywords');
    container.innerHTML = '';
    clearSelections();
}