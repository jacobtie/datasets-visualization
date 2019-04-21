function loadScatterChart(){
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawScatterChart);
}

var chart;

function drawScatterChart() {
  var data = google.visualization.arrayToDataTable(getDate_FileSize());

  var options = {
    title: 'FileSize vs Date',
    hAxis: {title: 'Date'},
    vAxis: {title: 'FileSize'},
    legend: 'none'

    // hAxis: {title: "Date"},
    // vAxis: {title: "FileSize"},
    // width=100%,
    // height=100%
  };

  chart = new google.visualization.ScatterChart(document.getElementById('scatterplot-diagram'));

  document.getElementById('scatterplot-diagram').innerHTML = '';

  chart.draw(data, options);

  google.visualization.events.addListener(chart, 'select', selectHandler);
}

function selectHandler(e) {
  selectedPoint = chart.getSelection()

  index = selectedPoint[0].row

  dataset = subset[index]

  alert("Title: " + dataset.title + "\n\n" +
  "URL: " + dataset.url + "\n\n" +
  "Description: " + dataset.description + "\n\n")

}