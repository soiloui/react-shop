import React, {useState, useEffect} from 'react';
import StyledUsers from '../styled-components/StyledUsers';

interface UserTypes {
    id: number,
    name : string,
    username: string,
    email : string,
}

const Users: React.FC = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        if (isLoading) {
            fetch(url)
                .then(data => data.json())
                .then(data => {
                    setUsers(data);
                    setIsLoading(false);
                });
        }
    });

    return (
        <StyledUsers> 
            {isLoading 
                ? <p>Loading</p>
                :
                    <ul>
                    {users.map((user: UserTypes, index: number) => {
                        return (
                            <li key={index}>
                                    <h3>{user.name}</h3>
                                    <p>{user.username}</p>
                            </li>
                        )
                        
                    })}
                </ul> 
            }
        </StyledUsers>
    )
}

export default Users