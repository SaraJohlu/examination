

const body = document.getElementById("body");
const planet = document.getElementById("searchbar");
const button = document.getElementById("button");
const popUp = document.getElementById("popUp")

// Creating the function pickPlanet för getting the value of users input that will fetch the information from API server.

 button.addEventListener("click", () => {
    if (popUp.style.display === "none") {
        popUp.style.display = "block";
      } 
      else {
        popUp.style.display = "none";
      };

    fetchData( () => {
        const userInput = planet.value.trim().toLowerCase();
        const findPlanet = data.bodies.find(body =>
            body.name.toLowerCase() === userInput &&
            body.type === "findPlanet"
        );
    });

   
    //Making a if statement for the popUp screen where all the information should go

   
  });

fetchData();
function fetchData() {
  // Declare varible too our HTTP API
  const urlApi =
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies";

  //Declare a varible for the API key
  const urlApiKey =
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys";

  fetch(urlApiKey, {
    //fecthing API key using POST method
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      //If the response is not okey, print an error with text Couldn't fetch the data
      if (!response.ok) {
        throw new console.error("Couldn't fetch the key");
      }
      return response.json(); // Does it work, convert the response to JSON
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

    .then((response) => {
      if (!response.ok) {
        throw new Error("Couldn't fecth response");
      }
      return response.json();
    })

    .then((data) => {
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

      Name.textContent = data.bodies[1].name;
      latinName.textContent = data.bodies[1].latinName;
      type.textContent = data.bodies[1].type;
      distanceSun.textContent = `${data.bodies[1].distanceSun} km` ;
      circumference.textContent = `${data.bodies[1].circumference} km `;
      maxTemp.textContent = `Dagtid: ${data.bodies[1].temp.day} celsius`;
      minTemp.textContent = `Natt: ${ data.bodies[1].temp.night} celsius`;
      moons.textContent = data.bodies[1].moons.length;
      facts1.textContent = data.bodies[1].desc;
      facts2.textContent = `Jorddygn runt solen: ${data.bodies[1].orbitalPeriod}`;
      facts3.textContent = `Jorddygn runt sin egen axel ${data.bodies[1].rotation}`;

    });
}

function userInput() {
    const planet = document.getElementById("searchbar").value;

    if(planet === "sun".toLowerCase){
    Name.textContent = data.bodies[0].name;
      latinName.textContent = data.bodies[0].latinName;
      type.textContent = data.bodies[0].type;
      distanceSun.textContent = `${data.bodies[0].distanceSun} km` ;
      circumference.textContent = `${data.bodies[0].circumference} km `;
      maxTemp.textContent = `Dagtid: ${data.bodies[0].temp.day} celsius`;
      minTemp.textContent = `Natt: ${ data.bodies[0].temp.night} celsius`;
      moons.textContent = data.bodies[0].moons.length;
      facts1.textContent = data.bodies[0].desc;
      facts2.textContent = `Jorddygn runt solen: ${data.bodies[0].orbitalPeriod}`;
      facts3.textContent = `Jorddygn runt sin egen axel ${data.bodies[0].rotation}`;
    }
}


