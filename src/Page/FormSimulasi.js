import React,{Component} from 'react';
import FormPengajuan from '../Page/FormPengajuan';

import { Button } from 'react-bootstrap';


class FormSimulasi extends Component{
    render(){
        return(
            <div class="section">
                <div class="container">
                    <div class="content">
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
                                    
                                
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">NJOP</label>
                                        <input type="email" class="form-control" id="njop" aria-describedby="emailHelp" placeholder="NJOP"/>
                                    </div>
                                    
                                    <div className="formRow" >
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Total Pinjaman</label>
                                            <input type="email" class="form-control" id="totalpjm" aria-describedby="emailHelp" placeholder="Total Pinjaman" disabled/>
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Admin</label>
                                            <input type="email" class="form-control" id="adm" aria-describedby="emailHelp" placeholder="Admin" disabled/>
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Fee</label>
                                            <input type="email" class="form-control" id="fee" aria-describedby="emailHelp" placeholder="Fee" disabled/>
                                        </div>
                                        
                                    </div>

                                    <div className="formRow2" >
                                        <div class="form-group">
                                                <label for="exampleInputEmail1">Total Yang Diterima</label>
                                                <input type="email" class="form-control" id="total_terima" aria-describedby="emailHelp" placeholder="Total Yang Diterima" disabled/>
                                        </div>
                                        <div class="form-group">
                                                <label for="exampleInputEmail1">Bunga Per Bulan</label>
                                                <input type="email" class="form-control" id="BungaPerBulan" aria-describedby="emailHelp" placeholder="Bunga Per Bulan" disabled/>
                                        </div>
                                    </div>
                                  
                                  <Button variant="outline-primary" type="button" size="md"  id="show_formPengajuan" block>
                                    Tampilkan Form
                                  </Button>
                                </form>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <FormPengajuan />
            </div>

        )
    }
}

export default FormSimulasi;
