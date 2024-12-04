// Declaring varibles with const by getting HTML element id with getElementId
const body = document.getElementById("body");
const planet = document.getElementById("searchbar");

fetchData();

// creating a function for the data being fetched with POST from the API, making it possible for users to send informaton and get back data.
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

      //   Name.textContent = data.bodies[1].name;
      //   latinName.textContent = data.bodies[1].latinName;
      //   type.textContent = data.bodies[1].type;
      //   distanceSun.textContent = `${data.bodies[1].distanceSun} km`;
      //   circumference.textContent = `${data.bodies[1].circumference} km `;
      //   maxTemp.textContent = `Dagtid: ${data.bodies[1].temp.day} celsius`;
      //   minTemp.textContent = `Natt: ${data.bodies[1].temp.night} celsius`;
      //   moons.textContent = data.bodies[1].moons.length;
      //   facts1.textContent = data.bodies[1].desc;
      //   facts2.textContent = `Jorddygn runt solen: ${data.bodies[1].orbitalPeriod}`;
      //   facts3.textContent = `Jorddygn runt sin egen axel ${data.bodies[1].rotation}`;

      function userInput() {
        // A function for the user input to fetch the right data for every planet
        const searchbar = document.getElementById("searchbar").value.toLowerCase();
        const popUp = document.getElementById("popUp");
        const planet = data.bodies.find(body => body.name.toLowerCase() === searchbar); // takes the users input, search and compare with the API data

        if(planet){  //User writes in the planet it wants to search for
          Name.textContent = `${planet.name}`;
          latinName.textContent = `${planet.latinName}`;
          type.textContent = `${planet.type}`;
          distanceSun.textContent = `${planet.distance} km`;
          circumference.textContent = `${planet.circumference} km `;
          maxTemp.textContent = `Dagtid: ${planet.temp.day} °C`;
          minTemp.textContent = `Natt: ${planet.temp.night} °C`;
          moons.textContent = `${planet.moons.length}`;
          facts1.textContent = `${planet.desc}`;
          facts2.textContent = `Jorddygn runt solen: ${planet.orbitalPeriod}`;
          facts3.textContent = `Jorddygn runt sin egen axel ${planet.rotation}`;
  
          popUp.style.display = "block";

        }
       
         else {
          alert("Inte en planet eller stjärna, testa igen");
        }
 
    };

    const button = document.getElementById("button");
    button.addEventListener("click", userInput);

    const closeBtn = document.getElementById("btnClose");
    closeBtn.addEventListener("click", () => {
      if (popUp.style.display = "block") {
        popUp.style.display = "none"
      }
    });

    starryStars();

      function starryStars() {
        const starContain = document.querySelector(".starryHeaven");
        const numberStars = 200;
    
        for(let i=0; i < numberStars; i++){
          const stars = document.createElement("div");
          stars.classList.add("stars");
          stars.style.top = `${Math.random() *100}vh`;
          stars.style.left = `${Math.random() *100}vw`;
          stars.style.animationDuration = `${Math.random() *5+2}s`;
          stars.style.animationDelay = `${Math.random() *2}s`;

          starContain.appendChild(stars);
        };
    
    };


    })

    .catch((error) => {
      console.error("Error", error);
    });
}



