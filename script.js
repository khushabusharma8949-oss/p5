// Welcome message
window.onload = function () {
    console.log("Department of Computer Science website loaded successfully.");
};

// Faculty table row effect
let rows = document.querySelectorAll("table tr");

rows.forEach(function(row, index) {

    if (index !== 0) {
        row.addEventListener("click", function () {
            alert("Faculty information selected.");
        });
    }

});

// Navigation click
let links = document.querySelectorAll("a");

links.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        alert("This section is available on the department website.");
    });
});