fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
.then((r) => 
    r.json())
.then((p) => {
    console.log(p);
    return handleStudioGhibli(p);
})
.catch(
    error => console.warn('Our warning',error));



const handleStudioGhibli = (e) => { //when user clicks on point should display image and title
    document.querySelector(".text-2a").innerText = e.title;
    document.querySelector(".text-2b").innerText = e.description;
    document.querySelector(".img-1").src = e.image;
}