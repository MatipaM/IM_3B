// import * as fs from "fs";

let sourceData = []

fetch('https://ghibliapi.herokuapp.com/people')
.then((r) =>
sourceData = r.json()
    )
.then((p) => {
    let names= [];
    let gender = [];
    let age= [];
    let eye_colour = [];
    let hair_colour = [];
    let DataGameGrid = document.getElementById("data-game-grid");

    let Title = document.createElement("h1");
    let subTitle = document.createElement("h2");
    DataGameGrid.append(Title);
    DataGameGrid.append(subTitle);

    Title.innerHTML = "Studio Ghibli Game";
    subTitle.innerHTML = "Use the description to guess the character's profile";

    let playBtn = document.createElement("a"); 
    playBtn.innerText = "Play";
    playBtn.setAttribute('id', "playBtn");
    DataGameGrid.append(playBtn);

    const myCharacterNames = ["Haku","Pazu", "Lusheeta","Captain", "Romska", "Uncle", "General", "Duffi", "Louis", 
    "Charles", "Henri", "Motro", "Okami", "Ashitaka",  "San", "Eboshi",  "Jigo",
    "Kohroku", "Gonza", "Hii", "Yakul","Shishigami", "Moro","Jiji",  "Satsuki", "Mei", "Tatsuo",
    "Yasuko",    "Granny",  "Kanta", "Totoro", "Chu", "Chibi", "Catbus", "Niya", "Renaldo", "Cat","Yuki", "Haru",  
    "Baron", "Natori", "Colonel", "Porco","Sosuke","Kiki", "Laputian",  "Chihiro", "Osono",  "Ursula", "Tombo", 
    "Madame",  "Earwig",  "Bella",  "Mandrake",  "Scarlet", "Thomas", "Custard", 
  
    ];




    for(i=0; i <= 4; i++)
    {
        let descriptionButton = document.createElement("h3");
        descriptionButton.classList.add("descriptionCard");
        DataGameGrid.append(descriptionButton);
    }


    //fills up arrays
    for(i=0; i < p.length; i++)
    {
        names.push(p[i].name);
        gender.push(p[i].gender);
        age.push(p[i].age);
        eye_colour.push(p[i].eye_color);
        hair_colour.push(p[i].hair_color)
    }


        playBtn.onclick = function randomNum(){
            console.log("button clicked");
            let randomNum =  (Math.floor(Math.random()*(names.length)));
            generateButtons(randomNum);
        }
      
function generateButtons(randomNum)
{
    let descriptionButtons = document.getElementsByTagName("h3");

    for(i=0; i <= 4; i++)
    {
        let innerText;
        let innerVar;
        switch(i)
        {
            case 0:
                innerText = "Name: ";
                innerVar = names[randomNum];
                break;
            case 1:
                innerText = "Gender: ";
                innerVar = gender[randomNum];
                break;
            case 2:
                innerText = "Age: ";
                innerVar = age[randomNum];
                break;
            case 3:
                innerText = "Eye Colour: ";
                innerVar = eye_colour[randomNum];
                break;
            case 4:
                innerText = "Hair Colour: ";
                innerVar = hair_colour[randomNum];
        }

        descriptionButtons[i].innerText = innerText + innerVar;
    }


        let correctImg = document.createElement("img");
        correctImg.src = "../Images/Characters/"+myCharacterNames[randomNum]+(".png");
        console.log(correctImg);

        loadOtherImages(randomNum);

  
}   



function loadOtherImages(randomNum)
{
    //dont laod correct image
}

     



})
.catch(
    error => console.warn('Our warning',error));




    







