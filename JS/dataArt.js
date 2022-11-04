let sourceData = []

fetch('https://ghibliapi.herokuapp.com/films')
.then((r) =>
sourceData = r.json()
    )
.then((p) => {
    let movieTitles= [];
    let description = [];
    let ratings= [];
    let images = [];
    let DataArtGrid = document.getElementById("data-art-grid");

    let Titles = document.getElementsByTagName("h1");

    console.log(Titles);
    Titles[1].innerHTML = "Studio Ghibli Collage";

    Titles[2].classList.add("text-2a");
    Titles[2].innerHTML = "Hover for more information";

    
    let DataArtAnalysisGrid = document.getElementById("data-art-analysis-grid");
    console.log(DataArtAnalysisGrid);
    let analysisSubheading = DataArtAnalysisGrid.getElementsByTagName("h2");
    console.log(analysisSubheading);
    analysisSubheading[0].classList.add("text-2b");
    analysisSubheading[0].innerHTML = "If you don't like the collage order, refresh the page :)";

    for(i=0; i < p.length; i++)
    {
        ratings.push(p[i].rt_score);
        movieTitles.push(p[i].title);
        description.push(p[i].description);
        images.push(p[i].image);

        let img = document.createElement("img");
        let movieTitle = p[i].title;
        let movieDescription = p[i].description;
        img.src = images[i];

        let DataArtGridSize = DataArtGrid.clientWidth;
        let rankingSize;
        let paddingTopMax;
        let paddingBottomMax;
        let paddingRightMax;
        let paddingLeftMax;

        if(ratings >= 90)
        {
            rankingSize = 0.3;
            paddingTopMax = 10;
            paddingBottomMax = 7;
            paddingRightMax = 11;
            paddingLeftMax = -5;
        }
        else{
            rankingSize = 0.25;
            paddingTopMax = 2;
            paddingBottomMax = 2;
            paddingRightMax = 2;
            paddingLeftMax = 0;
        }

        if(i >= 15)
        {
            -paddingBottomMax;
        }

        img.style.width = (Math.floor(Math.random()*(rankingSize*DataArtGridSize)) + "px");
        img.style.marginTop = ((Math.floor(Math.random()*(-paddingTopMax))) + "%");
        img.style.marginBottom = ((Math.floor(Math.random()*(-paddingBottomMax))) + "%");
        img.style.marginRight = (Math.floor(Math.random()*(-paddingRightMax))) + "%";
        img.style.marginLeft = (Math.floor(Math.random()*(-paddingLeftMax))) + "%";

        img.onmouseenter = function()
        {
            img.style.width = "30%";
            console.log(i);
            Titles[2].innerHTML = movieTitle; //not working
            analysisSubheading[0].innerHTML = movieDescription;
        }

        img.onmouseout = function()
        {
            img.style.width = "15%";
        }

        DataArtGrid.append(img);
    }

})
.catch(
    error => console.warn('Our warning',error));




    







