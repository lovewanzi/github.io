document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.getElementById("sidebar");
    var toggleButton = document.getElementById("toggle-button");

    if (toggleButton) {
        toggleButton.addEventListener("click", function() {
            if (sidebar) {
                sidebar.classList.toggle("show");
            }
        });
    }
});