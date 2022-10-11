let navMenu = ["index.html", "BlogPostSection.html", "DesignSection.html", "Data.html", "References.html"];
let navMenuItems = [document.getElementById('index'), document.getElementById('index'), document.getElementById('index'), document.getElementById('index'), document.getElementById('index')] 
let i =0; //index shoud be required destination

navMenuItems[i].onclick = function()
{
    location.href = navMenu[i]
}

function Index()
{
    location.href="index.html";
};

function BlogPostSection()
{
    location.href="BlogPostSection.html";
};

function BlogPost1()
{
    location.href="BlogPost1.html";
};

function BlogPost2()
{
    location.href="BlogPost2.html";
};

function BlogPost3()
{
    location.href="BlogPost3.html";
};

function DesignSection()
{
    location.href="DesignSection.html";
};

function DataVisualisationSection()
{
    location.href="DataVisualisationSection.html";
};

function DataArt()
{
    location.href="DataArt.html";
};

function DataArtDocumentation()
{
    location.href="DataArtDocumentation.html";
} 

function Data()
{
    location.href="Data.html";
};

function DesignWireframes()
{
    location.href="DesignWireframes.html";
};

function DesignDocumentation()
{
    location.href="DesignDocumentation.html";
};

function InteractiveDataDocumentation()
{
    location.href="InteractiveDataDocumentation.html";
};

function References()
{
    location.href="References.html";
};

function RevisedWireframes()
{
    location.href="RevisedWireframes.html";
};

window.onresize = function(){ location.reload(); }