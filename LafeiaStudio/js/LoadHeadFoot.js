async function loadHTML(id, file) {
    const element = document.getElementById(id);

    const response = await fetch(file);
    const html = await response.text();

    element.innerHTML = html;
}

loadHTML("header", "header.html");
loadHTML("footer", "footer.html");