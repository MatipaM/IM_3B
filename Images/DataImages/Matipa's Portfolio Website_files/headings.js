var clicked = false;

$('h1').on("mouseover",function(){

    if(clicked == true)
    {
        $('h1').css('color', 'brown');
        clicked = false;
    }
    else{
        $('h1').css('color', 'black');
        clicked = true;
    }
});