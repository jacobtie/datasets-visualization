fetch('datasets.json')
    .then(response => response.json())
    .then(json => {console.log("Data is loaded."); var datasets = json})

