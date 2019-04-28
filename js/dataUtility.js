// Reduces an array with multiple occurances to a 2d array with num of occurances
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

// Gets the keywords from the subset, formatted for a d3 hierarchy
function getKeywordFreqFromSubset() {
    let keywordFreq = {"name": "Datasets", "children": []};
    let allKeywords = subset.flatMap(d => d["keywords"]);
    reduceByFreq(allKeywords).forEach(k => {
        if (!keywords.includes(k[0])) {
            keywordFreq["children"].push({"name":k[0], "value":k[1]});
        }
    });
    return keywordFreq;
}

// Gets the subject from the dataset, formatted for a d3 hierarchy
function getSubjectFreqFromDatasets() {
    let subjectFreq = {"name": "Datasets", "children": []};
    let allSubjects = datasets.flatMap(d => d["subject"]);
    reduceByFreq(allSubjects).forEach(s => {
        subjectFreq["children"].push({"name":s[0], "value":s[1]});
    });
    return subjectFreq;
}

function getDate_FileSize() {

    let date_filesize = subset.map(d => [d['lastUpdateTime'], d['filesize'], d['title']]);

    date_filesize.sort(function(a, b) {
        a = new Date(a[0]);
        b = new Date(b[0]);
        return a>b ? 1 : a<b ? -1 : 0;
    });

    return date_filesize;
}
