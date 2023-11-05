

const header = document.getElementsByClassName("header")[0];
let isScrolled = false;

function updateHeaderOpacity() {
    const scrollY = window.scrollY ;
    const scrollThreshold = 20; // Adjust this value as needed

    if (scrollY > scrollThreshold && !isScrolled) {
        header.style.backgroundColor = "rgba(244, 243, 238)"; // Change the opacity to 0.9 or your desired value
        isScrolled = true;
    } else if (scrollY == 0 && isScrolled){
        header.style.backgroundColor = "transparent"; // Make it transparent
        isScrolled = false;
    }
}

window.addEventListener('scroll', updateHeaderOpacity);
updateHeaderOpacity();


const academicLink = document.getElementById('academic-link');
const professionalLink = document.getElementById('professional-link');

const academicBlock = document.getElementById("academic");
const professionalBlock = document.getElementById("pro");

academicBlock.style.display = "block";
professionalBlock.style.display = "none";

function handleAcademicClick(event) {
    academicBlock.style.display = "block";
    professionalBlock.style.display = "none";
}


function handleProfessionalClick(event) {
    professionalBlock.style.display = "block";
    academicBlock.style.display = "none";
}



academicLink.addEventListener('click', handleAcademicClick);
professionalLink.addEventListener('click', handleProfessionalClick);
