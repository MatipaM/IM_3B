//NAV BAR
const navMenu = ["index.html", "BlogPostSection.html", "DesignSection.html", "Data.html"];
let navArea = document.getElementById('nav');
let navButtons = navArea.getElementsByTagName('a');
let icons = navArea.getElementsByTagName('i');

for(let i = 0; i < navMenu.length; i++)
{
    navButtons[i].classList.add("u-url");
    icons[i].classList.add("fa-solid");

    let className;
    let innerText;

    switch(i)
    {
        case 0:
            className = "fa-house-chimney";
            innerText = "Home";
            break;
        case 1:
            className = "fa-blog";
            innerText = "Blogs";
            break;
        case 2:
            className = "fa-paint-roller";
            innerText = "Design";
            break;
        case 3:
            className = "fa-database";
            innerText = "Data";
            break;
    }

    icons[i].classList.add(className);
    icons[i].innerHTML = innerText;

    navButtons[i].onclick = function()
    {
        location.href = navMenu[i]
    }
}

LoadPages();

// //in the situation the page is loaded directly and not via the section pages
function LoadPages()
{

    const blogPages = ["BlogPost1.html", "BlogPost2.html", "BlogPost3.html", "BlogPost4.html", "BlogPost5.html"];
    const dataPages = ["DataVisualisationSection.html", "DataArt.html", "DataGame.html"];
    const designPages = ["DesignWireframes.html", "RevisedWireframes.html", "DesignDocumentation.html", "DataArtDocumentation.html", "InteractiveDataDocumentation.html", "DataGameDoc.html"];

    let selectedArray = [];
    let designPagesselectedGridName;
    let currentButtons;

    let path = window.location.pathname;
    let pageName = path.split("/").pop();


    for(let a = 0; a < blogPages.length; a++)
    {
        if((pageName == blogPages[a]) || (pageName == "BlogPostSection.html"));
        {
            selectedArray = blogPages;
            selectedGridName = "blog-grid"
        }
    }

    for(let b = 0; b < designPages.length; b++)
    {

        if((pageName == designPages[b]) || (pageName == "DesignSection.html")){
            selectedArray = designPages;
            selectedGridName = "design-grid"
        }else{

        }
    }

    for(let c = 0; c < dataPages.length; c++)
    {

        if((pageName == dataPages[c]) || (pageName == "Data.html"))
        {
            selectedArray = dataPages;
            selectedGridName = "data-grid";
        }
        else
        {
        }
    } 

    if(selectedGridName != null)
    {
            let selectedGrid = document.getElementById(selectedGridName);
      
            for(let i = 0; i < selectedArray.length; i++)
        {
            if(selectedGrid != null)
            {
                currentButtons = selectedGrid.getElementsByTagName('a');

                currentButtons[i].classList.add("u-url");
        
                currentButtons[i].onclick = function()
                {
                    location.href = selectedArray[i]
                }
            }

          
            if(pageName == selectedArray[i])
            {
        
                let gridBtns = document.getElementById('grid-btns');
                gridBtns.classList.add("h-entry");
                let buttons = gridBtns.getElementsByTagName('a'); //array
                console.log(i);
        
                buttons[1].onclick = function()
                {
                    location.href = selectedArray[i]
                }
        
                for(let j = 0; j < buttons.length; j++)
                {
                    buttons[j].classList.add("u-url"); 
                    let dataClassname;
                    let buttonsText; 
        
                    switch(j)
                    {
                        case 0:
                            dataClassname = "prev-btn";
                            buttonsText = "Prev."
                            break;
                        case 1:
                            dataClassname = "top-btn";
                            buttonsText = "Top."
                            break;
                        case 2: 
                            dataClassname = "next-btn";
                            buttonsText = "Next"
                            break;
                    }
                    buttons[j].classList.add(dataClassname); 
                    buttons[j].innerHTML = buttonsText;
                }
        
                if((i+1)>= selectedArray.length)
                {
                    buttons[0].onclick = function()
                    {
                        location.href = selectedArray[i-1]
                    }
        
                    buttons[2].onclick = function() //dont hard code numbers!
                    {
                        location.href = selectedArray[0]
                    }
                }
                else if((i-1) < 0)
                {
                    buttons[0].onclick = function()
                    {
                        location.href = selectedArray[selectedArray.length-1]
                    }
        
                    buttons[2].onclick = function()
                    {
                        location.href = selectedArray[i + 1]
                    }
                }
                else{
        
                    buttons[0].onclick = function()
                    {
                        location.href = selectedArray[i-1]
                    }
        
                    buttons[2].onclick = function()
                    {
                        location.href = selectedArray[i + 1]
                    }
                }
                
                
            }
        }
    }

}   

function References()
{
    location.href="References.html";
};

window.onresize = function(){ location.reload(); }