// Draws the bubble chart with d3
function drawBubbleChart() {
    document.getElementById('bubble-diagram').innerHTML = '<svg width="100%" height="100%"></svg>';
    // d3.select('#bubble-diagram svg').selectAll('g').remove();
    let keyword = false;
    let end = false;
    if (subject === null) {
        console.log("Drawing subject bubbles");
        data = getSubjectFreqFromDatasets();
    } else {
        console.log("Drawing keyword bubbles");
        data = getKeywordFreqFromSubset();
        if (data['children'].length > 25) {
            data['children'] = data['children'].sort((a, b) => a['value'] > b['value'] ? -1 : 1).slice(0, 25);
        }
        keyword = true;
        end = data['children'].length === 1;
    }
    let root = d3.hierarchy(data);
    let packLayout = d3.pack().padding(10);
    packLayout.size([document.getElementById('bubble-diagram').clientWidth, document.getElementById('bubble-diagram').clientHeight]);
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
        .on('click', d => end ? null : keyword ? selectKeyword(d.data.name) : selectSubject(d.data.name));
    
    nodes.append('title')
        .text(d => d.data.name+", "+d.data.value)

    nodes.append('circle')
        .attr('r', d => d.r)
        .attr('fill', 'lightblue')
        .attr('stroke', 'black');

    nodes.append('text')
        .attr("font-size", d => d.r/4)
        .each(function (d) {
            var arr = d.data.name.split(" ");
            for (i = 0; i < arr.length+1 && i < 4; i++) {
                d3.select(this).append("tspan")
                    .text(i == arr.length || i == 3 ? d.data.value : arr[i])
                    .attr("dy", i ? "1.2em" : "-1em")
                    .attr("x", 0)
                    .attr("text-anchor", "middle");
            }
        })
}