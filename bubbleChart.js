// Draws the bubble chart with d3
function drawBubbleChart() {
    if (subject === null) {
        console.log("Drawing subject bubbles");
        data = getSubjectFreqFromDatasets();
        let root = d3.hierarchy(data);
        let packLayout = d3.pack().padding(10);
        packLayout.size([500, 500]);
        root.sum(d => d['value']);
        console.log(root.descendants());
        toAdd = root.descendants().filter(d => d.depth != 0);
        packLayout(root);
        nodes = d3.select('#bubble-diagram svg')
            .selectAll('circle')
            .data(toAdd)
            .enter()
            .append('g')
            .attr('style', 'cursor:pointer')
            .attr('transform', d => 'translate(' + [d.x, d.y] + ')');
        nodes.append('circle')
            .attr('r', d => d.r)
            .attr('fill', 'white')
            .attr('stroke', 'black');
    } else {
        console.log("Drawing keyword bubbles");
    }
}