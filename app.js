const movieElement = document.querySelector("[name=movie]");
const yearElement = document.querySelector("[name=year]");
const countryElement = document.querySelector("[name=country]");
const noteElement = document.querySelector("[name=note]");
const actorsElement = document.querySelector("[name=actor]");
const addMovieButton = document.querySelector("#add-btn");
const tableBody = document.querySelector(".tbody");
const checkBox = document.querySelector(".form-check");
const formCheckInput = document.querySelectorAll(".form-check-input");
const tableRows = document.querySelectorAll("tr");

let movieListFixed = [
  {
    movie: "The Shining",
    year: 1980,
    country: "United States",
    note: "psychological horror",
    actors: ["Jack Nicholsone", "Shelly Duvall"],
  },
  {
    movie: "Seven",
    year: 1995,
    country: "United States",
    note: "American crime thriller film",
    actors: ["Brad Pitt", "Morgan Freeman", "Gwyneth Paltrow"],
  },
  {
    movie: "City of God",
    year: 2002,
    country: "Brasil",
    note: "crime film",
    actors: ["Alexandre Rodrigues", "Leandro Firmino"],
  },
  {
    movie: "Pan's Labyrinth",
    year: 2006,
    country: "Spain, Mexico",
    note: "dark fantasy horror film",
    actors: ["Sergi López", "Maribel Verdú"],
  },
];

function createTr() {
  const tr = document.createElement("tr");

  const input = createCheckbox(tr);

  const label = document.createElement("label");
  label.className = "form-check-label";
  label.for = "flexCheckDefault";

  const checkForm = document.createElement("div");
  checkForm.className = "form-check";

  checkForm.appendChild(input);
  checkForm.appendChild(label);

  const th = document.createElement("th");
  th.scope = "row";
  th.appendChild(checkForm);

  tr.className = "to-watch border-b-gray";
  tr.appendChild(th);
  tableBody.appendChild(tr);

  return tr;
}

function createFixedElements() {
  movieListFixed.forEach(function (movieObject) {
    let newTr = createTr();
    createElement(newTr, { value: movieObject.movie });
    createElement(newTr, { value: movieObject.year });

    createElement(newTr, { value: movieObject.country });

    createElement(newTr, { value: movieObject.note });
    createElement(newTr, { value: movieObject.actors });
  });
}
createFixedElements();

addMovieButton.addEventListener("click", addNewMovie);

function createCheckbox(tr) {
  const input = document.createElement("input");
  input.className = "form-check-input";
  input.value = "";
  input.type = "checkbox";
  input.id = "flexCheckDefault";

  input.addEventListener("change", function () {
    if (input.checked) {
      tr.className = "watched border-b-gray";
    } else {
      tr.className = "to-watch border-b-gray";
    }
  });

  return input;
}

function createElement(tr, inputElement) {
  const newElement = document.createElement("td");
  newElement.appendChild(document.createTextNode(inputElement.value));
  tr.appendChild(newElement);
}

function addNewMovie(e) {
  if (movieElement.value === "") {
    alert("Add new movie");
    return;
  }

  const tr = createTr();

  createElement(tr, movieElement);
  createElement(tr, yearElement);
  createElement(tr, countryElement);
  createElement(tr, noteElement);
  createElement(tr, actorsElement);

  movieElement.value = "";
  yearElement.value = "";
  countryElement.value = "";
  noteElement.value = "";
  actorsElement.value = "";

  tableBody.appendChild(tr);

  e.preventDefault();
}

formCheckInput.forEach((input, index) => {
  input.addEventListener("change", function () {
    if (input.checked) {
      tableRows[index + 1].className = "watched border-b-gray";
    } else {
      tableRows[index + 1].className = "to-watch border-b-gray";
    }
  });
});
