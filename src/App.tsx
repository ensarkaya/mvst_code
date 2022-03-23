import React, {useState} from 'react';
import SearchView from "./views/SearchView";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import {Col, Container, Row} from "react-bootstrap";
/**
 * @author Ensar Kaya
 *
 * @description At the beginning, this function shows the username search field,
 * and hides the SearchView component. After a search is performed, it makes the
 * SearchView component visible.
 *
 */
function App() {

    //user state is the keyword entered for searching a username in data
    const [user, setUser] = useState("");
    //hide state is the state for hiding SearchView component before user searches a username
    const [hide, setHide] = useState(true);

    return (
    <div style={{backgroundColor:"white", color: "black"}}>
        <Form onSubmit={(e) => {
            setHide(false);
            e.preventDefault();
        }}>
            <FormGroup >
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto" >
                            <h4 color="light" >Enter username :</h4>
                        </Col>
                        <Col md="auto">
                            <Input type="text" name="user" id="user" value={user} onChange={(e) => setUser(e.currentTarget.value)} autoComplete="search user" />
                        </Col>
                        <Col md="auto">
                            <Button
                                color="primary"
                                type="submit"
                            >
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </FormGroup>
        </Form>
        <div hidden={hide}>
            <SearchView userName={user}></SearchView>
        </div>
    </div>
    );
}

export default App;