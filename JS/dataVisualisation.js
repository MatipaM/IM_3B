// let exampleData = [
//     {x:10, y:20},
//     {x:40, y:90},
//     {x:80, y:50}
// //data from API
// ]

// let margin = 50; //position where placeholder image is
// let topMargin = 50;
// let graphHeight = 500;
// let offset = 10;


// let vizArea = d3.select("#viz");
// console.log(vizArea);
// let xScale = d3.scaleLinear().domain([0,100]).range([0,500]);
// let yScale = d3.scaleLinear().domain([0,100]).range([500,0]);

// vizArea
// .append('g')
// // .attr("transform", `translate(${margin}, ${height-margin})`)
// .attr("transform", `translate(${margin},${topMargin})`)
// .call(d3.axisLeft(yScale));

// vizArea
// .append('g')
// .attr("transform", `translate(${margin},${graphHeight+topMargin})`)
// .call(d3.axisBottom(xScale));

// vizArea
// .selectAll("dots") //identify different ele,emts
// .data(exampleData) //goes after se;ect a;;
// .enter() //must go after data
// .append("circle")
// .attr("cx", function(d){ //foreach
//     d.x = d.x + offset
//     return xScale(d.x)
// })
// .attr("cy", function(d){
//     d.y = d.y - offset
//     return yScale(d.y)
// })
// .attr("r", 7)
