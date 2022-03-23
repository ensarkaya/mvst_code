import React from "react";
import {Button, Card} from "react-bootstrap";
import {  CardLink } from 'reactstrap';
//Properties passed from parent component to create a user info card
interface Props {
    name: string,
    login: string,
    avatarUrl: string,
    bio: string,
    url: string
}

/**
 * @description This components gets props from SearchView component and displays a user information card
 * @param props : {name: Real name of user, login: Username of user, avatarUrl: profile pic, bio: bio of user, url: github url of user}
 *
 */
const UserField: React.FC<Props> = (props) => {
    return (
        <div>
            <Card style={{ width: '70%', height:'70%'}} className="text-center">
                <Card.Img variant="top" src={props.avatarUrl} />
                <Card.Body>
                    <Card.Title>{props.name}   username: {props.login}</Card.Title>
                    <Card.Text>
                        {props.bio}
                    </Card.Text>
                    <CardLink href={props.url}>
                        Profile Link
                    </CardLink>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserField;