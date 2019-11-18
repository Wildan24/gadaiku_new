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