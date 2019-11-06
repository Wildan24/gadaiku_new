import React, {Component} from 'react';


export default class Footer extends Component {
    render(){
        return (
        <footer class="py-5 bg-light-gray" style={{backgroundColor: "lightslategrey"}}>
          <div class="container">
            <div class="row" style={{color: "white"}}>
              <div class="col-md-6 service-item" style={{paddingBottom:"20px"}}>
                <p class="m-0 text-left text-blue"><strong>Contact Us</strong></p>
                <p class="m-0 text-left text-blue">Email : gng.gadaiku@gmail.com</p>
              </div>
              <div class="col-md-6 service-item">
                <p class="m-0 text-left text-blue"><strong> About Us</strong></p>
                <p class="m-0 text-left text-blue">Gadaiku adalah layanan bantuan dana tunai yang dapat membantu apapun kebutuhan anda.</p>
              </div>
          </div>
        </div>
      </footer>
        );
    }
}
