var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
var modalTitle = document.querySelector("#modal-title");
var modalLink = document.querySelector("#modal-link");
var modalDescription = document.querySelector("#modal-description");

var chart;

function drawScatterChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Date');
  data.addColumn('number', 'FileSize');
  data.addColumn({type: 'string', role: 'tooltip'});

  data.addRows(getDate_FileSize());

  var options = {
    title: 'FileSize vs Date',
    hAxis: {title: 'Date'},
    vAxis: {title: 'FileSize'},
    legend: 'none',
    backgroundColor: 'whitesmoke'
  };

  chart = new google.visualization.ScatterChart(document.getElementById('scatterplot-diagram'));

  document.getElementById('scatterplot-diagram').innerHTML = '';

  chart.draw(data, options);

  google.visualization.events.addListener(chart, 'select', selectHandler);
}

function selectHandler(e) {
  // select point and extract info from subset
  let selectedPoint = chart.getSelection()
  if (selectedPoint.length !== 0) {
    let tempIndex = selectedPoint[0].row;
    let metaData = getDate_FileSize()[tempIndex];
    let dataPoint = subset.filter(d => d['lastUpdateTime'] === metaData[0] && d['filesize'] === metaData[1])[0];
    //display modal and its content
    modalTitle.innerHTML = dataPoint.title + "<br />";
    modalLink.innerHTML = dataPoint.url + "<br />"
    modalLink.setAttribute("href", dataPoint.url)
    modalDescription.innerHTML = "<br />" + dataPoint.description.replace(/<a /g, '<a target="_blank" ') + "<br />"

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
}