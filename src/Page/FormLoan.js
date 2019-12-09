import React, { } from "react";
import { Card, CardGroup} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormKaryawan from "./FormKaryawan";
import FormPerusahaan from "./FormPerusahaan";
import FormCV from "./FormCV";


export default function App() {
    const iconButton = {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '40%'
        }

  return (
    <Router>
        <div>
            <section className="py-3 bg-image-ful">
                <img style={{width:"2048px"}} src="./img/gadaiku/bannerloan.jpg" alt="Gadaiku.Com"/>
            </section>
        </div>

        <br/>
        
        <div class="container">
            <div className="form-row row mt-5">
                <div className="col-md-12">
                    <p style={{margin:"none", textAlign:"center"}}><strong>Kami memiliki Loan Adviser yang selalu siap membantu Anda
                    Dengan lebih 100 Loan Adviser di seluruh Indonesia, 
                    kami selalu memiliki seseorang yang selalu siap membantu Anda. 
                    Loan Adviser kami akan menghubungi dan bertemu Anda kapan pun Anda mau.</strong></p>
                </div>
                <div className="col-md-2" style={iconButton}>
                    <p className="text-center"><strong>Form Personal</strong></p>
                    <Link to="/Karyawan">
                    <img className="img-fluid rounded" style={{width:"200px"}} src="./img/gadaiku/personal.jpg"  alt="form personal"/>
                    </Link>
                </div>
                
                <div className="col-md-2" style={iconButton}>
                    <p className="text-center"><strong>Form Company</strong></p>
                    <Link to="/PT">
                    <img className="img-fluid rounded" style={{width:"200px"}} src="./img/gadaiku/company1.jpg" alt="form company"/>
                    </Link>
                </div>

                <div className="col-md-2" style={iconButton}>
                    <p className="text-center"><strong>Form CV</strong></p>
                    <Link to="/CV">
                    <img className="img-fluid rounded" style={{width:"200px"}} src="./img/gadaiku/handshake.jpg" alt="Simulasi"/>
                    </Link>
                </div>
        
            </div>    
         </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <br/>
            <br/>

        <Switch>
            <Route path="/Karyawan">
                <Karyawan />
            </Route>
            <Route path="/PT">
                <PT />
            </Route>
            <Route path="/CV">
                <CV />
            </Route>
        </Switch>
    </Router>
  );
}


function Karyawan() {
  return (
            <FormKaryawan/>
        );
    }

function PT() {
    return(
            <FormPerusahaan/>
     );
}

function CV() {
  return (
            <FormCV/>
    );
}