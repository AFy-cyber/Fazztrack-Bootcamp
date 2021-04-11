    //no.1
    /*Fungsi adalah sub-program yang bisa digunakan kembali baik di dalam program itu sendiri,
     maupun di program yang lain. Fungsi di dalam Javascript adalah sebuah objek. 
     Karena memiliki properti dan juga method.
    */
        let bilanganPertama = 2;
        let bilanganKedua = 3;

    const nama = "Adnan Fadhil Yaser";

    function salam(x)
    {
        return console.log("Halo " + x + ", selamat pagi!");
    }

    console.log(salam(nama));


    //no.2
    function jumlah(bilanganPertama,bilanganKedua)
    {
        return console.log(bilanganPertama+bilanganKedua);
    }

    //no.3
    penjelasanArrowFunction = function() {
        return console.log("Arrow functions merupakan syntax function yang lebih pendek")
    }

    //no.4
    perkalian = function(bilanganPertama,bilanganKedua) {
        return console.log(bilanganPertama+bilanganKedua);
    }