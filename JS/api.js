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
    document.querySelector(".text-2a").innerText = e.title; //loop through this data and store in own array, do same for graph data 
    document.querySelector(".text-2b").innerText = e.description;
    document.querySelector(".img-1").src = e.image;
}


// fetch('https://api.metalpriceapi.com/v1/latest?api_key=efb5b25b8921524e44968d5c2ca45a7c&base=USD&currencies=XAU,XAG,XPT,XPD,XRH,RUTH,IRD,OSMIUM,')
// .then(r => 
//     {return r.json()})
// .then(p => {
//     // {for (const a of data){
//     //     console.log(a.rates)
//     // }}
//     console.log(p.parse());
//     console.log(p.parse().rates);
// })
// .catch(
//     error => console.warn('Our warning',error));


