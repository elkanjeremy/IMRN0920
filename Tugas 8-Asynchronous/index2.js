var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
var totalTime=10000;
var jumlahBuku=books.length;

function bacaBuku(totalTime, indeks, jumlahBuku){
    readBooksPromise(totalTime, books[indeks]).then(function(time){
        totalTime = time;
        jumlahBuku -= 1;
        if(jumlahBuku > 0){
            bacaBuku(totalTime, indeks+1, jumlahBuku);
        }
        })
        .catch(function(error){

        })
}

bacaBuku(totalTime, 0, jumlahBuku);