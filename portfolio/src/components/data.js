import React, { useState, createContext } from "react";
import Engauge from "../images/Engauge.png";
import Heroes_United from "../images/Heroes_United.png";
import e1 from "../gifs/Gif Images/engauge/E1.png";
import e2 from "../gifs/Gif Images/engauge/E2.png";
import e3 from "../gifs/Gif Images/engauge/E3.png";
import e4 from "../gifs/Gif Images/engauge/E4.png";
import e5 from "../gifs/Gif Images/engauge/E5.png";
import e6 from "../gifs/Gif Images/engauge/E6.png";
import e7 from "../gifs/Gif Images/engauge/E7.png";
import h1 from "../gifs/Gif Images/heroes/HU1.png";
import h2 from "../gifs/Gif Images/heroes/HU2.png";
import h3 from "../gifs/Gif Images/heroes/HU3.png";
import h4 from "../gifs/Gif Images/heroes/HU4.png";
import h5 from "../gifs/Gif Images/heroes/HU5.png";
import h6 from "../gifs/Gif Images/heroes/HU6.png";
import h7 from "../gifs/Gif Images/heroes/HU7.png";
import h8 from "../gifs/Gif Images/heroes/HU8.png";
import h9 from "../gifs/Gif Images/heroes/HU9.png";
import h10 from "../gifs/Gif Images/heroes/HU10.png";
import h11 from "../gifs/Gif Images/heroes/HU11.png";
import h12 from "../gifs/Gif Images/heroes/HU12.png";
import h13 from "../gifs/Gif Images/heroes/HU13.png";
import h14 from "../gifs/Gif Images/heroes/HU14.png";
import h15 from "../gifs/Gif Images/heroes/HU15.png";
import h16 from "../gifs/Gif Images/heroes/HU16.png";

export const DataContext = createContext();
export const Data = (props) => {
  const [projects] = useState([
    {
      title: "Heroes United X: The Awakening",
      slug: "heroes",
      dev: [
        "User's username, password and character data is pushed to and accessed from a MySQL Database",
        "User authentication via Passport.js allows previous users to log in and access stored data",
        "A Node and Express Web Server navigates different stages of the game",
        "GET and POST routes retrieve and add new data to the database as chapters are completed or character stats change",
        "Illustrator created svgs for head, body and leg attack selections",
        "Attack and miss animations performed via JavaScript and jQuery",
        "Character sprites derived from Nintendo's Fire Emblem game",
        "Character health bar display changes dynamically using D3.js",
        "Combat system incorporates elements of character speed, attack, defense and hit chance, enacted using JavaScript"
      ],
      background:
        "This was the first collaborative effort with some amazing teammates from my bootcamp, <a href='https://github.com/elaintran'>Elain Tran</a>, <a href='https://github.com/i-k0n/'>Mark Baker</a>, <a href='https://github.com/Dgarza0413'>David Garza</a>, and <a href='https://github.com/bmm019'>Brittany McNulty</a>. We all thought it would be exciting to create an application users could interact with for our first big project. Our goal was to create a game where the user could customize their character, fight bad guys, potentially lose, and try again using either a different character or redistribute their custom points.",
      description:
        "Heroes is a collaborative multi-level, turn-based browser game that incorporates strategy and RPG elements. User authentication is used to access saved character statistics/game progression, jQuery for gameplay and a MySQL database for data storage. My role involved designing the game play, coding the combat system, and working with the front-end developers to tie in the game mechanics with the UI.",
      link: "https://heroesunited.herokuapp.com",
      tags: [
        "Express",
        "Node",
        "MySQL",
        "Passport",
        "Sequelize",
        "JavaScript",
        "jQuery",
        "D3"
      ],
      icon: Heroes_United,
      github: "https://github.com/elaintran/heroes-united",
      gallery: [h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16]
    },
    {
      title: "Engauge",
      slug: "engauge",
      dev: [
        "User logs in to access app information via Passport.js",
        "User lands on a dashboard containing charts and graphs populated using Nivo that summarizes user data as graphs",
        "Pages are populated using React state and filter functions",
        "Data is pushed into/pulled from MongoDB using both GET and POST routes"
      ],
      background:
        "This project was another collaborative effort with <a href='https://github.com/elaintran'>Elain Tran</a>, <a href='https://github.com/i-k0n/'>Mark Baker</a>, <a href='https://github.com/Dgarza0413'>David Garza</a>, and <a href='https://github.com/bmm019'>Brittany McNulty</a>. Our target was to create an app with real-life application. Engauge's core concept is to automate data collection. David's former role as a geologist required recording extensive data on oil wells in Excel sheets and on paper. With his field knowledge, we tailored Enguage to be an ideal method for consolidating and recording data for small oil companies with multiple wells.",
      description:
        "Engauge is a data repository created to automate data entry and organization. Users input data into forms designed specifically for the oil industry. The data is pushed to a Mongo database and used to dynamically create summary charts and statistics. My role in the project involved utilizing get/post routes to filter data into tables created using Bootstrap react components for a better user experience and data organization.",
      link: "https://serene-meadow-56536.herokuapp.com/",
      tags: [
        "React",
        "MongoDB",
        "Mongoose",
        "Passport",
        "Moment",
        "JavaScript",
        "Nivo",
        "Google Map React"
      ],
      icon: Engauge,
      github: "https://github.com/Dgarza0413/engauge",
      gallery: [e1,e2,e3,e4,e5,e6,e7]
    },
    // {
    //   title: "Lazy Timer",
    //   slug: "Lazy",
    //   dev: [
    //     "An input form is dynamically populated upon clicking the timer display",
    //     "Upon submit, the data is pushed to Firebase and reflected real time",
    //     "A snapshot of the values are used to fill in the display by default when a user does not enter a value",
    //     "User submission is checked for parameters (use of letters, semicolons) using regex and a warning is displayed if the requirements are not met",
    //     "User submission is converted into a common unit (s) using calculations performed by JavaScript",
    //     "The values are converted back to time format for display using Moment.js",
    //     "setInterval() is used for the timers, with Booleans set to determine which timer is running at any given time"
    //   ],
    //   demo: "../images/lazy_timer_demo.gif",
    //   background:
    //     "This was one of my first from-scratch projects back when I first learned JavaScript and jQuery. The inspiration for this app came from my first night shift job at the hospital. I picked up interval training and calisthenics as a way to relieve stress and keep busy during my odd schedule. Having to reset the timer between sets inspired me to create this app.",
    //   description:
    //     "Lazy Timer is an interval training stopwatch that allows the user to set two timers that switch back and forth automatically, enabling them to transition between workout and rest periods during interval training without having to reset the timer.",
    //   link: "https://christinaqtruong.github.io/LazyTimer/",
    //   tags: ["JavaScript", "jQuery", "CSS"],
    //   icon: Lazy_Timer,
    //   github: "https://github.com/christinaqtruong/LazyTimer"
    // },
    // {
    //   title: "Rick & Morty Themed Clicky Game",
    //   dev: [
    //     "A state object holds the array of image cards, score, top score, shaking feature and clicked images in an array",
    //     "A react component renders images on the page by mapping through the array of image cards using .map()",
    //     "Clicking an image randomizes the order of the array of image cards using JavaScript and sets it as the new array of images using setState()",
    //     "Each time an image is clicked, if its id is not already in the clicked array, then it gets added to the clicked array",
    //     "On click, the id of the image is compared to the clicked array and the score state changed",
    //     "If the image id is not in the clicked array, the score is incremented, setState() updates the score state and the new score is rendered to the page",
    //     "If the image id exists in the clicked array, the wrapper state changes and triggers a shaking function and the score resets"
    //   ],
    //   demo: "../images/clicky_game_demo.gif",
    //   background:
    //     "Every developer creates their version of the classic clicky game when introduced to React.js. I modified the original concept by adding in a shaking feature whenever the user clicks the same image and incorporating my own style to the game.",
    //   description:
    //     "Clicky Clicky 3000 is a memory game rendered using React components and state. Each time an image is clicked, states are updated to reflect whether or not the image has been clicked before.",
    //   link: "https://christinaqtruong.github.io/RickandMortyClickyGame/",
    //   tags: ["React.js", "JavaScript", "CSS"],
    //   icon: Clicky_Game,
    //   github: "https://github.com/christinaqtruong/RickandMortyClickyGame"
    // },
    // {
    //   title: "Go Giphy",
    //   dev: [
    //     "User input is grabbed from a form to dynamically create a search button using jQuery and JavaScript",
    //     "On click, the search button sends a request to Giphy's API for gifs using the button's text as the search keyword",
    //     "Gif stills are populated on the page and animate on click",
    //     "Clicking a gif changes its default data-state from 'still' to 'animated' and changes its image 'src' to an animated gif",
    //     "Clicking on a new search button empties the gif container and populates the new gif results"
    //   ],
    //   demo: "../images/go_giphy_demo.gif",
    //   background:
    //     "I created this project to review basic button manipulation, AJAX calls and jQuery methods.",
    //   description:
    //     "Go Giphy sends requests to a server-side API using the jQuery AJAX method. The request is made to Giphy's API and populates gif information using search keyword buttons created dynamically using jQuery and JavaScript.",
    //   link: "https://christinaqtruong.github.io/goGiphy/",
    //   tags: ["Bootstrap", "JavaScript", "jQuery", "AJAX", "API"],
    //   icon: Go_Giphy,
    //   github: "https://github.com/christinaqtruong/goGiphy"
    // }
  ]);

  return <DataContext.Provider value={[projects]}>{props.children}</DataContext.Provider>;
};
