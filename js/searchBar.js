function drawSearchBar() {
    const container = document.getElementById('search');
    container.innerHTML = '';
    const searchBar = document.createElement('select');
    searchBar.innerHTML = '<option selected="selected" value="default">Select</option>';
    searchBar.setAttribute('onchange','runSearch(this)');
    const type = subject === null ? 'subject' : 'keywords';
    const options = reduceByFreq(subset.flatMap(d => d[type])).sort((a, b) => a[1] < b[1] ? 1 : -1).map(s => s[0]).slice(0,1000);
    options.forEach(o => {
        searchBar.innerHTML += `<option value="${o}">${o}</option>`;
    });
    container.appendChild(searchBar);
}

function runSearch(selection) {
    if (selection.value !== 'default') {
        subject === null ? selectSubject(selection.value) : selectKeyword(selection.value);
    }
}