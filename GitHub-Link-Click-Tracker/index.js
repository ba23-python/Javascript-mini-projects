// Initialize the click counter
let linkClickCount = 0;

// Add click event listener to the GitHub link
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("githubLink").addEventListener("click", function() {
        // Increment the click count
        linkClickCount++;

        // Use requestAnimationFrame to update the displayed click count more efficiently
        requestAnimationFrame(function() {
            document.getElementById("display").textContent = linkClickCount;
        });

        // Optionally, log the number of clicks in the browser console
        console.log("GitHub link clicked " + linkClickCount + " times.");
    });
});
