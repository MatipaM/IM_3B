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

    let ImageGrid = document.createElement("section");
    ImageGrid.setAttribute('id',"grid");

    let Title = document.createElement("h1");
    let subTitle = document.createElement("h2");
    DataGameGrid.append(Title);
    DataGameGrid.append(subTitle);

    Title.innerHTML = "Studio Ghibli Game";
    subTitle.innerHTML = "Use the description to guess the character's profile";

    let playBtn = document.createElement("a"); 
    playBtn.innerText = "Press 'Play'";
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

    DataGameGrid.append(ImageGrid);
    let correctImg = document.createElement("img");

    let incorrectImgs = [];
    let index;
    let randomArray;
    let answer = document.createElement("h3");
    DataGameGrid.append(answer);
    answer.innerText = "results will display here";

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
            index = 0;
            console.log("button clicked");
            startGame();
        }

        correctImg.onclick = function correct()
        {
            answer.innerText = "Yes! well done.";
            console.log("correct image called");

            setTimeout(startGame, 1500);
            
        }

        function startGame()
        {
            let randomNum =  (Math.floor(Math.random()*(names.length)));
            generateButtons(randomNum);
        }
      
function generateButtons(randomNum)
{
    answer.innerHTML = "";
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

        correctImg.src = "../IM_3B/Images/Characters/"+myCharacterNames[randomNum]+(".png");
    }

    let incorrectImg;

    for(i = 0; i<4; i++)
    {
        incorrectImg = document.createElement("img");
        incorrectImgs.push(incorrectImg);

        if(i==3)
        {
            console.log(incorrectImgs)
            let imgArray = [correctImg, incorrectImgs[0], incorrectImgs[1], incorrectImgs[2]];
            randomiseInt(imgArray);
        }
    }



    function randomiseInt(imgArray)
    {
        let randomInt = Math.floor(Math.random() * (57));   
        checkForDouble(randomInt, imgArray);      
    }

    function checkForDouble(randomInt, imgArray)
    {
        if(randomNum==randomInt)
        {
            randomiseInt(); 
        }
        else{
            assignIncorrectImg(randomInt, imgArray); //or call function with this paramtere
        } 
    }

    function assignIncorrectImg(randomInt, imgArray)
    {
        while(index<4)
        {
            incorrectImgs[index].src = "../IM_3B/Images/Characters/"+myCharacterNames[randomInt]+(".png"); //../Images/Characters/"+myCharacterNames[randomInt]+(".png")
            index++;
            randomiseInt(imgArray);
            
        }

        if(index==4)
        {
            displayShuffle(imgArray)
        }
    }

    function displayShuffle(imgArray)
    {
        console.log(imgArray);
        randomArray = imgArray.sort(()=> Math.random()-0.5);

        for(i=0; i<randomArray.length; i++)
        {
            ImageGrid.append(randomArray[i]);
        }

        // incorrectImg.onclick = function correct()
        // {
        //     answer.innerText = "No, sorry, try again!";
        // }
    
    }

  
  
}   

})
.catch(
    error => console.warn('Our warning',error));




    







