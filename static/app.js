let allIdeas = [];
let filteredIdeas = [];

let selectedGroup = null;
let selectedSeason = null;

fetch("/api/ideas")
    .then(response => response.json())
    .then(data => {
        allIdeas = data;
        console.log("Downoladed ideas: " + allIdeas);
    })
    .catch(err => console.log("error", err));

const soloBtn = document.querySelector(".lewo");
const friendsBtn = document.querySelector(".srodek");
const coupleBtn = document.querySelector(".prawo");

soloBtn.addEventListener("click", () => {
    selectedGroup = "solo";
    console.log("Selected group = solo");
});

friendsBtn.addEventListener("click", () => {
    selectedGroup = "friends";
    console.log("selected group = friends");
});

coupleBtn.addEventListener("click", () => {
    selectedGroup = "couple";
    console.log("selected group = couple");
});

const winterBtn = document.getElementById("winterBtn");
const springBtn = document.getElementById("springBtn");
const summerBtn = document.getElementById("summerBtn");
const autumnBtn = document.getElementById("autumnBtn");

winterBtn.addEventListener("click", () => chooseSeason("winter"));
springBtn.addEventListener("click", () => chooseSeason("spring"));
summerBtn.addEventListener("click", () => chooseSeason("summer"));
autumnBtn.addEventListener("click", () => chooseSeason("autumn"));

function chooseSeason(season) {
    selectedSeason = season;
    console.log("Choosen season" + season);

     filteredIdeas = allIdeas.filter( idea =>
        idea.group === selectedGroup &&
        idea.season === selectedSeason
    );

    genereateRandomIdea();
    ideaBackground();

}

function showStep(stepNumber) {
    document.getElementById("step1").classList.add("hidden");
    document.getElementById("step2").classList.add("hidden");
    document.getElementById("step3").classList.add("hidden");

    if (stepNumber === 1) {
        document.getElementById("step1").classList.remove("hidden");
    } else
    if (stepNumber === 2) {
        document.getElementById("step2").classList.remove("hidden");
    } else
    if (stepNumber === 3) {
        document.getElementById("step3").classList.remove("hidden");
    }
};
showStep(1);

soloBtn.addEventListener("click", () => {
    selectedGroup = "solo";
    showStep(2);
});

friendsBtn.addEventListener("click", () => {
    selectedGroup = "friends";
    showStep(2);
});

coupleBtn.addEventListener("click", () => {
    selectedGroup = "couple";
    showStep(2);
});

winterBtn.addEventListener("click", () => {
    selectedSeason = "winter";
    showStep(3);
});

springBtn.addEventListener("click", () => {
    selectedSeason = "spring";
    showStep(3);
});

summerBtn.addEventListener("click", () => {
    selectedSeason = "summer";
    showStep(3);
});

autumnBtn.addEventListener("click", () => {
    selectedSeason = "autumn";
    showStep(3);
});

function genereateRandomIdea() {
    const ideaSpan = document.getElementById("idea");

    if (filteredIdeas.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredIdeas.length);
        const randomIdea = filteredIdeas[randomIndex];
        ideaSpan.textContent = randomIdea.text;
    } else {
        ideaSpan.textContent = "No ideas in that category"
    }
}

const nextIdeaBtn = document.getElementById("next-idea");
nextIdeaBtn.addEventListener("click", () => {
    genereateRandomIdea();
});

function ideaBackground() {
    const ideaContainer = document.getElementById("idea-container");
    if (selectedSeason === "winter") {
        ideaContainer.style.backgroundColor = "#B3EBF2";
    } else 
    if (selectedSeason === "spring") {
        ideaContainer.style.backgroundColor = "#C1F7C1";
    } else 
    if (selectedSeason === "summer") {
        ideaContainer.style.backgroundColor = "#FFFAA0";
    } else 
    if (selectedSeason === "autumn") {
        ideaContainer.style.backgroundColor = "#FFC067";
    }
}
