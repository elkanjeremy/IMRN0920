//No.  1
function range(startNum, finishNum){
    var a = [0];
    if(startNum < finishNum){
        while(startNum <= finishNum){
            a.push(startNum);
            startNum++;
        }
        a.shift();
        return a
    }
    else if(startNum > finishNum){
        while(finishNum <= startNum){
            a.push(startNum);
            startNum--;
        }
        a.shift();
        return a
    }
    else{
        return -1;
    }
}

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 

//No. 2
function rangeWithStep(startNum, finishNum, step){
    var a = [0];
    if(startNum < finishNum){
        while(startNum <= finishNum){
            a.push(startNum);
            startNum += step;
        }
        a.shift();
        return a
    }
    else if(startNum > finishNum){
        while(finishNum <= startNum){
            a.push(startNum);
            startNum -= step;
        }
        a.shift();
        return a
    }
    else{
        return -1;
    }
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5]

//No. 3
function sum(startNum, finishNum=0, step=1){
    var jumlah = 0;
    if(startNum < finishNum){
        while(startNum <= finishNum){
            jumlah += startNum;
            startNum += step;
        }
        return jumlah
    }
    else if(startNum > finishNum){
        while(finishNum <= startNum){
            jumlah += startNum;
            startNum -= step;
        }
        return jumlah
    }
    else{
        return -1;
    }
}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

//No. 4
function dataHandling(id, nama, kota, tanggalLahir, hobi){
    console.log("Nomor ID: ", id);
    console.log("Nama Lengkap: ", nama);
    console.log("TTL: ", kota  , tanggalLahir);
    console.log("Hobi: ", hobi);
}
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] ;
for(var baris = 0; baris < 4; baris++){
        dataHandling(...input[baris]);
        console.log("")
}

//No. 5
function balikKata(kata){
    var kataDiBalik = '';
    for (var i = kata.length-1; i >= 0; i--){
        kataDiBalik += kata[i];
    }
    return kataDiBalik
}
console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 

//No. 6
function dataHandling2(data){
    data.splice(1,1,"Roman Alamsyah Elsharawy");
    data.splice(2,1,"Provinsi Bandar Lampung");
    data.splice(4,1, "Pria", "SMA Internasional Metro");
    console.log(data);

    var tanggal=data[3].split("/");
    switch (tanggal[1]){
        case '01':   { console.log(' Januari '); break; }
        case '02':   { console.log(' Februari '); break; }
        case '03':   { console.log(' Maret '); break; }
        case '04':   { console.log(' April '); break; }
        case '05':   { console.log(' Mei '); break; }
        case '06':   { console.log(' Juni '); break; }
        case '07':   { console.log(' Juli '); break; }
        case '08':   { console.log(' Agustus '); break; }
        case '09':   { console.log(' September '); break; }
        case '10':   { console.log(' Oktober '); break; }
        case '11':   { console.log(' November '); break; }
        case '12':   { console.log(' Desember '); break; }
        default:  { console.log('Tidak terjadi apa-apa'); }
    }
    tanggal.sort((a,b) => b - a);
    console.log(tanggal);
    tanggalPisah = tanggal.join("-");
    console.log(tanggalPisah);
    namaAwal = data[1].slice(0,14);
    console.log(namaAwal);
}
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);