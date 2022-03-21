import React, { useRef } from "react";
import { Input, Button, Label, Form, FormGroup } from 'reactstrap';
interface props {
    user: string;
    setUser: React.Dispatch<React.SetStateAction<string>>;
    handleUser: (e: React.FormEvent) => void;
}

const UserInputField: React.FC<props> = ({ user, setUser, handleUser }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Form onSubmit={handleUser}>
            <FormGroup>
                <Label for="username">Username</Label>
                <Input type="text" name="username" id="username" value={user} onChange={(e) => setUser(e.target.value)} autoComplete="username" />
                <Button
                    color="primary"
                    type="submit"
                >
                    Go
                </Button>
            </FormGroup>
        </Form>
    );
};

export default UserInputField;