import React from "react";
import {Button, Card} from "react-bootstrap";
//import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, CardImg } from 'reactstrap';

interface Props {
    name: string,
    login: string,
    avatarUrl: string,
    bio: string,
    url: string
}

const UserField: React.FC<Props> = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }} className="text-center">
                <Card.Img variant="top" src={props.avatarUrl} />
                <Card.Body>
                    <Card.Title>{props.name} - username: {props.login}</Card.Title>
                    <Card.Text>
                        {props.bio}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserField;
/*

            <Card
                body={true}
                color="primary"
                outline={true}>
                <CardBody>
                    <CardTitle tag="h5">
                        {props.name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        username: {props.login}
                    </CardSubtitle>
                </CardBody>
                <CardImg
                    alt="Card image cap"
                    src={props.avatarUrl}
                    center
                    width="10%"
                />
                <CardBody>
                    <CardText>
                        {props.bio}
                    </CardText>
                    <CardLink href={props.url}>
                        Profile Link
                    </CardLink>
                </CardBody>
            </Card>
 */