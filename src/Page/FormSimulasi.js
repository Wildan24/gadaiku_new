import React,{Component} from 'react';
import { Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
  } from "react-router-dom";
import FormPengajuan from "./FormPengajuan";
import FormCalculator from "./FormCalculator";
import NumberFormat from 'react-number-format';


class FormSimulasi extends Component{
    render(){
        return(
        <Router>
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
                                        <label for="exampleInputEmail1">NJOP</label>
                                        <input type="text" class="form-control" id="njop" aria-describedby="Njop" placeholder="NJOP"/>
                                    </div>
                                    <div class="form-group col-md-3">
                                        <Button style={{marginTop:"31px"}} id="calculate" variant="outline-primary" type="button" size="md" block>Calculate</Button>
                                    </div>
                                    </div>

                                    <hr/>

                                    <div className="formRow" >
                                        <div class="form-group">
                                            <label for="exampleInputTotalpjm">Total Pinjaman</label> 
                                            <input type="text" class="form-control" id="totalpjm" aria-describedby="Pinjaman" placeholder="Total Pinjaman" />
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleInputAdmin">Admin</label>
                                            <input type="text" class="form-control" id="adm" aria-describedby="Admin" placeholder="Admin" disabled/>
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleInputFee">Fee</label>
                                            <input type="text" class="form-control" id="fee" aria-describedby="Fee" placeholder="Fee" disabled/>
                                        </div>
                                    </div>

                                    <div className="formRow2" >
                                        <div class="form-group">
                                                <label for="exampleInputTerima">Total Yang Diterima</label>
                                                <input type="text" class="form-control" id="total_terima" aria-describedby="totalTerima" placeholder="Total Yang Diterima" disabled/>
                                        </div>
                                        <div class="form-group">
                                                <label for="exampleInputBunga">Bunga Per Bulan</label>
                                                <input type="text" class="form-control" id="BungaPerBulan" aria-describedby="Bunga" placeholder="Bunga Per Bulan" disabled/>
                                        </div>
                                    </div>

                                    <Link to="/FormPengajuan">Form Pengajuan</Link>

                                </form>
                                <Switch>
                                    <Route path="/FormPengajuan">
                                        <FormPengajuan />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>    
        )
    }
}

export default FormSimulasi;
