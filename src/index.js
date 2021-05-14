let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  // Add listener to 'Add Toy' button to show or hide form
  addBtn.addEventListener("click", () => {
    // Hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// Fetch Andy's Toys
function getToys() {
  return fetch('http://localhost:3000/toys')
    .then(res => res.json())
}
