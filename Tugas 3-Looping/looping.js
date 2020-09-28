//While Loop
var i = 2;

console.log("LOOPING PERTAMA");
while(i <= 20){
    console.log(i, " - I love coding");
    i += 2;
}
console.log("LOOPING KEDUA");
var i = i - 2;
while(i != 0){
    console.log(i, " - I will become a mobile developer");
    i -= 2;
}

//For Loop
console.log("OUTPUT");
for(var k = 1; k <= 20; k++){
    if(k%2 != 0){ //syarat bilangan ganjil
        if(k%3 == 0){ //syarat bilangan kelipatan 3
            console.log(k, " - I Love Coding");
        }
        else{
            console.log(k, " - Santai");
        }
    }
    else{
        console.log(k, " - Berkualitas");
    }
}

//Persegi Panjang #
for(var panjang = 1; panjang <= 4; panjang++){
    for(var lebar = 1; lebar <= 8; lebar++){
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}

//Membuat Tangga
for(var tinggi = 1; tinggi <= 7; tinggi++){
    for(var alas = 1; alas <= tinggi; alas++){
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}

//Membuat papan catur
for(var baris = 1; baris <= 8; baris++){
    for(var kolom = 1; kolom <= 8; kolom++){
        if(baris%2 != 0){ //Deteksi baris genap atau ganjil
            if(kolom%2 != 0){ //Jika kolom ada di baris ganjil dan kolom genap, maka print ' '
                process.stdout.write(" ");
            }
            else{   //Jika kolom ada di baris ganjil dan kolom ganjil, maka print "#"
                process.stdout.write("#");
            }
        }
        else{
            if(kolom%2 != 0){ //Jika kolom ada di baris ganjil dan kolom genap, maka print '#'
            process.stdout.write("#");
            }
            else{
                process.stdout.write(" ");
            }
        }
    }
    process.stdout.write("\n");
}