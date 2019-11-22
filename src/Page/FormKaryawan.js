import React, { Component, Fragment } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import { Button, Container} from 'react-bootstrap';

export default class FormKaryawan extends Component {
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
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridNama" style={{marginTop:"10px"}}>
                    <Form.Label><strong>Nama :</strong></Form.Label>
                    <Form.Control type="text" placeholder="Nama Lengkap" />
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
                    <Form.Label>Berapa nilai angsuran yang ingin bapak/ibu bayar perbulannya ?</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid2" style={{marginTop:"10px"}}>
                    <Form.Label>Apakah ada pilihan bank yang ingin digunakan oleh bapak/ibu ?</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid3" style={{marginTop:"10px"}}>
                    <Form.Label>Apakah pernah ada pengalaman yang tidak menyenangkan dengan bank yang pernah dialami oleh bapak/ibu ?</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid4" style={{marginTop:"10px"}}>
                    <Form.Label>Berapa total penjualan (omset) bapak/ibu perbulannya ?</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid5" style={{marginTop:"10px"}}>
                    <Form.Label>Ekspansi bisnis apa yang sedang direncanakan bapak/ibu ?</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid6" style={{marginTop:"10px"}}>
                    <Form.Label>Berapa lama terms of payment dari customer dan terms of payment ke supplier ?</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid7" style={{marginTop:"10px"}}>
                    <Form.Label>Berapa total pendapatan gaji dan tunjangan bapak/ibu perbulannya ?</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid8" style={{marginTop:"10px"}}>
                    <Form.Label>Apakah ada pendapatan lain seperti pendapatan sewa ataupun bisnis lain ?</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            
            <br/>
            <br/>

            <hr/>
            <div class="container">
                <div class="content">
                    <h5>Persyaratan Dokumen Pemohon :</h5>
                </div>
            </div>
            <hr/>

            <Form.Row>
                <Form.Group as={Col} controlId="ktppemohon" style={{marginTop:"10px"}}>
                    <Form.Label>Fotocopy KTP Pemohon</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group as={Col} controlId="pasutri" style={{marginTop:"10px"}}>
                    <Form.Label>Fotocopy KTP Suami/Istri</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>
            
            <Form.Row>
                <Form.Group as={Col} controlId="kartukeluarga" style={{marginTop:"10px"}}>
                    <Form.Label>Fotocopy Kartu Keluarga</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group as={Col} controlId="aktenikah" style={{marginTop:"10px"}}>
                    <Form.Label>Fotocopy Akte Nikah/Cerai</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="npwp" style={{marginTop:"10px"}}>
                    <Form.Label>Fotocopy NPWP (pemohon)</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group as={Col} controlId="pph" style={{marginTop:"10px"}}>
                    <Form.Label>Fotocopy SPT/PPh21</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="slipgaji" style={{marginTop:"10px"}}>
                    <Form.Label>Asli Slip Gaji (1 bulan terakhir)</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group as={Col} controlId="tabungan" style={{marginTop:"10px"}}>
                    <Form.Label>Fotocopy Tabungan (6 bulan terakhir)</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="pendukung3" style={{marginTop:"10px"}}>
                    <Form.Label>Lampiran Pendukung 3</Form.Label>
                    <Form.Control type="file" placeholder="Lampiran Pendukung 3"/>
                </Form.Group>                    
                <Form.Group as={Col} controlId="pendukung1" style={{marginTop:"10px"}}>
                    <Form.Label>Lampiran Pendukung 1</Form.Label>
                    <Form.Control type="file" placeholder="Lampiran Pendukung 1"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="pendukung2" style={{marginTop:"10px"}}>
                    <Form.Label>Lampiran Pendukung 2</Form.Label>
                    <Form.Control type="file" placeholder="Lampiran Pendukung 2"/>
                </Form.Group>
            </Form.Row>

            <br/>
            <br/>

            <hr/>
            <div class="container">
                <div class="content">
                    <h5>Dokumen Jaminan</h5>
                </div>
            </div>
            <hr/>

            <Form.Row>
                <Form.Group as={Col} controlId="hm" style={{marginTop:"10px"}}>
                    <Form.Label>Fotocopy Sertifikat HM/HGB/Strata Title</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="imb" style={{marginTop:"10px"}}>
                    <Form.Label>Fotocopy IMB</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="pbb" style={{marginTop:"10px"}}>
                    <Form.Label>Fotocopy PBB Terakhir (kecuali properti baru).</Form.Label>
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

