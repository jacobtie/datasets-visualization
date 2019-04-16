var datasets;
var subset;
var subject;
var keywords = [];

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
    let allKeywords = subset.flatMap(d => d["keywords"]);
    reduceByFreq(allKeywords).forEach(k => {
        keywordFreq["children"].push({"name":k[0], "value":k[1]});
    });
    return keywordFreq;
}

function getSubjectFreqFromDatasets() {
    let subjectFreq = {"name": "Datasets", "children": []};
    let allSubjects = datasets.flatMap(d => d["subject"]);
    reduceByFreq(allSubjects).forEach(s => {
        subjectFreq["children"].push({"name":s[0], "value":s[1]});
    });
    return subjectFreq;
}

function selectSubject(sub) {
    subject = sub;
    keywords = [];
    subset = datasets.filter(d => d["subject"].includes(subject));
}

function filterByKeywords() {
    subset = datasets.filter(d => d["subject"].includes(subject));
    subset = subset.filter(d => {
        let keep = true;
        for (k of keywords) {
            if (!d["keywords"].includes(k)) {
                keep = false;
                break;
            }
        }
        return keep;
    });
}

function selectKeyword(keyword) {
    keywords.push(keyword);
    filterByKeywords();
}

function unselectKeyword(keyword) {
    keywords = keywords.filter(k => k !== keyword);
    filterByKeywords();
}

function clearSelections() {
    subject = null;
    keywords = [];
    subset = datasets;
}