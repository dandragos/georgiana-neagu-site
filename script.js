document.addEventListener("DOMContentLoaded", function () {
    // Selectează elementul cu clasa "content"
    const content = document.querySelector(".content");

    // Folosește o funcție de timeout pentru a amâna afișarea textului cu 1 secundă
    setTimeout(function () {
        content.style.opacity = "1"; // Setează opacitatea la 1 pentru a face textul să se estompeze în vizualizare
    }, 1000); // 1000 milisecunde = 1 secundă
});


// Așteaptă ca documentul să se încarce complet
document.addEventListener("DOMContentLoaded", function () {
    // Selectează butonul "Enter site"
    const enterButton = document.getElementById("enter-button");

    // Adaugă un eveniment de click la buton
    enterButton.addEventListener("click", function (e) {
        e.preventDefault(); // Oprire comportamentul implicit al link-ului

        // Adaugă o clasă pentru efectul de fade-out
        document.body.classList.add("fade-out");

        // După o anumită durată, navighează către pagina "home.html"
        setTimeout(function () {
            window.location.href = enterButton.getAttribute("href");
        }, 1000); // Așteaptă 1 secundă pentru efectul de fade-out
    });
});
