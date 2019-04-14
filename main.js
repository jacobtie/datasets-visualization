var datasets;

fetch('datasets.json')
    .then(response => response.json())
    .then(json => {console.log("Data is loaded."); datasets = json})

