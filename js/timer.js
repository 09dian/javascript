let detik = 0;
let menit = 0;
let jam = 0;
let interval;
let berjalan = false;

function tampilkanWaktu() {
    const layar = document.getElementById("layar"); // ✔️ tanpa titik
    const format =
        String(jam).padStart(2, "0") + ":" +
        String(menit).padStart(2, "0") + ":" +
        String(detik).padStart(2, "0");
    layar.innerText = format;
}

function mulai() {
    if (!berjalan) {
        interval = setInterval(() => {
            detik++;
            if (detik == 60) {
                detik = 0;
                menit++;
            }
            if (menit == 60) {
                menit = 0;
                jam++;
            }
            tampilkanWaktu();
        }, 1000);
        berjalan = true;
    }
}

function pause() {
    clearInterval(interval);
    berjalan = false;
}

function reset() {
    clearInterval(interval);
    berjalan = false;
    jam = 0;
    menit = 0;
    detik = 0;
    tampilkanWaktu();
}
