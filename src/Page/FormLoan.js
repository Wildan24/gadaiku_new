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
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>Form Perorangan</Card.Header>
                <Card.Body>
                <Card.Title><Link to="/Karyawan">Karyawan</Link></Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border="warning" style={{ width: '18rem' }}>
                <Card.Header>Form Perseroan Terbatas (PT)</Card.Header>
                <Card.Body>
                <Card.Title><Link to="/PT">Perseroan Terbatas (PT)</Link></Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border="info" style={{ width: '18rem' }}>
                <Card.Header>Form CV</Card.Header>
                <Card.Body>
                <Card.Title><Link to="/CV">Persekutuan Komaditer (CV)</Link></Card.Title>
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