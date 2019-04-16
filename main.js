var datasets;
var subset;
var subject;
var keywords = [];

fetch("datasets.json")
    .then(response => response.json())
    .then(json => {console.log("Data is loaded."); subset = datasets = json});

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