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
                <div class="col-md-4 service-item">
                  <div class="service-icon"><i class="fa fa-desktop"></i></div>
                  <h4 class="service-title">Lorem Ipsum</h4>
                  <p class="service-description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
                <div class="col-md-4 service-item">
                  <div class="service-icon"><i class="fa fa-bar-chart"></i></div>
                  <h4 class="service-title"><a href="">Dolor Sitema</a></h4>
                  <p class="service-description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                </div>
                <div class="col-md-4 service-item">
                  <div class="service-icon"><i class="fa fa-paper-plane"></i></div>
                  <h4 class="service-title"><a href="">Sed ut perspiciatis</a></h4>
                  <p class="service-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
                <div class="col-md-4 service-item">
                  <div class="service-icon"><i class="fa fa-photo"></i></div>
                  <h4 class="service-title"><a href="">Magni Dolores</a></h4>
                  <p class="service-description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div class="col-md-4 service-item">
                  <div class="service-icon"><i class="fa fa-road"></i></div>
                  <h4 class="service-title"><a href="">Nemo Enim</a></h4>
                  <p class="service-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
                <div class="col-md-4 service-item">
                  <div class="service-icon"><i class="fa fa-shopping-bag"></i></div>
                  <h4 class="service-title"><a href="">Eiusmod Tempor</a></h4>
                  <p class="service-description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
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
