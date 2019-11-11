import React,{Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
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
                                <form class="form-inline">
                                    <Container>
                                    <h3 class="center">KALKULATOR SIMULASI</h3>
                                    <hr/>
                                        <Row>
                                            <Col lg={12}>
                                                <div class="form-group row" style={{ margin: "10px" }}>
                                                    <label for="njop" class="col-sm-4 col-form-label">NJOP</label>
                                                    <div>
                                                        <input type="number" class="form-control" id="njop" placeholder="NJOP" />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12}>
                                                <div class="form-group row" style={{ margin: "10px" }}>
                                                    <label for="totalpjm" class="col-sm-4 col-form-label">Total Pinjaman</label>
                                                    <div>
                                                        <input type="number" class="form-control" id="totalpjm" placeholder="Total Pinjaman" disabled />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12}>
                                                <div class="form-group row" style={{ margin: "10px" }}>
                                                    <label for="admin" class="col-sm-4 col-form-label">Admin</label>
                                                    <div>
                                                        <input type="number" class="form-control" id="adm" placeholder="Admin" disabled />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12}>
                                                <div class="form-group row" style={{ margin: "10px" }}>
                                                    <label for="fee" class="col-sm-4 col-form-label">Fee</label>
                                                    <div>
                                                        <input type="number" class="form-control" id="fee" placeholder="Fee" disabled/>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        
                                        <Row>
                                            <Col lg={12}>
                                                <div class="form-group row" style={{ margin:"15px" }}>
                                                    <label for="total_terima" class="col-sm-4 col-form-label">Total Diterima</label>
                                                    <div>
                                                        <input type="number" class="form-control" id="total_terima" placeholder="Total Yang Diterima" disabled />
                                                    </div>
                                                    <p style={{ fontSize: "11px" }}> Maksimal Yang Bisa Di Approve</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12}>
                                                <div class="form-group row" style={{ margin:"10px" }}>
                                                    <label for="total_terima" class="col-sm-4 col-form-label">Bunga per Bulan</label>
                                                    <div>
                                                        <input type="number" class="form-control" id="BungaPerBulan" placeholder="Bunga perbulan" disabled />
                                                    </div>                                               
                                                </div>
                                            </Col>
                                        </Row>
                                  </Container>      
                                </form>
                                <div style={{ margin: "50px" }}>
                               {/*<button type="button" class="btn btn-primary">Primary</button>*/}
                                    <Button href="./FormPengajuan" variant="outline-warning" size="md" block>
                                        <b>Form Pengajuan</b>
                                    </Button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default FormSimulasi;
