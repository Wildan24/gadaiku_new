import React,{Component} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button, Container, } from 'react-bootstrap';
import ImageUploader from 'react-images-upload';
import * as emailjs from 'emailjs-com';
import axios from 'axios';
import 'filepond/dist/filepond.min.css';
import FormSimulasi from '../Page/FormSimulasi.js';
import { file } from '@babel/types';


export default class FormPengajuan extends Component {
    constructor(){
        super();
        this.UploadFile=this.UploadFile.bind();

    }
    state = {
        nama: '', 
        email:'',
        noHp:'',
        alamat:'',
        noKtp:'',
        namaPengajak:'',
        tujuanPeminjaman:'',
        Form:'',
        fileSuami:'',
        fileIstri:''

    };
    

    handleChange_nama = event =>{
        this.setState({
            nama: event.target.value  
        });
    };

    handleChange_noHp = event =>{
        this.setState({
            noHp: event.target.value  
        });
    };

    handleChange_email = event =>{
        this.setState({
            email: event.target.value  
        });
    };

    handleChange_alamat = event =>{
        this.setState({
            alamat: event.target.value  
        });
    };

    handleChange_noKtp = event =>{
        this.setState({
            noKtp: event.target.value  
        });
    };

    handleChange_namaPengajak= event =>{
        this.setState({
            namaPengajak: event.target.value  
        });
    };

    handleChange_tujuanPeminjaman = event =>{
        this.setState({
            tujuanPeminjaman: event.target.value  
        });
    };

    handleChange_Form = event =>{
        this.setState({
            Form: event.target.value  
        });
    };
 
    onChangeHandler=event=> {
        var files = event.target.files
            this.setState({
                KtpSuami: files,
                loaded: 0,
            });
    };

    onChangeHandler_ktpIstri=event=> {
        var files = event.target.files
            this.setState({
                KtpIstri: files,
                loaded: 0,
            });
    };

    // onChangeHandler_KtpIstri=event=> {
    //     this.setState({
    //         selectedFile: event.target.files,
    //     });
    // };

    // onChangeHandler_KartuKeluarga=event=> {
    //     this.setState({
    //         selectedFile: event.target.files,
    //     });
    // };


    maxSelectFile = (event) => {
        let files = event.target.files
        if (file.length > 8 ) {
            const msg = 'only 8 images can be uploaded at a time'
            event.target.value = null
            console.log(msg)
            return false;
        }

        return true;
    }

    render(){

        return(

            <Container id="formPengajuan" style={{display:"none"}}>

                <Form onSubmit={this.onHandleSubmit} style={{display:"block"}} value={this.state.form}>

                <div className="content" style={{marginTop:"50px"}}>
                    <h3>&nbsp; Form Pengajuan</h3>
                </div>
                
                <hr/>
                
                    <Form.Row>
                        <input type="hidden" id="njop_pass" value={this.state.njop_pass} onChange={this.handleChange_njop_pass} />
                        <input type="hidden" id="totPinjaman_pass" value=""  /> 
                        <input type="hidden" id="admin_pass" value="" /> 
                        <input type="hidden" id="fee_pass" value="" /> 
                        <input type="hidden" id="totYgDtrm_pass" value="" /> 
                        <input type="hidden" id="bpr_pass" value="" />  

                        <Form.Group as={Col} controlId="formGridNama" style={{marginTop:"30px"}}>
                            <Form.Label><strong>Nama</strong></Form.Label>
                            <Form.Control type="text" placeholder="Nama Lengkap" value={this.state.nama} onChange={this.handleChange_nama}  />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNoHp" style={{marginTop:"30px"}}>
                            <Form.Label><strong>No.HP (WhatsApp)</strong></Form.Label>
                            <Form.Control type="number" value={this.state.noHp} onChange={this.handleChange_noHp} placeholder="No.HP" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAddress1" style={{marginTop:"30px"}}>
                            <Form.Label><strong>Alamat</strong></Form.Label>
                            <Form.Control placeholder="1234 Main St" value={this.state.alamat} onChange={this.handleChange_alamat} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail" style={{marginTop:"30px"}}>
                            <Form.Label><strong>Email</strong></Form.Label>
                            <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange_email} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridKtp" style={{marginTop:"30px"}}>
                        <Form.Label><strong>No.KTP</strong></Form.Label>
                        <Form.Control type="text" placeholder="No.KTP/SIM" value={this.state.noKtp} onChange={this.handleChange_noKtp} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPengajak" style={{marginTop:"30px"}}>
                        <Form.Label><strong>Refferal</strong></Form.Label>
                        <Form.Control type="text" placeholder="Nama Pengajak (Refferal)" value={this.state.namaPengajak} onChange={this.handleChange_namaPengajak} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="tujuanpeminjaman" style={{marginTop:"10px"}}>
                        <Form.Label><strong>Tujuan Pengajuan Peminjaman</strong></Form.Label>
                        <Form.Control type="text" placeholder="Tujuan Pengajuan Peminjaman" value={this.state.tujuanPeminjaman} onChange={this.handleChange_tujuanPeminjaman} />
                        </Form.Group>
                    </Form.Row>

                    <br/>
                    <hr/>

                        <div className="content">
                            <h3>Lampiran</h3>
                        </div>
                    
                    <hr/>

                    <Form.Row>
                        <Form.Group class="form-group files" as={Col} controlId="ktpsuami" style={{marginTop:"10px"}}>
                        <Form.Label><strong>KTP Suami</strong></Form.Label>
                            <input class="form-control" type="file" name="KtpSuami" multiple onChange={this.onChangeHandler} />
                        </Form.Group>
                        <br/>
                        <Form.Group class="form-group files" as={Col} controlId="ktpsuami" style={{marginTop:"10px"}}>
                        <Form.Label><strong>KTP Suami</strong></Form.Label>
                            <input class="form-control" type="file" name="KtpSuami" multiple onChange={this.onChangeHandler} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group class="form-group files" as={Col} controlId="ktpsuami" style={{marginTop:"10px"}}>
                        <Form.Label><strong>KTP istri</strong></Form.Label>
                            <input class="form-control" type="file" name="KtpSuami" multiple onChange={this.onChangeHandler_ktpIstri} />
                        </Form.Group>
                        <br/>
                        <Form.Group class="form-group files" as={Col} controlId="ktpsuami" style={{marginTop:"10px"}}>
                        <Form.Label><strong>KTP Suami</strong></Form.Label>
                            <input class="form-control" type="file" name="KtpSuami" multiple onChange={this.onChangeHandler} />
                        </Form.Group> 
                    </Form.Row>
                    

                    <br/>
                    
                    <Button variant="outline-warning" style={{marginTop:"30px", marginBottom:"30px", fontWeight:"bolder", fontSize:"15px"}} type="submit" size="md" onClick={this.onClickHandler} block>
                        AJUKAN
                    </Button>
                </Form>
            </Container>


        );
    }

    onClickHandler = () =>{
        this.UploadFile(this.state.KtpSuami);
        this.UploadFile(this.state.KtpIstri);
        
    };

    UploadFile(stateFile){
        const data = new FormData()
        data.append('file',stateFile[0])

        axios.post("http://localhost:8000/upload", data, {
        })
            .then(res => { //then print response status
            console.log(res.statusText)
        })
    }

    onHandleSubmit = event => {
        event.preventDefault();
        if
            (
                this.state.nama==''||
                this.state.email==''||
                this.state.noHp==''||
                this.state.alamat==''||
                this.state.noKtp==''||
                this.state.namaPengajak==''||
                this.state.tujuanPeminjaman==''
             )
        {
            alert("masih ada yang kosong")
        }

        else if(this.state.noKtp.length !=16) {
            alert("ktp 16 karakter")

        } else {
            
           var temp =  window.confirm("Pastikan data yang anda masukan sudah benar.");
           if (temp == true)
           {
                this.sendEmail();
                alert("Terima Kasih sudah menggunakan gadaiku.com, nanti team kami akan menghubungi anda.");
           }

        }

        
    };

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
                                    <td align="center" style="font-size: 32px; font-family: Helvetica, Arial, sans-serif; color: #333333; padding-top: 30px;" class="padding-copy">Pengajuan Oleh - `+this.state.nama+`</td>
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
                                                            <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">No Telp</td>
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
                                                            <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">`+this.state.noHp+`</td>
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
                                                            <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Alamat</td>
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
                                                            <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">`+this.state.alamat+`</td>
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
                                                            <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">No Ktp</td>
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
                                                            <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">`+this.state.noKtp+`</td>
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
                                                            <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Referral</td>
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
                                                            <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">`+this.state.namaPengajak+`</td>
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
                                                            <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Tujuan Peminjaman</td>
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
                                                            <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">`+this.state.tujuanPeminjaman+`</td>
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
                                    <td align="center" style="font-size: 32px; font-family: Helvetica, Arial, sans-serif; color: #333333; padding-top: 30px;" class="padding-copy">Nominal Yang Diajukan</td>
                                </tr>
                    </tr>
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
                                                            <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">NJOP</td>
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
                                                            <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Total Pinjaman</td>
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
                                                            <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Admin</td>
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
                                                            <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">`+this.state.noHp+`</td>
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
                                                            <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Fee</td>
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
                                                            <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">`+this.state.alamat+`</td>
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
                                                            <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Total Yang Diterima</td>
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
                                                            <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">`+this.state.noKtp+`</td>
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
                                                            <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Bunga Perbulan</td>
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
                                                            <td align="right" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">`+this.state.namaPengajak+`</td>
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
            subject     : "Gadaiku-Pengajuan",
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