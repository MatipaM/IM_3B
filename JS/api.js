let sourceData = []

fetch('https://ghibliapi.herokuapp.com/films')
.then((r) =>
sourceData = r.json()
    )
.then((p) => {
    console.log(p);
    // handleStudioGhibli(sourceData);

    let movieTitles= [];
    let ratings= [];
    let dateReleased= [];
    let movieData2 = [];
    let movieData = [];
    let runningTime = [];

    for(i=0; i < p.length; i++)
    {
        // let format = d3.time.format("%Y");
        // format.parse(dateReleased[i]);
        movieTitles.push(p[i].title);
        ratings.push(p[i].rt_score);
        dateReleased.push(p[i].release_date);
        runningTime.push(p[i].running_time);
        movieData.push({x: dateReleased[i],y: ratings[i]})
        movieData2.push({x: runningTime[i],y: ratings[i]})
    }

        console.log(movieData, movieData2)

            let margin = 50; 
            let topMargin = 20;
            let graphHeight = 500;
            let xOffset = -5;
            let yOffset = 5;
            
            
            let vizArea = d3.select("#viz");
            console.log(vizArea);
            let xScale = d3.scaleTime().domain([1985,2025]).range([0,500]);
            let yScale = d3.scaleLinear().domain([0,100]).range([500,0]);
            
            vizArea
            .append('g')
            .style('stroke', '#545454')
            .attr("transform", `translate(${margin},${topMargin})`)
            .call(d3.axisLeft(yScale));
            
            
            vizArea
            .append('g')
            .style('stroke', '#545454')
            .attr("transform", `translate(${margin},${graphHeight+topMargin})`)
            .call(d3.axisBottom(xScale));
            
            vizArea
            .selectAll("points")
            .data(movieData) 
            .enter() 
            .append("circle")
            .style('fill', '#545454')
            .attr("cx", function(d){ 
                d.x = d.x - xOffset
                return xScale(d.x)
            })
            .attr("cy", function(d){
                d.y = d.y - yOffset
                return yScale(d.y)
            })
            .attr("r",3)

            vizArea.append("text")
            .text("%")
            .attr("x", 0)
            .attr("y", 300)
            .style("font-size", "20px")
            .style('fill', '#545454')

            vizArea.append("text")
            .text("years")
            .attr("x", 300)
            .attr("y", 570)
            .style("font-size", "20px")
            .style('fill', '#545454')

            vizArea.append("rect")        
            .style("fill", "navy")  
            .attr("x", 50)     
            .attr("y", 20)    
            .attr("width", 600)
            .attr("height",50 )
            .attr("opacity",0.3 )


            //graph 2
            let margin2 = 50; //position where placeholder image is
            let topMargin2 = 20;
            let graphHeight2 = 500;
            let xOffset2 = -1914;
            let yOffset2 = 3;
            
            
            let vizArea2 = d3.select("#viz-2");
            let xScale2 = d3.scaleLinear().domain([80,140]).range([0,500]);
            let yScale2 = d3.scaleLinear().domain([0,100]).range([500,0]);
            
            vizArea2
            .append('g')
            .style('stroke', '#545454')
            .attr("transform", `translate(${margin2},${topMargin2})`)
            .call(d3.axisLeft(yScale2));
            
            
            vizArea2
            .append('g')
            .style('stroke', '#545454')
            .attr("transform", `translate(${margin2},${graphHeight2+topMargin2})`)
            .call(d3.axisBottom(xScale2));
            
            vizArea2
            .selectAll("dots")
            .data(movieData2) 
            .enter() 
            .append("circle")
            .style('fill', '#545454')
            .attr("cx", function(d){ 
                d.x = d.x -xOffset2
                console.log(d.x)
                return xScale(d.x)
            })
            .attr("cy", function(d){
                d.y = d.y - yOffset2
                console.log(d.y)
                return yScale(d.y)
            })
            .attr("r",3)

            vizArea2.append("rect")        
            .style("fill", "navy")  
            .attr("x", 175)     
            .attr("y", 20)    
            .attr("width", 230)
            .attr("height",500)
            .attr("opacity",0.3)

            vizArea2.append("text")
            .text("min")
            .attr("x", 300)
            .attr("y", 570)
            .style("font-size", "20px")
            .style('fill', '#545454')

            vizArea2.append("text")
            .text("%")
            .attr("x", 0)
            .attr("y", 300)
            .style("font-size", "20px")
            .style('fill', '#545454')


})
.catch(
    error => console.warn('Our warning',error));

// const handleStudioGhibli = (e) => { //when user clicks on point should display image and title
//     i = 0;
//     document.querySelector(".text-2a").innerText = e[i].title; //loop through this data and store in own array, do same for graph data 
//     document.querySelector(".text-2b").innerText = e[i].description;
//     document.querySelector(".img-1").src = e[i].image;
// }



// function nextMovie(sourceData) 
// {

//     for(i=0; i <= sourceData.length; i++)
//     {
//         document.querySelector(".text-2a").innerText = sourceData[i].title; //loop through this data and store in own array, do same for graph data 
//         document.querySelector(".text-2b").innerText = sourceData[i].description;
//         document.querySelector(".img-1").src = sourceData[i].image;
//         if(i == 22)
//         {
//             i = 0
//         }
//     }

    
// }





