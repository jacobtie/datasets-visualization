var datasets;
var subset;
var subject;
var keywords = [];

fetch("datasets.json")
    .then(response => response.json())
    .then(json => {console.log("Data is loaded."); subset = datasets = json});
