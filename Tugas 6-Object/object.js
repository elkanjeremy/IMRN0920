//No. 1
function arrayToObject(arr){
    var now = new Date();
    var thisYear = now.getFullYear();

    for(var data = 0; data < arr.length; data++){
        console.log(data+1, ".", arr[data][0], arr[data][1], ":");
        if(isNaN(thisYear-arr[data][3])){
            var umur = "Invalid Birth Year";
        }
        else{
            var umur = thisYear-arr[data][3];
        }
        var orang1 = {
            firstName: arr[data][0],
            lastName: arr[data][1],
            gender: arr[data][2],
            age: umur
        }
        console.log(orang1);
    }
}

var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ];
arrayToObject(people);

//No. 2
function shoppingTime(memberid = "", uang){
    var barangDibeli = [0];
    var uangAwal = uang;
    var counterSepatu = 1;
    var counterZoro = 1;
    var counterHN = 1;
    var counterUniklooh = 1;
    var counterCasing = 1;

    if(memberid == ""){
        return("Mohon maaf, toko X hanya berlaku untuk member saja");
    }
    else if(uang < 50000){
        return("Mohon maaf, uang tidak cukup")
    }
    else{
        while(uang >= 50000){
            if(uang >= 1500000 && counterSepatu != 0){
                barangDibeli.push("Sepatu Stacattu");
                uang -= 1500000;
                counterSepatu -= 1;
            }
            else if(uang >= 500000 && counterZoro != 0){
                barangDibeli.push("Baju Zoro");
                uang -= 500000;
                counterZoro -= 1;
            }
            else if(uang >= 250000 && counterHN != 0){
                barangDibeli.push("Baju H&N");
                uang -= 250000;
                counterHN -= 1;
            }
            else if(uang >= 175000 && counterUniklooh != 0){
                barangDibeli.push("Sweater Uniklooh");
                uang -= 175000;
                counterUniklooh -= 1;
            }
            else if(uang >= 50000 && counterCasing != 0){
                barangDibeli.push("Casing Handphone");
                uang -= 50000;
                counterCasing -= 1;
            }
            else{ //Jika uang belum habis, namun karena hanya boleh membeli maksimal 1 barang, maka harus keluar loop
                break;
            }
        }
        barangDibeli.shift();

        var pelanggan = {
            memberId : memberid,
            money : uangAwal,
            listPurchased: barangDibeli,
            changeMoney : uang
        }
        return pelanggan;
    }
}
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000)); 
console.log(shoppingTime());

//No 3.
function naikAngkot (listPenumpang=''){
    var rute = ['A','B','C','D','E','F'];
    var dataPenumpang = [];
    var kozong = [];

    if(listPenumpang == ''){
        return kozong;
    }

    for(var idPenumpang = 0; idPenumpang < listPenumpang.length; idPenumpang++){
        var idNaikDari = 0;
        var idTujuan = 0;

        while(listPenumpang[idPenumpang][1]){ //Untuk mencari index pada array rute yang bersesuaian dengan naikDari. 
            if(listPenumpang[idPenumpang][1] == rute[idNaikDari]){
                break;
            }
            else{
                idNaikDari++;
            }
        }

        while(listPenumpang[idPenumpang][2]){ //Untuk mencari index pada array rute yang bersesuaian dengan tujuan. 
            if(listPenumpang[idPenumpang][2] == rute[idTujuan]){
                break;
            }
            else{
                idTujuan++;
            }
        }

        dataPenumpang.push({
            penumpang : listPenumpang[idPenumpang][0],
            naikDari : listPenumpang[idPenumpang][1],
            tujuan : listPenumpang[idPenumpang][2],
            bayar : (idTujuan-idNaikDari)*2000 //Selisih dari index array rute merupakan jaraknya.
        })
    }
    return dataPenumpang;
}
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
console.log(naikAngkot([]));