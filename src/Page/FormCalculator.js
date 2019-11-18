import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';


$(document).ready(function () {
   
    $("#calculate").on('click', function () {

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
        
        var totPinjaman_fix = totPinjaman;
        totPinjaman_fix = totPinjaman_fix.toFixed(0);
        totPinjaman_fix = totPinjaman_fix.toString();


        document.getElementById("totalpjm").value = totPinjaman;
        
        document.getElementById("adm").value = admin;

        document.getElementById("fee").value = fee;

        document.getElementById("total_terima").value = totalKeluar;
        
        document.getElementById("BungaPerBulan").value = BungaPerBulan;
    });

        $("#show_formPengajuan").click(function (e) { 
        $("#formPengajuan").css("display", "block");
        
        });

    })

