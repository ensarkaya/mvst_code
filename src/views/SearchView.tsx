import React, {useState, useEffect} from "react";
import data from "../data/data.json";
import MaterialTable, { Column, Icons } from "@material-table/core";
import {
    AddBox,
    ArrowDownward,
    Check,
    ChevronLeft,
    ChevronRight,
    Clear,
    DeleteOutline,
    Edit,
    FilterList,
    FirstPage,
    LastPage,
    Remove,
    SaveAlt,
    Search,
    ViewColumn
} from "@material-ui/icons";
import { Container } from "@material-ui/core";
import UserField from "../components/UserField";
/*
const tableIcons: Icons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
*/
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
    search: string;
}

const SearchView:React.FC<Props> = (props) =>
{

    const [users, setUsers] = useState<Array<User>>([]); //State of list of users
    const [showTable, setShowTable] = useState(false);
    const [repos, setRepos] = useState<Array<Repo>>([]);
    const [currUser, setCurrUser] = useState<User>({id:"", repos:[],bio:"",avatar:"",username:"",name:"",url:""});
    const [isFound, setIsFound] = useState(false);
    useEffect(() => {
        let userList:User[] =[];
        data.map((data) => {
            let newRepos:Repo[]=[];
            data.user.repositories.nodes.map((repo) => {
                let newRepo:Repo = {
                    name: repo.name,
                    description: repo.description,
                    createdAt: repo.createdAt,
                    updatedAt: repo.updatedAt,
                    forkCount: repo.forkCount,
                };
                newRepos.push(newRepo);
            });
            let newUser:User = {id : data.user.id, name: data.user.name, username: data.user.login, avatar:data.user.avatarUrl, bio:data.user.bio,repos:newRepos, url:data.user.url};
            userList.push(newUser);
    })
        setUsers(userList);
    }, []);

    useEffect(() => {
        for(let i:number = 0; i < users.length; i++){
            //console.log(i, props.userName, users[i].username);
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
                <UserField name={currUser.name} bio={currUser.bio} avatarUrl={currUser.avatar} login={currUser.username} url={currUser.url}/>
                <MaterialTable
                    title="Repositories"
                    columns={columns}
                    data={currUser.repos}/>
            </div>
            <div hidden={isFound}>
                <h4> User does not exists!</h4>
            </div>
        </div>
);
};
export default SearchView;