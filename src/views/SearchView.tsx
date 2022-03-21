import React, {useState, useEffect} from "react";
import UserInputField from "../components/UserInputField";
import data from '../data/data.json';
interface Repo {
    name: string;
    description: string | null;
    createdAt: string;
    updatedAt: string;
    forkCount: number;
    starCount: number;
}
interface User {
    id: string;
    name: string;
    username: string;
    avatar: string;
    bio: string;
    repos: Repo[];
}

const SearchView:React.FC = () =>
{
    const [user, setUser] = useState<User>();
    const [users, setUsers] = useState<Array<User>>([]);

    data.map((data) => {
        let newRepos:Repo[]=[];
        data.user.repositories.nodes.map((repo) => {
            let newRepo:Repo = {
                name: repo.name,
                description: repo.description,
                createdAt: repo.createdAt,
                updatedAt: repo.updatedAt,
                forkCount: repo.forkCount,
                starCount: repo.stargazerCount,
            };
            newRepos.push(newRepo);
        });
        let newUser:User = {id : data.user.id, name: data.user.name, username: data.user.login, avatar:data.user.avatarUrl, bio:data.user.bio,repos:newRepos
        };
        setUsers([...users, newUser]);
        console.log(newUser)
    });
    const handleUser = (e: React.FormEvent) => {
        e.preventDefault();

    };

    return (<div>
    </div>);
};
export default SearchView;