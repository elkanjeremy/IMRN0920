/**
 * Berikut soal quiz kali ini, terdiri dari 3 Soal
 * Kerjakan dengan sebaik mungkin, dengan menggunakan metode yang telah dipelajari,
 * Tidak diperkenankan untuk menjawab hanya dengan console.log('teks jawaban');
 * maupun dengan terlebih dahulu memasukkannya ke dalam variabel, misal var a = 'teks jawaban'; console.log(a);
 * 
 * Terdapat tambahan poin pada setiap soal yang dikerjakan menggunakan sintaks ES6 (+5 poin)
 * Jika total nilai Anda melebihi 100 (nilai pilihan ganda + coding), tetap akan memiliki nilai akhir yaitu 100
 * 
 * Selamat mengerjakan
*/

/*========================================== 
  1. SOAL CLASS SCORE (10 poin + 5 Poin ES6)
  ==========================================
  Buatlah sebuah class dengan nama Score. class Score tersebut memiliki properti "subject", "points", dan "email". 
  "points" dapat di input berupa number (1 nilai) atau array of number (banyak nilai).
  tambahkan method average untuk menghitung rata-rata dari parameter points ketika yang di input berupa array (lebih dari 1 nilai)
*/

class Score {
  constructor(subject, email){
    this.points = null;
    this.subject = subject;
    this.email = email;
  }

  average(point){
    if(typeof point === 'object' && point.length > 1){
      let sum = 0;
      for(let i = 0; i<point.length ; i++){
        sum += point[i];
      }
      this.points = sum/point.length;
    }
    else{
      this.points = point;
    }

    return{
      email: this.email,
      subject: this.subject,
      points: this.points
    }
  }
}

const ScoreClass = new Score('Subject', 'test@mail.com');

console.log('SOAL CLASS SCORE');
console.log(ScoreClass.average(9));
console.log(ScoreClass.average([10, 8, 9, 8, 7, 5]));
console.log();

/*=========================================== 
  2. SOAL Create Score (10 Poin + 5 Poin ES6)
  ===========================================
  Membuat function viewScores yang menerima parameter data berupa array multidimensi dan subject berupa string
  Function viewScores mengolah data email dan nilai skor pada parameter array 
  lalu mengembalikan data array yang berisi object yang dibuat dari class Score.
  Contoh: 

  Input
   
  data : 
  [
    ["email", "quiz-1", "quiz-2", "quiz-3"],
    ["abduh@mail.com", 78, 89, 90],
    ["khairun@mail.com", 95, 85, 88]
  ]
  subject: "quiz-1"

  Output 
  [
    {email: "abduh@mail.com", subject: "quiz-1", points: 78},
    {email: "khairun@mail.com", subject: "quiz-1", points: 95},
  ]
*/

const data = [
  ["email", "quiz-1", "quiz-2", "quiz-3"],
  ["abduh@mail.com", 78, 89, 90],
  ["khairun@mail.com", 95, 85, 88],
  ["bondra@mail.com", 70, 75, 78],
  ["regi@mail.com", 91, 89, 93]
];

const viewScores = (data = [], subject) => {
  for(var i = 1; i<data[0].length; i++){
    if(data[0] = subject){
      var scoreIndex = i;
      break;
    }
  }
  return data.slice(1, data.length).map(
    eachStudent => {
      const Nilai = new Score(subject, eachStudent[0]).average(eachStudent[scoreIndex]);
      console.log(Nilai);
    }
  );
}

// TEST CASE
viewScores(data, "quiz-1")
viewScores(data, "quiz-2")
viewScores(data, "quiz-3")

/*==========================================
  3. SOAL Recap Score (15 Poin + 5 Poin ES6)
  ==========================================
    Buatlah fungsi recapScore yang menampilkan perolehan nilai semua student. 
    Data yang ditampilkan adalah email user, nilai rata-rata, dan predikat kelulusan. 
    predikat kelulusan ditentukan dari aturan berikut:
    nilai > 70 "participant"
    nilai > 80 "graduate"
    nilai > 90 "honour"

    output:
    1. Email: abduh@mail.com
    Rata-rata: 85.7
    Predikat: graduate

    2. Email: khairun@mail.com
    Rata-rata: 89.3
    Predikat: graduate

    3. Email: bondra@mail.com
    Rata-rata: 74.3
    Predikat: participant

    4. Email: regi@mail.com
    Rata-rata: 91
    Predikat: honour

*/

const recapScores = () => {
  const getPredicate = score => {
    if (score > 90) {
      return 'Honour';
    } else if (score > 80) {
      return 'Graduate';
    } else if (score > 70) {
      return 'Participant';
    }
    return null
  }
  data.slice(1).forEach((eachStudent, i) => {
    const data = new Score(null, eachStudent[0]).average(eachStudent.slice(1));
    console.log(`${i + 1}. Email: ${data.email}`);
    console.log(`Rata-rata: ${data.points}`);
    console.log(`Predikat: ${getPredicate(data.points)}`);
    console.log();
  });
}

recapScores(data);
