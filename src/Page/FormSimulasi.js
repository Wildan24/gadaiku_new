import React, { Component } from "react";
import { Card, InputGroup, Button} from 'react-bootstrap';
import FormCalculator from "./FormCalculator";
// import NumberFormat from 'react-number-format';
import FormPengajuan from '../Page/FormPengajuan.js';
import * as emailjs from 'emailjs-com';

export default function App() {

    const smalltext = {
        color : "lightblue",
        fontSize: "14px",
        fontWeight:"bold"
    },
     card = {
        width:"300px", height:"150px", marginTop:"10%"
     }

  return (

            <div class="section">
                <div class="container">
                    <div class="content" id="hitung">
                      <h2>Kalkulator Simulasi Pinjaman Dengan Jaminan Rumah</h2>
                      <p>Gunakan Kalkulator KPR untuk mendapatkan kemudahan pinjaman kredit rumah, perbandingan suku bunga cicilan bank di Indonesia</p>
                    </div>
                </div>
                <div class="container">
                    <div class="column is-two-quarters">
                        <div class="card">
                        
                            <div class="card-content">
                                <form class="">
                                    <h3 class="center">KALKULATOR SIMULASI</h3>        
                                    <hr/>
                                    <div className="formRow" >
                                    <div class="form-group col-md-9">
                                        <label for="exampleInputNjop"><strong>NJOP</strong></label>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><strong>Rp</strong></InputGroup.Text>
                                            <input type="text" class="form-control" id="njop" aria-describedby="Njop" placeholder="NJOP"/>
                                        </InputGroup.Prepend>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <Button style={{marginTop:"37px"}} id="calculate" variant="outline-primary" type="button" size="md" block>Calculate</Button>
                                    </div>
                                    </div>

                                    <hr/>

                                    <div className="formRow" >
                                        <div class="form-group">
                                            <label for="exampleInputTotalpjm"><strong>Total Pinjaman</strong></label> 
                                            <input type="text" class="form-control" id="totalpjm" aria-describedby="Pinjaman" placeholder="Total Pinjaman" disabled/>
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleInputAdmin"><strong>Admin</strong></label>
                                            <input type="text" class="form-control" id="adm" aria-describedby="Admin" placeholder="Admin" disabled/>
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleInputFee"><strong>Fee</strong></label>
                                            <input type="text" class="form-control" id="fee" aria-describedby="Fee" placeholder="Fee" disabled/>
                                        </div>
                                    </div>

                                    <div className="formRow2" >
                                        <div class="form-group">
                                                <label for="exampleInputTerima"><strong>Total Yang Diterima</strong></label>
                                                <input type="text" style={{fontWeight:"bold", backgroundColor:"#fee8c4"}} class="form-control" id="total_terima" placeholder="Total Yang Diterima" disabled/>
                                                <small style={smalltext} class="form-text text-muted">*Maksimal yang bisa diapprove</small>
                                        </div>
                                        <div>
                                            <Card border="danger" style={card}>
                                            <Card.Body>
                                            <label for="exampleInputBunga"><strong>Bunga Per Bulan</strong></label>
                                            <input type="text" style={{fontWeight:"bold", backgroundColor:"#fdc66c"}} class="form-control" id="BungaPerBulan" placeholder="Bunga Per Bulan" disabled/>
                                                <p style={{fontSize:"12px"}}>
                                                    Note: Perhitungan ini sifatnya simulasi belaka. Untuk lebih jelasnya silakan hubungi pemberi kredit
                                                </p> 
                                            </Card.Body>
                                            </Card>
                                        </div>
                                    </div>
                                
                                    <Button variant="outline-warning" style={{marginTop:"60px", fontWeight:"bolder", fontSize:"20px"}} type="button" id="show_formPengajuan" size="md" block>Form Pengajuan</Button>
                                    
                                    <FormPengajuan />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

  );
}