import React, { Component } from "react";
import { Card, InputGroup, Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormCalculator from "./FormCalculator";
// import NumberFormat from 'react-number-format';
import FormPengajuan from '../Page/FormPengajuan.js';
import * as emailjs from 'emailjs-com';

    const smalltext = {
        color : "lightblue",
        fontSize: "14px",
        fontWeight:"bold"
    },
     card = {
        width:"350px", height:"180px", marginTop:"10%"
     }

const smalltext = {
    color : "lightblue",
    fontSize: "14px",
    fontWeight:"bold"
}
const card = {
    width:"300px", height:"150px", marginTop:"10%"
 }

export default class FormSimulasi extends Component  {

     state={
         njop:"343434343"
     };

     

     handleChange_njop = event =>{
        this.setState({
            njop: event.target.value  
        });

       

        
        
    };

    returnNjop(){
        return this.state.njop;
    }

    render(){ 
        return (

            <div className="section">
            <div className="container">
                <div className="content" id="hitung">
                  <h2>Kalkulator Simulasi Pinjaman Dengan Jaminan Rumah</h2>
                  <p>Gunakan Kalkulator KPR untuk mendapatkan kemudahan pinjaman kredit rumah, perbandingan suku bunga cicilan bank di Indonesia</p>
                </div>
            </div>
            <div className="container">
                <div className="column is-two-quarters">
                    <div className="card">
                    
                        <div className="card-content">
                            <form>
                                <h3 className="center">KALKULATOR SIMULASI</h3>        
                                <hr/>
                                <div className="formRow" >
                                <div className="form-group col-md-9">
                                    <label htmlFor="exampleInputNjop"><strong>NJOP</strong></label>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text><strong>Rp</strong></InputGroup.Text>
                                        <Form.Control type="text" className="form-control" id="njop" aria-describedby="Njop" placeholder="NJOP" value={this.state.njop} onInput={this.handleChange_njop} />
                                    </InputGroup.Prepend>
                                </div>
                                <div className="form-group col-md-3">
                                    <Button style={{marginTop:"37px"}} id="calculate" variant="outline-primary" type="button" size="md" block>Calculate</Button>
                                </div>
                                </div>

                                <hr/>

                                <div className="formRow" >
                                    <div className="form-group">
                                        <label htmlFor="exampleInputTotalpjm"><strong>Total Pinjaman</strong></label> 
                                        <input type="text" className="form-control" id="totalpjm" aria-describedby="Pinjaman" placeholder="Total Pinjaman" disabled/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleInputAdmin"><strong>Admin</strong></label>
                                        <input type="text" className="form-control" id="adm" aria-describedby="Admin" placeholder="Admin" disabled/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleInputFee"><strong>Fee</strong></label>
                                        <input type="text" className="form-control" id="fee" aria-describedby="Fee" placeholder="Fee" disabled/>
                                    </div>
                                </div>

                                    <div className="formRow2" >
                                        <div className="form-group">
                                                <label htmlFor="exampleInputTerima"><strong>Total Yang Diterima</strong></label>
                                                <input type="text" style={{fontWeight:"bold", backgroundColor:"#fee8c4"}} className="form-control" id="total_terima" placeholder="Total Yang Diterima" disabled/>
                                                <small style={smalltext} className="form-text text-muted">*Maksimal yang bisa diapprove</small>
                                        </div>
                                        <div>
                                            <Card border="danger" style={card}>
                                            <Card.Body class="text-center">
                                            <label style={{marginTop:"5%", marginBottom:"5%"}} htmlFor="exampleInputBunga"><strong>Bunga Per Bulan</strong></label>
                                            <br/>
                                            <input type="text" style={{fontWeight:"bold", backgroundColor:"#fdc66c"}} className="form-control" id="BungaPerBulan" placeholder="Bunga Per Bulan" disabled/>
                                                <p style={{fontSize:"16px"}}>
                                                    Note: Perhitungan ini sifatnya simulasi belaka. Untuk lebih jelasnya silakan hubungi pemberi kredit
                                                </p> 
                                            </Card.Body>
                                            </Card>
                                        </div>
                                <div className="formRow2" >
                                    <div className="form-group">
                                            <label htmlFor="exampleInputTerima"><strong>Total Yang Diterima</strong></label>
                                            <input type="text" style={{fontWeight:"bold", backgroundColor:"#fee8c4"}} className="form-control" id="total_terima" placeholder="Total Yang Diterima" disabled/>
                                            <small style={smalltext} className="form-text text-muted">*Maksimal yang bisa diapprove</small>
                                    </div>
                                    <div>
                                        <Card border="danger" style={card}>
                                        <Card.Body>
                                        <label htmlFor="exampleInputBunga"><strong>Bunga Per Bulan</strong></label>
                                        <input type="text" style={{fontWeight:"bold", backgroundColor:"#fdc66c"}} className="form-control" id="BungaPerBulan" placeholder="Bunga Per Bulan" disabled/>
                                            <p style={{fontSize:"12px"}}>
                                                Note: Perhitungan ini sifatnya simulasi belaka. Untuk lebih jelasnya silakan hubungi pemberi kredit
                                            </p> 
                                        </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            
                                <Button variant="outline-warning" style={{marginTop:"60px", marginBottom:"30px", fontWeight:"bolder", fontSize:"20px"}} type="button" id="show_formPengajuan" size="md" block>Form Pengajuan</Button>
                                
                                <FormPengajuan />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}