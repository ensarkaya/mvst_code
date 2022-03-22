import React, {useState} from 'react';
import SearchView from "./views/SearchView";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

function App() {

    const [search, setSearch] = useState("");
    const [user, setUser] = useState("");
    const [hide, setHide] = useState(true);
    return (
    <div>
        <Form onSubmit={(e) => {
            setHide(false);
            e.preventDefault();
        }}>
            <FormGroup >
                <Label for="user">User Name</Label>
                <Input type="text" name="user" id="user" value={user} onChange={(e) => setUser(e.currentTarget.value)} autoComplete="search user" />
                <Button
                    color="primary"
                    type="submit"
                >
                    Search
                </Button>
            </FormGroup>
        </Form>
        <div hidden={hide}>
            <SearchView search={search} userName={user}></SearchView>
        </div>
    </div>
    );
}

export default App;
/*
*            <Form onSubmit={(e) => {
                setSearch(e.currentTarget.value);
            }}>
                <FormGroup>
                    <Label for="search">Repository Name</Label>
                    <Input type="text" name="search" id="search" value={search} onChange={(e) => setSearch(e.currentTarget.value)} autoComplete="search" />
                    <Button
                        color="primary"
                        type="submit"
                    >
                        Search
                    </Button>
                </FormGroup>
            </Form>
            * */