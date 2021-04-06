import React from 'react';
import StyledUser from '../styled-components/StyledUser';

interface User {
    id: number,
    name : string,
    username: string,
    email : string,
}

interface UserProps {
    user: User
}

const User: React.FC<UserProps> = ({user}) => {
    return (
        <StyledUser>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p className='user__id'>id: {user.id}</p>
        </StyledUser>
    )
}

export default User