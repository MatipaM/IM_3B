fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
.then((r) => 
    r.json())
.then((p) => {
    console.log(p);
    return handleStudioGhibli(p);
})
.catch(
    error => console.warn('Our warning',error));



const handleStudioGhibli = (e) => {
    document.querySelector(".text2a").innerText = e.title;
    document.querySelector(".img1").src = e.image;
}