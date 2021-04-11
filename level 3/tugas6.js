    //no.1
    /*
    looping adalah sebuah urutan perintah yang secara menerus diulang hingga suatu kondisi tercapai.
    Pengertian dari loop sendiri adalah suatu kondisi yang dapat membantu developer mengerjakan program yang dapat membantu
     mengambil suatu data, menggantinya dan memeriksa apakah suatu kondisi sudah tercapai atau belum.
    */

     //for
   var i;
for (i = 0; i < cars.length; i++) {
  console.log(text += cars[i]);
}

    //for in
    var numbers = [45, 4, 9, 16, 25];

var txt = "nomor =";
var x;
for (x in numbers) {
  console.log(txt += numbers[x]);
}

    //for of

    let cars = ["BMW", "Volvo", "Mini"];
let text = "mobil = ";

for (let x of cars) {
  console.log(text + x);
}

    //while
    while (i < 10) {
        console.log(i);
        i++;
      }

      //do while

      let i=1;
      do {
        console.log( i);
        i++;
      }
      while (i < 10);

      //no.2
      let num=5;
      function nama(num){
          for(i=1;i<=num;i++){
        return console.log(i);
          }
      };

      //no.3
      i=0;
      function cekGanjilGenap(i){
        for(i=1;i<=num;i++){
            if(i%2==1)
            {
                return console.log("Bilangan Ganjil");
            }
            else{
                return console.log("Bilangan Genap");
            }
              }
      }

      //no.4
      i=0;
      function cekGanjilGenap(i){
        for(i=1;i<=num;i++){
            if(i%2==1)
            {
                return console.log("Bilangan Ganjil");
            }
            else{
                return console.log("Bilangan Genap");
            }
              }
      }

      //no.5
      const kegiatan = [
        ['bangun', 6],
        ['mandi', 7],
        ['belajar', 8]
      ]
    
        for (let i = 0; i < kegiatan.length; i++) {
            
            let innerArrayLength = kegiatan[i].length;
            
            for (let j = 0; j < innerArrayLength; j++) {
                console.log('[' + i + ',' + j + '] = ' + kegiatan[i][j]);
            }
        }