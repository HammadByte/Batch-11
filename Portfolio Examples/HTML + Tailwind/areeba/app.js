function openModal(src) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("modalImg").src = src;
}
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}



const roles = [
    "Graphic Designer",
    "Freelancer",
    "PhotoShop Master"
];

let currentIndex = 0;

function changeRole() {
    const roleElement = document.getElementById("dynamic-role");
    roleElement.classList.remove("role-text");
    void roleElement.offsetWidth; // Trigger reflow to restart animation
    roleElement.innerText = roles[currentIndex];
    roleElement.classList.add("role-text");
    currentIndex = (currentIndex + 1) % roles.length;
}

window.onload = function() {
    changeRole(); // Set initial role
    setInterval(changeRole, 3000); // Change role every 3 seconds
};