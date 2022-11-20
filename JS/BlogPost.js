const blogPages = ["BlogPost1.html", "BlogPost2.html", "BlogPost3.html", "BlogPost4.html", "BlogPost5.html"];

let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");
let p5 = document.createElement("p");
let p6 = document.createElement("p");
let p7 = document.createElement("p");
let p8 = document.createElement("p");
let p9 = document.createElement("p");
let p10 = document.createElement("p");

let path = window.location.pathname;
let pageName = path.split("/").pop();

let section = document.getElementById("blog-section");

let heading = document.createElement("h1");


       if(pageName == blogPages[0])
        {
                console.log("on page 1");
                heading.innerText = "Close Reading - Overview of Data Visualisation";
                
                p1.innerText = "This essay will begin by defining what data visualisation is as well as what roles it plays in our everyday lives. Then it will explore the advantages of data visualisations, the role of the viewers who engage with these visualisations as well as how and why certain knowledge is privileged when creating them."
                p2.innerText = "Qi Li, in his essay, ‘Overview of Data Visualisation’ (2020), defines it as “the presentation of data in a pictorial or graphical format” (Li, 2020). Li expands on this statement by emphasising the intuitive and interactive experience data visualisation provides for viewers (Li, 2020). The main goal of traditional data visualisation is to communicate a range of pre-selected information to viewers. Visualising data has several advantages such as the ability to display a large volume of information (defined as processed/meaningful data) to viewers. It also allows viewers to build upon the original data set to either formulate their own future predictions or to identify unforeseen correlations within the data. Another advantage is also how much more accessible data is for the general public, as it incorporates younger audiences and begins to destroy the mental barrier for those who believe only science-minded people can engage with these datasets. However, another side to this is that it encourages an overloading of information e.g., visualisations present much more information than a summary would.  They are also playing a bigger role in popular media, in the sense that with the evolution of social media, analytics are becoming a larger prioritisation for casual users."
                p3.innerText = "Li explains how the data visualisation is split into two major sub classes. The first is information visualisation. Information visualisation is the visual representation of abstract data (Li, 2020). Abstract data is “the reduction of a particular body of data to a simplified representation of the whole” (What is data abstraction in programming and database management?, 2022). This requires the person visualising and/or organising the original data set to select which parts of the data they see as most valuable. Hence introducing a system of validation where certain data is privileged over other data in order to produce a more comprehensible visualisation. In this way the creator’s “ways of knowing”( Rettberg, 2020) are privileged as they get to decide what “kinds of knowledge” (Rettberg, 2020) to enable."
                p4.innerText = "The other subclass of data visualisation is scientific visualisation. Scientific visualisation is described as the representation of what is normally physically based scientific data (Li, 2020). Scientific data is “information which is based on research carried out by scientists and which has been published in a peer-reviewed journal” (Scientific Data Definition | Law Insider, 2022)."
                p5.innerText = "Li goes on to define the differences between data and information as well as provide a deeper examination into the different types of data. Data is defined as “raw, unprocessed information” (Li, 2020) that is not associated with a particular meaning. They are two main types of data, primary and secondary data. Primary data is “collected from the […] individual respondents directly” (Li, 2020) whereas secondary data is data collected from other sources (not done by the researcher) for a purpose that is different from that in which the original data was gathered. Lastly, information is defined as meaningful data."
                p6.innerText = "Data visualisation is considered an interactive activity therefore it is the role of the viewer to perceive the data being displayed to them. Perception is “the process of recognising […], organising […] and interpreting […] sensory information” (Li, 2020). Floridi and Chen in their essay, ‘An analysis of information visualisation’ (2013) describe viewing as “the process of specifying significant or noteworthy information” (2013). This emphasises how great the role of the viewer is when it comes to conveying information, as a visualisation becomes pointless if viewers are not able to engage with it. It is within the viewing process that users can make judgements about how this information will affect their lives e.g. during COVID-19, data visualisations encouraged the use of masks by visualising how affective they were in preventing the spread of the virus. Viewers can also form their own hypothesis based on previously defined data visuals, that is they can use previously made data visuals as secondary data for their own research."  
                p7.innerText = "The heavy reliance on viewers’ ability to engage with the visualisations introduces new inequalities in the form of “access to the kinds of literacies needed for making sense of data visualisations” (Hiippala, 2020). Hiippala describes the term ‘ergodic work’ as the amount of effort required from participants. In the case of data visualisation, ergodic work is directly correlated to exploration. Hippala defines exploration as the “degree of interacticity” provided for users (Hippala, 2020). The more interaction a visualisation contains the more ergodic work is required from the viewer to fully comprehend the displayed data. Some viewers have expressed that if a visualisation takes too much ergodic work, they will avoid interacting with the visualisation, as they see it as work which “does not come easily” (Kennedy, Allen, Engebretsen, Hill, Kirk, Weber, 2021)."
                p8.innerText = "The particular layouts of a space affect how viewers relate to data (Hippala, 2020). Hence why data has a number of different formats it can be organised into such as graphs, charts, tables etc. The notion of space changing how we relate to data is applicable to the physical media in which we display these visualisations. Mobile devices have become the leading device for these types of interactions resulting in the “widespread adoption of mobile first” (Kennedy et al., 2021) this opens doors for new levels of interaction where using your finger to scroll down a page is likely to reveal some sort of technical effect."
                p9.innerText = "When it comes to structures of power, society has given “systemised data” (Rettberg, 2020)  a high level of authority. This can be seen in the way data visualisations have privileged the average to a position where it is not only idealised but seen as the goal. The idealised average comes in opposition to earlier traditions which praised an ideal body, that was encouraged to be worked towards but ultimately was seen as unachievable (Rettberg, 2020). Modern day society has created a place of comfort with the average, as users, we are more concerned with whether something is ‘normal’ and take pride when our statistics are within these bounds of normalcy. However as consumers, we should be aware that normalcy tends to be measured by those with the most power as opposed to those with the greatest knowledge, as a result countries affected by the digital divide tend to have much less of a say than other countries."
                p10.innerText = "In conclusion, this essay has touched upon what data visualisation is as well as its advantages to society. It has highlighted how data visualisation encourages the average person to act and even encourages them to observe the data in a critical manner so that they are able to come to their own hypothesis. It has explained how knowledge barriers affect different interaction rates with visualisations, as overwhelming visualisations require more ergodic work from the user. It explores how visualisations can create a space which supports and encourages interaction but sometimes still does not allow the user to contribute meaningfully to the data. Data visualisation in itself encourages certain ideologies and predefined beliefs whilst suppressing others therefore users should engage with them critically in order to be in control of their own truth."
                
                section.append(heading);

                section.append(p1);
                section.append(p2);
                section.append(p3);
                section.append(p4);
                section.append(p5);
                section.append(p6);
                section.append(p7);
                section.append(p8);
                section.append(p9);
                section.append(p10);

                console.log(section);
        } else if(pageName == blogPages[1])
        {
            console.log("on page 2");
                heading.innerText = " UI/UX Critical Writing Analysis";
                section.append(heading);

                p1.innerText = "Design is the conscious intuitive effort to impose meaningful order” (Papanek, 1984). When designing my User Interface (UI) and User Experience (UX), I aimed to design an environment which evoked positive emotions within the user. This meant avoiding any sort of possible frustrations by communicating clearly to my user where information was located and how to complete each task (Hassenzahl and Tractinsky 2006)."
                p2.innerText = "Hassenzahl and Trackinsky in their paper, ‘User Experience a Research Agenda’ (2006) speak of having emotions as design goals. Even though it cannot be guaranteed that the user will feel joy and/or excitement when they look at my website. I have still made certain design decisions in order to subtly alter how the user feels when engaging with my website. Aiming to alter how a user feels may be considered a dark UX pattern as the designer’s intentions are not being clearly stated to the user (Goldberg, 2022). I chose to go with a lighter/happy theme such as ‘Studio Ghibli’ (1985) because I wanted the user to be drawn in by the visual aesthetic of the website. I also aimed to emulate similar feelings to those that would be evoked when watching the movie, that is feelings having been whisked away to another world. I wanted to captivate users who may not have watched any ‘Studio Ghibli’ (1985) movies or had any experience with the primary data the website is based on to feel as though they wanted to learn more about the studio. UX management speaks to the designers ability to influence how the user behaves (Goldberg, 2022). My website at the moment, lacks any explicit call to action’s (CTA) as it does not have any underlying aim to generate some sort of gain e.g. financial. However, it does attempt to influence the user’s behaviour, by trying to provoke a set of positive emotions when the user interacts with the website." 
                p3.innerText = "Another way, I attempted to produce positive emotions within users is by layering information in a logical structure. I grouped information using a hierarchical layout, with the most important information at the top of the page, that being the navigation bar followed by the heading of the webpage underneath it. I wanted to reflect the idea of conscious effort by purposefully grouping elements such as navigation icons in areas that were instantly visible to the user. I also made sure the current page the user was on was highlighted, and that the navigation bar was static, so as to provide a reference point for the user. I wanted the pages to have a minimalistic look because they contain a lot of bright greens and blues in the background therefore I did not want them to come off as overwhelming. To avoid this I removed individual references and placed them on their own separate page and I also tried to create high contrast between the text and  the background by adding a white background for big buttons. On pages with a lot of text, I removed the background image and included a solid turquoise background instead as shown in the Figure 1 wireframes. I decided to go with a green and blue colour because I liked that they can be considered earthy colours, whilst also being vibrant enough to create a positive environment. I used white to contrast against these colours because I thought a dark background with white text would seem too gloomy. I decided to use the font Coda_Caption because its font weight stood out on the bright Studio Ghibli background, and was quite easy to skim when placed in paragraphs, however a downside to this font is that it is not dyslexia friendly as certain letters when reversed look identical to others."
                section.append(p1);
                section.append(p2);
                section.append(p3);
                
                let img1 = document.createElement("img");
                img1.src = "../IM_3B/Images/BlogPostTheory2Img/Fig1.png";
                img1.classList.add("img-1");
                img1.alt = "Image of website wireframes";
                section.append(img1);

                let figureText1 = document.createElement("h3");
                figureText1.innerText = "Figure 1. showing website wireframes";
                section.append(figureText1);

                let img2 = document.createElement("img");
                img2.src = "../IM_3B/Images/BlogPostTheory2Img/Fig2.png";
                img2.classList.add("img-2");
                img2.alt = "Image showing website style guide";
                section.append(img2);

                let figureText2 = document.createElement("h3");
                figureText2.innerText = "Figure 2. showing the styleguide";
                section.append(figureText2);

                p4.innerText = "The web encourages a predator’s glance, processing a vast amount of fleeting information fast, before focusing on a target” (Blair-Early and Zender, 2008). Another reason why I did not want my pages to look overloaded was because I wanted to make it easy for people skimming my website to get a good idea of what each page was about. For that reason, I created five tabs in my navigation which separated the home page, from the blogs, data, design and references. From there, the blogs, data and design have their own sub sections which the user can select from. I grouped sections in this manner to reduce complexity and the number of decisions a user is faced with in one particular moment as the “[t]ime it takes to decide increase[s] with the number and complexity of choices” (Goldberg, 2022).";
                p5.innerText = "On my blog post pages, I need to work on aligning the buttons with the edges of the paragraph, as the alignment sticks out in a way which is noticeable to users and “good alignment is invisible” (Goldberg, 2022). I would like the ‘previous’ button to be aligned with the left side of the paragraph, the top button in the middle and the ‘next’ button to always be aligned with the right side of the paragraph. I would also like to make sure the references align with the main text. The blog post pages make predominant use of straight edges for alignment as straight lines are seen as being more serious."
                section.append(p4);
                section.append(p5);

                let img3 = document.createElement("img");
                img3.src = "../IM_3B/Images/BlogPostTheory2Img/Fig3.png";
                img3.classList.add("img-3");
                img3.alt = "Image showing misaligned button and reference elements";
                section.append(img3);

                let figureText3 = document.createElement("h3");
                figureText3.innerText = "Figure 3. showing misaligned button elements";
                section.append(figureText3);

                p6.innerText = "Another change I would like to make is to ensure that my mouse cursor changes appropriately. I want the mouse cursor to clearly communicate the function of the element on which the user is hovering in order to avoid mistakes. Mistakes in this context are conscious errors the user makes when their idea of how the website works is different to how the website actually functions (Goldberg, 2022). I also think that even though my website does provide immediate feedback i.e. when the mouse hovers over a clickable object it turns into a pointer cursor, and the element will change colour, it would be beneficial if there was also a sound effect, that way feedback would be audible and visual. However, I think it may only be beneficial to add sound design to elements of my website in which the user requires the most feedback as feedback should be “minimal” and “proportional to action’s importance” (Blair-Early and Zender, 2008)."
                p7.innerText = "Big improvements I am planning to incorporate on my website is the scrolling effect which can be seen on Apple’s website, which enables an animations to run when the user scrolls through the webpage. I plan to add these animations in, but with small snippets from the Studio Ghibli movie running when the user scrolls. I would also like to allow the user to customise some aspect of the website, whether that be by uploading a profile picture or saving their favourite movie data, however, this would require me to do some more research on the back-end as personalised information would need to be saved on some sort of database.";
                p8.innerText = "In conclusion, this reflection looks at how I planned to create a user experience which provoked certain positive emotions and mistakes I have made which disrupted this experience such as alignment issues. It also looked at future improvements, I plan to implement such as sound design as part of my immediate feedback, customisation as well as mimicking Apple’s scrolling effect which they use throughout their website.";
                section.append(p6);
                section.append(p7);
                section.append(p8);
    } else if(pageName == blogPages[2])
    {

    }

