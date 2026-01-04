 function tampilWaktu() {
        var waktu = new Date();
        var jam = waktu.getHours();
        var menit = waktu.getMinutes();

         if (jam < 10) jam = "0" + jam;
        if (menit < 10) menit = "0" + menit;

        var namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
        var namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli",
                          "Agustus", "September", "Oktober", "November", "Desember"];

        var hari = namaHari[waktu.getDay()];
        var tgl = waktu.getDate();
        var bulan = namaBulan[waktu.getMonth()];
        var tahun = waktu.getFullYear();

        var salam = "";
        if (jam <= 9) salam = "Sugeng Enjang";
        else if (jam <= 14) salam = "Sugeng Siang";
        else if (jam <= 18) salam = "Sugeng Sonten";
        else salam = "Sugeng Ndalu";

        document.getElementById("waktuNavbar").innerHTML =
          jam + ":" + menit + "<br>" + hari + ", " + tgl + " " + bulan + " " + tahun + "<br>" + salam;
    }

    tampilWaktu();
    setInterval(tampilWaktu, 1000);