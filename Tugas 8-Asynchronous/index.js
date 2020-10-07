// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

// Tulis code untuk memanggil function readBooks di sini
var totalTime=10000;
var jumlahBuku=books.length;

function bacaBuku(totalTime, indeks, jumlahBuku){
    readBooks(totalTime, books[indeks], function(time){
        totalTime = time;
        jumlahBuku -= 1;
        if(jumlahBuku > 0){
            bacaBuku(totalTime, indeks+1, jumlahBuku);
        }
    });
}

bacaBuku(totalTime, 0, jumlahBuku);