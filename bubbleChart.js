// Draws the bubble chart with d3
function drawBubbleChart() {
    d3.select('#bubble-diagram svg').selectAll('g').remove();
    let keyword = false;
    if (subject === null) {
        console.log("Drawing subject bubbles");
        data = getSubjectFreqFromDatasets();
    } else {
        console.log("Drawing keyword bubbles");
        data = getKeywordFreqFromSubset();
        if (data['children'].length > 10) {
            data['children'] = data['children'].sort((a, b) => a['value'] > b['value'] ? -1 : 1).slice(0, 10);
        }
        keyword = true;
    }
    let root = d3.hierarchy(data);
        let packLayout = d3.pack().padding(10);
        packLayout.size([500, 500]);
        root.sum(d => d['value']);
        toAdd = root.descendants().filter(d => d.depth != 0);
        packLayout(root);
        nodes = d3.select('#bubble-diagram svg')
            .selectAll('circle')
            .data(toAdd)
            .enter()
            .append('g')
            .attr('style', 'cursor:pointer')
            .attr('transform', d => 'translate(' + [d.x, d.y] + ')')
            .on('click', d => keyword ? selectKeyword(d.data.name) : selectSubject(d.data.name));
        nodes.append('circle')
            .attr('r', d => d.r)
            .attr('fill', 'white')
            .attr('stroke', 'black');
        nodes.append('text')
            .text(d => d.data.name);
}