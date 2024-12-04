// Declaring varibles with const by getting HTML element id with getElementId
const body = document.getElementById("body");
const planet = document.getElementById("searchbar");



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
        const planet = document.getElementById("searchbar").value.toLowerCase();

        if (planet === "solen") {
          //When user writes solen/sun and press search, then the program fetch the data about the sun
          Name.textContent = data.bodies[0].name;
          latinName.textContent = data.bodies[0].latinName;
          type.textContent = data.bodies[0].type;
          distanceSun.textContent = `${data.bodies[0].distanceSun} km`;
          circumference.textContent = `${data.bodies[0].circumference} km `;
          maxTemp.textContent = `Dagtid: ${data.bodies[0].temp.day} celsius`;
          minTemp.textContent = `Natt: ${data.bodies[0].temp.night} celsius`;
          moons.textContent = data.bodies[0].moons.length;
          facts1.textContent = data.bodies[0].desc;
          facts2.textContent = `Jorddygn runt solen: ${data.bodies[0].orbitalPeriod}`;
          facts3.textContent = `Jorddygn runt sin egen axel ${data.bodies[0].rotation}`;
        } else if (planet === "merkurius") {
          //When user writes merkurius and press search, then the program fetch the data about the merkurius
          Name.textContent = data.bodies[1].name;
          latinName.textContent = data.bodies[1].latinName;
          type.textContent = data.bodies[1].type;
          distanceSun.textContent = `${data.bodies[1].distanceSun} km`;
          circumference.textContent = `${data.bodies[1].circumference} km `;
          maxTemp.textContent = `Dagtid: ${data.bodies[1].temp.day} celsius`;
          minTemp.textContent = `Natt: ${data.bodies[1].temp.night} celsius`;
          moons.textContent = data.bodies[1].moons.length;
          facts1.textContent = data.bodies[1].desc;
          facts2.textContent = `Jorddygn runt solen: ${data.bodies[1].orbitalPeriod}`;
          facts3.textContent = `Jorddygn runt sin egen axel ${data.bodies[1].rotation}`;
        } else if (planet === "venus") {
          //When user writes venus and press search, then the program fetch the data about the venus
          Name.textContent = data.bodies[2].name;
          latinName.textContent = data.bodies[2].latinName;
          type.textContent = data.bodies[2].type;
          distanceSun.textContent = `${data.bodies[2].distanceSun} km`;
          circumference.textContent = `${data.bodies[2].circumference} km `;
          maxTemp.textContent = `Dagtid: ${data.bodies[2].temp.day} celsius`;
          minTemp.textContent = `Natt: ${data.bodies[2].temp.night} celsius`;
          moons.textContent = data.bodies[2].moons.length;
          facts1.textContent = data.bodies[2].desc;
          facts2.textContent = `Jorddygn runt solen: ${data.bodies[2].orbitalPeriod}`;
          facts3.textContent = `Jorddygn runt sin egen axel ${data.bodies[2].rotation}`;
        } else if (planet === "jorden") {
          //When user writes jorden/earth and press search, then the program fetch the data about the jorden/earth
          Name.textContent = data.bodies[3].name;
          latinName.textContent = data.bodies[3].latinName;
          type.textContent = data.bodies[3].type;
          distanceSun.textContent = `${data.bodies[3].distanceSun} km`;
          circumference.textContent = `${data.bodies[3].circumference} km `;
          maxTemp.textContent = `Dagtid: ${data.bodies[3].temp.day} celsius`;
          minTemp.textContent = `Natt: ${data.bodies[3].temp.night} celsius`;
          moons.textContent = data.bodies[3].moons.length;
          facts1.textContent = data.bodies[3].desc;
          facts2.textContent = `Jorddygn runt solen: ${data.bodies[3].orbitalPeriod}`;
          facts3.textContent = `Jorddygn runt sin egen axel ${data.bodies[3].rotation}`;
        } else if (planet === "mars") {
          Name.textContent = data.bodies[4].name;
          latinName.textContent = data.bodies[4].latinName;
          type.textContent = data.bodies[4].type;
          distanceSun.textContent = `${data.bodies[4].distanceSun} km`;
          circumference.textContent = `${data.bodies[4].circumference} km `;
          maxTemp.textContent = `Dagtid: ${data.bodies[4].temp.day} celsius`;
          minTemp.textContent = `Natt: ${data.bodies[4].temp.night} celsius`;
          moons.textContent = data.bodies[4].moons.length;
          facts1.textContent = data.bodies[4].desc;
          facts2.textContent = `Jorddygn runt solen: ${data.bodies[4].orbitalPeriod}`;
          facts3.textContent = `Jorddygn runt sin egen axel ${data.bodies[4].rotation}`;
        } else if (planet === "jupiter") {
          Name.textContent = data.bodies[5].name;
          latinName.textContent = data.bodies[5].latinName;
          type.textContent = data.bodies[5].type;
          distanceSun.textContent = `${data.bodies[5].distanceSun} km`;
          circumference.textContent = `${data.bodies[5].circumference} km `;
          maxTemp.textContent = `Dagtid: ${data.bodies[5].temp.day} celsius`;
          minTemp.textContent = `Natt: ${data.bodies[5].temp.night} celsius`;
          moons.textContent = data.bodies[5].moons.length;
          facts1.textContent = data.bodies[5].desc;
          facts2.textContent = `Jorddygn runt solen: ${data.bodies[5].orbitalPeriod}`;
          facts3.textContent = `Jorddygn runt sin egen axel ${data.bodies[5].rotation}`;
        } else if (planet === "saturnus") {
          Name.textContent = data.bodies[6].name;
          latinName.textContent = data.bodies[6].latinName;
          type.textContent = data.bodies[6].type;
          distanceSun.textContent = `${data.bodies[6].distanceSun} km`;
          circumference.textContent = `${data.bodies[6].circumference} km `;
          maxTemp.textContent = `Dagtid: ${data.bodies[6].temp.day} celsius`;
          minTemp.textContent = `Natt: ${data.bodies[6].temp.night} celsius`;
          moons.textContent = data.bodies[6].moons.length;
          facts1.textContent = data.bodies[6].desc;
          facts2.textContent = `Jorddygn runt solen: ${data.bodies[6].orbitalPeriod}`;
          facts3.textContent = `Jorddygn runt sin egen axel ${data.bodies[6].rotation}`;
        } else if (planet === "uranus") {
          Name.textContent = data.bodies[7].name;
          latinName.textContent = data.bodies[7].latinName;
          type.textContent = data.bodies[7].type;
          distanceSun.textContent = `${data.bodies[7].distanceSun} km`;
          circumference.textContent = `${data.bodies[7].circumference} km `;
          maxTemp.textContent = `Dagtid: ${data.bodies[7].temp.day} celsius`;
          minTemp.textContent = `Natt: ${data.bodies[7].temp.night} celsius`;
          moons.textContent = data.bodies[7].moons.length;
          facts1.textContent = data.bodies[7].desc;
          facts2.textContent = `Jorddygn runt solen: ${data.bodies[7].orbitalPeriod}`;
          facts3.textContent = `Jorddygn runt sin egen axel ${data.bodies[7].rotation}`;
        } else if (planet === "neptunus") {
          Name.textContent = data.bodies[8].name;
          latinName.textContent = data.bodies[8].latinName;
          type.textContent = data.bodies[8].type;
          distanceSun.textContent = `${data.bodies[8].distanceSun} km`;
          circumference.textContent = `${data.bodies[8].circumference} km `;
          maxTemp.textContent = `Dagtid: ${data.bodies[8].temp.day} celsius`;
          minTemp.textContent = `Natt: ${data.bodies[8].temp.night} celsius`;
          moons.textContent = data.bodies[8].moons.length;
          facts1.textContent = data.bodies[8].desc;
          facts2.textContent = `Jorddygn runt solen: ${data.bodies[8].orbitalPeriod}`;
          facts3.textContent = `Jorddygn runt sin egen axel ${data.bodies[8].rotation}`;
        } else if (planet === "") {
          alert(
            "Sök efter en planet i solsystemet solaris för att få information om den"
          );
        } else {
          alert("Inte en planet eller stjärna, testa igen");
        }

        function popUpscreen(){
            const popUp = document.getElementById("popUp");
            if(popUp === "none"){
                popUp === "block"
            }
            else{
                popUp === "none"
            }
      };

 
    };

    const button = document.getElementById("button");
    button.addEventListener("click", userInput);
    
    })

    .catch((error) => {
      console.error("Error", error);
    });
}
