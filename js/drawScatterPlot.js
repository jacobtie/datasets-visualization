var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
var modalTitle = document.querySelector("#modal-title");
var modalLink = document.querySelector("#modal-link");
var modalDescription = document.querySelector("#modal-description");

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

  };

  chart = new google.visualization.ScatterChart(document.getElementById('scatterplot-diagram'));

  chart.draw(data, options);

  google.visualization.events.addListener(chart, 'select', selectHandler);
}

function selectHandler(e) {
  // select point and extract info from subset
  selectedPoint = chart.getSelection()

  index = selectedPoint[0].row

  dataset = subset[index]

  //display modal and its content
  modalTitle.innerHTML = "Title: " + dataset.title + "<br>";
  modalLink.innerHTML = dataset.url + "<br>"
  modalLink.setAttribute("href", dataset.url)
  modalDescription.innerHTML = "Description" + dataset.description + "<br>"


  modal.style.display = "block";
  

  //next two functions hide modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }

  }
}