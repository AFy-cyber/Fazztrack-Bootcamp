    //no.1
    /* sebuah percabangan kode program dimana jika kondisi IF bernilai true,
     maka jalankan perintah yang ada di dalam blok IF tersebut. Namun jika kondisi bernilai false,
     maka jalankan kode program di dalam blok ELSE.
    */

     //no.2
     function cekParameter(x) {
        if(x) {
            return console.log("Ini parameternya " + x);
        } 
        else
        {
            return console.log("Tidak ada parameter yang diberikan!");
        }
    }

    //no.3
    var jam = new Date();
  var n = jam.getHours();
    salam = function(jam){
        if(0<=x<=10)
        {
            console.log("Selamat Pagi!");
        }
        else if(11<=x<=14)
        {
            console.log("Selamat Pagi!");
        }
        else if(5<=x<=18)
        {
            console.log("Selamat Pagi!");
        }
        else if(19<=x<=24)
        {
            console.log("Selamat Pagi!");
        }
        else
        {
            console.log("Jam salah/tidak ada");
        }
    }

    //no.4
   /* Pada operasi ==, javascript mengubah tipe dari nilai variabel ketika terjadi perbandingan.
Sementara operasi === tidak mengubah tipe dari nilai variabel ketika terjadi perbandingan.
Jadi, 3 == "3" itu bernilai benar, karena ketika terjadi proses perbandingan, "3" diubah menjadi bentuk Integer, yaitu 3.
 Oleh karena itu, perbandingan yang terjadi pasca perubahan tipe nilai adalah 3 == 3.

 Sama dengan == dan ===, !== tidak mengubah tipe data sedangkan != mengubah tipe data.
 
    == dan != yang bagus untuk perbadingan, karena semua data akan disamakan sehingga meminimalisir error ang terjadi
 */