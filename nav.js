document.addEventListener("DOMContentLoaded", function () {

    const navigation = document.getElementById("navigation");

    navigation.innerHTML = `
        <nav class="primary-nav">
            <a href="index.html">Home</a>
            <a href="products.html">Products</a>
            <a href="projects.html">Projects</a>
            <a href="about.html">About Me</a>
        </nav>
    `;

    // Highlight the page currently being viewed
    const currentPage = window.location.pathname.split("/").pop();

    const links = navigation.querySelectorAll("a");

    links.forEach(link => {

        const linkPage = link.getAttribute("href");

        // GitHub Pages may return an empty filename for the homepage
        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {
            link.classList.add("active");
        }

    });

});
