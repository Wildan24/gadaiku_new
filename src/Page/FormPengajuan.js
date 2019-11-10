import React,{Component} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import { Button, Container, } from 'react-bootstrap';

class FormPengajuan extends Component{
    render(){
        return(
        <div className="section">
            <Container>
                <div class="container">
                    <div class="content">
                        <h2>Form Pengajuan</h2>
                    </div>
                </div>
                <hr/>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNama">
                        <Form.Label>Nama</Form.Label>
                        <Form.Control type="text" placeholder="Nama Lengkap" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNoHp">
                        <Form.Label>No.HP</Form.Label>
                        <Form.Control type="number" placeholder="No.HP" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Alamat</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridKtp">
                        <Form.Label>No.KTP</Form.Label>
                        <Form.Control type="text" placeholder="No.KTP/SIM" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPengajak">
                        <Form.Label>Nama Pengajak</Form.Label>
                        <Form.Control type="text" placeholder="Nama Pengajak (Refferal)" />
                        </Form.Group>
                    </Form.Row>

                    <br/>
                    <div class="container">
                        <div class="content">
                            <h2>Lampiran</h2>
                        </div>
                    </div>
                    <hr/>
                    <Form.Row>
                        <Form.Group as={Col} controlId="ktpsuami">
                        <Form.Label>KTP Suami</Form.Label>
                        <Form.Control type="file" placeholder="KTP Suami"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="ktpistri">
                        <Form.Label>KTP Istri</Form.Label>
                        <Form.Control type="file" placeholder="KTP Istri"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="kartukeluarga">
                        <Form.Label>KK</Form.Label>
                        <Form.Control type="file" placeholder="Kartu Keluarga"/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="pbb">
                        <Form.Label>PBB</Form.Label>
                        <Form.Control type="file" placeholder="PBB"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="shm">
                        <Form.Label>SHM</Form.Label>
                        <Form.Control type="file" placeholder="SHM"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="imb">
                        <Form.Label>IMB</Form.Label>
                        <Form.Control type="file" placeholder="imb"/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="pendukung1">
                        <Form.Label>Lampiran Pendukung 1</Form.Label>
                        <Form.Control type="file" placeholder="Lampiran Pendukung 1"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="pendukung2">
                        <Form.Label>Lampiran Pendukung 2</Form.Label>
                        <Form.Control type="file" placeholder="Lampiran Pendukung 2"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="pendukung3">
                        <Form.Label>Lampiran Pendukung 3</Form.Label>
                        <Form.Control type="file" placeholder="Lampiran Pendukung 3"/>
                        </Form.Group>
                    </Form.Row>
                    <br/>
                    <Form.Row>
                        <Form.Group as={Col} controlId="tujuanpeminjaman">
                        <Form.Label>Tujuan Pengajuan Peminjaman</Form.Label>
                        <Form.Control type="text" placeholder="Tujuan Pengajuan Peminjaman" />
                        </Form.Group>
                    </Form.Row>

                    <br/>
                    <br/>
                    <Button variant="outline-primary" type="submit" size="md" block>
                        AJUKAN
                    </Button>
                </Form>
            </Container>
        </div>
        )
    }
}

export default FormPengajuan;