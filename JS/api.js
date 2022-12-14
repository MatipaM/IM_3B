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
    let movieData3 = [];
    let movieData2 = [];
    let movieData = [];
    let runningTime = [];
    let description = [];
    let images = [];

    for(i=0; i < p.length; i++)
    {
        // let format = d3.time.format("%Y");
        // format.parse(dateReleased[i]);
        movieTitles.push(p[i].title);
        ratings.push(p[i].rt_score);
        dateReleased.push(p[i].release_date);
        runningTime.push(p[i].running_time);
        description.push(p[i].description);

        images.push(p[i].image);
        movieData.push({x: dateReleased[i],y: ratings[i]})
        movieData2.push({x: runningTime[i],y: ratings[i]})
        movieData3.push({x: runningTime[i], y: dateReleased[i]})
    }

        console.log(movieData, movieData2)

            const margin = 50; 
            const topMargin = 20;
            const graphHeight = 500;
            const xOffset = -5;
            const yOffset = 5;
            
            
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

            vizArea.append("rect")        
            .style("fill", "navy")  
            .attr("x", 50)     
            .attr("y", 20)    
            .attr("width", 500)
            .attr("height",50 )
            .attr("opacity",0.3 )
            
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
            .on("mouseenter", function (actual, i) { // change colour and add more info on other side
                    d3.select(this)
                    .style("fill", "red")
                    console.log(sourceData);
                    document.querySelector(".text-2a").innerText = movieTitles[i]; 
                    document.querySelector(".text-2b").innerText = description[i];
                    document.querySelector(".img-1").src = images[i];
                })
            .on("mouseleave", function (actual, i) { //change colour back
                    d3.select(this)
                    // .style('fill', '#545454')
                })

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

           


            //graph 2
            const margin2 = 50; //position where placeholder image is
            const topMargin2 = 20;
            const graphHeight2 = 500;
            const xOffset2 = -1924; //1914
            const yOffset2 = 3;
            
            
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

            vizArea2.append("rect")        
            .style("fill", "navy")  
            .attr("x", 175)     
            .attr("y", 20)    
            .attr("width", 230)
            .attr("height",500)
            .attr("opacity",0.3)
            
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
            // .on("mouseenter", function (actual, i) { // change colour and add more info on other side
            //     d3.select(this)
            //     .style("fill", "red")
            //     console.log(sourceData);
            //     document.querySelector(".text-3a").innerText = movieTitles[i]; 
            //     document.querySelector(".text-3b").innerText = description[i];
            //     document.querySelector(".img-2").src = images[i];
            // })
        // .on("mouseleave", function (actual, i) { //change colour back
        //         d3.select(this)
        //         // .style('fill', '#545454')
        //     })

            console.log(movieData3.x, movieData3.y);

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


            d3.selectAll("label") //for each p element, it returns Hello
            .data(movieTitles) //binding data to element p, takes in an array
            .text(function(d, i){ //i is index
                let text = d3.selectAll("label").innerText;
                text = movieTitles[i]; //this refers to the element being return in d3.selectAll("p")
            })

            


            //  //graph 3
            const margin3 = 100; //position where placeholder image is
            const topMargin3 = 20;
            const graphHeight3 = 500;
            const xOffset3 = 100; 
            const yOffset3 = -1871; //1914
             
             let vizArea3 = d3.select("#viz-3");
             let xScale3 = d3.scaleLinear().domain([80,140]).range([0,475]);
             let yScale3 = d3.scaleTime().domain([1985,2025]).range([0,500]);
             
             vizArea3
             .append('g')
             .style('stroke', '#545454')
             .attr("transform", `translate(${margin3},${topMargin3})`)
             .call(d3.axisLeft(yScale3));
             
             
             vizArea3
             .append('g')
             .style('stroke', '#545454')
             .attr("transform", `translate(${margin3},${graphHeight3+topMargin3})`)
             .call(d3.axisBottom(xScale3));

             
             vizArea3
             .selectAll("dots")
             .data(movieData3) 
             .enter() 
             .append("circle")
             .style('fill', '#545454')
             .attr("cx", function(d){ 
                 d.x = d.x -xOffset3
                 console.log(d.x)
                 return xScale(d.x)
             })
             .attr("cy", function(d){
                 d.y = d.y - yOffset3
                 console.log(d.y)
                 return yScale(d.y)
             })
             .attr("r",3)

             vizArea3.append("text")
             .text("min")
             .attr("x", 300)
             .attr("y", 550)
             .style("font-size", "20px")
             .style('fill', '#545454')
 
             vizArea3.append("text")
             .text("years")
             .attr("x", 0)
             .attr("y", 300)
             .style("font-size", "20px")
             .style('fill', '#545454')

})
.catch(
    error => console.warn('Our warning',error));







