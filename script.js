const testy = d3.select(".first-line").node();

d3.select("svg").on("mouseenter", function () {
  d3
    .select("#heart-container")
    .transition()
    .style("visibility", "visible").ease;
  d3
    .select("svg#env-flip")
    .transition()
    .duration(1000)
    .style("visibility", "visible").ease;
  d3.select(".env__fold-top-down").transition().style("visibility", "hidden");
  d3.select("g")
    .transition()
    .duration(800)
    .attr("transform", "translate(" + 0 + "," + -180 + ")")

    //d3.select('.second-line')
    //d3.select('.third-line')
    .on("end", function () {
      bringToFront();

      d3.select("g")
        .transition()
        .duration(800)
        .attr("transform", "translate(" + 0 + "," + 0 + ")");
    });
});

d3.select("svg").on("mouseleave", function () {
  d3.select("#heart-container").transition().style("visibility", "hidden").ease;
  d3.select("g")
    .transition()
    .duration(800)
    .attr("transform", "translate(" + 0 + "," + -180 + ")")

    .on("end", function () {
      sendToBack();
      d3.select("g")
        .transition()
        .duration(800)
        .attr("transform", "translate(" + 0 + "," + 0 + ")")
        .on("end", function () {
          d3
            .select("svg#env-flip")
            .transition()
            .style("visibility", "hidden").ease;
          d3
            .select(".env__fold-top-down")
            .transition()
            .style("visibility", "visible").ease;
        });
    });
});

function sendToBack() {
  var x = d3.select("g").node();
  var z = d3.select(".env__fold-bottom").node();
  x.parentElement.insertBefore(x, z);
}

function bringToFront() {
  var x = d3.select("g").node();

  x.parentElement.appendChild(x);
}