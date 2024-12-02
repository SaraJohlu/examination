const body = document.getElementById("body");

async function fetchData() {
  //Making async function with the data we're requesting to fetch.
  const urlApi =
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies";
  const urlApiKey =
    "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys";

  try {
    const response = await fetch(urlApiKey, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new console.error("Can not fetch"); //If the response isn't okey it will print a error msg.
    }
    const keydata = await response.json();
    const keyApi = keydata.key;

    const response2 = await fetch(urlApi, {
      method: "GET",
      headers: { "x-zocom": `${keyApi}` },
    });
    
    const data = await response2.json();
    console.log(data);
  }
   catch (error) {
    console.error(error);
  }
}

fetchData();
