const pilihan = ["gunting", "kertas", "batu"];
let skorUser = 0;
let skorKomputer = 0;

function tentukanPemenang(player, computer) {
    if (player === computer) return "Seri!";
    
    const menang = 
        (player === "gunting" && computer === "kertas") ||
        (player === "kertas" && computer === "batu") ||
        (player === "batu" && computer === "gunting");

    if (menang) {
        skorUser++;
        document.querySelector(".skor_user").textContent = skorUser;
        return "Kamu Menang!";
    } else {
        skorKomputer++;
        document.querySelector(".skor_komputer").textContent = skorKomputer;
        return "Kamu Kalah!";
    }
}

document.querySelectorAll(".icon.user .pilihan div").forEach(el => {
    el.addEventListener("click", () => {
        const pilihanUser = el.className;
        const pilihanKomputer = pilihan[Math.floor(Math.random() * 3)];

        // Tampilkan ikon user dan komputer
        document.querySelector(".pilihan_user").innerHTML = el.innerHTML;
        document.querySelector(".pilihan_computer").innerHTML =
            document.querySelector(`.icon.computer .${pilihanKomputer}`).innerHTML;

        // Highlight pilihan komputer
        document.querySelectorAll(".icon.computer .pilihan div").forEach(icon => {
            icon.style.opacity = icon.className === pilihanKomputer ? "1" : "0.3";
        });

        // Highlight pilihan user
        document.querySelectorAll(".icon.user .pilihan div").forEach(icon => {
            icon.style.opacity = icon.className === pilihanUser ? "1" : "0.3";
        });

        // Tampilkan hasil pertandingan
        document.querySelector(".hasil").textContent =
            `Komputer memilih: ${pilihanKomputer} — ${tentukanPemenang(pilihanUser, pilihanKomputer)}`;
    });
});
