async function loadHTML(id, file) {
    const element = document.getElementById(id);

    const response = await fetch(file);
    const html = await response.text();

    element.innerHTML = html;
}

// load dulu
Promise.all([
    loadHTML("header", "header.html"),
    loadHTML("contact", "contact.html"),
    loadHTML("footer", "footer.html")
]).then(() => {

    let lastScrollTop = 0;

    const header = document.querySelector("header");
    const scrollThreshold = 10;

    window.addEventListener("scroll", () => {

        let scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop;

        // scroll down
        if (scrollTop > lastScrollTop) {
            header.classList.add("hide");
        }

        // scroll up
        else {
            header.classList.remove("hide");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    });

});