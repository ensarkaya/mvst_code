import React, {useState, useEffect} from "react";
import data from "../data/data.json";
import MaterialTable, { Column, Icons } from "@material-table/core";
import {Col, Row} from "react-bootstrap";
import UserField from "../components/UserField";

//Repository interface
interface Repo {
    name: string;
    description: string | null;
    createdAt: string;
    updatedAt: string;
    forkCount: number;
}

//User interface
interface User {
    id: string;
    name: string;
    username: string;
    avatar: string;
    bio: string;
    url: string;
    repos: Repo[];
}
interface Props{
    userName: string;
}

/**
 * @description This component reads data from data.json when first rendered.
 * After getting username from the App component, it searches it inside the array of Users.
 * When search is successful, it creates a material-table component and pass the necessary data to it.
 * When search is not successful, it warns user the there is no such user in data.
 * @param props {username: username of the user to be searched}
 *
 */
const SearchView:React.FC<Props> = (props) =>
{

    const [users, setUsers] = useState<Array<User>>([]); //State of list of users
    const [repos, setRepos] = useState<Array<Repo>>([]);
    const [currUser, setCurrUser] = useState<User>({id:"", repos:[],bio:"",avatar:"",username:"",name:"",url:""});
    const [isFound, setIsFound] = useState(false);

    //Reading data from json and assigning them into users state at the beginning(like componentDidMount)
    useEffect(() => {
        let userList:User[] =[];
        data.map((data) => {
            let newRepos:Repo[]=[];
            data.user.repositories.nodes.map((repo) => {
                let newRepo:Repo = {
                    name: repo.name,
                    description: repo.description,
                    createdAt: repo.createdAt.slice(0,-10),
                    updatedAt: repo.updatedAt.slice(0,-10),
                    forkCount: repo.forkCount,
                };
                newRepos.push(newRepo);
            });
            let newUser:User = {id : data.user.id, name: data.user.name, username: data.user.login, avatar:data.user.avatarUrl, bio:data.user.bio,repos:newRepos, url:data.user.url};
            userList.push(newUser);
    })
        setUsers(userList);
    }, []);

    //updating current user whenever props.userName changes
    useEffect(() => {
        for(let i:number = 0; i < users.length; i++){
            if(props.userName === users[i].username){
                setRepos(users[i].repos);
                setIsFound(true);
                setCurrUser(users[i]);
            }
        }
    }, [props.userName]);

    type IType =
        | "string"
        | "boolean"
        | "numeric"
        | "date"
        | "datetime"
        | "time"
        | "currency";
    const string: IType = "string";

    //columns of the table
    const [columns, setColumns] = useState([
        { title: "Name", field: "name", type: "string" as const },
        { title: "Description", field: "description", initialEditValue: " ", type: "string" as const },
        { title: "createdAt", field: "createdAt", type: "string" as const },
        { title: "updatedAt", field: "updatedAt", type: "string" as const },
        { title: "forkCount", field: "forkCount", type: "string" as const },
    ]);

    return (
        <div>
            <div hidden={!isFound}>
                <Row>
                    <Col xs lg="2">
                        <UserField name={currUser.name} bio={currUser.bio} avatarUrl={currUser.avatar} login={currUser.username} url={currUser.url}/>
                    </Col>
                    <Col >
                        <MaterialTable
                            style={{
                                zIndex : 250000,
                                width: '100%',
                                marginLeft: '-5%',
                                height: '100%',

                            }}
                            title="Repositories"
                            columns={columns}
                            data={currUser.repos}/>
                    </Col>
                </Row>
            </div>
            <div hidden={isFound}>
                <h4> User does not exists!</h4>
            </div>
        </div>
);
};
export default SearchView;