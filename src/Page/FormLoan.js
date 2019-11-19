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
        <section class="py-3 bg-image-ful">
            <img style={{width: "2048px"}} src="img/gadaiku/bannerFix.png" alt="Gadaiku.Com"/>
        </section>
    </div>
        <CardGroup style={{width:"70%",marginLeft:"15%", marginRight:"15%" , marginBottom:"50px"}}>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Link to="/Karyawan">
                    <img class="img-fluid rounded" src="./img/worker.png"/>
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
                    <img class="img-fluid rounded" src="./img/company.png"/>
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
                    <img class="img-fluid rounded" src="./img/cv.png" />
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