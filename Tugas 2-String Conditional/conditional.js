//If-Else
var nama = 'John';
var peran = 'Guard';

if(nama === ''){
    console.log("Nama harus diisi!")
} else if(nama != '' && peran == ''){
    console.log("Halo ", nama, ", Pilih Peranmu untuk memulai game")
} else{
    if(peran == 'Penyihir'){
        console.log("Selamat datang di Dunia Werewolf, ", nama)
        console.log("Halo Penyihir ", nama, ", kamu dapat melihat siapa yang menjadi werewolf!")
    }else if(peran == 'Guard'){
        console.log("Selamat datang di Dunia Werewolf, ", nama)
        console.log("Halo Guard ", nama, ", kamu akan membantu melindungi temanmu dari serangan werewolf.")
    }else if(peran == 'Werewolf'){
        console.log("Selamat datang di Dunia Werewolf, ", nama)
        console.log("Halo Werewolf ", nama, ", Kamu akan memakan mangsa setiap malam!   ")
    }
}

//Switch case
var hari = 21; 
var bulan = 12; 
var tahun = 1945;

switch (bulan){
    case 1:   { console.log(hari, ' Januari ', tahun); break; }
    case 2:   { console.log(hari, ' Februari ', tahun); break; }
    case 3:   { console.log(hari, ' Maret ', tahun); break; }
    case 4:   { console.log(hari, ' April ', tahun); break; }
    case 5:   { console.log(hari, ' Mei ', tahun); break; }
    case 6:   { console.log(hari, ' Juni ', tahun); break; }
    case 7:   { console.log(hari, ' Juli ', tahun); break; }
    case 8:   { console.log(hari, ' Agustus ', tahun); break; }
    case 9:   { console.log(hari, ' September ', tahun); break; }
    case 10:   { console.log(hari, ' Oktober ', tahun); break; }
    case 11:   { console.log(hari, ' November ', tahun); break; }
    case 12:   { console.log(hari, ' Desember ', tahun); break; }
    default:  { console.log('Tidak terjadi apa-apa'); }
}