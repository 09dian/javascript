function tambah(){

    const kode       = document.getElementById("kode-barang").value;
    const pesanan  = document.getElementById("pesanan").value;
    const jumlah     = document.getElementById("jumlah").value;

    document.getElementById('hasil').innerHTML = `
    <p>Pesanan: ${pesanan}</p>
    <p>jumlah: ${jumlah}</p>
    <p>kode: ${kode}</p>
    `;
}
