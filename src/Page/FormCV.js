import React, { Component, Fragment } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import { Button, Container} from 'react-bootstrap';

export default class FormCV extends Component {
    render(){
        return(
            <Fragment>
            <Container style={{marginBottom:"50px"}}>
            <div class="container">
                <div class="content">
                    <h5>Form Pengajuan CV</h5>
                </div>
            </div>
            <hr/>
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridNama">
                    <Form.Label>Nama :</Form.Label>
                    <Form.Control type="text" placeholder="Nama Lengkap" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email :</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridAlamat">
                    <Form.Label>Alamat:</Form.Label>
                    <Form.Control type="text" placeholder="Alamat Tempat Tinggal" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAlamat">
                    <Form.Label>Alamat Kantor :</Form.Label>
                    <Form.Control type="text" placeholder="Alamat Kantor" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridPekerjaan">
                    <Form.Label>Pekerjaan :</Form.Label>
                    <Form.Control type="text" placeholder="Pekerjaan" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridTelp">
                    <Form.Label>No.Telp/Handphone :</Form.Label>
                    <Form.Control type="text" placeholder="No.Telp/Handphone" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Tujuan Permohonan Kredit :</Form.Label>
                    {['checkbox'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="Modal Kerja" type={type} id={`inline-${type}-modal`} />
                        <Form.Check inline label="Investasi" type={type} id={`inline-${type}-inves`} />
                        <Form.Check inline label="Lainnya" type={type} id={`inline-${type}-lain`} />
                        </div>
                    ))}
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Jenis Pinjaman :</Form.Label>
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
                <Form.Group as={Col} controlId="formGridKredit">
                    <Form.Label>Plafond Kredit :</Form.Label>
                    <Form.Control type="text" placeholder="Plafond Kredit" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridWaktu">
                    <Form.Label>Jangka Waktu :</Form.Label>
                    <Form.Control type="text" placeholder="Jangka Waktu" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Status :</Form.Label>
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

            <div class="container">
                <div class="content">
                    <h5>Latar Belakang Calon Debitur :</h5>
                </div>
            </div>
            <hr/>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid1">
                    <Form.Label>Berapa nilai angsuran yang ingin bapak/ibu bayar perbulannya ?</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid2">
                    <Form.Label>Apakah ada pilihan bank yang ingin digunakan oleh bapak/ibu ?</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid3">
                    <Form.Label>Apakah pernah ada pengalaman yang tidak menyenangkan dengan bank yang pernah dialami oleh bapak/ibu ?</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid4">
                    <Form.Label>Berapa total penjualan (omset) bapak/ibu perbulannya ?</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid5">
                    <Form.Label>Ekspansi bisnis apa yang sedang direncanakan bapak/ibu ?</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid6">
                    <Form.Label>Berapa lama terms of payment dari customer dan terms of payment ke supplier ?</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid7">
                    <Form.Label>Berapa total pendapatan gaji dan tunjangan bapak/ibu perbulannya ?</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGrid8">
                    <Form.Label>Apakah ada pendapatan lain seperti pendapatan sewa ataupun bisnis lain ?</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form.Row>
            
            <br/>
            <br/>

            <div class="container">
                <div class="content">
                    <h5>Persyaratan Dokumen Pemohon :</h5>
                </div>
            </div>
            <hr/>
            <Form.Row>
                <Form.Group as={Col} controlId="ktppemohon">
                    <Form.Label>Fotocopy KTP Pemohon</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group as={Col} controlId="pasutri">
                    <Form.Label>Fotocopy KTP Suami/Istri</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>
            
            <Form.Row>
                <Form.Group as={Col} controlId="kartukeluarga">
                    <Form.Label>Fotocopy KK</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group as={Col} controlId="aktenikah">
                    <Form.Label>Fotocopy Akte Nikah/Cerai</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="npwp">
                    <Form.Label>Fotocopy NPWP (pemohon)</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group as={Col} controlId="pph">
                    <Form.Label>Fotocopy SPT/PPh21</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="slipgaji">
                    <Form.Label>Asli Slip Gaji (1 bulan terakhir)</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group as={Col} controlId="tabungan">
                    <Form.Label>Fotocopy Tabungan (6 bulan terakhir)</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="pendukung3">
                    <Form.Label>Lampiran Pendukung 3</Form.Label>
                    <Form.Control type="file" placeholder="Lampiran Pendukung 3"/>
                </Form.Group>                    
                <Form.Group as={Col} controlId="pendukung1">
                    <Form.Label>Lampiran Pendukung 1</Form.Label>
                    <Form.Control type="file" placeholder="Lampiran Pendukung 1"/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="pendukung2">
                    <Form.Label>Lampiran Pendukung 2</Form.Label>
                    <Form.Control type="file" placeholder="Lampiran Pendukung 2"/>
                </Form.Group>
            </Form.Row>

            <br/>
            <br/>

            <div class="container">
                <div class="content">
                    <h5>Dokumen Jaminan :</h5>
                </div>
            </div>
            <hr/>
            <Form.Row>
                <Form.Group as={Col} controlId="hm">
                    <Form.Label>Fotocopy Sertifikat HM/HGB/Strata Title</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="imb">
                    <Form.Label>Fotocopy IMB</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="pbb">
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
        </Container>
        </Fragment>

        );
    }
}

