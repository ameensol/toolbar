var caps = require('titlecaps');

var barChart = module.exports = function(target, dataset, title) {
  var w = 600;
  var h = 265;
  var padding = 30;

  var colors = ["orange", "green"];
  var xSpace = 160;
  var xMargin = 30;
  var yMargin = 200;

  var svg = d3.select(target)
    .append("svg")
    .attr("height", h)
    .attr("width", w);

  svg.append("rect")
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "white");

  var xScale = d3.scale.linear()
    .domain([0, d3.max(dataset, function(d) {
      return parseInt(d.amount || d.total_amount) })])
    // .rangeRound([0, w/2 - padding * 2]);
    .range([0, w - (xSpace + xMargin + 100)]); // 80 for text offset


  var yScale = d3.scale.ordinal()
    .domain(d3.range(dataset.length))
    .rangeRoundBands([padding, h - padding], 0.20);

  var formatAsPercentage = d3.format(".1%");

  var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom")
    .tickSize(0);

  var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left")
    .tickSize(0);

  var clip = svg.append("defs")
    .append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("x", xSpace + xMargin)
    .attr("width", w - (xSpace + xMargin + 100))
    .attr("height", h)

  var set = svg.selectAll(".set")
    .data(dataset)
    .enter()
    .append("g")
    .attr("transform", function(d, i) {
      return "translate(0," + yScale(i) + ")"
    })

  // Bars
  set.append("rect")
    .attr("clip-path", "url(#clip)")
    .attr("class", "bar")
    .attr("width", function(d) {
      return xScale(d.amount || d.total_amount) + 5
    })
    .attr("y", yScale.rangeBand() * 0.1)
    .attr("x", xSpace + xMargin - 5)
    .attr("height", yScale.rangeBand() * 0.9)
    .attr("rx", "4")
    .attr("ry", "4")
    .attr("fill", colors[0])

  // Dollar label of bar graph
  set.append("text")
    .attr("height", yScale.rangeBand())
    .attr("x", function(d) {
      return xScale(d.amount || d.total_amount) + xSpace + 8 + xMargin;
    })
    .attr("y", yScale.rangeBand() * 0.82)
    .text(function(d) {
      return "$" + Math.round(d.amount || d.total_amount).toLocaleString();
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "12px")
    .attr("fill", "dimgrey")

  // Industry label on y-axis
  set.append("text")
    .text(function(d) { 
      // TODO return only 1st letter uppercase
      // return d.name.toLowerCase();
      // return d.name;
      return caps.titlecaps(d.name.toLowerCase());
    })
    .attr("x", xMargin)
    .attr("y", yScale.rangeBand() * 0.88)
    .attr("font-family", "sans-serif")
    .attr("font-size", "12px")
    .attr("fill", "black")

  // title
  svg.append("text")
    .attr("x", padding)             
    .attr("y", (padding/1.5))
    .attr("text-anchor", "left")
    .style("font-size", "16px") 
    .style("text-decoration", "underline")  
    .text(title);

  // x axis
  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + (xSpace + xMargin) + "," + (h - padding) + ")")
    .call(xAxis);

  // y axis
  svg.append("g")
    .attr("class", "axis yAxis")
    .attr("transform", "translate(" + (xSpace + xMargin) + ",0)")
    .call(yAxis);
}