import React,{Component} from 'react';


class Home extends Component{
    render(){
        return(

      <div >
        <div>
          <section class="py-3 bg-image-ful">
            <img style={{width: "2048px"}} class="img-fluid d-block mx-auto" src="img/gadaiku/bannerFix.png" alt="Gadaiku.Com"/>
          </section>

            <div class="container wow fadeInUp" >
              <div class="row">
                <div class="col-md-12">
                <h3 style={{margin:"none"}} class="section-title">Kenapa memilih <strong>GADAIKU ?</strong></h3>
              </div>
            </div>
            <div id="services">
              <div class="row">
                <div class="col-md-7 service-item">
                  <div class="service-icon"><i class="fa fa-clock-o fa-5x"></i></div>
                  <h4 class="service-title"><strong>Simulasi Pinjaman Online 24 Jam</strong></h4>
                  <p class="service-description">anda dapat mengetahui estimasi angsuran bulanan sesuai dengan pinjaman yang anda ajukan atas aset jaminan
                   anda secara online 24 Jam setiap hari, dengan begitu anda bisa merencanakan dan mengatur keuangan jadi lebih baik.</p>
                </div>
                <div class="col-md-5 service-item">
                  <div class="service-icon"><i class="fa fa-paper-plane"></i></div>
                  <h4 class="service-title"><strong>Proses Cepat</strong></h4>
                  <p class="service-description">kami pastikan bahwa proses pengajuan pinjaman anda akan diproses cepat dan dilakukan paling lambat 2 hari kerja.</p>
                </div>
                <div class="col-md-4 service-item">
                  <div class="service-icon"><i class="fa fa-refresh"></i></div>
                  <h4 class="service-title"><strong>Proses Lebih Mudah</strong></h4>
                  <p class="service-description">Ajukan Pinjaman anda dimana pun dan kapan pun, GadaiKu.com hadir untuk anda.</p>
                </div>
                <div class="col-md-4 service-item">
                  <div class="service-icon"><i class="fas fa-hand-holding-usd"></i></div>
                  <h4 class="service-title"><strong>Bunga Bersaing</strong></h4>
                  <p class="service-description">Kami menawarkan bunga yang sangat kompetitif pinjaman/kredit dana tunai anda.</p>
                </div>
                <div class="col-md-4 service-item">
                  <div class="service-icon"><i class="fas fa-lock"></i></div>
                  <h4 class="service-title"><strong>Aman</strong></h4>
                  <p class="service-description">GadaiKu adalah layanan bantuan dana tunai yang dapat membantu apapun kebutuhan anda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        );
    }
}

export default Home;
