// Selects a subject and filters subset
function selectSubject(sub) {
    subject = sub;
    keywords = [];
    subset = datasets.filter(d => d["subject"].includes(subject));
    drawCharts();
}

// Refilters the dataset into subset with the current subject and keywords
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

// Adds a keyword and filters
function selectKeyword(keyword) {
    keywords.push(keyword);
    filterByKeywords();
}

// Removes a keyword and filters
function unselectKeyword(keyword) {
    keywords = keywords.filter(k => k !== keyword);
    filterByKeywords();
}

// Clears all selections and reintializes subset to datasets
function clearSelections() {
    subject = null;
    keywords = [];
    subset = datasets;
}