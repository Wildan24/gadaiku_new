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
  return (
<Router>
    <div>
        <section className="py-3 bg-image-ful">
            <img style={{width: "2048px"}} src="./img/gadaiku/bannerloan.jpg" alt="Gadaiku.Com"/>
        </section>
    </div>
        <CardGroup style={{width:"70%",marginLeft:"15%", marginRight:"15%" , marginBottom:"50px"}}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Link to="/Karyawan">
                    <img style={{width: "150px"}} className="img-fluid rounded" src="./img/gadaiku/personal.jpg" alt="gadaiku.com"/>
                </Link>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Link to="/PT">
                    <img style={{width: "150px"}} className="img-fluid rounded" src="./img/gadaiku/company1.jpg" alt="gadaiku.com"/>
                </Link>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Link to="/CV">
                    <img style={{width: "150px"}} className="img-fluid rounded" src="./img/gadaiku/handshake.jpg" alt="gadaiku.com"/>
                </Link>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>   
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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