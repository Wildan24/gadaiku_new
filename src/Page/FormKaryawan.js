import React, { Component, Fragment } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import { Button, Container} from 'react-bootstrap';

export default class FormKaryawan extends Component {

    state ={
        nama:'',
        email:'',
        alamat1:'',
        alamat2:'',
        pekerjaan:'',
        telp:'',
        kredit:'',
        pinjaman:'',
        plafondKredit:'',
        jangkaWaktu:'',
        status:'',

        pertanyaan1:'',
        pertanyaan2:'',
        pertanyaan3:'',
        pertanyaan4:'',
        pertanyaan5:'',
        pertanyaan6:'',
        pertanyaan7:'',
        pertanyaan8:'',
    };

    handleChange_nama = event => {
        this.setState({
            nama: event.target.value
        });
    };

    handleChange_email = event => {
        this.setState({
            email: event.target
        });
    };
    
    handleChange_alamat1 = event => {
        this.setState({
            alamat1: event.target
        });
    };

    handleChange_alamat2 = event => {
        this.setState({
            alamat2: event.target
        });
    };

    handleChange_pekerjaan = event => {
        this.setState({
            pekerjaan: event.target
        });
    };

    handleChange_telp = event => {
        this.setState({
            telp: event.target
        });
    };

    handleChange_kredit = event => {
        this.setState({
            kredit: event.target
        });
    };

    handleChange_pinjaman = event => {
        this.setState({
            pinjaman: event.target
        });
    };

    handleChange_plafondKredit = event => {
        this.setState({
            plafondKredit: event.target
        });
    };

    handleChange_jangkaWaktu = event => {
        this.setState({
            jangkaWaktu: event.target
        });
    };

    handleChange_status = event => {
        this.setState({
            status: event.target
        });
    };


    handleSubmit = event =>{
        event.preventDefault();
        if (this.state.nama =='' ||
            this.state.email =='' || 
            this.state.alamat1 =='' || 
            this.state.alamat2 == '' || 
            this.state.pekerjaan == '' || 
            this.state.telp == '' || 
            this.state.kredit == '' ||
            this.state.pinjaman == ''){

                alert("mohon isi dengan lengkap data diri diform.")
            }
        
        else if(this.state.telp.length != 12) {
            alert("Nomor Hp harus sesuai dan bisa dihubungi")
        }

        else{
            alert("OK");
        }
    };


    render(){
        return(
            <Fragment>
            <Container style={{marginBottom:"20px"}}>
            <div class="container">
                <div class="content">
                    <strong><h5>Form Pengajuan Karyawan</h5></strong>
                </div>
            </div>
            <hr/>
<div class="card">
    <div class="card-content">
        <Form onSubmit={this.handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridNama" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Nama :</strong></Form.Label>
                    <Form.Control type="text" placeholder="Nama Lengkap" value={this.state.nama} onChange={this.handleChange_nama} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Email :</strong></Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridAlamat1" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Alamat :</strong></Form.Label>
                    <Form.Control type="text" placeholder="Alamat Tempat Tinggal" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAlamat2" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Alamat Kantor :</strong></Form.Label>
                    <Form.Control type="text" placeholder="Alamat Kantor" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridPekerjaan" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Pekerjaan :</strong></Form.Label>
                    <Form.Control type="text" placeholder="Pekerjaan" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridTelp" style={{marginTop:"10px"}}>
                    <Form.Label><strong>No. Telp/Hp :</strong></Form.Label>
                    <Form.Control type="text" placeholder="No.Telp/Handphone" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} style={{marginTop:"10px"}}>
                    <Form.Label><strong>Tujuan Permohonan Kredit :</strong></Form.Label>
                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="Modal Kerja" type={type} id={`inline-${type}-modal`} />
                        <Form.Check inline label="Investasi" type={type} id={`inline-${type}-inves`} />
                        <Form.Check inline label="Lainnya" type={type} id={`inline-${type}-lain`} />
                        </div>
                    ))}
                </Form.Group>

                <Form.Group as={Col} style={{marginTop:"10px"}}>
                    <Form.Label><strong>Jenis Pinjaman :</strong></Form.Label>
                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Kredit Rekening Koran" type={type} id={`inline-${type}-koran`} />
                            <Form.Check inline label="Angsuran" type={type} id={`inline-${type}-angsur`} />
                            <Form.Check inline label="Investasi" type={type} id={`inline-${type}-inves2`} />
                        </div>
                    ))}
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridKredit" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Plafond Kredit :</strong></Form.Label>
                    <Form.Control type="text" placeholder="Plafond Kredit" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridWaktu" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Jangka Waktu :</strong></Form.Label>
                    <Form.Control type="text" placeholder="Jangka Waktu" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} style={{marginTop:"30px"}}>
                    <Form.Label><strong>Status :</strong></Form.Label>
                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Menikah" type={type} id={`inline-${type}-menikah`} />
                            <Form.Check inline label="Belum Menikah" type={type} id={`inline-${type}-belummenikah`} />
                        </div>
                    ))}
                </Form.Group>
            </Form.Row>

            <br/>
            <br/>

            <hr/>
            <div class="container">
                <div class="content">
                    <h5>Latar Belakang Calon Debitur</h5>
                </div>
            </div>
            <hr/>

            <Form.Row>
                <Form.Group as={Col} controlId="formGrid1" style={{marginTop:"10px"}}>
                    <Form.Label><strong>1. Berapa nilai angsuran yang ingin bapak/ibu bayar perbulannya ?</strong></Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid2" style={{marginTop:"10px"}}>
                    <Form.Label><strong>2. Apakah ada pilihan bank yang ingin digunakan oleh bapak/ibu ?</strong></Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid3" style={{marginTop:"10px"}}>
                    <Form.Label><strong>3. Apakah pernah ada pengalaman yang tidak menyenangkan dengan bank yang pernah dialami oleh bapak/ibu ?</strong></Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid4" style={{marginTop:"10px"}}>
                    <Form.Label><strong>4. Berapa total penjualan (omset) bapak/ibu perbulannya ?</strong></Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid5" style={{marginTop:"10px"}}>
                    <Form.Label><strong>5. Ekspansi bisnis apa yang sedang direncanakan bapak/ibu ?</strong></Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid6" style={{marginTop:"10px"}}>
                    <Form.Label><strong>6. Berapa lama terms of payment dari customer dan terms of payment ke supplier ?</strong></Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid7" style={{marginTop:"10px"}}>
                    <Form.Label><strong>7. Berapa total pendapatan gaji dan tunjangan bapak/ibu perbulannya ?</strong></Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid8" style={{marginTop:"10px"}}>
                    <Form.Label><strong>8. Apakah ada pendapatan lain seperti pendapatan sewa ataupun bisnis lain ?</strong></Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            
            <br/>
            <br/>

            <hr/>
            <div class="container">
                <div class="content">
                    <h5><strong> Persyaratan Dokumen Pemohon </strong></h5>
                </div>
            </div>
            <hr/>

            <Form.Row>
                <Form.Group as={Col} controlId="ktppemohon" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy KTP Pemohon</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group as={Col} controlId="pasutri" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy KTP Suami/Istri</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>
            
            <Form.Row>
                <Form.Group as={Col} controlId="kartukeluarga" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy Kartu Keluarga</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group as={Col} controlId="aktenikah" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy Akte Nikah/Cerai</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="npwp" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy NPWP (pemohon)</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group as={Col} controlId="pph" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy SPT/PPh21</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="slipgaji" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Asli Slip Gaji (1 bulan terakhir)</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group as={Col} controlId="tabungan" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy Tabungan (6 bulan terakhir)</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="pendukung1" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Lampiran Pendukung 1</strong></Form.Label>
                    <Form.Control type="file" placeholder="Lampiran Pendukung 1"/>
                </Form.Group>                    
                <Form.Group as={Col} controlId="pendukung2" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Lampiran Pendukung 2</strong></Form.Label>
                    <Form.Control type="file" placeholder="Lampiran Pendukung 2"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="pendukung3" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Lampiran Pendukung 3</strong></Form.Label>
                    <Form.Control type="file" placeholder="Lampiran Pendukung 3"/>
                </Form.Group>
            </Form.Row>

            <br/>
            <br/>

            <hr/>
            <div class="container">
                <div class="content">
                    <h5><strong>Dokumen Jaminan</strong></h5>
                </div>
            </div>
            <hr/>

            <Form.Row>
                <Form.Group as={Col} controlId="hm" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy Sertifikat HM/HGB/Strata Title</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="imb" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy IMB</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="pbb" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy PBB Terakhir (kecuali properti baru)</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>

            <br/>
            <br/>

            <Button variant="outline-primary" type="submit" size="md" block>
                AJUKAN
            </Button>
        </Form>
    </div>
</div>
        </Container>
        </Fragment>

        );
    }
}

