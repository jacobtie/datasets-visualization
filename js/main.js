var datasets;
var subset;
var subject = null;
var keywords = [];

$(document).ready(() => {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(initialize);
});

function initialize(){
    fetch("js/datasets.json")
    .then(response => response.json())
    .then(json => subset = datasets = json)
    .then(() => {drawClearButton(); drawCharts();});
}

function drawCharts(){
    drawScatterChart();
    drawBubbleChart();
    drawSearchBar();
}


