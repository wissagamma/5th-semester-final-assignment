const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
// js form
function cek() {
  // deklarasi variabel
  nim = document.getElementById('nim').value;
  nama = document.getElementById('nama').value;
  jk = document.forms['latihan']['jk'].value;
  prodi = document.getElementById('prodi').value;
  ukm = document.forms['latihan']['ukm'].value;

  //   validasi form
  if (nim == '') {
    alert('Masukan NIM Anda');
    return false;
  }
  if (nama == '') {
    alert('Masukan Nama Anda');
    return false;
  }
  if (jk == '') {
    alert('Pilih Jenis Kelamin');
    return false;
  }
  if (prodi == '') {
    alert('Masukan Program Studi Anda');
    return false;
  }
  if (ukm == '--pilih--') {
    alert('Pilih Ukm yang Ingin Diikuti');
    return false;
  }

  // validasi hari

  var hari = document.forms['latihan']['hari'];
  var valh = '';

  for (i = 0; i < hari.length; i++) {
    if (hari[i].checked === true) {
      valh += hari[i].value + '';
    }
  }
  if (valh == '') {
    alert('Pilih Hari Kegiatan');
    return false;
  }

  // pemanggilan function
  if (nim != '' && nama != '' && jk != '' && prodi != '' && ukm != '--pilih--' && valh != '') {
    // output

    document.getElementById('dataregist').innerHTML = 'NIM =' + nim + '<br>Nama =' + nama + '<br>Jenis Kelamin =' + jk + '<br>Program Studi =' + prodi + '<br>UKM yang diikuti = ' + ukm + '<br>Hari Kegiatan = ' + valh;
    alert('Selamat Anda Berhasil Mendaftar !!!\n\n' + 'NIM : ' + nim + '\n' + 'Nama : ' + nama + '\n' + 'Jenis Kelamin : ' + jk + '\n' + 'Program Studi : ' + prodi + '\n' + 'UKM yang diikuti : ' + ukm + '\n' + 'Hari Kegiatan : ' + valh);
    return false;
  }
}
let btnclear = document.getElementById('cancel');
let inputs = document.querySelectorAll('input');

btnclear.addEventListener('click', () => {
  inputs.forEach((input) => (input.value = ''));
});
