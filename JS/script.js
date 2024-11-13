console.log("Hi");

const hi = document.querySelector(".salam");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    hi.innerHTML = "Salam";
});
