var datasets;
var subset;

fetch("datasets.json")
    .then(response => response.json())
    .then(json => {console.log("Data is loaded."); subset = datasets = json});

function reduceByFreq(arr) {
    let acc = [];
    arr.forEach(v => {
        let found = false;
        for (let i = 0; i < acc.length; i++) {
            if (acc[i][0] === v) {
                acc[i][1]++;
                found = true;
                break;
            }
        }
        if (!found) {
            acc.push([v, 1]);
        }
    });

    return acc;
}

function getKeywordFreqFromSubset() {
    let keywordFreq = {"name": "Datasets", "children": []};

}

function getSubjectFreqFromDatasets() {
    let subjectFreq = {"name": "Datasets", "children": []};
    let allSubjects = datasets.flatMap(d => d["subject"]);
    reduceByFreq(allSubjects).forEach(s => {
        subjectFreq["children"].push({"name":s[0], "value":s[1]});
    });
    return subjectFreq;
}