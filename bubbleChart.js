// Draws the bubble chart with d3
function drawBubbleChart() {
    if (subject === null) {
        console.log("Drawing subject bubbles");
        data = getSubjectFreqFromDatasets();
        let root = d3.hierarchy(data);
        let packLayout = d3.pack().padding(10);
        packLayout.size([500, 500]);
        root.sum(d => d['value']);
        packLayout(root);
        d3.select('#bubble-diagram svg')
            .selectAll('circle')
            .data(root.descendants())
            .enter()
            .append('circle')
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr('r', d => d.r === 250 ? 0 : d.r)
            .attr('fill', 'white')
            .attr('stroke', 'black');
    } else {
        console.log("Drawing keyword bubbles");
    }
}