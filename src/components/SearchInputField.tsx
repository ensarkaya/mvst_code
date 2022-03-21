import React from "react";
import { Container, Input, Button, Label, Form, FormGroup } from 'reactstrap';
interface props {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    handleSearch: (e: React.FormEvent) => void;
}

const SearchingInputField: React.FC<props> = ({ search, setSearch, handleSearch }) => {

    return (
        <Form onSubmit={handleSearch}>
            <FormGroup>
                <Label for="search">Repository Name</Label>
                <Input type="text" name="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)} autoComplete="search" />
                <Button
                    color="primary"
                    type="submit"
                >
                    Search
                </Button>
            </FormGroup>
        </Form>
    );
};

export default SearchingInputField;
/*
     <Input className={"d-inline"} inline style={{width:'23%'}} type= "text" name="rise" id="rise" value={this.state.item.rise}
                                                             onChange={this.handleChange} />
<form
    className="input"
    onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
    }}
>
    <input
        type="text"
        placeholder="Enter a Task"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
    />
    <button type="submit" className="input_submit">
        GO
    </button>
</form>*/