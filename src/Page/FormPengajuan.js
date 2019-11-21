import React,{Component} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button, Container, } from 'react-bootstrap';
import ImageUploader from 'react-images-upload';
import * as emailjs from 'emailjs-com';


export default class FormPengajuan extends Component {
    state = {
        nama: '', 
        email:'',
        noHp:'',
        alamat:'',
        noKtp:'',
        namaPengajak:'',
        tujuanPeminjaman:'',
        Form:''
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

    handleChange_email = event =>{
        this.setState({
            email: event.target.value  
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


    sendEmail() {
    }


    
 
    constructor(props) {
        super(props);
        this.onHome = this.onHome.bind(this);
    }
    onHome() {
        this.props.history.push('/');
    }
    


    render(){

        return(

            <Container id="formPengajuan" style={{display:"none"}}>

                <div class="content" style={{marginTop:"50px"}}>
                    <h3>Form Pengajuan</h3>
                </div>
                
                <hr/>

                <Form onSubmit={this.handleSubmit} style={{display:"block"}} value={this.state.form}>
                    <Form.Row>
                        <input type="hidden" id="totPinjaman_submit"/> 

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
                        <div class="content">
                            <h3>Lampiran</h3>
                        </div>
                    
                    <hr/>
                    <Form.Row>
                        <Form.Group as={Col} controlId="ktpsuami" style={{marginTop:"10px"}}>
                        <Form.Label><strong>KTP Suami</strong></Form.Label>
                        <ImageUploader withIcon={true} withPreview={true} buttonText='Choose Images' imgExtension={['.jpg','.png']} maxFileSize={2097152} />
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
                    
                    <Button variant="outline-warning" style={{marginTop:"30px", fontWeight:"bolder", fontSize:"15px"}} type="submit" size="md" block>
                        AJUKAN
                    </Button>
                </Form>
            </Container>


        );
    }




    handleSubmit = event =>{
        event.preventDefault();
        // if
        //     (this.state.nama==''||this.state.email==''||this.state.noHp==''||this.state.alamat==''||this.state.noKtp==''||this.state.namaPengajak==''||this.state.tujuanPeminjaman==''){
        //     alert("masih ada yang kosong")
        // }

        // else if(this.state.noKtp.length !=16){
        //     alert("ktp 16 karakter")
        // }

        // else{
        //     alert("OK");
        //     this.sendEmail();
        // }

        this.sendEmail();

        this.state.form = 
        `<table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td bgcolor="#ffffff" align="center">
                <!--[if (gte mso 9)|(IE)]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="500">
                <tr>
                <td align="center" valign="top" width="500">
                <![endif]-->
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px;" class="wrapper">
                    <tr>
                        <td align="center" valign="top" style="padding: 15px 0;" class="logo">
                            <a href="http://litmus.com" target="_blank">
                                <img alt="Logo" src="logo-2.jpg" width="60" height="60" style="display: block; font-family: Helvetica, Arial, sans-serif; color: #ffffff; font-size: 16px;" border="0">
                            </a>
                        </td>
                    </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
            </td>
        </tr>
        <tr>
            <td bgcolor="#ffffff" align="center" style="padding: 15px;">
                <!--[if (gte mso 9)|(IE)]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="500">
                <tr>
                <td align="center" valign="top" width="500">
                <![endif]-->
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px;" class="responsive-table">
                    <tr>
                        <td>
                            <!-- COPY -->
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="center" style="font-size: 32px; font-family: Helvetica, Arial, sans-serif; color: #333333; padding-top: 30px;" class="padding-copy">Pengajuan Oleh - `+this.state.nama+`</td>
                                </tr>
                                <tr>
                                    <td align="left" style="padding: 20px 0 0 0; font-size: 16px; line-height: 25px; font-family: Helvetica, Arial, sans-serif; color: #666666;" class="padding-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, leo a ullamcorper feugiat, ante purus sodales justo, a faucibus libero lacus a est. Aenean at mollis ipsum.</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
            </td>
        </tr>
        <tr>
            <td bgcolor="#ffffff" align="center" style="padding: 15px;" class="padding">
                <!--[if (gte mso 9)|(IE)]>
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
                                                            <td align="left" style="font-family: Arial, sans-serif; color: #333333; font-size: 16px;">Nama Pengajak (Reffereal)</td>
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
                <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
            </td>
        </tr>
        <tr>
            <td bgcolor="#ffffff" align="center" style="padding: 15px;">
                <!--[if (gte mso 9)|(IE)]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="500">
                <tr>
                <td align="center" valign="top" width="500">
                <![endif]-->
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px;" class="responsive-table">
                    <tr>
                        <td>
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td>
                                        <!-- COPY -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td align="left" style="padding: 0 0 0 0; font-size: 14px; line-height: 18px; font-family: Helvetica, Arial, sans-serif; color: #aaaaaa; font-style: italic;" class="padding-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, leo a ullamcorper feugiat, ante purus sodales justo, a faucibus libero lacus a est. Aenean at mollis ipsum.</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
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
                <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
            </td>
        </tr>
        <tr>
            <td bgcolor="#ffffff" align="center" style="padding: 20px 0px;">
                <!--[if (gte mso 9)|(IE)]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="500">
                <tr>
                <td align="center" valign="top" width="500">
                <![endif]-->
                <!-- UNSUBSCRIBE COPY -->
                <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" style="max-width: 500px;" class="responsive-table">
                    <tr>
                        <td align="center" style="font-size: 12px; line-height: 18px; font-family: Helvetica, Arial, sans-serif; color:#666666;">
                            1234 Main Street, Anywhere, MA 01234, USA
                            <br>
                            <a href="http://litmus.com" target="_blank" style="color: #666666; text-decoration: none;">Unsubscribe</a>
                            <span style="font-family: Arial, sans-serif; font-size: 12px; color: #444444;">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                            <a href="http://litmus.com" target="_blank" style="color: #666666; text-decoration: none;">View this email in your browser</a>
                        </td>
                    </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
            </td>
        </tr>
    </table>`;

        
        let templateParams = {
            from_name : "Admin.Gadaiku",
            to_name : "wildanabdurrohman11@gmail.com",
            subject : "test",
            message_html: this.state.form
            
                       
            

        };
        
        emailjs.send(
            'gmail',
            'template_eHuNelJK',
            templateParams,
            'user_aXb6zX3p81Aj1sksy3ZPG'
        )

    };
}