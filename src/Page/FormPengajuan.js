import React,{Component} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button, Container, } from 'react-bootstrap';
import ImageUploader from 'react-images-upload';
import * as emailjs from 'emailjs-com';
import axios from 'axios';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FormSimulasi from '../Page/FormSimulasi.js';


export default class FormPengajuan extends Component {
    state = {
        nama: '', 
        email:'',
        noHp:'',
        alamat:'',
        noKtp:'',
        namaPengajak:'',
        tujuanPeminjaman:'',
        Form:'',
        selectedFile: null,

        njop_pass:''

    };

    constructor(props) {
        super(props);
        this.onHome = this.onHome.bind(this);
       

        // alert(Njop); 
    }
    onHome() {
        this.props.history.push('/');
    }
    
    


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
 


    // handleChange_njop_pass = event =>{
    //     this.setState({
    //         njop_pass: event.target.value  
    //     });
    // };


    
    fileSelectedHandler = event => {
        this.setState({
            selectedFile:event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData ();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('gs://gadaiku-9cdca.appspot.com', fd)
        .then(res => {
            console.log(res);
        })
    }

    render(){

        return(

            <Container id="formPengajuan" style={{display:"none"}}>

                <Form onSubmit={this.onHandleSubmit} onClick={this.fileUploadHandler} style={{display:"block"}} value={this.state.form}>

                <div className="content" style={{marginTop:"50px"}}>
                    <h3>&nbsp; Form Pengajuan</h3>
                </div>
                
                <hr/>
                
                    <Form.Row>
                        <input type="text" id="njop_pass" value={this.state.njop_pass} onChange={this.handleChange_njop_pass} />
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
                            <Form.Label><strong>No.HP</strong></Form.Label>
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

                    <br/>
                    <hr/>
                        <div className="content">
                            <h3>Lampiran</h3>
                        </div>
                    
                    <hr/>
                    <Form.Row>
                        <Form.Group as={Col} controlId="ktpsuami" style={{marginTop:"10px"}}>
                        <Form.Label><strong>KTP Suami</strong></Form.Label>
                        <input type="file" name="ktpSuami" onChange={this.fileSelectedHandler}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="ktpistri" style={{marginTop:"10px"}}>
                        <Form.Label><strong>KTP Istri</strong></Form.Label>
                        <ImageUploader withIcon={true} withPreview={true} buttonText='Choose Images' imgExtension={['.jpg','.png']} maxFileSize={2097152} />
                        </Form.Group>
                    </Form.Row>
                    

                    <Form.Row>
                        <Form.Group as={Col} controlId="kartukeluarga" style={{marginTop:"10px"}}>
                        <Form.Label><strong>Kartu Keluarga</strong></Form.Label>
                        <ImageUploader withIcon={true} withPreview={true} buttonText='Choose Images' imgExtension={['.jpg','.png']} maxFileSize={2097152} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="pbb" style={{marginTop:"10px"}}>
                        <Form.Label><strong>PBB</strong></Form.Label>
                        <ImageUploader withIcon={true} withPreview={true} buttonText='Choose Images' imgExtension={['.jpg','.png']} maxFileSize={2097152} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="shm" style={{marginTop:"10px"}}>
                        <Form.Label><strong>SHM</strong></Form.Label>
                        <ImageUploader withIcon={true} withPreview={true} buttonText='Choose Images' imgExtension={['.jpg','.png']} maxFileSize={2097152} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="imb" style={{marginTop:"10px"}}>
                        <Form.Label><strong>IMB</strong></Form.Label>
                        <ImageUploader withIcon={true} withPreview={true} buttonText='Choose Images' imgExtension={['.jpg','.png']} maxFileSize={2097152} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="pendukung1" style={{marginTop:"10px"}}>
                        <Form.Label><strong>Lampiran Pendukung 1</strong></Form.Label>
                        <ImageUploader withIcon={true} withPreview={true} buttonText='Choose Images' imgExtension={['.jpg','.png']} maxFileSize={2097152} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="pendukung2" style={{marginTop:"10px"}}>
                        <Form.Label><strong>Lampiran Pendukung 2</strong></Form.Label>
                        <ImageUploader withIcon={true} withPreview={true} buttonText='Choose Images' imgExtension={['.jpg','.png']} maxFileSize={2097152} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="pendukung3" style={{marginTop:"10px"}}>
                        <Form.Label><strong>Lampiran Pendukung 3</strong></Form.Label>
                        <ImageUploader withIcon={true} withPreview={true} buttonText='Choose Images' imgExtension={['.jpg','.png']} maxFileSize={2097152} />
                        </Form.Group>
                    </Form.Row>

                    <br/>

                    <Form.Row>
                        <Form.Group as={Col} controlId="tujuanpeminjaman" style={{marginTop:"10px"}}>
                        <Form.Label><strong>Tujuan Pengajuan Peminjaman</strong></Form.Label>
                        <Form.Control type="text" placeholder="Tujuan Pengajuan Peminjaman" value={this.state.tujuanPeminjaman} onChange={this.handleChange_tujuanPeminjaman} />
                        </Form.Group>
                    </Form.Row>

                    <br/>
                    
                    <Button variant="outline-warning" style={{marginTop:"30px", marginBottom:"30px", fontWeight:"bolder", fontSize:"15px"}} type="submit" size="md" block>
                        AJUKAN
                    </Button>
                </Form>
            </Container>


        );
    }


    handleSubmit = event => {
        event.preventDefault();
        if
            (this.state.nama==''||this.state.email==''||this.state.noHp==''||this.state.alamat==''||this.state.noKtp==''||this.state.namaPengajak==''||this.state.tujuanPeminjaman==''){
            alert("masih ada yang kosong")
        }

        else if(this.state.noKtp.length !=16) {
            alert("ktp 16 karakter")

        } else {
            
           var temp =  window.confirm("Pastikan data yang anda masukan sudah benar.");
           if (temp == true){
                this.sendEmail();
                alert("silahkan Cek Email anda");
           }
        }
       
    };

    sendEmail() {
        var Fs = new FormSimulasi();
        var Njop = Fs.returnNjop();
        
        alert(Njop);
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
                                    <td align="center" style="font-size: 32px; font-family: Helvetica, Arial, sans-serif; color: #333333; padding-top: 30px;" class="padding-copy">Pengajuan Oleh - NILAI NJOP `+Njop+`</td>
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
                <![endif]-->
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
                                    <!-- COPY -->
                                    <td align="center" style="font-size: 32px; font-family: Helvetica, Arial, sans-serif; color: #333333; padding-top: 30px;" class="padding-copy">How did we do?</td>
                                </tr>
                                <tr>
                                    <td align="left" style="padding: 20px 0 0 0; font-size: 16px; line-height: 25px; font-family: Helvetica, Arial, sans-serif; color: #666666;" class="padding-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, leo a ullamcorper feugiat, ante purus sodales justo, a faucibus libero lacus a est. Aenean at mollis ipsum.</td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <!-- BULLETPROOF BUTTON -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td align="center" style="padding-top: 25px;" class="padding">
                                                    <table border="0" cellspacing="0" cellpadding="0" class="mobile-button-container">
                                                        <tr>
                                                            <td align="center" style="border-radius: 3px;" bgcolor="#256F9C"><a href="https://litmus.com" target="_blank" style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; border-radius: 3px; padding: 15px 25px; border: 1px solid #256F9C; display: inline-block;" class="mobile-button">Let Us Know</a></td>
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
            from_name : "Admin.Gadaiku",
            to_name : "testphpmailer.999@gmail.com",
            subject : "Gadaiku-Pengajuan",
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