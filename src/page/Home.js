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

        <div class="homeWrapper">

          <section class="py-3 bg-image-ful">
            <img style={{width: "2048px"}} class="img-fluid d-block mx-auto" src="img/gadaiku/bannerFix.png" alt="Gadaiku.Com"/>
          </section>

          <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h3 style={{margin:"none"}} class="section-title">Kenapa memilih <strong>GADAIKU ?</strong></h3>
                </div>
              </div>
              <br/>
            <div id="services" style={{textAlign:"center"}}>

                <div class="row">
                  <div class="col-lg-12">
                    <div class="service-icon"><i class="far fa-clock"></i></div>
                    <h4 class="service-title"><strong>Simulasi Pinjaman Online 24 Jam</strong></h4>
                    <p class="service-description">anda dapat mengetahui estimasi angsuran bulanan sesuai dengan pinjaman yang anda ajukan atas aset jaminan
                    anda secara online 24 Jam setiap hari, dengan begitu anda bisa merencanakan dan mengatur keuangan jadi lebih baik.</p>
                  </div>
                </div>

            
              <div class="row">
                  
                <div class="col-md-6">
                <div class="service-icon"><i class="fa fa-paper-plane"></i></div>
                <h4 class="service-title"><strong>Proses Cepat</strong></h4>
                <p class="service-description">kami pastikan bahwa proses pengajuan pinjaman anda akan diproses cepat dan dilakukan paling lambat 2 hari kerja.</p>
                    
                <div class="service-icon"><i class="fas fa-sync-alt"></i></div>
                <h4 class="service-title"><strong>Proses Lebih Mudah</strong></h4>
                <p class="service-description">Ajukan Pinjaman anda dimana pun dan kapan pun, GadaiKu.com hadir untuk anda.</p>
                </div>
                      
                      
                <div class="col-md-6">
                <div class="service-icon"><i class="fas fa-hand-holding-usd"></i></div>
                <h4 class="service-title"><strong>Bunga Bersaing</strong></h4>
                <p class="service-description">Kami menawarkan bunga yang sangat kompetitif pinjaman/kredit dana tunai anda.</p>
                  
                <div class="service-icon"><i class="fas fa-lock"></i></div>
                <h4 class="service-title"><strong>Aman</strong></h4>
                <p class="service-description">GadaiKu adalah layanan bantuan dana tunai yang dapat membantu apapun kebutuhan anda.</p>
                </div>
                      
              </div>
          
            </div>
              
            <hr/>

            <div class="row mt-5">

              <div class="col-md-12">
                <p style={{margin:"none", textAlign:"center"}}><strong>Kami memiliki Loan Adviser yang selalu siap membantu Anda
                Dengan lebih 100 Loan Adviser di seluruh Indonesia, 
                kami selalu memiliki seseorang yang selalu siap membantu Anda. 
                Loan Adviser kami akan menghubungi dan bertemu Anda kapan pun Anda mau.</strong></p>
              </div>

              <div class="col-md-2" style={iconButton}>
              <Link to="/FormSimulasi">
                <img class="img-fluid rounded" style={{width: "200px"}} src="./img/Calculator.png"  alt=""/>
              </Link>
              <p class="text-center">Simulasi Kalkulator</p>
              <br/>
              <br/>
              </div>
              
              <div class="col-md-2" style={iconButton}>
                <Link to="/FormLoan">
                  <img class="img-fluid rounded" style={{width: "200px"}} src="./img/form.png" alt="Simulasi"/>
                  <p class="text-center">Form Loan</p>
                </Link>
                <br/>
                <br/>
              </div>

            </div>
            
            
          </div>
        </div>


        );
    }
}

export default Home;
