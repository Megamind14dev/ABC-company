document.addEventListener("DOMContentLoaded", function () {

    const nav = document.querySelector("nav");
    const toggleBtn = document.createElement("button");

    // Create a toggle menu button for small screens
    toggleBtn.textContent = "Menu";
    toggleBtn.style.backgroundColor = "#ffdd66";
    toggleBtn.style.border = "none";
    toggleBtn.style.padding = "8px 14px";
    toggleBtn.style.fontWeight = "bold";
    toggleBtn.style.cursor = "pointer";
    toggleBtn.style.marginTop = "12px";

    // Insert button before navigation
    nav.parentNode.insertBefore(toggleBtn, nav);

    // Hide nav by default on small screens
    function adjustNav() {
        if (window.innerWidth < 600) {
            nav.style.display = "none";
        } else {
            nav.style.display = "block";
        }
    }

    // Toggle nav when button clicked
    toggleBtn.addEventListener("click", function () {
        if (nav.style.display === "none") {
            nav.style.display = "block";
        } else {
            nav.style.display = "none";
        }
    });

    // Run on load and on window resize
    adjustNav();
    window.addEventListener("resize", adjustNav);

    // Smooth scroll for internal links
    const links = nav.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");
            if (targetId.startsWith("#")) {
                event.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight active link
    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.style.color = "#ffdd66");
            this.style.color = "#ffffff";
        });
    });

});
