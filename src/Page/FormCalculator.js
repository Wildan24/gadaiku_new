import $ from 'jquery';




$(document).ready(function () {
   
    $("#calculate").on('click', function () {
        var fc = require("format-currency");
        var opts = { format: '%s%v ', symbol: 'Rp. ' };


        var njop = $("#njop").val();
        
        var totPinjaman = njop*0.5;

        var totalKeluar = totPinjaman*0.85;
        totalKeluar = totalKeluar.toFixed(0);

        var fee = totPinjaman*0.05;
        fee = fee.toFixed(0);
        fee= fee.toString();
        
        var admin = totPinjaman*0.1;
        admin = admin.toFixed(0);
        admin = admin.toString();

        var BungaPerBulan = totPinjaman*0.04;
        BungaPerBulan = BungaPerBulan.toFixed(0);
        BungaPerBulan = BungaPerBulan.toString();
        
<<<<<<< HEAD
=======
       
        var totPinjaman_fix = totPinjaman;
        totPinjaman_fix = totPinjaman_fix.toFixed(0);
        totPinjaman_fix = totPinjaman_fix.toString();
>>>>>>> 6eb05b21c780fefb290673fd7e7c4221a148b47b


        document.getElementById("totalpjm").value = fc(totPinjaman_fix,opts);
            
        document.getElementById("adm").value = fc(admin,opts);

        document.getElementById("fee").value = fc(fee,opts);

        document.getElementById("total_terima").value = fc(totalKeluar,opts);
        
        document.getElementById("BungaPerBulan").value = fc(BungaPerBulan,opts);
    });

        $("#show_formPengajuan").click(function (e) { 
        $("#formPengajuan").css("display", "block");
        
        });


})