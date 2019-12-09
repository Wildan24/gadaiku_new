import React, { Component, Fragment } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';
import { Button, Container} from 'react-bootstrap';
import * as emailjs from 'emailjs-com';

export default class FormPerusahan extends Component {


    constructor(props) {
        super(props);
        this.onHome = this.onHome.bind(this);
       
        }
            onHome() {
            this.props.history.push('/');
        }

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
            email: event.target.value
        });
    };
    
    handleChange_alamat1 = event => {
        this.setState({
            alamat1: event.target.value
        });
    };

    handleChange_alamat2 = event => {
        this.setState({
            alamat2: event.target.value
        });
    };

    handleChange_pekerjaan = event => {
        this.setState({
            pekerjaan: event.target.value
        });
    };

    handleChange_telp = event => {
        this.setState({
            telp: event.target.value
        });
    };

    handleChange_kredit = event => {
        this.setState({
            kredit: event.target.value
        });
    };

    handleChange_pinjaman = event => {
        this.setState({
            pinjaman: event.target.value
        });
    };

    handleChange_plafondKredit = event => {
        this.setState({
            plafondKredit: event.target.value
        });
    };

    handleChange_jangkaWaktu = event => {
        this.setState({
            jangkaWaktu: event.target.value
        });
    };

    handleChange_status = event => {
        this.setState({
            status: event.target.value
        });
    };


    onHandleSubmit = event => {
        event.preventDefault();
        if (this.state.nama =='' ||
            this.state.email =='' || 
            this.state.alamat1 =='' || 
            this.state.alamat2 == '' || 
            this.state.pekerjaan == '' || 
            this.state.telp == '' )
            
            {

                alert("mohon isi dengan lengkap data diri diform.")
            }
        
        else if(this.state.telp.length != 12) {
            alert("Nomor Hp harus sesuai dan bisa dihubungi")
        }

        else {

            var temp =  window.confirm("Pastikan data yang anda masukan sudah benar.");
            if (temp == true)
           {
                this.sendEmail();
                alert("silahkan Cek Email anda");
           }
        }
    };
    

    render(){

    const 

        card = {
            width:"300px", height:"150px", marginTop:"10%"
         };

        return(
            <Fragment>
            <Container style={{marginBottom:"20px"}}>
            <div class="container">
                <div class="content">
                    <strong><h5>Form Pengajuan Perusahaan</h5></strong>
                </div>
            </div>

            <hr/>

    <div class="card">
      <div class="card-content">
        <Form onSubmit={this.onHandleSubmit} value={this.state.form}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridNama" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Nama :</strong></Form.Label>
                    <Form.Control type="text" placeholder="Nama Lengkap" value={this.state.nama} onChange={this.handleChange_nama} />
                </Form.Group>
                <br/>
                <Form.Group as={Col} controlId="formGridEmail" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Email :</strong></Form.Label>
                    <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange_email} />
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridAlamat1" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Alamat :</strong></Form.Label>
                    <Form.Control type="text" placeholder="Alamat Tempat Tinggal" value={this.state.alamat1} onChange={this.handleChange_alamat1} />
                </Form.Group>
                <br/>
                <Form.Group as={Col} controlId="formGridAlamat2" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Alamat Kantor :</strong></Form.Label>
                    <Form.Control type="text" placeholder="Alamat Kantor" value={this.state.alamat2} onChange={this.handleChange_alamat2} />
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridNamaPerusahaan" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Nama Perusahaan :</strong></Form.Label>
                    <Form.Control type="text" placeholder="Nama Perusahaan" value={this.state.nama_perusahaan} onChange={this.handleChange_nama_perusahaan} />
                </Form.Group>
                <br/>
                <Form.Group as={Col} controlId="formGridLamaUsaha" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Lama Usaha/Lama Bekerja :</strong></Form.Label>
                    <Form.Control type="text" placeholder="Lama Usaha/Lama Bekerja" value={this.state.lama} onChange={this.handleChange_lama} />
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridPekerjaan" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Pekerjaan :</strong></Form.Label>
                    <Form.Control type="text" placeholder="Pekerjaan" value={this.state.pekerjaan} onChange={this.handleChange_pekerjaan} />
                </Form.Group>
                <br/>
                <Form.Group as={Col} controlId="formGridTelp" style={{marginTop:"10px"}}>
                    <Form.Label><strong>No.Telp/Hp (WhatsApp) :</strong></Form.Label>
                    <Form.Control type="text" placeholder="No.Telp/Handphone" value={this.state.telp} onChange={this.handleChange_telp}/>
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} style={{marginTop:"10px"}}>
                    <Form.Label><strong>Tujuan Permohonan Kredit :</strong></Form.Label>
                    <select className="form-control" value={this.state.permohonan_kredit} onChange={this.handleChange_permohonan_kredit}>
                        <option value="modal_kerja"> Modal Kerja</option>
                        <option value="investasi">Investasi</option>
                        <option value="lainnya">Lainnya</option>
                    </select>
                </Form.Group>
                <br/>
                <Form.Group as={Col} style={{marginTop:"10px"}}>
                    <Form.Label><strong>Jenis Pinjaman :</strong></Form.Label>
                    <select className="form-control" value={this.state.jenis_pinjaman} onChange={this.handleChange_jenis_pinjaman}>
                        <option value="kredit_rekening_koran">Kredit Rekening Koran</option>
                        <option value="angsuran">Angsuran</option>
                        <option value="investasi">Investasi</option>
                    </select>
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridKredit" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Plafond Kredit :</strong></Form.Label>
                    <Form.Control type="text" placeholder="Plafond Kredit" value={this.state.plafond_kredit} onChange={this.handleChange_plafond_kredit} />
                </Form.Group>
                <br/>
                <Form.Group as={Col} controlId="formGridWaktu" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Jangka Waktu :</strong></Form.Label>
                    <Form.Control type="text" placeholder="Jangka Waktu" value={this.state.jangka_waktu} onChange={this.handleChange_jangka_waktu}/>
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} style={{marginTop:"30px"}}>
                    <Form.Label><strong>Status :</strong></Form.Label>
                    <select className="form-control" value={this.state.status} onChange={this.handleChange_Status}>
                        <option value="Menikah">Menikah</option>
                        <option value="belum_menikah">Belum Menikah</option>
                    </select>
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
            <br/>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid2" style={{marginTop:"10px"}}>
                    <Form.Label><strong>2. Apakah ada pilihan bank yang ingin digunakan oleh bapak/ibu ?</strong></Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid3" style={{marginTop:"10px"}}>
                    <Form.Label><strong>3. Apakah pernah ada pengalaman yang tidak menyenangkan dengan bank yang pernah dialami oleh bapak/ibu ?</strong></Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid4" style={{marginTop:"10px"}}>
                    <Form.Label><strong>4. Berapa total penjualan (omset) bapak/ibu perbulannya ?</strong></Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid5" style={{marginTop:"10px"}}>
                    <Form.Label><strong>5. Ekspansi bisnis apa yang sedang direncanakan bapak/ibu ?</strong></Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid6" style={{marginTop:"10px"}}>
                    <Form.Label><strong>6. Berapa lama terms of payment dari customer dan terms of payment ke supplier ?</strong></Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid7" style={{marginTop:"10px"}}>
                    <Form.Label><strong>7. Berapa total pendapatan gaji dan tunjangan bapak/ibu perbulannya ?</strong></Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Form.Row>
            <br/>
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
                    <h5><strong> Persyaratan Dokumen Pemohon - Perusahaan</strong></h5>
                </div>
            </div>

            <hr/>

            <Form.Row>
                <Form.Group as={Col} controlId="ktppemohon" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy KTP Pemohon</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <br/>
                <Form.Group as={Col} controlId="pasutri" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy KTP Suami/Istri</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} controlId="kartukeluarga" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy Kartu Keluarga</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <br/>
                <Form.Group as={Col} controlId="aktenikah" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy Akte Nikah/Cerai</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} controlId="npwp" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy NPWP Pemohon *)</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <br/>
                <Form.Group as={Col} controlId="pph" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy SPT/PPh21</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} controlId="siup" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy SIUP</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <br/>
                <Form.Group as={Col} controlId="tdp" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy TDP **)</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} controlId="slipaktapendiri" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy Akta Pendirian/Perubahan terkini **)</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <br/>
                <Form.Group as={Col} controlId="menkeh" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy Akta Pengesahan Menkeh **)</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} controlId="tabungan6bulan" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy R/K atau tabungan 6 bulan terakhir *)</strong></Form.Label>
                    <Form.Control type="file" placeholder="Fotocopy R/K atau tabungan"/>
                </Form.Group>
                <br/>                    
                <Form.Group as={Col} controlId="pisahhartanotaril" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Akta pisah harta Notaril dan didaftarkan ke KUA atau catatan sipil (jika ada)</strong></Form.Label>
                    <Form.Control type="file" placeholder="Akta pisah harta Notaril"/>
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} controlId="kreditpemilikan" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Asli Pernyataan mengenai kredit pemilikan properti atau kredit beranggun properti yang sedang diajukan atau dimiliki</strong></Form.Label>
                    <Form.Control type="file" placeholder="Asli Pernyataan mengenai kredit beranggun properti"/>
                </Form.Group>
                <Form.Group as={Col} controlId="laporankeuangan" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Laporan Keuangan (2 tahun terakhir)</strong></Form.Label>
                    <Form.Control type="file" placeholder="Laporan Keuangan"/>
                </Form.Group>
            </Form.Row>
            <br/>
                <br/>
            <Form.Row>
                <p style={{fontSize:"14px", textAlign:"left", fontWeight: 'bold'}}>
                    Keterangan :<br/>
                    *) Untuk Joint income suami dan istri, dokumen pasangan harus dilampirkan.<br/>
                    **) Khusus untuk pengusaha dengan badan hukum PT.
                </p>
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
            <br/>
            <Form.Row>
                <Form.Group as={Col} controlId="imb" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy IMB</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} controlId="pbb" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Fotocopy PBB Terakhir (kecuali properti baru)</strong></Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>

            <br/>
            <br/>

            <Card border="danger" style={{marginBottom:"30px"}}>
                <Card.Body>
                    <h6 class="text-center"><strong>Terms and Condition</strong></h6>
                    <p class="text-center" style={{fontSize:"18px", text:"center"}}>
                    I authorize prospective Credit Grantors/Lending/Leasing Companies to obtain personal and credit information about me from my employer and credit bureau, or credit reporting agency, any person who has or may have any financial dealing with me, or from any references I have provided. 
                    This information, as well as that provided by me in the application, will be referred to in connection with this lease and any other relationships we may establish from time to time. 
                    Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus or other credit reporting agencies. *
                    </p> 
                </Card.Body>
            </Card>

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


sendEmail() {
    this.state.form = 
    `<table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
        <td bgcolor="#ffffff" align="center" style="padding: 15px;">
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="500">
            <tr>
            <td align="center" valign="top" width="500">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px;" class="responsive-table">
                <tr>
                    <td>
                        <!-- COPY -->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td align="center" style="font-size: 32px; font-family: Helvetica, Arial, sans-serif; color: #333333; padding-top: 30px;" class="padding-copy">Pengajuan Tipe Perusahaan - `+this.state.nama+`</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            </td>
            </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td bgcolor="#ffffff" align="center" style="padding: 15px;" class="padding">
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="500">
            <tr>
            <td align="center" valign="top" width="500">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px;" class="responsive-table">
                <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Nama </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">`+this.state.nama+`</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                 <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Email</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">`+this.state.email+`</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                
                <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Alamat Tempat Tinggal</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">`+this.state.alamat1+`</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                
                <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Alamat Kantor</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">`+this.state.alamat2+`</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Pekerjaan</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">`+this.state.pekerjaan+`</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">No.Telp (WhatsApp)</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">`+this.state.telp+`</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Tujuan Permohonan Kredit</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">`+this.state.kredit+`</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Jenis Pinjaman</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;"></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Plafond Kredit</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;"></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Jangka Waktu</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;"></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Status</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;"></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

            </table>
            </td>
            </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td bgcolor="#ffffff" align="center" style="padding: 15px;">
            <table border="0" cellpadding="0" cellspacing="0" width="500" class="responsive-table">
                <tr>
                    <td>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td align="center" style="font-size: 32px; font-family: Helvetica, Arial, sans-serif; color: #333333; padding-top: 30px;" class="padding-copy">Latar Belakang Debitur</td>
                            </tr>
                    </td>
                </tr>
        </td>
    </tr>
    <tr>
        <td bgcolor="#ffffff" align="center" style="padding: 15px;" class="padding">
            <table align="center" border="0" cellspacing="0" cellpadding="0" width="500">
            <tr>
            <td align="center" valign="top" width="500">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px;" class="responsive-table">
                <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Pertanyaan 1</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;"></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                 <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Pertanyaan 2</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;"></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                
                <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Pertanyaan 3</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;"></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                
                <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Pertanyaan 4</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;"></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Pertanyaan 5</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;"></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Pertanyaan 6</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;"></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Pertanyaan 7</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;"></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td style="padding: 10px 0 0 0; border-top: 1px dashed #aaaaaa;">
                        <!-- TWO COLUMNS -->
                        <table cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                                <td valign="top" class="mobile-wrapper">
                                    <!-- LEFT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="left">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Pertanyaan 8</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- RIGHT COLUMN -->
                                    <table cellpadding="0" cellspacing="0" border="0" width="47%" style="width: 47%;" align="right">
                                        <tr>
                                            <td style="padding: 0 0 10px 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                    <tr>
                                                        <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;"></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                    
                        </table>
                    </td>
                </tr>
            </table>
            </td>
            </tr>
            </table>
            
        </td>
    </tr>
</table>`;


    let templateParams = {
        from_name   : "Admin.Gadaiku",
        to_name     : "testphpmailer.999@gmail.com",
        subject     : "Gadaiku-FormLoan-Perusahaan",
        message_html: this.state.form
              
        

    };
    
    emailjs.send(
        'gmail',
        'template_DuQL4fJ4',
         templateParams,
        'user_ZzTqxX8Pvcd9Vonr4z8pd'
    )

    }
}

