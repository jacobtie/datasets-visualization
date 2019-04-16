function loadScatterChart(){
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawScatterChart);
}


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

  var chart = new google.visualization.ScatterChart(document.getElementById('scatterplot-diagram'));

  chart.draw(data, options);
}