const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const isFormPage = document.querySelector("#product");

if (isFormPage) {
    const select = document.querySelector("#product");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

const isReviewPage = document.querySelector("#reviewCount");

if (isReviewPage) {
  let count = localStorage.getItem("reviews") || 0;
  count++;
  localStorage.setItem("reviews", count);

  document.getElementById("reviewCount").textContent = count;
}




const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified; 

    

