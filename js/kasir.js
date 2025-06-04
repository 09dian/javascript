let daftarBarang = {};
let totalHarga = 0;

// Fungsi untuk memuat data barang dari HTML
function loadBarangDariHTML() {
    const barangElements = document.querySelectorAll(".list-barang > div");
    const hargaElements = document.querySelectorAll(".list-harga > div");

    barangElements.forEach((barangEl, index) => {
        const id = parseInt(barangEl.id);
        const nama = barangEl.textContent.trim().split('. ')[1]; // buang "1. "

        const hargaText = hargaElements[index].textContent.replace(/[^\d]/g, ''); // buang Rp. dan titik
        const harga = parseInt(hargaText);

        daftarBarang[id] = {
            nama,
            harga
        };
    });

    console.log("Daftar barang dari HTML:", daftarBarang);
}

// Panggil fungsi saat halaman selesai dimuat
window.onload = loadBarangDariHTML;

// Fungsi tambah pesanan
function tambah() {
    const kode = parseInt(document.getElementById("kode-barang").value);
    const jumlah = parseInt(document.getElementById("jumlah").value);
    const hasil = document.getElementById("hasil");
    const total = document.getElementById("total-harga");

    if (!daftarBarang[kode]) {
        alert("Kode barang tidak ditemukan!");
        return;
    }

    if (jumlah <= 0 || isNaN(jumlah)) {
        alert("Jumlah harus lebih dari 0!");
        return;
    }

    const barang = daftarBarang[kode];
    const subtotal = barang.harga * jumlah;
    totalHarga += subtotal;

    const item = document.createElement("p");
    item.textContent = `${barang.nama} x ${jumlah} = Rp. ${subtotal.toLocaleString("id-ID")}`;
    hasil.appendChild(item);

    total.textContent = `Rp. ${totalHarga.toLocaleString("id-ID")}`;

    document.getElementById("kode-barang").value = "";
    document.getElementById("jumlah").value = "1";
}

// Reset pesanan
function resetPesanan() {
    if (confirm("Yakin ingin menghapus semua pesanan?")) {
        document.getElementById("hasil").innerHTML = "";
        document.getElementById("total-harga").textContent = "Rp. 0";
        totalHarga = 0;
    }
}
