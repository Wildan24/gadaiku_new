import React,{Component} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button, Container, } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

export default class FormPengajuan extends Component {
    state = {
        nama: '', 
        email:'',
        noHp:'',
        alamat:'',
        noKtp:'',
        namaPengajak:'',
        tujuanPeminjaman:'',
        file_ktpSuami:null
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

    handleChange_tujuanPeminjaman= event =>{
        this.setState({
            tujuanPeminjaman: event.target.value  
        });
    };

    handleChange_fileKtpSuami= event =>{
        // this.setState({
                
        // });

        console.log(event.target.files[0]);
        // if(event.target.files[0].size > 2097152){
        //     alert("kegedean");
        // }
    };



    hanldeSubmit = event =>{
        const { redirect } = this.state;
        // if(this.state.nama==''||this.state.email==''||this.state.noHp==''||this.state.alamat==''||this.state.noKtp==''||this.state.namaPengajak==''||this.state.tujuanPeminjaman==''){
        //     alert("masih ada yang kosong")
        // }

        // else if(this.state.noKtp.length !=16){
        //     alert("ktp 16 karakter")
        // }

        // else{
        //     return <Redirect to = "/FormLoan" />;
        // }

        return <Redirect to = "/FormLoan" />;

        
     
    };
 


    render(){
        return(

            <Container id="formPengajuan" style={{display:"none"}}>
                <div class="content" style={{marginTop:"50px"}}>
                    <h2>Form Pengajuan</h2>
                </div>
            
                <hr/>

                <Form  style={{display:"block"}}>
                    <Form.Row>
                        <input type="hidden" name="" id="totPinjaman_submit"/> 

                        <Form.Group as={Col} controlId="formGridNama" style={{marginTop:"10px"}}>
                            <Form.Label><strong>Nama</strong></Form.Label>
                            <Form.Control type="text" placeholder="Nama Lengkap" value={this.state.nama} onChange={this.handleChange_nama}  />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNoHp" style={{marginTop:"10px"}}>
                            <Form.Label><strong>No.HP</strong></Form.Label>
                            <Form.Control type="number" value={this.state.noHp} onChange={this.handleChange_noHp} placeholder="No.HP" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAddress1" style={{marginTop:"10px"}}>
                            <Form.Label><strong>Alamat</strong></Form.Label>
                            <Form.Control placeholder="1234 Main St" value={this.state.alamat} onChange={this.handleChange_alamat} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail" style={{marginTop:"10px"}}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange_email}/>
                        </Form.Group>
                    </Form.Row>
                    

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridKtp" style={{marginTop:"10px"}}>
                        <Form.Label>No.KTP</Form.Label>
                        <Form.Control type="text" placeholder="No.KTP/SIM" value={this.state.noKtp} onChange={this.handleChange_noKtp}/>
                        </Form.Group>
                        

                        <Form.Group as={Col} controlId="formGridPengajak" style={{marginTop:"10px"}}>
                        <Form.Label>Refferal</Form.Label>
                        <Form.Control type="text" placeholder="Nama Pengajak (Refferal)" value={this.state.namaPengajak} onChange={this.handleChange_namaPengajak} />
                        </Form.Group>
                    </Form.Row>

                    <br/>

                        <div class="content">
                            <h2>Lampiran</h2>
                        </div>
                    
                    <hr/>
                    <Form.Row>
                        <Form.Group as={Col} controlId="ktpsuami" style={{marginTop:"10px"}}>
                        <Form.Label>KTP Suami</Form.Label>
                        <Form.Control type="file" placeholder="KTP Suami" onChange={this.handleChange_fileKtpSuami} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="ktpistri" style={{marginTop:"10px"}}>
                        <Form.Label>KTP Istri</Form.Label>
                        <Form.Control type="file" placeholder="KTP Istri"/>
                        </Form.Group>
                    </Form.Row>
                    

                    <Form.Row>
                        <Form.Group as={Col} controlId="kartukeluarga" style={{marginTop:"10px"}}>
                        <Form.Label>KK</Form.Label>
                        <Form.Control type="file" placeholder="Kartu Keluarga"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="pbb" style={{marginTop:"10px"}}>
                        <Form.Label>PBB</Form.Label>
                        <Form.Control type="file" placeholder="PBB"/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="shm" style={{marginTop:"10px"}}>
                        <Form.Label>SHM</Form.Label>
                        <Form.Control type="file" placeholder="SHM"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="imb" style={{marginTop:"10px"}}>
                        <Form.Label>IMB</Form.Label>
                        <Form.Control type="file" placeholder="imb"/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="pendukung1" style={{marginTop:"10px"}}>
                        <Form.Label>Lampiran Pendukung 1</Form.Label>
                        <Form.Control type="file" placeholder="Lampiran Pendukung 1"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="pendukung2" style={{marginTop:"10px"}}>
                        <Form.Label>Lampiran Pendukung 2</Form.Label>
                        <Form.Control type="file" placeholder="Lampiran Pendukung 2"/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="pendukung3" style={{marginTop:"10px"}}>
                        <Form.Label>Lampiran Pendukung 3</Form.Label>
                        <Form.Control type="file" placeholder="Lampiran Pendukung 3"/>
                        </Form.Group>
                    </Form.Row>

                    <br/>

                    <Form.Row>
                        <Form.Group as={Col} controlId="tujuanpeminjaman" style={{marginTop:"10px"}}>
                        <Form.Label>Tujuan Pengajuan Peminjaman</Form.Label>
                        <Form.Control type="text" placeholder="Tujuan Pengajuan Peminjaman" value={this.state.tujuanPeminjaman} onChange={this.handleChange_tujuanPeminjaman} />
                        </Form.Group>
                    </Form.Row>

                    <br/>
                    <br/>
                    
                    <Button variant="outline-primary" onClick={this.hanldeSubmit}  size="md"  block>
                        AJUKAN
                    </Button>
                </Form>
            </Container>


        )
    }
}