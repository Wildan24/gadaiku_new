import React, {Component} from 'react';


export default class Footer extends Component {
    render(){
        return (
        <footer className="py-5 bg-light-gray" style={{backgroundColor: "lightslategrey", paddingLeft:'10%', paddingRight:'10%'}}>
          <div className="container">
            <div className="row" style={{color: "white"}}>
              <div className="col-md-6 service-item" style={{paddingBottom:"20px"}}>
                <p className="m-0 text-left text-blue"><strong>Contact Us</strong></p>
                <p className="m-0 text-left text-blue">Email : gng.gadaiku@gmail.com</p>
              </div>
              <div className="col-md-6 service-item">
                <p className="m-0 text-left text-blue"><strong> About Us</strong></p>
                <p className="m-0 text-left text-blue">Gadaiku adalah layanan bantuan dana tunai yang dapat membantu apapun kebutuhan anda.</p>
              </div>
          </div>
        </div>
      </footer>
        );
    }
}
