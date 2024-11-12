window.addEventListener("scroll", function() {
    const body = document.body;
    if (window.scrollY > 50) { // Aktifkan efek 50px
        body.classList.add("zoom-out");
    } else {
    }
    document.body.style.zoom = "60%"; // Mengatur zoom ke 50%
});
body.classList.remove("zoom-out");