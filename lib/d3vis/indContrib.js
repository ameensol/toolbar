var indContrib = module.exports = function (target) {

  console.log('FUCK');

  var w = 400;
  var h = 400;
  var padding = 30;

  var colors = ["orange", "green"];
  var xSpace = 190;
  var xMargin = 0;
  var yMargin = 200;

  console.log(target);

  var svg = d3.select(target)
    .append("svg")
    .attr("height", h)
    .attr("width", w)
    .attr("fill", colors[0]); 
};

    

  //   truncData = dataset.slice(0, 10);

  //   var xScale = d3.scale.linear()
  //     .domain([0, d3.max(truncData, function(d) {
  //       // use larger of 2 yes and no values
  //       if (d[1].no > d[1].yes) return d[1].no;
  //       return d[1].yes; })])
  //     .rangeRound([0, w/2 - padding * 2]);

  //   var yScale = d3.scale.ordinal()
  //     .domain(d3.range(truncData.length))
  //     .rangeRoundBands([padding, h - padding], 0.20);

  //   var formatAsPercentage = d3.format(".1%");

  //   var xAxis = d3.svg.axis()
  //     .scale(xScale)
  //     .orient("bottom")
  //     .ticks(5);

  //   var yAxis = d3.svg.axis()
  //     .scale(yScale)
  //     .orient("left")
