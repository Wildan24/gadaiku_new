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


    sendEmail() {
        // e.preventDefault();

        // emailjs.sendForm('gmail','template_eHuNelJK',e.target, 'user_aXb6zX3p81Aj1sksy3ZPG')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
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
        let templateParams = {
            from_name : "Admin.Gadaiku",
            to_name : "wildanabdurrohman11@gmail.com",
            subject : "test",
            message_html:
            '<div>'+this.state.nama+'<br/>'+this.state.email'</div>'+,
            

        }
        
        emailjs.send(
            'gmail',
            'template_eHuNelJK',
            templateParams,
            'user_aXb6zX3p81Aj1sksy3ZPG'
        )

    };
 
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

                <Form onSubmit={this.handleSubmit} style={{display:"block"}}>
                    <Form.Row>
                        <input type="hidden" name="" id="totPinjaman_submit"/> 

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
}