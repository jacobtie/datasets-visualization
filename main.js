var datasets;
var subset;
var subject = null;
var keywords = [];

$(document).ready(() => initialize());

// Runs when page loads, fetches json, parses, initializes subset and dataset, and calls drawCharts()
function initialize() {
    fetch("datasets.json")
    .then(response => response.json())
    .then(json => {console.log("Data is loaded."); subset = datasets = json})
    .then(() => drawCharts());
}


// Draws the charts
function drawCharts() {
    drawBubbleChart();
    loadScatterChart();
}
