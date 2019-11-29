import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{

    render(){

      const iconButton = {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '40%'
        }

        return(

        <div className="homeWrapper">

          <section className="py-3 bg-image-ful">
            <img style={{width: "2048px"}} className="img-fluid d-block mx-auto" src="img/gadaiku/bannerFix.png" alt="Gadaiku.Com"/>
          </section>

          <div className="container">
              
            <div className="row">
              <div className="col-md-12">
                <h3 style={{margin:"none"}} className="section-title">Kenapa memilih <strong>GADAIKU ?</strong></h3>
              </div>
            </div>
            
            <div className="row mt-5">
              <div className="col-md-12">
                <p style={{margin:"none", textAlign:"center"}}><strong>Kami memiliki Loan Adviser yang selalu siap membantu Anda
                Dengan lebih 100 Loan Adviser di seluruh Indonesia, 
                kami selalu memiliki seseorang yang selalu siap membantu Anda. 
                Loan Adviser kami akan menghubungi dan bertemu Anda kapan pun Anda mau.</strong></p>
              </div>

              <div className="col-md-2" style={iconButton}>
                <Link to="/FormSimulasi">
                  <img className="img-fluid rounded" style={{width: "200px"}} src="./img/gadaiku/calculator1.jpg"  alt="calculator"/>
                </Link>
                <br/>
                <br/>
                <p className="text-center"><strong>Simulasi Kalkulator</strong></p>
                <br/>
                <br/>
              </div>
              
              <div className="col-md-2" style={iconButton}>
                <Link to="/FormLoan">
                  <img className="img-fluid rounded" style={{width: "200px"}} src="./img/gadaiku/handshake.jpg" alt="Simulasi"/>
                </Link>
                <br/>
                <br/>
                <p className="text-center"><strong>Form Loan</strong></p>
                <br/>
                <br/>
              </div>
            </div>

            <hr/>

            <div className="row">
              <div className="col-md-12">
                <h3 style={{margin:"none"}} className="section-title">Kenapa memilih <strong>GADAIKU ?</strong></h3>
              </div>
            </div>

            <br/>

            <div id="services" style={{textAlign:"center"}}>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="service-icon"><i className="far fa-clock"></i></div>
                    <h4 className="service-title"><strong>Simulasi Pinjaman Online 24 Jam</strong></h4>
                    <p className="service-description">anda dapat mengetahui estimasi angsuran bulanan sesuai dengan pinjaman yang anda ajukan atas aset jaminan
                    anda secara online 24 Jam setiap hari, dengan begitu anda bisa merencanakan dan mengatur keuangan jadi lebih baik.</p>
                  </div>
                </div>

            
              <div className="row">
                  
                <div className="col-md-6">
                <div className="service-icon"><i className="fa fa-paper-plane"></i></div>
                <h4 className="service-title"><strong>Proses Cepat</strong></h4>
                <p className="service-description">kami pastikan bahwa proses pengajuan pinjaman anda akan diproses cepat dan dilakukan paling lambat 2 hari kerja.</p>
                    
                <div className="service-icon"><i className="fas fa-sync-alt"></i></div>
                <h4 className="service-title"><strong>Proses Lebih Mudah</strong></h4>
                <p className="service-description">Ajukan Pinjaman anda dimana pun dan kapan pun, GadaiKu.com hadir untuk anda.</p>
                </div>
                      
                      
                <div className="col-md-6">
                <div className="service-icon"><i className="fas fa-hand-holding-usd"></i></div>
                <h4 className="service-title"><strong>Bunga Bersaing</strong></h4>
                <p className="service-description">Kami menawarkan bunga yang sangat kompetitif pinjaman/kredit dana tunai anda.</p>
                  
                <div className="service-icon"><i className="fas fa-lock"></i></div>
                <h4 className="service-title"><strong>Aman</strong></h4>
                <p className="service-description">GadaiKu adalah layanan bantuan dana tunai yang dapat membantu apapun kebutuhan anda.</p>
                </div>
                      
              </div>
          
            </div>
            
            <hr/>

            
          </div>
        </div>


        );
    }
}

export default Home;
