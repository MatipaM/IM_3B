/* JS Library usage examples */
"use strict";

const portfolio = new Portfolio();

const newItemDisplay = portfolio.createItemDisplay(".ex-item-slider");
const slider = newItemDisplay.createItemSlider();
slider.addItem(
  "Adam A.I.",
  "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
  "./example-assets/icon3.png",
  { GITHUB: "www.github.com", "LIVE DEMO": "www.github.com" }
);
slider.addItem(
  "Odin Bot",
  "A Telegram Bot that helps you excel in your daily tasks using NLP.",
  "./example-assets/icon1.png",
  { GITHUB: "www.github.com" }
);
slider.addItem(
  "Minimax Stonehenge",
  "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
  "./example-assets/icon2.png",
  { GITHUB: "www.github.com", "LIVE DEMO": "www.github.com" }
);


const newItemDisplay2 = portfolio.createItemDisplay(".ex-item-grid");
const grid = newItemDisplay2.createItemGrid();
grid.addItem(
  "University of the Witwatersrand ",
  "BA in Digital Arts (2023)",
  "Images/EducationLogos/WitsLogo.png", //change to icon
  { "Game Design ": " ", "Interactive Media": "" }
);
grid.addItem(
  "St. John's College",
  "(2017-2019)",
  "Images/EducationLogos/StJohnsLogo.png",
  { "A2 Maths": " ", "A2 Physics": "", "A2 Art": " ", "AS Biology": "" }
);



const expDisplay = portfolio.createExpDisplay(".ex-exp-stepper");
const stepper = expDisplay.createExpStepper();
stepper.addExpItem(
  "2022 Jan - May",
  "Robotic Process Automation Intern @ Firtech",
  "As an RPA developer, I created an automation which read through a database containing each employee’s time sheets. It sorted through the database to calculate their payroll for the month and displayed that information in an excel sheet. I also worked on a web application which securely stored digital documents for customers as well as provided a way for users to check in physical documents at their nearest POSTNET.",
  ["Blazor", "C#"]
);
stepper.addExpItem(
  "2022 June - Present",
  "Software Developer Intern @ Uhuru Financial Services",
  "  ",
  ["Amazon Web Services - QuickSight"]
);


const expDisplay2 = portfolio.createExpDisplay(".ex-exp-tabs");
const expTable = expDisplay2.createExpTable();
expTable.addExpItem(
  "Me",
  " ",
  "Hello, My name is Matipa Marufu. I am a third year student at the University of the Witwatersrand. I am also interning part time as a software developer at Uhuru Financial Services.",
  ["", "", ""]
);
expTable.addExpItem(
  "Skills",
  "",
  "",
  ["Unity", "jQuery", ".NetCore", "Amazon Web Services - QuickSight", "Web Development", "SQL", "Blazor"]
);

expTable.addExpItem(
  "Programming Languages",
  "",
  " ",
  ["C#", "Javascript"]
);
