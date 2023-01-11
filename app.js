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

addMovieButton.addEventListener("click", addNewMovie);

function createElement(tr, inputElement) {
  const newElement = document.createElement("td");
  newElement.appendChild(document.createTextNode(inputElement.value));
  tr.appendChild(newElement);
}

function createInput(tr) {
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

function addNewMovie(e) {
  if (movieElement.value === "") {
    alert("Add new movie");
    return;
  }

  //   const input = document.createElement("input");
  //   input.className = "form-check-input";
  //   input.value = "";
  //   input.type = "checkbox";
  //   input.id = "flexCheckDefault";
  const tr = document.createElement("tr");

  const input = createInput(tr);

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

  //   const addMovieName = document.createElement("td");
  //   addMovieName.appendChild(document.createTextNode(movieElement.value));
  //   tr.appendChild(addMovieName);

  //   const addMovieYear = document.createElement("td");
  //   addMovieYear.appendChild(document.createTextNode(yearElement.value));
  //   tr.appendChild(addMovieYear);

  //   const addMovieCountry = document.createElement("td");
  //   addMovieCountry.appendChild(document.createTextNode(countryElement.value));
  //   tr.appendChild(addMovieCountry);

  //   const addMovieNote = document.createElement("td");
  //   addMovieNote.appendChild(document.createTextNode(noteElement.value));
  //   tr.appendChild(addMovieNote);

  //   const addMovieActors = document.createElement("td");
  //   addMovieActors.appendChild(document.createTextNode(actorsElement.value));
  //   tr.appendChild(addMovieActors);

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
