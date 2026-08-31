const navbarPath = window.location.pathname.includes("/pages/")
    ? "../header/nav.html" 
    : "header/nav.html";

fetch(navbarPath)
    .then(response => response.text())
    .then(data => {
        document.querySelector("#top-nav-container").innerHTML = data;

        const currentPage = window.location.pathname.split("/").pop() || "index.html";

        document.querySelectorAll("top-nav a").forEach(link => {
            const linkPage = link.getAttribute("href").split("/").pop();

            if (linkPage === currentPage) {
                link.classList.add("active");
            }
        });
    })
    .catch(error => console.error("Navbar failed to load:", error));