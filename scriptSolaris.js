// Declaring variables with const by getting HTML element id with getElementId
const body = document.getElementById("body");
const main = document.getElementById("main");
const solarisContainer = document.getElementById("solarisSystemet")
const planet = document.getElementById("searchbar");

fetchData();
// The function for the program that's going to run when the webside is entered.
// starting with creating the function  with the data being fetched with POST from the API, making it possible for users to send informaton and get back data.
function fetchData() {
  const urlApi =
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies"; // Declare varible too our HTTP API

  const urlApiKey =
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys"; //Declare a varible for the API key

  fetch(urlApiKey, {
    //fecthing API key using POST method
    method: "POST",
    headers: { "Content-Type": "application/json" }, //Formating too JSON, important to get the data in the right formation.
  })
    .then((response) => {
      //If the response is not okey, print an error with text Couldn't fetch the data
      if (!response.ok) {
        throw new console.error("Couldn't fetch the key");
      }
      return response.json(); // Does it work, convert the response to JSON.
    })

    .then((data) => {
      // Then statement for the data where we declare the apikey
      // and log the fetched key.
      const apiKey = data.key;
      console.log("Fetched the API Key", apiKey);

      return fetch(urlApi, {
        method: "GET",
        headers: { "x-zocom": apiKey },
      });
    })
    // After fetching the key, fetching the data from the server. Message error if the response isn't okey. Or else get the response in Json format
    .then((response) => {
      if (!response.ok) {
        throw new Error("Couldn't fecth response");
      }
      return response.json();
    })

    .then((data) => {
      // Gettign the data from API server and putting the data into HTML file by getting element id
      console.log("Data:", data);

      // Set the rules for the variables and rules for what's going to happen when interacting with API server //

      // declaring variables getting element id from html document.
      const Name = document.getElementById("Name");
      const latinName = document.getElementById("latinName");
      const type = document.getElementById("type");
      const distanceSun = document.getElementById("distanceSun");
      const circumference = document.getElementById("circumference");
      const minTemp = document.getElementById("minTemp");
      const maxTemp = document.getElementById("maxTemp");
      const facts1 = document.getElementById("facts1");
      const facts2 = document.getElementById("facts2");
      const facts3 = document.getElementById("facts3");
      const moons = document.getElementById("moons");

      function userInput() {
        // A function for the user input to fetch the right data for every planet
        const searchbar = document
          .getElementById("searchbar")
          .value.toLowerCase();
        const popUp = document.getElementById("popUp");
        const planet = data.bodies.find(
          (body) => body.name.toLowerCase() === searchbar
        ); // takes the users input, search and compare with the API data

        // making if statement depending on the users inpit

        if (planet) {
          //User writes in the planet it wants to search for, here use the declared variables
          Name.textContent = `${planet.name}`;
          latinName.textContent = `${planet.latinName}`;
          type.textContent = `${planet.type}`;
          distanceSun.textContent = `${planet.distance} km`;
          circumference.textContent = `${planet.circumference} km `;
          maxTemp.textContent = `Dagtid: ${planet.temp.day} °C`;
          minTemp.textContent = `Natt: ${planet.temp.night} °C`;
          moons.textContent = `${planet.moons.length}`;
          facts1.textContent = `${planet.desc}`;
          facts2.textContent = `Jorddygn runt solen: ${planet.orbitalPeriod} dygn`;
          facts3.textContent = `Jorddygn runt sin egen axel: ${planet.rotation} dygn`;

          popUp.style.display = "block"; // showing the pop up screen
        } else {
          alert("Inte en planet eller stjärna, testa igen"); // alert message if user haven't written anything, haven't spelled right or haven't written a planet
        }
      }
      // other functions inside the program that also should be run, like the button rules and star sky.

      const button = document.getElementById("button"); // Decalring button from id in html document

      button.addEventListener("click", userInput); // What's happening when the sunmit button is clicked. Both getting the pop up screen with data and also cursor pointer
      button.addEventListener("mouseover", () => {
        button.style.cursor = "pointer";
      });

      const closeBtn = document.getElementById("btnClose"); // Decalring closeBtn from id in html document
      closeBtn.addEventListener("click", () => {
        // Function to make the pop up screen disapear when user press this button
        if ((popUp.style.display = "block")) {
          popUp.style.display = "none";
        }
      });

      closeBtn.addEventListener("mouseover", () => {
        // The close button getting a pointer
        closeBtn.style.cursor = "pointer";
      });

      // The function for the star sky as background
      starryStars(); // running the star function within fetchData

      function starryStars() {
        const starContain = document.querySelector(".starryHeaven");
        const numberStars = 200; // the number of stars

        for (let i = 0; i < numberStars; i++) {
          const stars = document.createElement("div");
          stars.classList.add("stars"); // adding a class to the div element
          stars.style.top = `${Math.random() * 100}vh`; // Making the stars appear randomly over the site
          stars.style.left = `${Math.random() * 100}vw`;
          stars.style.animationDuration = `${Math.random() * 5 + 2}s`; // Making the stars twinkle
          stars.style.animationDelay = `${Math.random() * 2}s`; // delay on the stars

          starContain.appendChild(stars); // the new div being added too the document element stars
        }
      }
    })

    .catch((error) => {
      // If data cant be fethced the program notice the error messeage
      console.error("Error", error);
    });
}
