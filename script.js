// This way I will request data and return that data 
const getCatBreed = async (searchTerm, limit) => {
  const response = await fetch(
    `https://catfact.ninja/breeds?limit=${limit}&term=${searchTerm}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Cannot find data");
  }

  const data = await response.json();
  const resultsArr = data.results;

  if (resultsArr.length === 0) {
    throw new Error(`No search results for ${searchTerm}`);
  }
  return resultsArr; // should return the full results array
};

//   const cleanedBreed = resultsArr.map((breedObject) => {
//     return breedObject.breed;
//   });
//    // console.log(cleanedBreed);
//   return cleanedBreed; // Return the cleaned breed array
// };
//   console.log(cleanedBreed);

  // fetch("https://catfact.ninja/breeds")
  //       .then((response) => {
  //         console.log(response);
  //         return response;
  //       })
  //       .then((response) => response.text())
  //       .then((data) => {
  // console.log(data);
  //     });

  // Function to create div element and I need DOM methods to add the breed to the DOM

  const createElement = (elType, text, parent) => {
    const el = document.createElement(elType);
    const textNode = document.createTextNode(text);
    el.appendChild(textNode);
    parent.appendChild(el);
  };

  const removeAllChildren = (parent) => {
    // console.log(parent.firstChild, "first child");
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  // I need event listener for my form
  const form = document.querySelector("form");
  const error = document.getElementById("error");
  const resultsSection = document.querySelector("ul"); // resultSection is where results will be appended/displayed

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const searchTerm = formData.get("term");
    const limit = formData.get("limit");

    removeAllChildren(resultsSection);
    error.innerText = "";

    try {
    const breed = await getCatBreed(searchTerm, limit);
    // console.log(breed, "breed");
    // breeds are an array. I want to iterate over this array and loop over these array.

    breed.forEach((breedObject) => {
      //console.log(breedObject, "BREED FROM FOR EACH");
      // breedObject should create a new div for each breed
      const breedDiv = document.createElement("div");

      // create a div with a h3 that has the breed name
      const breedName = breedObject.breed; // as breed contains the breed name;
      createElement("h3", `breed: ${breedName}, breedDiv`);

      // create a p with the country
      const countryInfo = breedObject.breed;
      createElement("p", `contry: ${countryInfo}, breedDiv`);

      // create a p with cat info - I am choosing catPattern as additional info
      const catPattern = breedObject.catPattern
      createElement("p", `pattern: ${catPattern}, breedDiv`);

      // I need to append / add the breedDiv to the result section
      resultsSection.appendChild(breedDiv);

      // createElement("li", breedText, document.querySelector("ul"));
    });
    } catch (e) {
      console.log("ERROR:", e.message);
      e.innerText = e.message;
    } finally {
      form.reset();
    }
  });

